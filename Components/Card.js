import React from 'react'
import { View,StyleSheet } from 'react-native'

const Card = props => {
    return <View style={ {...styles.Card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    Card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation : 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5

    }
})

export default Card;