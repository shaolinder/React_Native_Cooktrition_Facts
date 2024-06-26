import React from 'react';
import { View, Text, Button } from 'react-native';  

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Search Recipe")} title="Search Recipe" />
    </View>
  );
}


export default Home;
