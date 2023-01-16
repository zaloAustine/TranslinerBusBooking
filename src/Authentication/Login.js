import react from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
const Login = () => {
    const onSubmitFormHandler = async (event) => {
    }
    const imageUri = "https://www.logodesign.net/logo/swooshes-over-bus-3843ld.png"
    return (

        <View style={styles.form}>
            <View style={styles.logo}>
                <Image source={{ uri: imageUri }} style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                }} />

            </View>
            <View style={styles.wrapper}>
                <Text>Phone number</Text>
                <TextInput
                    placeholder="Eg.798689309"
                    placeholderTextColor="#ffffff"
                    style={styles.input}
                //value={email}
                //  editable={!isLoading}
                // onChangeText={onChangeEmailHandler}
                />
            </View>
            <View style={styles.wrapper}>
                <Text>Password</Text>
                <TextInput
                    placeholder="Enter password"
                    placeholderTextColor="#ffffff"
                    style={styles.input}
                // value={email}
                //  editable={!isLoading}
                // onChangeText={onChangeEmailHandler}
                />
            </View>
            <View>
                <Button
                    title="Submit"
                    // onPress={onSubmitFormHandler}
                    style={styles.submitButton}
                // disabled={isLoading}
                />
            </View>
        </View>
    )
}
export default Login;
const styles = StyleSheet.create({

    input: {
        borderWidth: 2,
        borderColor: "grey",
        minWidth: 200,
        textAlignVertical: "center",
        paddingLeft: 10,
        borderRadius: 20,
        color: "#171111",
        backgroundColor: "#ffffff",
        padding: 10
    },
    submitButton: {
        backgroundColor: "gray",
        // padding: 100,
        paddingTop: 30
    },
    wrapper: {
        paddingTop: 10,
        paddingHorizontal: 20
    },
    form: {
        marginTop: "80%"
    }
})