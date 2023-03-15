import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import React, {useState} from 'react';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const [enterAmount, setEnterAmount] = useState(0);

  const pay = () => {
    let options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_Vv1YL29PGycFlf', //    https://dashboard.razorpay.com/app/website-app-settings/api-keys
      amount: enterAmount * 100,
      name: 'Razorpay App',
      // order_id: '', //Replace this with an order_id created using Orders API.
      prefill: {
        email: 'androidmasterid@gmail.com',
        contact: '7503663330',
        name: 'Harsh gautam',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextInput
        style={{
          borderWidth: 1,
          width: '70%',
          borderRadius: 10,
          paddingVertical: '4%',
          marginBottom: '4%',
          paddingLeft: '2%',
        }}
        keyboardType="numeric"
        placeholder="Enter Amount"
        onChangeText={amount => setEnterAmount(amount)}
      />

      <TouchableOpacity
        onPress={() => pay()}
        style={{
          width: '70%',
          paddingVertical: '4%',
          backgroundColor: 'blue',
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 20}}>
          {' '}
          {enterAmount == 0 ? null : enterAmount + 'rs'} Pay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
