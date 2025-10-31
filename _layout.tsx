import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text } from 'react-native';

export default function Layout() {
    return (
        <GestureHandlerRootView>
            <Drawer
                screenOptions={{
                    drawerPosition: 'right', // menu à direita
                    headerShown: true,       // mostra o header
                    headerLeft: () => <Text style={{ marginLeft: 16, fontSize: 18 }}></Text>, // nome à esquerda
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        drawerItemStyle: { height: 0 }, // não aparece no menu
                    }}
                />


                <Drawer.Screen
                    name="about"
                    options={{ title: "Home" }} //  título padrão da página
                />

                <Drawer.Screen
                    name="eventos"
                    options={{ title: "Eventos" }} //  título padrão da página
                />

                <Drawer.Screen
                    name="list"
                    options={{
                        title: "Detalhes",
                        drawerItemStyle: { height: 0 }, // não aparece no menu
                    }}
                />
                <Drawer.Screen
                    name="listt"
                    options={{
                        title: "Detalhes",
                        drawerItemStyle: { height: 0 }, // não aparece no menu
                    }}
                />
                <Drawer.Screen
                    name="cadastrarLocais"
                    options={{
                        title: "Cadastrar",
                        drawerItemStyle: { height: 0 }, // não aparece no menu
                    }}
                />

                <Drawer.Screen
                    name="cadastrar"
                    options={{ title: "Cadastrar" }} //  título padrão da página
                />

                <Drawer.Screen
                    name="locais"
                    options={{ title: "Locais" }} //  título padrão da página
                />

                <Drawer.Screen
                    name="perfil"
                    options={{ 
                        title: "Perfil" ,
                        headerShown: false,
                    }} // título padrão da página
                />
            </Drawer>
        </GestureHandlerRootView >
    )
}