import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from "../../../assets/images/logo.png";
import Custominput from '../../components/Components/Custominput';
import CustomButton from '../../components/customButton/CustomButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SocialSIgnINbuttons from '../../components/SocialSignInButton/SocialSIgnINbuttons';


const ConfirmEmailScreen = () => {
  const [code , setCode] = useState('');

  const {height} = useWindowDimensions();

  const onConfirmCodePressed = () => {
    console.warn('onConfirmCodePressed');
  };

  const onResendPressed = () => {
    console.warn('OnResendPressed');
  };

  const onSignInPressed = () =>{
    console.warn('on Sign In Pressed');
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        <Image source={Logo}
       style={[style.logo , {height:height * 0.1}]}
      resizeMode="contain"
       />
        <Text style={style.title}>Confirm your Email</Text>

        <Custominput
          placeholder="Enter your Confirm Code"
          value={code}
          setValue={setCode}
        />

        

        <CustomButton text="Confirm" onPress={onConfirmCodePressed} />

        <CustomButton
          text=" Resend Code"
          onPress={onResendPressed}
          bgColor="#FFD6EC"
          fgColor="#4765a9"
          // type="SECONDARY"
        />

        <CustomButton
          text=" Back to Sign in"
          onPress={onSignInPressed}
          bgColor="#FFD6EC"
          fgColor="#4765a9"
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo:{
    // textAlign:'center',
    width: "100%",
    maxWidth:300,
    maxheight : 250,
    marginLeft:0,
    

  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C68',
    margin: 10,
  },
  text:{
    color:'gray',
    marginVertical: 10,

  },
  link:{
    color:'#FF0000',
  },
});

export default ConfirmEmailScreen;
