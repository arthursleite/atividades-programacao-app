import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Detail = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Detail Screen</Text>
            <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});