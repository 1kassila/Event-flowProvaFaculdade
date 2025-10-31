import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, StyleSheet, TextInput, Pressable, ImageBackground, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function Perfil() {

    const handlePress = () => {
        Alert.alert("Atenção", "Deseja realmente excluir o Local?");
    };

    return (
        <ScrollView>
            <View style={styles.titleH1}>
                <Text style={styles.h2}>Listagem de Locais</Text>
            </View>

            <View style={styles.contaInput}>
                <View style={styles.inputContainer}>
                    <Ionicons name="search" size={22} color="#666" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquise Eventos"
                    />
                </View>
            </View>

            <View style={styles.contEvent}>
                <Link href="/cadastrarLocais" asChild>
                    <Pressable style={styles.event}>
                        <Text style={styles.btn}>Criar Local +</Text>
                    </Pressable>
                </Link>
            </View>

            <View style={styles.cot}>
                <Text>Mostrando </Text>
                <Text style={styles.textN}>6 </Text>
                <Text>de </Text>
                <Text style={styles.textN}>45 </Text>
                <Text>Eventos</Text>
            </View>

            {/*canteine corpo-1 */}
            <View style={styles.container}>
                {/*imagem */}
                <ImageBackground
                    source={require('../assets/03.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                >
                    <View style={styles.contExclui}>
                        <Pressable onPress={handlePress} style={styles.exclui}>
                            <Text style={styles.h5}>Excluir Evento</Text>
                            <Ionicons name="close" size={20} color="#b20000" style={styles.iconx} />
                        </Pressable>
                    </View>
                </ImageBackground>

                <View>
                    <View>
                        <Text style={styles.h4}>Lorem ipsum dolor sit ame..</Text>
                    </View>

                    {/*botao */}
                    <View style={styles.containerBtn}>
                        <View style={styles.btnn}>
                            <Link href="/cadastrarLocais" asChild>
                                <Pressable style={styles.button}>
                                    <Ionicons name="create-outline" size={17} marginRight={10} color="#ffffffff" />
                                    <Text style={styles.btn}>Editar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View>
                            <Link href="/listt" asChild>
                                <Pressable style={styles.button1}>
                                    <Text style={styles.btn}>Ver</Text>
                                    <Ionicons name="location-outline" size={20} marginLeft={10} color="#ffffffff" />
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>

                       {/*canteine corpo-2 */}
            <View style={styles.container}>
                {/*imagem */}
                <ImageBackground
                    source={require('../assets/03.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                >
                    <View style={styles.contExclui}>
                        <Pressable onPress={handlePress} style={styles.exclui}>
                            <Text style={styles.h5}>Excluir Evento</Text>
                            <Ionicons name="close" size={20} color="#b20000" style={styles.iconx} />
                        </Pressable>
                    </View>
                </ImageBackground>

                <View>
                    <View>
                        <Text style={styles.h4}>Lorem ipsum dolor sit ame..</Text>
                    </View>

                    {/*botao */}
                    <View style={styles.containerBtn}>
                        <View style={styles.btnn}>
                            <Link href="/cadastrarLocais" asChild>
                                <Pressable style={styles.button}>
                                    <Ionicons name="create-outline" size={17} marginRight={10} color="#ffffffff" />
                                    <Text style={styles.btn}>Editar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View>
                            <Link href="/listt" asChild>
                                <Pressable style={styles.button1}>
                                    <Text style={styles.btn}>Ver</Text>
                                    <Ionicons name="location-outline" size={20} marginLeft={10} color="#ffffffff" />
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>  


                       {/*canteine corpo-3 */}
            <View style={styles.container}>
                {/*imagem */}
                <ImageBackground
                    source={require('../assets/03.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                >
                    <View style={styles.contExclui}>
                        <Pressable onPress={handlePress} style={styles.exclui}>
                            <Text style={styles.h5}>Excluir Evento</Text>
                            <Ionicons name="close" size={20} color="#b20000" style={styles.iconx} />
                        </Pressable>
                    </View>
                </ImageBackground>

                <View>
                    <View>
                        <Text style={styles.h4}>Lorem ipsum dolor sit ame..</Text>
                    </View>

                    {/*botao */}
                    <View style={styles.containerBtn}>
                        <View style={styles.btnn}>
                            <Link href="/cadastrarLocais" asChild>
                                <Pressable style={styles.button}>
                                    <Ionicons name="create-outline" size={17} marginRight={10} color="#ffffffff" />
                                    <Text style={styles.btn}>Editar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View>
                            <Link href="/listt" asChild>
                                <Pressable style={styles.button1}>
                                    <Text style={styles.btn}>Ver</Text>
                                    <Ionicons name="location-outline" size={20} marginLeft={10} color="#ffffffff" />
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>


                       {/*canteine corpo-4 */}
            <View style={styles.container}>
                {/*imagem */}
                <ImageBackground
                    source={require('../assets/03.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                >
                    <View style={styles.contExclui}>
                        <Pressable onPress={handlePress} style={styles.exclui}>
                            <Text style={styles.h5}>Excluir Evento</Text>
                            <Ionicons name="close" size={20} color="#b20000" style={styles.iconx} />
                        </Pressable>
                    </View>
                </ImageBackground>

                <View>
                    <View>
                        <Text style={styles.h4}>Lorem ipsum dolor sit ame..</Text>
                    </View>

                    {/*botao */}
                    <View style={styles.containerBtn}>
                        <View style={styles.btnn}>
                            <Link href="/cadastrarLocais" asChild>
                                <Pressable style={styles.button}>
                                    <Ionicons name="create-outline" size={17} marginRight={10} color="#ffffffff" />
                                    <Text style={styles.btn}>Editar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View>
                            <Link href="/listt" asChild>
                                <Pressable style={styles.button1}>
                                    <Text style={styles.btn}>Ver</Text>
                                    <Ionicons name="location-outline" size={20} marginLeft={10} color="#ffffffff" />
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>


                       {/*canteine corpo-5 */}
            <View style={styles.container}>
                {/*imagem */}
                <ImageBackground
                    source={require('../assets/03.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                >
                    <View style={styles.contExclui}>
                        <Pressable onPress={handlePress} style={styles.exclui}>
                            <Text style={styles.h5}>Excluir Evento</Text>
                            <Ionicons name="close" size={20} color="#b20000" style={styles.iconx} />
                        </Pressable>
                    </View>
                </ImageBackground>

                <View>
                    <View>
                        <Text style={styles.h4}>Lorem ipsum dolor sit ame..</Text>
                    </View>

                    {/*botao */}
                    <View style={styles.containerBtn}>
                        <View style={styles.btnn}>
                            <Link href="/cadastrarLocais" asChild>
                                <Pressable style={styles.button}>
                                    <Ionicons name="create-outline" size={17} marginRight={10} color="#ffffffff" />
                                    <Text style={styles.btn}>Editar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View>
                            <Link href="/listt" asChild>
                                <Pressable style={styles.button1}>
                                    <Text style={styles.btn}>Ver</Text>
                                    <Ionicons name="location-outline" size={20} marginLeft={10} color="#ffffffff" />
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>


                       {/*canteine corpo-6 */}
            <View style={styles.container}>
                {/*imagem */}
                <ImageBackground
                    source={require('../assets/03.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                >
                    <View style={styles.contExclui}>
                        <Pressable onPress={handlePress} style={styles.exclui}>
                            <Text style={styles.h5}>Excluir Evento</Text>
                            <Ionicons name="close" size={20} color="#b20000" style={styles.iconx} />
                        </Pressable>
                    </View>
                </ImageBackground>

                <View>
                    <View>
                        <Text style={styles.h4}>Lorem ipsum dolor sit ame..</Text>
                    </View>

                    {/*botao */}
                    <View style={styles.containerBtn}>
                        <View style={styles.btnn}>
                            <Link href="/cadastrarLocais" asChild>
                                <Pressable style={styles.button}>
                                    <Ionicons name="create-outline" size={17} marginRight={10} color="#ffffffff" />
                                    <Text style={styles.btn}>Editar</Text>
                                </Pressable>
                            </Link>
                        </View>
                        <View>
                            <Link href="/listt" asChild>
                                <Pressable style={styles.button1}>
                                    <Text style={styles.btn}>Ver</Text>
                                    <Ionicons name="location-outline" size={20} marginLeft={10} color="#ffffffff" />
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>


        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#5757578f',
        borderRadius: 10,
        margin: 15,
        overflow: 'hidden',
    },
    titleH1: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 20,
    },
    h2: {
        fontSize: 25,
    },
    h4: {
        fontWeight: 'bold',
        color: '#0410ffff',
        margin: 10
    },
    contaInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        paddingHorizontal: 10,
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    contEvent: {
        alignItems: 'center'
    },
    event: {
        width: '96%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#0d00ffff'
    },
    btn: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    cot: {
        flexDirection: 'row',
        width: '100%',
        marginHorizontal: -20,
        justifyContent: 'flex-end'
    },
    textN: {
        fontWeight: 'bold'
    },
    img: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
    },
    contExclui: {
        width: '100%',
        alignItems: 'flex-end',
        padding: 10

    },
    exclui: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'flex-end',
        backgroundColor: '#f74040ff',
        borderRadius: 20,
        padding: 5
    },
    h5: {
        color: '#ffff',
        fontWeight: 'bold'
    },
    iconx: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        marginLeft: 10,
        borderRadius: 15,
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 12
    },
    btnn: {
        marginRight: 10
    },
    button: {
        flexDirection: 'row',
        width: 100,
        height: 30,
        backgroundColor: '#ffb700ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    button1: {
        flexDirection: 'row',
        width: 100,
        height: 30,
        backgroundColor: '#0400ffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },

})