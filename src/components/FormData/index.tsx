import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Input } from '../Input';

import { Container } from './styles';

interface FormDataProps {
  setName: (value: string) => void;
  name: string;
  setEmail: (value: string) => void;
  email: string;
  setDriverLicense: (value: string) => void;
  driverLicense: string;
}

export function FormData({
  setName,
  name,
  setEmail,
  email,
  setDriverLicense,
  driverLicense,
}: FormDataProps) {
  return (
    <Container>
      <Input
        iconName='user'
        placeholder='Nome'
        defaultValue={name}
      />
      <Input
        iconName='mail'
        placeholder='E-mail'
        keyboardType='email-address'
        defaultValue={email}
      />
      <Input
        iconName='credit-card'
        placeholder='CNH'
        keyboardType='numeric'
        defaultValue={driverLicense}
      />
    </Container>
  );
}
