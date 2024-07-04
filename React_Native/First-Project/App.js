import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  let x = 1;
  const handlePress = () => console.log('Text pressed', x++);
  console.log('App executed');

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={styles.text}>
        Hello React Native
      </Text>
      <Image blurRadius={10}
        fadeDuration={1000}
      source={{

        uri: "https://picsum.photos/200/300"

      }} style={{width:200, height:300, resizeMode: 'contain',  }}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 0, // 调整这个值以控制向下移动的距离
    color: 'white', // 可选：改变文字颜色以便更好地对比背景
  },
  
});
