import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

var role = "giver";

export default function RoleSelection() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.titleText}>
        Are you:
      </Text>
      <View style = {styles.container}>
        <Button
          title="Donating?"
          onClick = {() => {
            role = "giver"
            }}
          type = "button"
          buttonStyle = "btn--primary--solid"
          buttonSize="btn--medium"
        />
        <Button
          title="In need?"
          onClick = {() => {
              role = "taker"
            }}
          type = "button"
          buttonStyle = "btn--primary--solid"
          buttonSize="btn--medium"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },

  content: {
    textAlignVertical: 'top',
    flex: 1,
    justifyContent: 'center'
  },

  titleText: {
    position: "absolute",
    top: 10,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'Roboto',
  }
});

const titleQuestion = () => {
  const titleText = useState("Are you a:");
}
