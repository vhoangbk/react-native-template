import React, {createRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationContainerRef} from '@react-navigation/native';
import AuthStack from '@navigation/AuthStack';

export const navigationRef = createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export const Router = () => {
  return (
    <>
      <NavigationContainer
        ref={navigationRef}>
        <AuthStack />
      </NavigationContainer>
      
    </>
  );
};
