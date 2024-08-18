import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native' 

export default function SignIn() {
    const navigation = useNavigation();
    return (
        
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation= "fadeInUp" style={styles.containerForm}>


                <Text style={styles.title}>E-mail:</Text>
                <TextInput
                placeholder="Digite um E-mail..."
                style={styles.input}/>


                <Text style={styles.title}>Senha:</Text>
                <TextInput
                placeholder="Sua Senha"
                style={styles.input}/>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity> 


                <TouchableOpacity style={styles.registerbutton} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>    
                

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#6a1b9a",
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: "8%",
        paddingStart: "5%",

    },
    message: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,

    },
    button: {
        backgroundColor: "#6a1b9a",
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",

    },
    registerbutton:{
        marginTop: 12,
        alignSelf: "center",
    },
    registerText:{
        color: "grey",
    }
})