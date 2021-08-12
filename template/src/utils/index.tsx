import {Alert} from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/vi';
import I18n from '@locales/index';

export const showInfoMessage = (
  message: string,
  buttonTitle?: string,
  onPress?: any,
) => {
  let closeText = I18n.t('common.close', {
    locale: 'vi',
  });
  Alert.alert(
    '',
    message,
    [{text: buttonTitle ? buttonTitle : closeText, onPress: onPress}],
    {
      cancelable: false,
    },
  );
};

export const showConfirmMessage = (
  title: string,
  message: string,
  btnCancelTitle?: string,
  btnCancelPress?: any,
  btnOkTitle?: string,
  btnOkPress?: any,
) => {
  let cancelText = I18n.t('common.cancel', {
    locale: 'vi',
  });
  let okText = I18n.t('common.ok', {
    locale: 'vi',
  });
  Alert.alert(
    title,
    message,
    [
      {
        text: btnCancelTitle ? btnCancelTitle : cancelText,
        onPress: btnCancelPress,
        style: 'destructive',
      },
      {text: btnOkTitle ? btnOkTitle : okText, onPress: btnOkPress},
    ],
    {
      cancelable: false,
    },
  );
};
