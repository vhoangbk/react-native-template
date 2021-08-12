import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Fonts from '@theme/Fonts';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const Text = styled(Fonts.TEXT)`
  font-size: 17px;
`;

const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export default React.memo(Home);
