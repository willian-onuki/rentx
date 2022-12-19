import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState, createContext, ReactNode } from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  driver_license: string;
  avatar: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  const signIn = async (credentials: SignInCredentials) => {
    try {
      const { data } = await api.post<AuthState>('/sessions', credentials);
      api.defaults.headers.authorization = `Bearer ${data.token}`;
      setData(data);
    } catch (error) {
      Alert.alert(
        'Opa',
        'Não foi possível entrar, verifique suas credenciais.'
      )
    }
  };

  return (
    <AuthContext.Provider value={{
      user: data.user,
      signIn
    }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
