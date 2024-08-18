import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';

export default function MedControl() {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >

            <Animatable.View delay={800} animation="fadeInUp" style={styles.containerLogo}>
                <Text style={styles.titulo}>MedControl.</Text>
            </Animatable.View>

            <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Monitore e organize seus remédios de qualquer lugar.</Text>
                <Text style={styles.texto}>Faça o Login para começar!</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6a1b9a', // Fundo roxo escuro sólido
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#6a1b9a', // Mesma cor de fundo para evitar bordas
        justifyContent: "center",
        alignItems: "center", // Centraliza o texto no meio
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: '10%', // Espaçamento para que o conteúdo não encoste nas bordas
    },
    titulo: {
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        textDecorationLine: "underline",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    texto: {
        fontStyle: "italic",
        textAlign: "center",
    },
    button: {
        position: "absolute",
        backgroundColor: "#6a1b9a",
        borderRadius: 60,
        paddingVertical: 10,
        width: "60%",
        alignSelf: "center",
        bottom: '15%',
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
    }
});
