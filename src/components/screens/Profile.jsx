import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import Ionic from "react-native-vector-icons/Ionicons"


export default function Profile() {
  const images = require("../../../assets/images/train.png")
  const [currentScreen, setCurrentScreen] = useState("firstScreen")
  let circle = [];
  let numberCircle = 4;

      const CardImages = [
          {image :require('../../../assets/images/1.jpg')}, 
          {image: require('../../../assets/images/2.jpg')},
          {image: require('../../../assets/images/3.jpg')},
          {image: require('../../../assets/images/4.jpg')},
          {image: require('../../../assets/images/5.jpeg')},
          {image: require('../../../assets/images/1.jpg')}
        ]
        const CardVideo = [
          {image: require('../../../assets/images/3.jpg')},
          {image: require('../../../assets/images/4.jpg')},
          {image: require('../../../assets/images/5.jpeg')},
        ]
        const CardUserImages = [
          {image: require('../../../assets/images/4.jpg')},
          {image: require('../../../assets/images/3.jpg')},
          {image: require('../../../assets/images/1.jpg')},
          {image: require('../../../assets/images/5.jpeg')},
        ]
for(let index = 0; index < numberCircle; index++) {
  circle.push(
    <View key={index}>
      {index === 3 ? (<View style={{
        width: 60, 
        height: 60, 
        borderWidth: 1,
        borderColor: "grey",
        justifyContent: 'center',
        alignContent: "center",
        opacity: 0.7,
        marginHorizontal: 5,
        borderRadius: 100
      }}>
        <Entypo name="plus" style={{fontSize: 24, color: "black", textAlign: "center"}} />
    </View>
         ) : (
          <View style={{
            width: 60,
            height: 60,
            //backgroundColor: "black",
           // opacity: 0.1,
            borderRadius: 100,
            marginHorizontal: 5
          
        }}>
         {CardUserImages.map((item, index) => (
        <TouchableOpacity 
          style={{paddingBottom: 2}}>
          <Image source={item.image} 
          style={{width: 60, height: 60, borderRadius: 100,}}/>
        </TouchableOpacity>
      ))}
          </View>
      )}
    </View>
  ) 
}
const Ecran1 = () => {
  return(
      <ScrollView>
        <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 10,    
        }}>
          {CardImages.map((item, index) => (
            <TouchableOpacity 
              style={{paddingBottom: 2}}>
              <Image source={item.image} 
              style={{width: 119, height: 150}}/>
            </TouchableOpacity>
          ))}
        </View>          
      </ScrollView>
  )
}
const Ecran2 = () => {
  return(
    <ScrollView>
    <View style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 10,    
    }}>
      {CardVideo.map((item, index) => (
        <TouchableOpacity 
          style={{paddingBottom: 2}}>
          <Image source={item.image} 
          style={{width: 119, height: 150}}/>
        </TouchableOpacity>
      ))}
    </View>          
  </ScrollView>
  )
}
const Ecran3 = () => {
  return(
    <ScrollView>
        <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 10,    
        }}>
          {CardUserImages.map((item, index) => (
            <TouchableOpacity 
              style={{paddingBottom: 2}}>
              <Image source={item.image} 
              style={{width: 119, height: 150}}/>
            </TouchableOpacity>
          ))}
        </View>          
      </ScrollView>
  )
}

  return ( 
      <ScrollView style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignContent: "center", marginRight: 8 }}>
          <View style={{ flexDirection: 'row', marginLeft: 12 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Tyga_mix_dj_</Text>
            <Ionic name="chevron-down" style={{ marginLeft: 10, fontSize: 18, color: "black" }} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", }}>
            <Ionic name="at-circle-outline" style={{ fontSize: 24, color: "black", marginRight: 8 }} />
            <Entypo name="plus" style={{ fontSize: 24, color: "black", marginRight: 8 }} />
            <Ionic name="reorder-four-outline" style={{ fontSize: 24, color: "black" }} />
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", padding: 10, marginHorizontal: 2 }}>
          <View style={{ justifyContent: "center", flexDirection: "column" }}>
            <Image source={images} style={{ width: 68, height: 68, borderRadius: 100 }} />
            <Text style={{ fontSize: 17, color: "black", marginLeft: 4 }}>Novic_Djef</Text>
          </View>
          <View style={{ justifyContent: "center", flexDirection: "column" }}>
            <Text style={{ textAlign: "center", fontSize: 17, color: "black", marginLeft: 4 }}>10</Text>
            <Text style={{ textAlign: "center", fontSize: 17, marginLeft: 4 }}>Posts</Text>
          </View>
          <View style={{ justifyContent: "center", flexDirection: "column" }}>
            <Text style={{ textAlign: "center", fontSize: 17, color: "black", marginLeft: 4 }}>25000</Text>
            <Text style={{ textAlign: "center", fontSize: 17, marginLeft: 4 }}>Followers</Text>
          </View>
          <View style={{ justifyContent: "center", flexDirection: "column", marginRight: 12 }}>
            <Text style={{ textAlign: "center", fontSize: 17, color: "black", marginLeft: 4 }}>14500</Text>
            <Text style={{ textAlign: "center", fontSize: 17, marginLeft: 4 }}>Following</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", marginLeft: 12 }}>
          <Text style={{ top: -4 }}> Creation Digutal</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}> Qui veux voyager loin ménage ca monture </Text>
          <Text>#Novic_Djef#</Text>
          <Text style={{ fontSize: 18, color: "balck", fontWeight: "bold" }}> Voir la traduction</Text>
          <View style={{ flexDirection: "row" }}>
            <Ionic name="link" style={{ fontSize: 15 }} />
            <Text style={{ marginLeft: 8 }}>WWW.novicdjef.com</Text>
          </View>
        </View>
        <View style={{ margin: 8, borderRadius: 10, marginHorizontal: 22, backgroundColor: "#bdbdbd6b" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", margin: 8 }}>Tableau de bord Professionnel</Text>
          <Text style={{ marginLeft: 8, marginTop: -4 }}>101 compte touché au bous des 30 dernier jours</Text>
        </View>
        <View style={{ flexDirection: "row", }}>
          <View style={{ margin: 8, borderRadius: 10, marginHorizontal: 22, backgroundColor: "#bdbdbd6b" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", margin: 8 }}>Modifier le profile</Text>
          </View>
          <View style={{ margin: 8, borderRadius: 10, marginHorizontal: 22, backgroundColor: "#bdbdbd6b" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", margin: 8, }}>Partager le Profile</Text>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 20 }}>
            {circle}
          </ScrollView>
        </View>
        <View>  
          

          <View
           style={{flexDirection: "row", justifyContent: "space-around", marginHorizontal: 12}}>
            <Ionic name="grid-outline" style={{fontSize: 28, color: "black"}} onPress={() => setCurrentScreen("firstScreen")} />
            <Entypo name="folder-video" style={{fontSize: 28, color: "black"}} onPress={() => setCurrentScreen("secondScreen")} />
            <Entypo name="images" style={{fontSize: 28, color: "black"}} onPress={() => setCurrentScreen("thirdScreen")} />
          </View>
          <View>
            {currentScreen === "firstScreen" && <Ecran1 /> }
            {currentScreen === "secondScreen" && <Ecran2 /> }
            {currentScreen === "thirdScreen" && <Ecran3 /> }
          </View>
        </View>
      </ScrollView>
  )
}