// // mục tiêu tạo ra 1 phần dùng chung
// // thể hiện giao diện chỉ cần code 1 lần có thể
// // thay đổi nội dung cho phù hợp 
// import { Text, StyleSheet, View } from "react-native";


// // 1 file js nhiều component nhưng chỉ 1 được export default
// export function ProductPrice(props) {
//     return (<Text style={styles.text2}>{props.value} VND</Text>);
// }


// // export default function ProductText({name}) {

// export default function ProductText(props) {
//     // props là 1 object truyền từ cha sang 
//     // props chứa các key kèm theo giá trị
//     // const name = props.name; // lấy giá trị của props name
//     // const name2 = props2.name2; // lấy giá trị của props name

//     let statusText = '';
//     if (props.status === 0) {
//         statusText = 'chưa kich hoạt'
//     } else if (props.status === 1) {
//         statusText = 'kich hoạt'

//     } else if (props.status === 2) {
//         statusText = 'admin'
//     } else {
//         statusText = 'có vấn đề'

//     }

//     return (
//         <>
//             {/* <Text style={styles.text}>{props.name}:
//                 {props.name2 ? props.name2 : 'Loading...'}
//             </Text> */}

//             <Text style={styles.text2}>{props.status}:
//                 {statusText}
//             </Text>

//             {/* <Text style={styles.text}>{props.name}</Text>
//             <Text style={styles.text}>
//                 {props.name2 ? props.name2 : 'Loading...'}
                
//                 </Text> */}
//             {/* <Text style={styles.text2}>{props.name}: {props.name2}</Text> */}

//         </>
//     )

// }

// const styles = StyleSheet.create({
//     text: {
//         color: '#FC52DD',
//         fontWeight: 'bold',
//         fontSize: 20,
//     },
//     text2: {
//         color: 'red',
//         fontWeight: 'bold',
//         fontSize: 20,
//     }

// }); 