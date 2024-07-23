import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Event, Questionnaire } from "../screens";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      iinitialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={Event} />
      <Stack.Screen name="Questionnaire" component={Questionnaire} />
      
    </Stack.Navigator>
  );
}

export default Navigation;