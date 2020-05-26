import React, {useEffect, useCallback, useRef} from 'react';
import {View, TextInputProps, StyleSheet, ViewStyle} from 'react-native';
import {useField} from '@unform/core';
import {TextInput} from 'react-native-paper';

import Text from '../Text';
import useOnChangeText from '../../hooks/useOnChangeText';
import {ValidateField} from '../../models/ValidateField';
import useMaskedOnChangeText from '../../hooks/useMaskedOnChangeText';

interface Props extends TextInputProps {
  label?: string;
  containerStyle?: ViewStyle;
  validateField?: ValidateField;
  name: string;
  mask?(value: string, oldValue: string): string;
  disabled?: boolean;
  mode?: 'flat' | 'outlined';
}

const FloatingLabelIpnput = ({
  label,
  containerStyle,
  style,
  name,
  validateField,
  onChangeText,
  mask,
  mode = 'flat',
  ...rest
}: Props) => {
  const inputRef = useRef<any>(null);
  const {fieldName, registerField, defaultValue = '', error} = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    const registerFieldObject: any = {
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref: any) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref: any, value: string) {
        ref.setNativeProps({text: value});
        inputRef.current.value = value;
      },
      getValue(ref: any) {
        return ref.value;
      },
    };

    registerField(registerFieldObject);
  }, [fieldName, registerField]);

  const _onChangeText = useOnChangeText(
    inputRef,
    fieldName,
    error,
    validateField,
  );

  const _maskedOnChangeText = useMaskedOnChangeText(
    mask!,
    inputRef,
    _onChangeText,
  );

  const handleBlur = useCallback(() => {
    if (validateField) {
      return validateField(fieldName);
    }

    return;
  }, [validateField, fieldName]);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        mode={mode}
        theme={{
          colors: {
            error: 'red',
          },
        }}
        label={label}
        error={Boolean(error)}
        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={(text: string) => {
          mask ? _maskedOnChangeText(text) : _onChangeText(text);
          onChangeText && onChangeText(text);
        }}
        onBlur={handleBlur}
        {...rest}
        style={[
          styles.input,
          label ? styles.inputWithLabel : styles.inputWithNoLabel,
          style,
        ]}
      />
      <View style={styles.errorWrapper}>
        {Boolean(error) && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

export default FloatingLabelIpnput;

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    left: 5,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fffafa',
    paddingHorizontal: 4,
    paddingBottom: 0,
    fontSize: 16,
  },
  inputWithLabel: {
    height: 56,
  },
  inputWithNoLabel: {
    height: 50,
  },
  container: {
    marginHorizontal: 15,
  },
  errorWrapper: {
    height: 23,
  },
  error: {
    color: 'red',
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 4,
  },
});
