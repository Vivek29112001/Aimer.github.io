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


const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setmail] = useState('');
  const [Password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const {height} = useWindowDimensions();

  const onRegisterPressed = () => {
    console.warn('onRegisterPressed');
  };

  const onForgetPasswordPressed = () => {
    console.warn('On Forget Password Pressed');
  };



  const onTermsofUsePressed = () =>{
    console.warn('onTermsofUsePressed');
  }

  const onPrivacyPolicyPressed = () =>{
    console.warn('onPrivacyPolicyPressed');
  }

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
        <Text style={style.title}>Create an account</Text>

        <Custominput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <Custominput placeholder="Email" value={email} setValue={setmail} />

        <Custominput
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntry
        />

        <Custominput
          placeholder="Confirm Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={style.text}> 
          By registering, you confirm that you accept our{' '}<Text style={style.link} onPress={onTermsofUsePressed}>Terms of Use</Text> and 
          <Text style={style.link} onPress={onPrivacyPolicyPressed}> Privacy Policy.</Text>
        </Text>

        <SocialSIgnINbuttons/>

        <CustomButton
          text="Have an account? Sign in"
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

export default SignUpScreen;
