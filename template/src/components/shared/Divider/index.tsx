import React from 'react';
import styled from 'styled-components/native';

const View = styled.View<Props>`
  height: ${(props: Props) => props.height}px;
  width: 1px;
  background-color: ${(props: Props) => props.color};
`;

interface Props {
  height?: number;
  color?: string;
}

const Divider = ({height, color}: Props) => {
  return <View height={height} color={color} />;
};

Divider.defaultProps = {
  height: 1,
  color: '#fff',
};

export default React.memo(Divider);
