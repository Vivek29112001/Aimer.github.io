import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../customButton/CustomButton'


const SocialSIgnINbuttons = () => {
    const onSignInFacebook = () => {
        console.warn('Sign In with Facebook');
      };
    
      const onSignInGoogle = () => {
        console.warn('Sign In with Google');
      };
    
      const onSignInApple = () => {
        console.warn('Sign In with Apple');
      };
  return (
    <>
      <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EaF4"
          fgColor="#4765a9"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
    </>
  )
}

export default SocialSIgnINbuttons