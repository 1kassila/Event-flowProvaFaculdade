import { Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Pressable, StyleSheet, Text, View, Image } from "react-native";

export default function Screen() {
    return (

        <ScrollView>
            <View style={styles.containerBtn}>
                <View>
                    <Link href="/about" asChild>
                        <Pressable style={styles.button}>
                            <Text style={styles.btn}> volta</Text>
                        </Pressable>
                    </Link>
                </View>

                <View style={styles.container}>
                    <Image
                        source={require('../assets/02.jpg')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <View style={styles.title}>
                        <View>
                            <Text style={styles.H1}>Lorem ipsum dolo</Text>
                            <Text>Palestra</Text>
                        </View>
                        <View>
                            <Text>CC/DD/AAAA</Text>
                        </View>
                    </View>
                    <View style={styles.title}><Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates necessitatibus eum accusantium molestiae obcaecati qui maxime cumque? Impedit obcaecati deleniti, nesciunt, recusandae veniam sequi laudantium quaerat sunt non exercitationem quos?</Text></View>

                    <View style={styles.containerLine}>
                        <View style={styles.line} />
                    </View>

                    <View><Text style={styles.h2}>Informacões do Evento</Text></View>

                    <View style={styles.titleIr}>
                        <View>
                            <Text style={styles.h3}>Data</Text>
                            <Text>DD/MM/AAAA</Text>
                        </View>
                        <View>
                            <Text style={styles.h3}>Horario</Text>
                            <Text>08:00h -- 12:30h</Text>
                        </View>
                    </View>

                    <View style={styles.bottonCon}>
                        <View style={styles.bottonIn}>
                            <View>
                                <Text style={styles.h5}>Valor do Ingresso</Text>
                            </View>
                            <View>
                                <Text style={styles.h5}>R$ 800</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerLocal}>
                        <View style={styles.local}>
                            <Ionicons name="location-outline" size={20} color="#ff0000" />
                            <Text style={styles.localText}>Localização</Text>
                        </View>
                        <View style={styles.containerLine}>
                            <View style={styles.line} />
                        </View>
                    </View>

                    <Image
                        source={require('../assets/03.jpg')}
                        style={styles.imgLocal}
                        resizeMode="cover"
                    />

                    <View style={styles.descriLocal}>
                        <View style={styles.TextLocal}>
                            <Text style={styles.h3}>Endereço:</Text><Text> Avrenida Central, 1234</Text>
                            </View>
                        <View style={styles.TextLocal}>
                            <Text style={styles.h3}>Bairro:</Text><Text> Aurora, Solaris City - SP</Text>
                        </View>
                        <View style={styles.TextLocal}>
                            <Text style={styles.h3}>Ponto de Referência:</Text><Text> Próximo ao lago da lua e ao Shopping Estação Aurora</Text>
                        </View>
                    </View>

                </View>


            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    containerBtn: {
        flex: 1,
        margin: 10,
    },
    button: {
        width: 100,
        height: 30,
        backgroundColor: '#ffffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0000002b',
    },
    btn: {
        color: '#000000ff'
    },
    bottonCon: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    bottonIn: {
        flexDirection: 'row',
        width: '90%',
        height: 30,
        textAlign: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1900ffff',
        padding: 5,
        margin: 10,
        borderRadius: 20,
    },
    h5: {
        color: '#ffff',
    },
    container: {
        width: '100%',
        margin: 'auto',
        marginTop: 10,
        marginBottom: 40,
        borderWidth: 1,
        borderColor: '#00000049',
        borderRadius: 10,

    },
    img: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5.5,
    },
    titleIr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
    },
    H1: {
        color: '#4304ffff',
        fontWeight: 'bold',
        fontSize: 17,
    },
    containerLine: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    line: {
        width: "90%",          // Largura da linha
        height: 1,             // Espessura
        backgroundColor: "#0000007e", // Cor da linha (preto)
        marginVertical: 10,    // Espaçamento acima e abaixo
    },
    h2: {
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    h3: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    containerLocal: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    local: {
        flexDirection: 'row'
    },
    localText: {
        fontWeight: 'bold'
    },
    imgLocal: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        margin: 'auto',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#00000030'
    },
    descriLocal: {
        width: '50%',
        marginHorizontal: 20,
        marginBottom: 30
    },
    TextLocal: {
        flexDirection: 'row'
    }

})