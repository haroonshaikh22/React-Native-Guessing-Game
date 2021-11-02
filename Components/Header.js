import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import Color from '../constants/Color'
const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}Title>{props.title}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header: {
        width:'100%',
        height: 90,
        padding: 36,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color:"black",
        fontSize: 18,
        fontFamily : 'open-sans-bold'

    }
})

export default Header;