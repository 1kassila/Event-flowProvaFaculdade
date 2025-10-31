import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CadastroEvento() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [dataEvento, setDataEvento] = useState(new Date());
    const [showDataPicker, setShowDataPicker] = useState(false);

    const [horaInicio, setHoraInicio] = useState(new Date());
    const [horaFinal, setHoraFinal] = useState(new Date());
    const [showHoraInicio, setShowHoraInicio] = useState(false);
    const [showHoraFinal, setShowHoraFinal] = useState(false);

    const [local, setLocal] = useState("");

    const locaisCadastrados = ["Auditório Central", "Sala 101", "Quadra", "Online"];

    const handleSalvar = () => {
        const missing = [];

        if (!nome.trim()) missing.push("Nome");
        if (!descricao.trim()) missing.push("Descrição");
        if (!categoria) missing.push("Categoria");
        if (!dataEvento) missing.push("Data");
        if (!horaInicio) missing.push("Horário Inicial");
        if (!horaFinal) missing.push("Horário Final");
        if (!local) missing.push("Local");

        if (missing.length > 0) {
            Alert.alert("Campos obrigatórios", `Preencha: ${missing.join(", ")}`);
            return;
        }

        Alert.alert("Sucesso", "Evento cadastrado com sucesso!");
    };

    const handleCancelar = () => {
        Alert.alert(
            "Cancelar Cadastro",
            "Tem certeza que deseja cancelar?",
            [
                { text: "Não", style: "cancel" },
                { text: "Sim", onPress: () => Alert.alert("Cancelado", "O cadastro foi cancelado.") },
            ]
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Cadastar Evento</Text>

            <View style={styles.containerLine}>
                <View style={styles.line} />
            </View>

            <View style={styles.cotImg}>
                <View style={styles.cotImgSub}>
                    <Image
                        source={require('../assets/02.jpg')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.cotImgSub}>
                    <Image
                        source={require('../assets/02.jpg')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.imgM}>
                    <Text style={styles.contSubTex}>+</Text>
                    <Text style={styles.contSubTex}>Upload</Text>
                </View>

            </View>

            <View style={styles.containerLine}>
                <View style={styles.line} />
            </View>

            {/* Nome */}
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome do evento"
                value={nome}
                onChangeText={setNome}
            />

            {/* Descrição */}
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={[styles.input, { height: 80 }]}
                placeholder="Descreva o evento"
                value={descricao}
                onChangeText={setDescricao}
                multiline
            />

            {/* Categoria */}
            <Text style={styles.label}>Categoria</Text>
            <View style={styles.pickerBox}>
                <Picker
                    selectedValue={categoria}
                    onValueChange={(itemValue) => setCategoria(itemValue)}
                >
                    <Picker.Item label="Selecione uma categoria" value="" />
                    <Picker.Item label="Workshop" value="workshop" />
                    <Picker.Item label="Palestra" value="palestra" />
                    <Picker.Item label="Show" value="show" />
                    <Picker.Item label="Outro" value="outro" />
                </Picker>
            </View>

            {/* Data */}
            <Text style={styles.label}>Data do Evento</Text>
            <Pressable
                style={styles.dateButton}
                onPress={() => setShowDataPicker(true)}
            >
                <Text style={styles.dateText}>
                    {dataEvento.toLocaleDateString("pt-BR")}
                </Text>
            </Pressable>
            {showDataPicker && (
                <DateTimePicker
                    value={dataEvento}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowDataPicker(false);
                        if (selectedDate) setDataEvento(selectedDate);
                    }}
                />
            )}

            {/* Horário Inicial e Final lado a lado */}
            <View style={styles.row}>
                {/* Horário Inicial */}
                <View style={styles.timeBox}>
                    <Text style={styles.label}>Horário Inicial</Text>
                    <Pressable
                        style={styles.dateButton}
                        onPress={() => setShowHoraInicio(true)}
                    >
                        <Text style={styles.dateText}>
                            {horaInicio.toLocaleTimeString("pt-BR", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </Text>
                    </Pressable>
                    {showHoraInicio && (
                        <DateTimePicker
                            value={horaInicio}
                            mode="time"
                            is24Hour
                            display="default"
                            onChange={(event, selectedTime) => {
                                setShowHoraInicio(false);
                                if (selectedTime) setHoraInicio(selectedTime);
                            }}
                        />
                    )}
                </View>

                {/* Horário Final */}
                <View style={styles.timeBox}>
                    <Text style={styles.label}>Horário Final</Text>
                    <Pressable
                        style={styles.dateButton}
                        onPress={() => setShowHoraFinal(true)}
                    >
                        <Text style={styles.dateText}>
                            {horaFinal.toLocaleTimeString("pt-BR", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </Text>
                    </Pressable>
                    {showHoraFinal && (
                        <DateTimePicker
                            value={horaFinal}
                            mode="time"
                            is24Hour
                            display="default"
                            onChange={(event, selectedTime) => {
                                setShowHoraFinal(false);
                                if (selectedTime) setHoraFinal(selectedTime);
                            }}
                        />
                    )}
                </View>
            </View>

            {/* Local */}
            <Text style={styles.label}>Local do Evento</Text>
            <View style={styles.pickerBox}>
                <Picker
                    selectedValue={local}
                    onValueChange={(itemValue) => setLocal(itemValue)}
                >
                    <Picker.Item label="Selecione um local" value="" />
                    {locaisCadastrados.map((loc, index) => (
                        <Picker.Item key={index} label={loc} value={loc} />
                    ))}
                </Picker>
            </View>

            {/* title Map*/}
            <View style={styles.map}>
                <Text style={styles.titleMap}>Ou</Text>
                <Text style={styles.titleMap}>Marque no Mapa o Local Desejado</Text>
            </View>

            {/* imp Map */}
            <View style={styles.contMapImg}>
                <ImageBackground
                    source={require('../assets/03.jpg')}
                    style={styles.imgMap}
                    resizeMode="cover"
                >
                    <View style={styles.marqueMap}>
                        <Text style={styles.titleMap}>Marque no Mapa</Text>
                    </View>

                </ImageBackground>
            </View>

            {/*latitudes */}
            <Text style={styles.label}>Latitude</Text>
            <TextInput
                style={styles.input}
                placeholder="example"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Longitude</Text>
            <TextInput
                style={styles.input}
                placeholder="example"
                value={nome}
                onChangeText={setNome}
            />

            {/* Botões lado a lado */}
            <View style={styles.buttonRow}>
                <Pressable style={[styles.button, styles.saveButton]} onPress={handleSalvar}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </Pressable>

                <Pressable style={[styles.button, styles.cancelButton]} onPress={handleCancelar}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#f8f8f8",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 15,
    },
    containerLine: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#0000007e",
        marginVertical: 10,
    },
    cotImg: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cotImgSub: {
        borderWidth: 0.3,
        borderColor: '#4848488c',
        borderRadius: 3,
        padding: 10
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 3
    },
    imgM: {
        flexDirection: 'column',
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#4848488c',
        borderStyle: 'dotted',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contSubTex: {
        fontSize: 18
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 4,
        marginTop: 12,
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 15,
    },
    pickerBox: {
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    dateButton: {
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
    },
    dateText: {
        fontSize: 15,
        color: "#333",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    timeBox: {
        flex: 1,
    },
    map: {
        alignItems: 'center',
        margin: 15,
    },
    titleMap: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    contMapImg: {
        borderRadius: 20,
        overflow: 'hidden',
    },
    imgMap: {
        width: '100%',
        height: 130,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    marqueMap: {
        backgroundColor: '#ffffffe4',
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgba(46, 46, 46, 0.38)000ff',
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        gap: 10,
    },
    button: {
        flex: 1,
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 50,
    },
    saveButton: {
        backgroundColor: "#007BFF",
    },
    cancelButton: {
        backgroundColor: "#b20000",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
