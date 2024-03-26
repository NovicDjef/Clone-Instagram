import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'



export default function Stories() {

const navigation = useNavigation();

const storyInfo = [
    {
        id: 1,
        name: "Votre story",
        image: require('../../../assets/images/train.png')
    },
    {
        id: 0,
        name: "Dj_Tyga",
        image: require('../../../assets/images/splash_2.png')
    },
    {
        id: 0,
        name: "Destiny",
        image: require('../../../assets/images/5.jpeg')
    },{
        id: 0,
        name: "Rayn_kevin",
        image: require('../../../assets/images/3.jpg')
    },{
        id: 0,
        name: "V_Gost",
        image: require('../../../assets/images/4.jpg')
    },{
        id: 0,
        name: "Tommy_Djoss",
        image: require('../../../assets/images/5.jpeg')
    },{
        id: 0,
        name: "Herman_Pic",
        image: require('../../../assets/images/1.jpg')
    },{
        id: 0,
        name: "Sébastien",
        image: require('../../../assets/images/1.jpg')
    },{
        id: 0,
        name: "Yvan_la_Fleure",
        image: require('../../../assets/images/1.jpg')
    },{
        id: 0,
        name: "Hormele",
        image: require('../../../assets/images/train.png')
    },
    
]

  return (
    <ScrollView 
    horizontal={true} 
    showsHorizontalScrollIndicator={false} 
    style={{paddingVertical: 20}}>
        {
            storyInfo.map((data, index) => {
                return(
                    <TouchableOpacity key={index} onPress={() => navigation.navigate("Status", {
                        name: data.name,
                        image: data.image
                    })}>
                        <View style={{
                            flexDirection: "column",
                            paddingHorizontal: 8, 
                            //position: "absolute"
                        }}>
                            {
                                data.id == 1 ?(
                            <View 
                            style={{
                                position: "absolute", 
                                bottom: 15, 
                                right: 10, 
                                zIndex: 1,
                                borderRadius: 100
                                }}
                            >
                                <Entypo 
                                name="circle-with-plus" 
                                style={{
                                    fontSize: 20, 
                                    color: "#405de6", 
                                    backgroundColor: "white",
                                    borderRadius: 100
                                    }}
                                /> 
                            </View>
                            ) : null
                           }
                        <View style={{
                            width: 68,
                            height: 68,
                            backgroundColor: "white",
                            borderWidth: 1.8,
                            borderRadius: 100,
                            borderColor: "#c13584",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image 
                            source={data.image} 
                            style={{
                                resizeMode: "cover",
                                width: "92%", 
                                height: '92%',
                                borderRadius: 100,
                                backgroundColor: "orange"
                                }}
                            />
                        </View>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 14,
                            opacity: data.id == 0 ? 1 : 0.5
                        }}>
                            {data.name}
                        </Text>
                    </View>
                    </TouchableOpacity>
                )
            })
        }
    </ScrollView>
  )
}