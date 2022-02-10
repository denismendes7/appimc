import React from "react"
import { View, Text, TextInput } from "react-native"
import Title from "./Title"
import Form from "./Form"

export default function Main(){
    return(
        <View>
            <View>
                <Title/>
                <Form/>
            </View>
        </View>
    );
}