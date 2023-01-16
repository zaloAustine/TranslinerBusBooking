import react from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';

const SeatBooking = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                <Text style={styles.Text}>  Seat Booking</Text>
            </View>
            <View style={styles.layout}>
                <View style={styles.seat}>
                    <View>
                        <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                        <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                    </View>
                    <View>
                        <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                        <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                    </View>
                </View>
                <View style={styles.rightSeatRow}>
                    <View>
                        <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                        <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                    </View>
                    <View>
                        <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                        <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                    </View>

                </View>
            </View>
        </View>
    )
}
export default SeatBooking;
const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    header: {
        backgroundColor: '#FFFFFF',
        flexDirection: "row",
        height: 80,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 20,
        paddingBottom: 15,
        // margin: 10
    },
    Text: {
        color: "#000000",
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 22,
        fontWeight: 'bold',
    },
    layout: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 18,
        paddingLeft: 60,
        paddingRight: 60

    },
    rightSeatRow: {
        flexDirection: "row",

    },
    seat: {
        flexDirection: "row",

    }
}
)
