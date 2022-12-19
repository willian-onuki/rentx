import { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CarDTO } from '../dtos/CarDTO'
import { RentalPeriod } from '../screens/Scheduling';
import { User } from '../screens/SignUp/SecondStep';

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
  Home: undefined;
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
  SchedulingDone: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type CarDetailsProps = RouteProp<RootStackParamList, 'CarDetails'>
export type SchedulingProps = RouteProp<RootStackParamList, 'Scheduling'>
export type SchedulingDetailsProps = RouteProp<RootStackParamList, 'SchedulingDetails'>

export type SuccessProps = RouteProp<RootStackParamList, 'Success'>;

export type SignUpSecondStepProps = RouteProp<RootStackParamList, 'SecondStep'>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
