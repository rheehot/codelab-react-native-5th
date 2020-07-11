import * as React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';

let numbers =[];
// 1부터 45의 숫자 생성
_.times( 45, n => numbers.push( n+1 ));
// 섞는다 
numbers = _.shuffle(numbers);

export default function AssetExample() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.ball}>
          <Text style={styles.text}>{numbers[0]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{numbers[1]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{numbers[2]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{numbers[3]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{numbers[4]}</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>{numbers[5]}</Text>
        </View>
      </View>
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
