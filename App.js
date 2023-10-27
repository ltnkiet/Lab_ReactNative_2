import React from "react";
import { Welcome, Xoso, Tinhtoan, Flatlist } from "./screens";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Xoso" component={Xoso} />
        <Stack.Screen name="Tinhtoan" component={Tinhtoan} />
        <Stack.Screen name="Flatlist" component={Flatlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
