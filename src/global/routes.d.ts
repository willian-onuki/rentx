import { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CarDTO } from '../dtos/CarDTO'
import { RentalPeriod } from '../screens/Scheduling';

export type RootStackParamList = {
  Home: undefined,
  CarDetails: {
    car: CarDTO;
  },
  Scheduling: {
    car: CarDTO;
  },
  SchedulingDetails: {
    car: CarDTO;
    dates: string[],
  },
  SchedulingComplete: undefined,
  SchedulingDone: undefined,
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type CarDetailsProps = RouteProp<RootStackParamList, 'CarDetails'>
export type SchedulingProps = RouteProp<RootStackParamList, 'Scheduling'>
export type SchedulingDetailsProps = RouteProp<RootStackParamList, 'SchedulingDetails'>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
