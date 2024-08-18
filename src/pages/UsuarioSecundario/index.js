import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';

export default function UsuarioSecundario() {
    const navigation = useNavigation();
    const [selectedGender, setSelectedGender] = useState(); // useState needs to be imported

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Novo Usuário</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>Nome:</Text>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                />

                <Text style={styles.title}>Data de Nascimento:</Text>
                <TextInput
                    placeholder="Data de Nascimento"
                    style={styles.input}
                />

                <Text style={styles.title}>Informe seu Sexo Biologico:</Text>
                <Picker
                    selectedValue={selectedGender}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedGender(itemValue)}
                >
                    <Picker.Item label="Feminino" value="fem" />
                    <Picker.Item label="Masculino" value="masc" />
                </Picker>
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

    },
    message: {
        marginTop: '5%',
        marginBottom: '3%',
        paddingStart: "5%",
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    containerForm: {
        flex: 1,
        backgroundColor: "white",
        paddingStart: "5%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        marginRight: "5%",
        fontSize: 16,
    },
    picker: {
      marginTop: 5,
      fontSize: 18,
      marginRight: "5%",
    },
})