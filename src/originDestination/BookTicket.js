import react from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from "react-native";
import { Form, FormItem } from 'react-native-form-component';
import RadioButtonRN from 'radio-buttons-react-native';

const BookTicket = () => {
    const data = [
        {
            label: 'One Way'
        },
        {
            label: 'Round Trip'
        }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="ios-arrow-back-outline" size={30} color="#1c1159" />
                <Text style={styles.headerText}>TransLiner</Text>
            </View>
            <View>
                <Text style={styles.title}>Book Ticket</Text>
            </View>
            <View style={styles.form}>
                <Form onButtonPress={() => console.warn('do something')}>
                    {/* <RadioButtonRN
                        data={data}
                        selectedBtn={(e) => console.log(e)}
                    /> */}
                    <Text style={styles.text}>From Location*</Text>
                    <FormItem style={styles.formItem} />
                    <Text style={styles.text}>To Location*</Text>
                    <FormItem style={styles.formItem} />
                    <Text style={styles.text}>Departure Date*</Text>
                    <FormItem style={styles.formItem} />
                </Form>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    header: {
        paddingLeft: 20,
        flexDirection: "row"
    },
    headerText: {
        padding: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000000"
    },
    title: {
        color: "#000000",
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 25,
        paddingLeft: 24
    },
    form: {
        paddingTop: 42,
        paddingHorizontal: 20,

    },
    formItem: {
        borderRadius: 15
    },
    text: {
        fontSize: 16,
        paddingBottom: 6
    },
    radio: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
export default BookTicket;
