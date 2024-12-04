import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {RouteProp, useNavigation} from '@react-navigation/native';

export const MainRoutesNames = {
  Home: 'Home',
  Details: 'Details',
} as const;

export type MainRoutesParamsList = {
  [MainRoutesNames.Home]: undefined;
  [MainRoutesNames.Details]: {
    name: string;
  };
};

const Stack = createNativeStackNavigator<MainRoutesParamsList>();

export const useMainNavigation = () => {
  return useNavigation<NativeStackNavigationProp<MainRoutesParamsList>>();
};

export type MainRouteProps<RouteName extends keyof MainRoutesParamsList> =
  RouteProp<MainRoutesParamsList, RouteName>;

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={MainRoutesNames.Home}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={MainRoutesNames.Home} component={HomeScreen} />
      <Stack.Screen name={MainRoutesNames.Details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export {MainNavigator};
