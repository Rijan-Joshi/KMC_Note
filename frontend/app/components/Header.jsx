import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProfilePic from './ProfilePic'
import { COLORS, SIZES,FONT } from '../../constants/index'

const Header = ({title}) => {
  return (
      <View style={styles.headerContainer}>
          <View>
             <Text style={styles.title}>Welcome Rijan</Text>
             <Text style={styles.subTitle}>Let's Start Learning</Text>  
          </View>
          <ProfilePic/>
   </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.secondaryGreyHex,
        height: 120,
        borderRadius: 20,
        margin: SIZES.size_10,
        marginTop: SIZES.size_18,
        fontFamily: FONT.poppins_extrabold,
        padding: SIZES.size_20,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        shadowColor: COLORS.primaryWhiteHex,
        shadowOffset: {
            width: 0,
            height: -3,
        }, 
        shadowRadius: 20,
        elevation: 10,
    },
    title: {
        color: COLORS.primaryWhiteHex,
        fontSize: SIZES.size_24,
        fontFamily: FONT.poppins_extrabold,
    },
    subTitle: {
        color: COLORS.primaryWhiteHex,
        fontSize: SIZES.size_16,
        fontFamily: FONT.poppins_semibold,
    }
})

export default Header;