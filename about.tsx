
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function Home() {

    return (

        <ScrollView style={styles.rola}>

            <View style={styles.titleH1}>
                <Text style={styles.h2}>Bem vindo ao Aplicativo</Text>
            </View>

            <View style={styles.contaInput}>
                <View style={styles.inputContainer}>
                    <Ionicons name="search" size={22} color="#666" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquise Eventos, Show e etc..."
                    />
                </View>
            </View>

            <View style={styles.titleH1}>
                <Text style={styles.h3}>Explore</Text> <Text> os Eventos</Text>
            </View>

            <View>
                <Image
                    source={require('../assets/03.jpg')}
                    style={styles.imgMaps}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.cot}>
                <Text>Mostrando </Text>
                <Text style={styles.textN}>5 </Text>
                <Text>de </Text>
                <Text style={styles.textN}>45 </Text>
                <Text>Eventos</Text>
            </View>


            <View style={styles.container}>
                <Image
                    source={require('../assets/02.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                />
                <View>
                    <View>
                        <View style={styles.titleFlex}>
                            <View>
                                <Text style={styles.h1}>Lorem ipsum dolor</Text>
                                <Text>Palestra</Text>
                            </View>

                            <View>
                                <Text>DD/MM/AAAA</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.titleFlex}>
                    <View>
                        <Text>Ingresso</Text>
                        <Text>R$ 00,00</Text>
                    </View>
                    <View>
                        <Link href="/list" asChild>
                            <Pressable style={styles.button}>
                                <Text style={styles.btn}> Mais detalhes</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>


            <View style={styles.container}>
                <Image
                    source={require('../assets/02.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                />
                <View>
                    <View>
                        <View style={styles.titleFlex}>
                            <View>
                                <Text style={styles.h1}>Lorem ipsum dolor</Text>
                                <Text>Palestra</Text>
                            </View>

                            <View>
                                <Text>DD/MM/AAAA</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.titleFlex}>
                    <View>
                        <Text>Ingresso</Text>
                        <Text>R$ 00,00</Text>
                    </View>
                    <View>
                        <Link href="/list" asChild>
                            <Pressable style={styles.button}>
                                <Text style={styles.btn}> Mais detalhes</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>


            <View style={styles.container}>
                <Image
                    source={require('../assets/02.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                />
                <View>
                    <View>
                        <View style={styles.titleFlex}>
                            <View>
                                <Text style={styles.h1}>Lorem ipsum dolor</Text>
                                <Text>Palestra</Text>
                            </View>

                            <View>
                                <Text>DD/MM/AAAA</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.titleFlex}>
                    <View>
                        <Text>Ingresso</Text>
                        <Text>R$ 00,00</Text>
                    </View>
                    <View>
                        <Link href="/list" asChild>
                            <Pressable style={styles.button}>
                                <Text style={styles.btn}> Mais detalhes</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>



            <View style={styles.container}>
                <Image
                    source={require('../assets/02.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                />
                <View>
                    <View>
                        <View style={styles.titleFlex}>
                            <View>
                                <Text style={styles.h1}>Lorem ipsum dolor</Text>
                                <Text>Palestra</Text>
                            </View>

                            <View>
                                <Text>DD/MM/AAAA</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.titleFlex}>
                    <View>
                        <Text>Ingresso</Text>
                        <Text>R$ 00,00</Text>
                    </View>
                    <View>
                        <Link href="/list" asChild>
                            <Pressable style={styles.button}>
                                <Text style={styles.btn}> Mais detalhes</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>


            <View style={styles.container}>
                <Image
                    source={require('../assets/02.jpg')}
                    style={styles.img}
                    resizeMode="cover"
                />
                <View>
                    <View>
                        <View style={styles.titleFlex}>
                            <View>
                                <Text style={styles.h1}>Lorem ipsum dolor</Text>
                                <Text>Palestra</Text>
                            </View>

                            <View>
                                <Text>DD/MM/AAAA</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.titleFlex}>
                    <View>
                        <Text>Ingresso</Text>
                        <Text>R$ 00,00</Text>
                    </View>
                    <View>
                        <Link href="/list" asChild>
                            <Pressable style={styles.button}>
                                <Text style={styles.btn}> Mais detalhes</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>

        </ScrollView>

    );
}


const styles = StyleSheet.create({
    rola: {
        marginBottom: 60,
    },
        cot: {
        flexDirection: 'row',
        width: '100%',
        marginHorizontal: -20,
        justifyContent: 'center'
    },
    textN: {
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#d6d6d6a5',
        borderRadius: 10,
        margin: 15,
    },
    titleH1: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        marginTop: 15,
    },
    h2: {
        fontSize: 25,
    },
    h3: {
        fontWeight: 'bold'
    },
    contaInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    inputContainer: {
        flexDirection: 'row', // Ícone e input lado a lado
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 30,
        paddingHorizontal: 10,
        width: '80%',
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
    imgMaps: {
        width: '90%',
        height: 80,
        margin: 15,
        borderRadius: 10,
    },
    img: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
    },
    titleFlex: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 30
    },
    h1: {
        color: '#0400ffff',
        fontWeight: 'bold',
        fontSize: 17,
    },

    button: {
        width: 200,
        height: 30,
        backgroundColor: '#0400ffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btn: {
        color: '#ffffff',
    }
})