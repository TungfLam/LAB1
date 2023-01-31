import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';
import { useState } from 'react';
import ProductList from './src/screens/ProductList';




export default function App() {

  const [conutState, setCountState] = useState(0);
  const [conutState2, setCountState2] = useState(0);

  const [isShow, setShow] = useState(true);


  function showData(label, value) {
    return label + ':' + value;
  }


  const arrowShowData = (label, value) => {
    return label + ':' + value;
  }

  // nếu không có thêm logic gì ngoài return, có thể bỏ ngoặc nhọn
  // và chữ return

  const arrowMiniShowData = (label, value) => (label + ':' + value);

  // ví dụ về cập nhận hiển thị giá trị conut
  let conut = 0;
  const tangCount = () => conut++;
  console.log(conutState);


  // mảng ds sản phẩm chuyền sang productlist
  const productList = [
    { id: 1, name: 'Tùng', description: 'Đẹp trai', src: require('./assets/anh1.png') },
    { id: 2, name: 'Phúc', description: 'Ngu', src: require('./assets/anh2.png') },
    { id: 3, name: 'Nhi', description: 'Xinh Đẹp', src: require('./assets/anh1.png') },
    { id: 4, name: 'Thảo', description: 'Đần', src: require('./assets/anh2.png') },
  ]

  const [TenSV, setTenSV] = useState('');
  const [Desc, setDesc] = useState('');
  const [LinkImg, setLinkImg] = useState('');



  return (
    <ScrollView >
      <View style={styles.container}>





        {/* cách sử dụng component con đã tạo */}

        <Text style={styles.text}>Họ Tên : Tùng Lâm</Text>
        <Text style={styles.text}>MSV : PH20282</Text>


        <Button
          title='THÊM MỚI'
          onPress={() => setShow(!isShow)}
        />


        {
          isShow
            ?
            <>
              <TextInput style={{ border: 1, }}
                onChangeText={(txt) => setTenSV(txt)}
                value={TenSV}
                placeholder="Nhập tên"
              />
              <TextInput style={{ border: 1, }}
                onChangeText={(txt) => setDesc(txt)}
                value={Desc}
                placeholder="Nhập mô tả"
              /><TextInput style={{ border: 1, }}
                onChangeText={(txt) => setLinkImg(txt)}
                value={LinkImg}
                placeholder="Link ảnh"
              />

              <Button
                title='Hủy'
                onPress={() => setShow(!isShow)}

              />
              <Button
                title='Lưu'
                onPress={() => navigation.navigate('SecondScreen', {
                  TenSV,
                  Desc,
                  LinkImg,
                })}

              />


            </>
            : null
        }


        <ProductList data={productList}></ProductList>


        <StatusBar style='auto' />
      </View>
    </ScrollView >
  );
}
const SecondScreen = ({ route, navigation }) => {
  const { TenSV } = route.params;
  const { Desc } = route.params;
  const { LinkImg } = route.params;

  return (
    <View>

      <Text>{TenSV} </Text>
      <Text>{Desc} </Text>
      <Text>{LinkImg} </Text>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D6D6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  text: {
    color: 'purple',
    fontSize: 25,
    // fontStyle:'italic',
    // fontWeight:'bold',
  },
  textinput: {
    backgroundColor: '#FFB9E8',
    color: '#4F4F4F',
    fontSize: 22,
    // fontStyle:'italic',
    // fontWeight:'bold',
  }
});
