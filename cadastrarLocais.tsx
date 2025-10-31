import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    Alert,
    ScrollView,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

export default function CadastroEndereco() {
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleSalvar = () => {
        if (!endereco || !bairro || !cidade || !cep || !numero || !latitude || !longitude) {
            Alert.alert("Atenção", "Preencha todos os campos!");
        } else {
            Alert.alert("Sucesso", "Endereço salvo com sucesso!");
        }
    };

    const handleCancelar = () => {
        setEndereco("");
        setBairro("");
        setCidade("");
        setCep("");
        setNumero("");
        setLatitude("");
        setLongitude("");
        Alert.alert("Cancelado", "Os campos foram limpos.");
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={true}
            >
                <Text style={styles.titulo}>Cadastrar Evento</Text>

                <View style={styles.line} />

                {/* Imagem Mapa */}
                <View style={styles.contMapImg}>
                    <ImageBackground
                        source={require("../assets/03.jpg")}
                        style={styles.imgMap}
                        resizeMode="cover"
                    >
                        <View style={styles.marqueMap}>
                            <Text style={styles.titleMap}>Marque no Mapa</Text>
                        </View>
                    </ImageBackground>
                </View>

                {/* Campos */}
                <Text style={styles.label}>Endereço</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    value={endereco}
                    onChangeText={setEndereco}
                />

                <Text style={styles.label}>Bairro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Bairro"
                    value={bairro}
                    onChangeText={setBairro}
                />

                <Text style={styles.label}>Cidade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    value={cidade}
                    onChangeText={setCidade}
                />

                <View style={styles.linha}>
                    <Text style={[styles.label, styles.metade]}>CEP</Text>
                    <Text style={[styles.label, styles.metade]}>Número</Text>
                </View>

                <View style={styles.linha}>
                    <TextInput
                        style={[styles.input, styles.metade]}
                        placeholder="CEP"
                        keyboardType="numeric"
                        value={cep}
                        onChangeText={setCep}
                    />
                    <TextInput
                        style={[styles.input, styles.metade]}
                        placeholder="Número"
                        keyboardType="numeric"
                        value={numero}
                        onChangeText={setNumero}
                    />
                </View>

                <Text style={styles.label}>Latitude</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Latitude"
                    value={latitude}
                    onChangeText={setLatitude}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Longitude</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Longitude"
                    value={longitude}
                    onChangeText={setLongitude}
                    keyboardType="numeric"
                />

                <View style={styles.titleMaque}>
                    <Text>Ou</Text>
                    <Text>Marque no Mapa o Local Desejado</Text>
                </View>

                {/* Botões */}
                <View style={styles.botoes}>
                    <Pressable style={[styles.botao, styles.salvar]} onPress={handleSalvar}>
                        <Text style={styles.textoBotao}>Salvar</Text>
                    </Pressable>

                    <Pressable style={[styles.botao, styles.cancelar]} onPress={handleCancelar}>
                        <Text style={styles.textoBotao}>Cancelar</Text>
                    </Pressable>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    container: {
        flexGrow: 1,
        padding: 20,
        alignItems: "flex-start", // <-- todos os textos à esquerda
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
        textAlign: "left", // <-- título à esquerda
        width: "100%",
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#0000007e",
        marginVertical: 10,
    },
    contMapImg: {
        width: "100%", // <-- imagem ocupa 100% da tela
        borderRadius: 20,
        marginBottom: 15,
        overflow: "hidden",
    },
    imgMap: {
        width: "100%", // <-- imagem realmente 100%
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    marqueMap: {
        backgroundColor: "#ffffffe4",
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "rgba(46, 46, 46, 0.38)",
    },
    titleMap: {
        fontSize: 17,
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        height: 45,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 4,
        marginTop: 12,
        textAlign: "left", // <-- alinhado à esquerda
    },
    linha: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    metade: {
        width: "48%",
    },
    titleMaque: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
    },
    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20,
    },
    botao: {
        width: "48%",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    salvar: {
        backgroundColor: "#007bff",
    },
    cancelar: {
        backgroundColor: "#b20000",
    },
    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
