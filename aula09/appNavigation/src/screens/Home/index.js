import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to About" onPress={() => navigation.navigate("About", {
                name: "Arthur",
                email: "arthur@email.com"
            })} />
            <Button title="Go to Detail" onPress={() => navigation.navigate("Detail")} />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});