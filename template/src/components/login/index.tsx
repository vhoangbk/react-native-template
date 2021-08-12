import { useNavigation } from '@react-navigation/native';
import Fonts from '@theme/Fonts';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Images} from '@assets/index'
import {getString} from '@locales/index';
import {useDispatch} from "react-redux";
import {loginAction} from "@stores/actions/AuthAction";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Text = styled(Fonts.TEXT)`
  font-size: 17px;
`;

const TouchableOpacity = styled.TouchableOpacity``;

const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPress = () => {
    // navigation.navigate('Home');
    dispatch(loginAction("test@gmail.com", "12345678"))
  };

  return (
    <Container>
      <Text>Login</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>{getString('login.title', 'vi')}</Text>
      </TouchableOpacity>
      <Image source={Images.APPLE}/>
    </Container>
  );
};

export default Login;
