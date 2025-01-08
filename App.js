import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import ErrorBoundary from "./src/components/ErrorBoundary";

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
}
