import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CarDTO } from '../dtos/CarDTO'
import { RentalPeriod } from '../screens/Scheduling';
import { User } from '../screens/SignUp/SecondStep';

export type HomeTabParamList = {
  Home: undefined;
  SchedulingDone: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  FirstStep: undefined;
  SecondStep: {
    user: {
      name: string;
      email: string;
      driverLicense: string;
    };
  };
  AppTabRoutes: NavigatorScreenParams<HomeTabParamList>;
  CarDetails: {
    car: CarDTO;
  };
  Scheduling: {
    car: CarDTO;
  };
  SchedulingDetails: {
    car: CarDTO;
    dates: string[];
  };
  Success: {
    title: string;
    message?: string;
    nextRoute: string;
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type RouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
