import { View, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
//import Video from "react-native-video";
import Ionic from "react-native-vector-icons/Ionicons"

export default function SingleReel({item, index, currentIndex}) {

    const windowWidth = Dimensions.get("window").width
    const windowHeight = Dimensions.get("window").height
   // const videoRef = useRef(null)
//    const onBuffer = buffer => {
//     console.warn("buffring", buffer)
//    }
//    const onError = error => {
//     console.warn("error", error)
//    }

const [mute, setMute] = useState(false)
  return (
    <View style={{width: windowWidth, height: windowHeight}}>
      <TouchableOpacity 
      activeOpacity={0.9}
      onPress={() => setMute(!mute)}
        style={{
            width: "100%",
            height: "100%",
            position: "absolute"
        }}>
        {/* <Video
            VideoRef={videoRef}
            onBuffer={onBuffer}
            onError={onError}
            repeat={true}
            resizeMode="cover"
            paused={false}
            source={item.Video}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute"
            }}
            /> */}
      </TouchableOpacity>
            <Ionic name="valume-mute" 
            style={{
                fontSize: mute ? 20 : 0,
                color: "white",
                position: "absolute",
                top: windowHeight / 2.3,
                left: windowWidth / 2.3,
                backgroundColor: "rgba(52, 52, 52, 0.9)",
                borderRadius: 100,
                padding: mute ? 20 :0
            }} />
    </View>
  )
}