import {Pressable, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react'

export default function Xoso() {
  const [number, setnumber] = useState('');
  const [result, setresult] = useState('Kết quả hiển thị ở đây');
  const [rs, setRs] = useState("")
  const duDoanKetQua = () => {
    let randNum = Math.floor(Math.random() * 100) + 1;
    console.log(randNum);
    setRs(randNum)
    if (number == randNum) setresult('Chúc mừng bạn đã trúng giải nhất');
    else setresult('Chúc bạn may mắn lần sau');
  };
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          color: 'blue',
          fontSize: 40,
        }}>
        XỔ SỐ ĐÊ!!!
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          color: 'green',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Nhập một số từ 1 đến 100
      </Text>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, fontSize: 20}}
        placeholder="Nhập số dự đoán"
        onChangeText={text => setnumber(text)}
      />
      <Pressable
        style={{backgroundColor: 'red', padding: 10, margin: 10}}
        onPress={duDoanKetQua}>
        <Text style={{color: 'white', textAlign: 'center'}}>Dự đoán</Text>
      </Pressable>
      <Text style={{
          textAlign: 'center',
          marginTop: 10,
          color: 'violet',
          fontSize: 14,
          fontWeight: 'bold',
        }}>
        Đáp án là: {rs}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          color: 'violet',
          fontSize: 14,
          fontWeight: 'bold',
        }}>
        {result}
      </Text>
    </View>
  )
}