import React, {useState} from "react"
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"
import ResultImc from "./ResultImc"
import { useState } from "react"
import styles from "./style"
import styles from "./ResultImc/style"

export default function Form(){

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState("Preencha")
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("calcular")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }
    function validationImc(){
        if (weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencher")
    }


    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.input }
                onChangeText={setHeight}
                value={height}
                placeholder="ex. 1.75"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input }
                onChangeText={setWeight}
                value={weight}
                 placeholder="ex. 75"
                 keyboardType="numeric"
                 />
                 <TouchableOpacity  
                 style={styles.buttonCalculator}
                 onPress={() => validationImc()}
                 >
                 <Text style={styles.textButtonCalculator}></Text>
                 </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}