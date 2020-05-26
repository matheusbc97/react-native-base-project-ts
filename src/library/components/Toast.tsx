import React, {useState, useEffect} from 'react';
import {DeviceEventEmitter} from 'react-native';

import {Snackbar} from 'react-native-paper';

type ToastType = 'success' | 'danger' | 'alert' | 'normal';

interface ToastOptions {
  type?: ToastType;
  text: string;
  isVisible: boolean;
  idTimeout: number | null;
}

type showToastOptions = Omit<ToastOptions, 'isVisible' | 'idTimeout'>;

export const showToast = (toastOptions: showToastOptions) =>
  DeviceEventEmitter.emit('show-toast', toastOptions);

const _getToastColor = (type: ToastType) => {
  switch (type) {
    case 'alert':
      return '#ffa000';
    case 'danger':
      return '#f44336';
    case 'success':
      return '#00c853';
    default:
      return '#333';
  }
};

const initialState: ToastOptions = {
  isVisible: false,
  text: '',
  type: 'normal',
  idTimeout: null,
};

const Toast = () => {
  const [toastOptions, setToastOptions] = useState<ToastOptions>(initialState);

  useEffect(() => {
    const emitter = DeviceEventEmitter.addListener(
      'show-toast',
      (data: showToastOptions) => {
        const idTimeout = setTimeout(
          () => setToastOptions(initialState),
          10000,
        );

        setToastOptions({
          ...data,
          isVisible: true,
          idTimeout,
        });
      },
    );

    return () => {
      emitter.remove();
    };
  }, []);

  if (!toastOptions.isVisible) {
    return null;
  }

  return (
    <Snackbar
      theme={{
        colors: {
          surface: 'white',
          accent: '#eceff1',
        },
      }}
      style={{
        backgroundColor: _getToastColor(
          toastOptions.type ? toastOptions.type : 'normal',
        ),
      }}
      visible={true}
      onDismiss={() => {}}
      action={{
        label: 'Fechar',
        onPress: () => {
          if (toastOptions.idTimeout) {
            clearTimeout(toastOptions.idTimeout);
          }
          setToastOptions(initialState);
        },
      }}>
      {toastOptions.text}
    </Snackbar>
  );
};

export default Toast;
