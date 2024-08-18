import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MedControl from '../pages/MedControl/MedControl-index'
import SignIn from '../pages/SignIn/Entrar-index'
import Cadastro from '../pages/Cadastro/cadastro-index'
import UsuarioSecundario from '../pages/UsuarioSecundario/UsuarioSec-index'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Cadastro">
            <Stack.Screen
                name="MedControl"
                component={MedControl}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn} // Aqui estamos utilizando o SignIn que tem o botão para ir a Cadastro
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UsuarioSecundario"
                component={UsuarioSecundario}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}