import { View, Text } from 'react-native'
import React, { useState } from 'react'
// import { SwiperFlatList } from 'react-native-swiper-flatlist'
import { videoData } from './Database'
import SingleReel from './SingleReel'



export default function ReelsComponents() {

    const [currentIndex, setCurrenIndex] = useState(0)

    const handleChangeIndexValue = () => {
        setCurrenIndex(index)
    }

  return (
    // <SwiperFlatList 
    //     data={videoData}
    //     vertical={true}
    //     onChangeIndex={handleChangeIndexValue}
    //     renderItem={({item, index}) => 
    //     <SingleReel item={item} index={index} />}
    //     keyExtrator={(item, index) => index}
    // />
    <></>
  )
}