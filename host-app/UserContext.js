import React, { createContext, useReducer, useCallback, useEffect } from 'react'; // Import React and hooks

export const UserContext = createContext(); // Create a context for user data/actions

const initialState = {
  users: [], // List of users fetched from API
  selectedUser: null, // Currently selected user
  loading: false, // Loading state for API calls
  error: null, // Error state for API calls
  filter: '', // Filter string for searching users
};

function userReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START': // Start loading users
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS': // Successfully fetched users
      return { ...state, loading: false, users: action.payload, error: null };
    case 'FETCH_ERROR': // Error fetching users
      return { ...state, loading: false, error: action.payload };
    case 'SELECT_USER': // Select a user for details
      return { ...state, selectedUser: action.payload };
    case 'CLEAR_SELECTED': // Deselect user
      return { ...state, selectedUser: null };
    case 'SET_FILTER': // Set filter string for searching
      return { ...state, filter: action.payload };
    default:
      return state; // Return unchanged state for unknown actions
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState); // useReducer for user state

  // useCallback: Memoize fetchUsers to avoid unnecessary re-creation
  const fetchUsers = useCallback(async () => {
    dispatch({ type: 'FETCH_START' }); // Start loading
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch users from API
      if (!response.ok) throw new Error('Network response was not ok'); // Handle HTTP errors
      const users = await response.json(); // Parse response as JSON
      dispatch({ type: 'FETCH_SUCCESS', payload: users }); // Store users in state
    } catch (e) {
      dispatch({ type: 'FETCH_ERROR', payload: e.message }); // Store error in state
    }
  }, []); // No dependencies, so function is stable

  // useEffect: Fetch users on mount
  useEffect(() => {
    fetchUsers(); // Fetch users when component mounts
  }, [fetchUsers]);

  // useCallback: Memoize selectUser and clearSelected actions
  const selectUser = useCallback((user) => {
    dispatch({ type: 'SELECT_USER', payload: user }); // Select a user
  }, []);
  const clearSelected = useCallback(() => {
    dispatch({ type: 'CLEAR_SELECTED' }); // Deselect user
  }, []);
  const setFilter = useCallback((filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter }); // Set filter string
  }, []);

  // Provide state and actions to children via context
  return (
    <UserContext.Provider value={{ state, fetchUsers, selectUser, clearSelected, setFilter }}>
      {children}
    </UserContext.Provider>
  );
};
