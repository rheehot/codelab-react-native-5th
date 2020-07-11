  import * as React from 'react';
  import { Button, SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
  import Constants from 'expo-constants';
  import _ from 'lodash';

  let numbers =[];
  // 1부터 45의 숫자 생성
  _.times( 45, n => numbers.push( n+1 ));
  // 섞는다 
  // numbers = _.shuffle(numbers);

  export default function AssetExample() {
    /// 상태 변화 state
    const [ displayNumbers, setNumbers] = React.useState(_.shuffle(numbers));
    //displayNumbers :  상태 읽기 전용 값
    // setNumbers : 상태를 변경하기 위한 업데이트 함수 

    // React Framement 실제 래더링에 반영되지 않은 추상 컨테이너 
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <View style={styles.ball}>
            <Text style={styles.text}>{displayNumbers[0]}</Text>
          </View>
          <View style={styles.ball}>
            <Text style={styles.text}>{displayNumbers[1]}</Text>
          </View>
          <View style={styles.ball}>
            <Text style={styles.text}>{displayNumbers[2]}</Text>
          </View>
          <View style={styles.ball}>
            <Text style={styles.text}>{displayNumbers[3]}</Text>
          </View>
          <View style={styles.ball}>
            <Text style={styles.text}>{displayNumbers[4]}</Text>
          </View>
          <View style={styles.ball}>
            <Text style={styles.text}>{displayNumbers[5]}</Text>
          </View>
        </View>
        <Button title="다시 뽑기" onPress={() => setNumbers(_.shuffle(numbers))} />
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 24
    },
    ball: {
      width: 50,
      height: 50,
      backgroundColor: '#e5e5e5',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      color: '#000000',
      fontWeight: 'bold',
    },
  });
