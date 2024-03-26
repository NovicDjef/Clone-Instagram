import { View, Text, StatusBar, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
// import FontAwersome from "react-native-vector-icons/FontAwersome"
import Feather from "react-native-vector-icons/Feather"
import Stories from '../sreenComponents/Stories'
import Post from '../sreenComponents/Post'
import Ionic from "react-native-vector-icons/Ionicons"

export default function Home() {

const [refresh, setRefresh] = useState(false)

const PullMe = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false)
    }, 1000)
  }

  return (
    <View style={{backgroundColor: "white", height: "100%"}}>
        <StatusBar backgroundColor="white" barStyle='dark-content' animated={true}/>
        <View style={{
            justifyContent: "space-between",
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: "center"
        }}>
             <Text style={{fontFamily: 'Lobster-Regular', fontSize: 25, fontWeight: 500}}>
                Instagram
            </Text>
            <View  style={{flexDirection: "row", }}>
                <Ionic name="heart-outline" style={{fontSize: 24, }}/>
                <Ionic name="chatbubble-ellipses-outline" style={{fontSize: 24, marginLeft: 8}}/>
            </View>
        </View>
        <ScrollView 
            refreshControl={
                <RefreshControl 
                    refreshing={refresh}
                    onRefresh={() => PullMe()}
                />
            }
            >
            <Stories />
            <Post />
            <View style={{justifyContent: "center", alignItems: "center", padding: 20}}>
                <Ionic name="ios-reload-circle-sharp"
                style={{fontSize: 50, opacity: 0.2}} />
            </View>
        </ScrollView>
    </View>
  )
}