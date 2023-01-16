
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StatusBar } from 'react-native'
import Header from "./Header";
import BusInformation from "./BusInformation";
class BusType extends Component {

    render() {
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
                    <Header />
                    <BusInformation />
                    <BusInformation />
                    <BusInformation />

                </View>
            </SafeAreaView>
        )
    }
}

export default BusType