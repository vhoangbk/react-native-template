import styled from 'styled-components/native';
import Colors from './Colors';

const TEXT = styled.Text`
  color: ${Colors.TEXT};
  font-family: 'SanFranciscoDisplay-Regular';
`;

const TEXT_BOLD = styled(TEXT)`
  color: ${Colors.TEXT};
  font-weight: 700;
`;

export default {
  TEXT,
  TEXT_BOLD,
};
