import { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CarDTO } from '../dtos/CarDTO'

export type RootStackParamList = {
  Home: undefined,
  CarDetails: {
    car: CarDTO;
  },
  Scheduling: undefined,
  SchedulingDetails: undefined,
  SchedulingComplete: undefined,
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type CarDetailsProps = RouteProp<RootStackParamList, 'CarDetails'>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
