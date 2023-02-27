import React, { useState } from 'react';
import { InputPassword } from '../InputPassword';

import { Container } from './styles';

interface Props {
  type: string;
  setCurrentPassword: (value: string) => void;
  currentPassword: string;
  setPassword: (value: string) => void;
  password: string;
  setPasswordConfirm: (value: string) => void;
  passwordConfirm: string;
}

export function FormPassword({
  type,
  setCurrentPassword,
  currentPassword,
  setPassword,
  password,
  setPasswordConfirm,
  passwordConfirm,
}: Props) {
  return (
    <Container>
      {type === 'edit' && (
        <InputPassword
          placeholder='Senha atual'
          onChangeText={setCurrentPassword}
          value={currentPassword}
        />
      )}
      <InputPassword
        placeholder='Senha'
        onChangeText={setPassword}
        value={password}
      />
      <InputPassword
        placeholder='Repetir senha'
        onChangeText={setPasswordConfirm}
        value={passwordConfirm}
      />
    </Container>
  );
}
