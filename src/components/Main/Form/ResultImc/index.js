import React from "react"
import { View, Text, TextInput } from "react-native"
import styles from "./style";

export default function ResultImc(props){
    return(
        <View>
            <View style={styles.resultImc}>
                <Text style={styles.information}>{props.messageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text>
            </View>
        </View>
    );
}