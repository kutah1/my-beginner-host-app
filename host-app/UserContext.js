// UserContext.js
import React, { createContext, useReducer, useCallback, useEffect } from 'react';

// 1. Context API: Create a context to share user data and actions between components
export const UserContext = createContext();

// 2. Initial state for the user reducer (real-world user data)
const initialState = {
  users: [],         // List of users fetched from API
  selectedUser: null, // Currently selected user
  loading: false,    // Loading state for API calls
  error: null,       // Error state for API calls
  filter: '',        // Filter string for searching users
};

// 3. useReducer: Reducer function to manage complex user state logic
function userReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, users: action.payload, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'SELECT_USER':
      return { ...state, selectedUser: action.payload };
    case 'CLEAR_SELECTED':
      return { ...state, selectedUser: null };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

// 4. UserProvider: Context provider using useReducer and useCallback for actions
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // useCallback: Memoize fetchUsers to avoid unnecessary re-creation
  const fetchUsers = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Network response was not ok');
      const users = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: users });
    } catch (e) {
      dispatch({ type: 'FETCH_ERROR', payload: e.message });
    }
  }, []);

  // useEffect: Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // useCallback: Memoize selectUser and clearSelected actions
  const selectUser = useCallback((user) => {
    dispatch({ type: 'SELECT_USER', payload: user });
  }, []);
  const clearSelected = useCallback(() => {
    dispatch({ type: 'CLEAR_SELECTED' });
  }, []);
  const setFilter = useCallback((filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  }, []);

  // Provide state and actions to children
  return (
    <UserContext.Provider value={{ state, fetchUsers, selectUser, clearSelected, setFilter }}>
      {children}
    </UserContext.Provider>
  );
};
