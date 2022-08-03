import React from "react";
import Onboarding from "./src/screens/onboarding";
import LoginScreen from "./src/screens/login";
import Home from "./src/screens/home";
import ItemScreen from "./src/screens/item";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Item from "./src/screens/models/itens";
import EditarItem from "./src/screens/editarItem";
import AdicionarItem from "./src/screens/adicionarItem";





const App: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
          <Stack.Navigator>
              {/*<Stack.Screen name="Onboarding" component={Onboarding} />*/}
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ItemScreen" component={ItemScreen} />
              <Stack.Screen name="EditarItem" component={EditarItem} />
              <Stack.Screen name="AdicionarItem" component={AdicionarItem} />
              


          </Stack.Navigator>
      </NavigationContainer>
  );
};

export type StackParams = {
  Home: undefined,
  Login: undefined,
  ItemScreen: {item:Item},
  EditarItem:{item:Item},
  AdicionarItem: undefined,
};

export default App;
