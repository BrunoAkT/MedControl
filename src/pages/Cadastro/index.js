import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native' 

export default function Cadastro() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} syle={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation= "fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>E-mail:</Text>
                <TextInput
                placeholder="Digite  um E-mail..."
                style={styles.input}/>

                <Text style={styles.title}>Senha:</Text>
                <TextInput
                placeholder="Sua Senha"
                style={styles.input}/>

                <Text style={styles.title}>Confirme sua senha:</Text>
                <TextInput
                placeholder="Confirmação"
                style={styles.input}/>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UsuarioSecundario')}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>

    );
    
}
const styles = StyleSheet.create({
})