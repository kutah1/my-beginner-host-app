import { View, Text } from 'react-native'
import {useContext} from 'react'
import { AppContext } from './App'; // Import AppContext from App.js

const Cart = () => {
    const num = useContext(AppContext); // useContext returns the value directly
    return (
      <View>
        <Text style={{color:'black',marginTop:'20%'}}>Cart {num} </Text>
      </View>
    );
}

export default Cart