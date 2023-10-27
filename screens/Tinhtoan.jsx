import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'

export default function Tinhtoan() {
  const [num1, setnum1] = useState(1);
  const [num2, setnum2] = useState(2);
  const [result, setresult] = useState(0);

  const luaChon = isTrue => {
    let ketqua = num1 + num2;
    if ((isTrue && ketqua == result) || (!isTrue && ketqua != result)) {
      alert('Bạn đã trả lời đúng');
    } else {
      alert('Bạn đã trả lời sai');
    }
    let randNum1 = Math.round(Math.random() * 2);
    let randNum2 = Math.round(Math.random() * 2);
    let randResult = Math.round(Math.random() * 5);
    setnum1(randNum1);
    setnum2(randNum2);
    setresult(randResult);
  };
  return (
    <View>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 10,
        color: 'red',
        fontSize: 30,
      }}>
      BẠN GIỎI PHÉP CỘNG?
    </Text>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 10,
        color: 'blue',
        fontSize: 50,
        fontWeight: 'bold',
      }}>
      {num1} + {num2}
    </Text>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 10,
        color: 'blue',
        fontSize: 50,
        fontWeight: 'bold',
      }}>
      =
    </Text>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 10,
        color: 'blue',
        fontSize: 50,
        fontWeight: 'bold',
      }}>
      {result}
    </Text>
    <Pressable
      style={{backgroundColor: 'green', padding: 10, margin: 10}}
      onPress={() => luaChon(true)}>
      <Text style={{color: 'white', textAlign: 'center'}}>Đúng</Text>
    </Pressable>
    <Pressable
      style={{backgroundColor: 'grey', padding: 10, margin: 10}}
      onPress={() => luaChon(false)}>
      <Text style={{color: 'white', textAlign: 'center'}}>Sai</Text>
    </Pressable>
  </View>
  )
}