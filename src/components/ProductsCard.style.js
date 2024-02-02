import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container : {
        backgroundColor: '#eceff1',
        margin: 10,
        borderRadius: 10,
        flex : 1,
        justifyContent: 'center',
    },
    image : {
        margin: 10,
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 2.5,
        borderRadius: 10,
    },
    title : {
        margin: 10,
        fontWeight: 'bold',
    },
    text : {
        margin: 10,
        alignItems: 'left',
        color: 'black',
    },
    stock : {
        margin: 10,
        color: 'red',
    }
    
})
