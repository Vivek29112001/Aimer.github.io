import { View, Text , Image , StyleSheet , useWindowDimensions } from 'react-native';
import React , { useState} from 'react';
import Logo from "../../../assets/images/logo.png";
import Custominput from '../../components/Components/Custominput';
import CustomButton from '../../components/customButton/CustomButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SocialSIgnINbuttons from '../../components/SocialSignInButton/SocialSIgnINbuttons';


const SignInScreen = () => {
  const [ username , setUsername ]= useState('');
  const [ Password , setPassword]= useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () =>{
    console.warn("Sign in");
  }

  const onForgetPasswordPressed = () =>{
    console.warn("On Forget Password Pressed");
  }



  
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>

    <View style={style.root}>
      <Image source={Logo}
       style={[style.logo , {height:height * 0.3}]}
      resizeMode="contain"
       />

      <Custominput 
      placeholder="Username"
       value={username}
        setValue ={ setUsername} 
        />

      <Custominput
       placeholder="Password"
       value={Password}
       setValue={setPassword}
       secureTextEntry 

       />

       <CustomButton 
       text="Sign In"
        onPress={onSignInPressed}
       />

       <CustomButton
       text="Forget password ?"
        onPress={onForgetPasswordPressed}
        // style={Colors}
        bgColor="#FFD6EC"
        fgColor="#4765a9"
       />

  <SocialSIgnINbuttons/>

<CustomButton 
       text="don't have an account? Create one"
        onPress={onSignInPressed}
        bgColor="#FFD6EC"
        fgColor="#4765a9"
       />


    </View>
    // </ScrollView>
  );
};

const style= StyleSheet.create({
    root:{
      alignItems:'center',
      padding:20,
      

    },
    logo:{
      // textAlign:'center',
      width: "70%",
      maxWidth:300,
      maxheight : 250,
      

    },
});

export default SignInScreen