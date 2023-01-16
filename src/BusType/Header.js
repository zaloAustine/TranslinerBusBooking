import react from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    View,
    Text,
    StyleSheet,

} from 'react-native';
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.layout}>
                <View style={styles.icon}>
                    <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                </View>
                <View style={styles.searchIcons}>
                    <Icon name="search" size={30} color="#1c1159" style={{ paddingHorizontal: 12 }} />
                    <Icon2 name="dip-switch" size={30} color="#1c1159" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    layout: {
        backgroundColor: '#FFFFFF',
        flexDirection: "row",
        justifyContent: 'space-between',
        height: 85,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 20,
        paddingBottom: 20,
        // margin: 10
    },
    searchIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Header;