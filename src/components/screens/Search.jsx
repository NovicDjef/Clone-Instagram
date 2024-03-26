import { View, Text, ScrollView, TouchableOpacity, RefreshControl, StatusBar, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import SearchBox from '../sreenComponents/SearchBox'
import SearchContent from '../sreenComponents/SearchContent'
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";


export default function Search() {

  const windowWidth = Dimensions.get("window").width
  const windowHeight = Dimensions.get("window").height
  const [image, setImage] = useState(null)
  const [refrech, setRefresh] = useState(false)
  const getdata = data => {
    setImage(data)
  }
  const PullMe = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false)
    }, 1000)
  }
  return (
    <View style={{
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      position: "relative"
    }}>
      <ScrollView 
      refreshControl={
        <RefreshControl 
         refreshing={refrech}
         onRefresh={() => PullMe()}
        />
      }
        showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getdata} />
        <TouchableOpacity 
          style={{
            margin: 25,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <AntDesign  name="pluscircleo" style={{
              fontSize: 40, opacity: 0.5
            }}/>
        </TouchableOpacity>
      </ScrollView>
      {
        image ? (
          <View style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(52, 52, 52, 0.8)"
          }}>
            <StatusBar backgroundColor="#525252" barStyle="dark-content" />
            <View style={{
              position: "absolute",
              top: windowHeight / 6,
              left: windowWidth / 18,
              backgroundColor: "white",
              width: 320,
              height: 415,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50
            }}>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 15
              }}>
                <Image source={image} style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100
                }} />
                <View style={{paddingLeft: 8}}>
                  <Text style={{fontSize: 12, fontWeight: 600}}>Novic_Djef</Text>
                </View>
              </View>
              <Image source={image} style={{width: "100%", height: "80%"}} />
              <View style={{
                justifyContent: "space-around",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
                bottom: 4
              }}>
                <Ionic name="heart-outline" style={{fontSize: 26}} />
                <Ionic name="person-circle-outline" style={{fontSize: 26}}/>
                <Feather name="navigation" style={{fontSize: 26}} />
              </View>
            </View>
          </View>
        ) : null
      }
    </View>
  )
}