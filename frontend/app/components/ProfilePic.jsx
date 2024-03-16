import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { COLORS, SIZES, images } from '../../constants/index';

const ProfilePic = () => {
  return (
   
        <TouchableOpacity style={styles.profilePicContainer}>
              <Image 
                  source={images.defaultProfilePic}
                  style={styles.profilePic} 
              />
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    profilePicContainer: {
       
    },
    profilePic: {
        width: SIZES.size_60,
        height: SIZES.size_60,
        
    }
})


export default ProfilePic