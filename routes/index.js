import React from 'react'
import options from '../utils/screenOptions';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../pages/home';
import Category from '../src/components/category';

const Aba = createMaterialTopTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Aba.Navigator screenOptions={options}>
        <Aba.Screen name="Início" component={HomeScreen} />
        <Aba.Screen name="Roll" component={Category} initialParams={{ category: "roll" }} />
        <Aba.Screen name="Sushi" component={Category} initialParams={{ category: "sushi" }} />
        <Aba.Screen name="Yakitori" component={Category} initialParams={{ category: "yakitori" }} />
        <Aba.Screen name="Yakisoba" component={Category} initialParams={{ category: "yakisoba" }} />
        <Aba.Screen name="Sashimi" component={Category} initialParams={{ category: "sashimi" }} />
        <Aba.Screen name="Temaki" component={Category} initialParams={{ category: "temaki" }} />
        <Aba.Screen name="Cogumelos" component={Category} initialParams={{ category: "cogumelos" }} />
        <Aba.Screen name="Gyoza" component={Category} initialParams={{ category: "gyoza" }} />
        <Aba.Screen name="Tempura" component={Category} initialParams={{ category: "tempura" }} />
      </Aba.Navigator>
    </NavigationContainer>
  );
}
