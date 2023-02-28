import React, {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from 'react';
import { api } from '../services/api';
import { database } from '../database';
import { User as ModelUser } from '../database/model/User';

export interface User {
  id: string;
  user_id: string;
  name: string;
  email: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface Response {
  user: User;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  updateUser: (user: User) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<User>({} as User);

  const signIn = async (credentials: SignInCredentials) => {
    try {
      const response = await api.post<Response>('/sessions', credentials);
      const { user, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${data.token}`;

      const usersCollections = database.get<ModelUser>('users');
      await database.write(async () => {
        await usersCollections.create((newUser) => {
          newUser.user_id = user.id;
          newUser.name = user.name;
          newUser.email = user.email;
          newUser.driver_license = user.driver_license;
          newUser.avatar = user.avatar;
          newUser.token = token;
        });
      });

      setData({ ...user, token });
    } catch (error) {
      throw new Error(error);
    }
  };

  const signOut = async () => {
    try {
      const userCollection = database.get<ModelUser>('users');

      await database.write(async () => {
        const user = await userCollection.find(data.id);
        await user.destroyPermanently();
      });

      setData({} as User);
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateUser = async (user: User) => {
    try {
      await database.write(async () => {
        const findedUser = await database.get<ModelUser>('users').find(user.id);
         await findedUser.update((userData) => {
          userData.name = user.name;
          userData.driver_license = user.driver_license;
          userData.avatar = user.avatar;
        })
      });

      setData(user);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    async function loadUserData() {
      const usersCollections = database.get('users');
      const users = await usersCollections.query().fetch();

      if (users.length > 0) {
        const userData = users[0]._raw as unknown as User;
        api.defaults.headers.authorization = `Bearer ${userData.token}`;
        setData(userData);
      }
    }

    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
