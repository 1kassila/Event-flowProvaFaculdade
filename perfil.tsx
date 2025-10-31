import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, Image, StyleSheet, Alert, Pressable, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

export default function Perfil() {
    const router = useRouter();

    const handleMinhaConta = () => {
        Alert.alert("Você já está na sua conta, kkkkkk");
    };

    const handleTermos = () => {
        Alert.alert(
            "Política de Privacidade",
                `1. Coleta de Informações
Podemos coletar informações como:
- Nome e email (quando você se cadastra).
- Dados de progresso no aprendizado.
- Informações de dispositivo e uso do app.

2. Uso das Informações
As informações são usadas para:
- Melhorar a experiência do usuário.
- Personalizar conteúdos e recomendações.
- Enviar notificações sobre o app, se autorizado.

3. Compartilhamento de Dados
Não compartilhamos suas informações pessoais com terceiros, exceto se exigido por lei ou com prestadores de serviços necessários ao funcionamento do app.

4. Segurança
Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados.

5. Direitos do Usuário
Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento, entrando em contato com nosso suporte.

6. Alterações na Política
Podemos atualizar esta Política de Privacidade. As mudanças serão publicadas no aplicativo e passarão a valer imediatamente.`
        );
    };

    const handleNotificacoes = () => {
        Alert.alert("Quando tiver notificação, avisaremos");
    };

    const handleSair = () => {
        Alert.alert(
            "Sair",
            "Deseja realmente sair?", [
            {
                text: "Não",
                style: "cancel", // mantém na mesma página
            },
            {
                text: "Sim",
                onPress: () => router.push("/"), // substitua "/login" pela página desejada
            },
        ],
            { cancelable: false }
        );
    };


    return (
        <ScrollView>

            {/*cabeçalho */}
            <View style={styles.flort}>

                {/* volta para home */}
                <View style={styles.flortVolta}>
                    <Link href="/about" asChild>
                        <Text style={styles.volta}>X</Text>
                    </Link>
                </View>

                {/* imagem */}
                <View style={styles.flortImg}>
                    <View style={styles.imgBorder}>
                        <Image
                            source={require('../assets/04.jpg')}
                            style={styles.img}
                            resizeMode="cover"
                        />
                    </View>

                    <View style={styles.textBox}>
                        <Text style={styles.ola}>Olá</Text>
                        <Text style={styles.nome}>Elias Alves</Text>
                    </View>
                </View>
            </View>


            {/* configuracoes */}

            <View style={styles.container}>

                <View style={styles.divisor} />

                <Pressable style={styles.item} onPress={handleMinhaConta}>
                    <Text style={styles.textItem}>Minha Conta</Text>
                    <Ionicons name="person-circle-outline" size={28} color="#00db3ede" />
                </Pressable>

                <View style={styles.divisor} />

                <Pressable style={styles.item} onPress={handleTermos}>
                    <Text style={styles.textItem}>Termos de Uso e Política de Privacidade</Text>
                    <Ionicons name="document-text-outline" size={28} color="#00db3ede" />
                </Pressable>

                <View style={styles.divisor} />

                <Pressable style={styles.item} onPress={handleNotificacoes}>
                    <Text style={styles.textItem}>Notificações</Text>
                    <Ionicons name="notifications-outline" size={28} color="#00db3ede" />
                </Pressable>

                <View style={styles.divisor} />

                <Pressable style={styles.item} onPress={handleSair}>
                    <Text style={styles.textItem}>Sair</Text>
                    <Ionicons name="exit-outline" size={28} color="#00db3ede" />
                </Pressable>

                <View style={styles.divisor} />

            </View>



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    flort: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 45
    },
    flortVolta: {
        margin: 20,
    },
    volta: {
        fontSize: 25,
        marginVertical: -30,
    },
    flortImg: {
        alignItems: 'flex-end',
        margin: 20,
        flex: 1,
    },
    imgBorder: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#ff7b10ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    textBox: {
        width: '100%',
        marginTop: 10,
    },
    ola: {
        textAlign: 'right',
        fontSize: 16,
    },
    nome: {
        textAlign: 'right',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#444',
    },
    overlay: {
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        height: "100%",
        justifyContent: "flex-end",
        padding: 20,
    },
    titulo: {
        fontSize: 26,
        color: "#fff",
        fontWeight: "bold",
    },
    container: {
        padding: 20,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        justifyContent: 'space-between'
    },
    textItem: {
        fontSize: 16,
        color: "#333",
        marginLeft: 12,
        flexShrink: 1,
    },
    divisor: {
        height: 1,
        backgroundColor: "#ccc",
        width: "100%",
        opacity: 0.5,
    },
});
