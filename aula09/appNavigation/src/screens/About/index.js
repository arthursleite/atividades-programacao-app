import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const About = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { name, email } = route.params;

    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
            {/* <Button title="Go to Home" onPress={() => navigation.goBack()} /> */} {/* Faz quase a mesma coisa, mas é diferente do pop */}
            <Button title="Go to Home" onPress={() => navigation.pop()} />
            <Button title="Go to Detail" onPress={() => navigation.navigate("Detail")} />
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
        </View>
    );
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});