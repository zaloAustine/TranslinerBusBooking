import react from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    View,
    Text,
    StyleSheet,
    Image,

} from 'react-native';
const imageUri = "https://thumbs.dreamstime.com/b/plain-white-van-3655496.jpg"
const ratingUri = "https://cdn.pixabay.com/photo/2015/01/17/11/45/star-602148_1280.png"
const BusInformation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={{ uri: imageUri }} style={{ width: 110, height: 69 }} />
                <Text style={styles.busName}>Niloy Poribohon</Text>
                <Text style={styles.direction}>Dhaka to Chitagong</Text>
                <View style={styles.rating}>
                    <Image source={{ uri: ratingUri }} style={{ width: 20, height: 20 }} />
                    <Image source={{ uri: ratingUri }} style={{ width: 20, height: 20 }} />
                    <Image source={{ uri: ratingUri }} style={{ width: 20, height: 20 }} />
                    <Image source={{ uri: ratingUri }} style={{ width: 20, height: 20 }} />
                    <Image source={{ uri: ratingUri }} style={{ width: 20, height: 20 }} />
                    <Text style={styles.rate} >5.0</Text>
                </View>
            </View>
            <View style={styles.busDetail}>
                <View style={styles.carsAvailable}>
                    <View style={styles.left}>
                        <Icon name="card" size={16} color="#1c1159" style={{ paddingHorizontal: 2 }} />
                        <Text>AC</Text>
                    </View>
                    <View style={styles.right}>
                        <Icon name="car" size={16} color="#1c1159" style={{ paddingHorizontal: 2 }} />
                        <Text>2/1</Text>
                    </View>
                </View>
                <Icon2 name="clock-outline" size={15} color="#1c1159" style={{}} />
                <Text style={{ color: "#666666" }}>Journey Start</Text>
                <Text style={{ paddingBottom: 8, color: "#001a00" }}>05May, 12:00am</Text>
                <Icon name="location-outline" size={15} color="#1c1159" />
                <View style={styles.busFare}>
                    <View>
                        <Text style={styles.directionTo}>From - To</Text>
                        <Text style={{ color: "#001a00" }}>Dhaka to Bogura</Text>
                    </View>
                    <View >
                        <Text style={styles.fare}><Text >$</Text><Text style={{ fontSize: 21, color: "#001a00" }}>58</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rating: {
        flexDirection: "row",
        paddingTop: 5

    },
    rate: {
        marginLeft: 5,
        marginTop: 1,
        fontSize: 16
    },
    busName: {
        marginTop: 10,
        marginBottom: 5,
        paddingBottom: 2,
        fontSize: 20
    },
    direction: {
        color: '#3333ff',
        fontSize: 16,
        marginBottom: 5
    },
    busFare: {
        flexDirection: "row",
        justifyContent: 'space-between',
        justifyContent: "flex-end",
        alignItems: "flex-end",
        //paddingTop:5
    },
    directionTo: {
        color: "#666666"
    },
    busDetail: {
        marginHorizontal: 33,
        marginTop: 19

    },
    fare: {
        paddingHorizontal: 20,

    },
    carsAvailable: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingBottom: 13,
        paddingRight: 20
    },
    left: {
        flexDirection: "row",

    },
    right: {
        flexDirection: "row",

    }

})
export default BusInformation;
