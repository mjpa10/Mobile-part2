
import { StyleSheet,View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from './components/login/Login.js';
import { Register } from './components/Register/register.js';
import { Index } from './components/index/index.js';
import Axios from "axios";

function Main(){
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Register onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function LoginScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <Login
        onPress={() => navigation.navigate("Register")}
        onpress={() => navigation.navigate("Itens")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Itens" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  

  
});