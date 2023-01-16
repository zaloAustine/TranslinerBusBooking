import react from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Login from "./Login";
const Auth = () => {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', backgroundColor: "#1c1159", tint: "white" }}
            edges={['top', 'left', 'right']}
        >
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle={'light-content'}

            />
            <View style={{ backgroundColor: "#f0f0f0", flex: 1 }}>
                <Login />

            </View>
        </SafeAreaView>
    )
}
export default Auth;