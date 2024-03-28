import {SafeAreaView,Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';

export default function DietPreferences({navigation}){
  
  const [fontsLoaded] = useFonts({
  WorkSans_400Regular,
   });

    if (!fontsLoaded) {
      return null; 
    }

  return(
    <SafeAreaView style = {styles.container}>

     <TouchableOpacity
        style = {styles.skip}
        onPress = {() => navigation.navigate('Allergies Page')}
        >
        <Text style = {styles.skipWord}>Skip  </Text>
         <Ionicons name="arrow-forward" size={25} color="black" />
      </TouchableOpacity>

     <Text style = {styles.title}>What's your diet type?</Text>
     
      <View style = {styles.contents}>
        <TouchableOpacity 
          style = {styles.box}>
           <Text style = {styles.boxTitle}>I eat everything</Text>
            <Text>No specific dieatary preferences</Text>
        </TouchableOpacity>

         <TouchableOpacity 
          style = {styles.box}>
           <Text style = {styles.boxTitle}>Pescatarian</Text>
            <Text>Plant-based diet, including seafood</Text>
        </TouchableOpacity>

         <TouchableOpacity 
          style = {styles.box}>
           <Text style = {styles.boxTitle}>Vegetarian</Text>
            <Text>No meat</Text>
        </TouchableOpacity>

         <TouchableOpacity 
          style = {styles.box}>
           <Text style = {styles.boxTitle}>Vegan</Text>
            <Text>Plant-based diet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     backgroundColor : 'white',
     flex: 1,
     padding: 30,
  },
  skip: {
    flexDirection : 'row',
    marginTop: 35,
    marginLeft: 'auto',
  },
  skipWord : {
    fontSize : 18,
  },
  title: {
    color: '#F1C013',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'WorkSans_400Regular',
  }, 
  box :{
    width: 250,
    height: 100,
    borderWidth: 0.2,
    borderColor:'white',
    elevation: 1,
    shadowColor: 'black',
    marginBottom: 20,
    padding: 10,

  }, 
  contents : {
    alignItems : 'center',
    marginTop: 30,
  },
  boxTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
});