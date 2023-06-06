import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({ labelButton, onpress}) => {
  return (
    <TouchableOpacity style={styles.button}
        onPress={onpress}
    >
        <Text style={styles.white}>{labelButton}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#a50303',
        width: 250,
        height: 45,
        borderWidth: 1,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
        color:'white',
        borderColor: '#E4E7EB',
       
    },
    white:{
        color:'white',
        fontWeight: 'bold',
    }
})