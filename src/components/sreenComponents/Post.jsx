import { View, Text, Image, TouchableOpacity, Animated, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionic from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"


export default function Post() {

    const postInfo = [
        {
            postTitle: "Destiny_Dj",
            postImage: require("../../../assets/images/4.jpg"),
            postPersonImage: require("../../../assets/images/5.jpeg"),
            likes: 762,
            isLiked: false,
        },
        {
            postTitle: "Berlin_Priso",
            postImage: require("../../../assets/images/2.jpg"),
            postPersonImage: require("../../../assets/images/fitness.jpg"),
            likes: 762,
            isLiked: false,
        },
        {
            postTitle: "Linda_Ng",
            postImage: require("../../../assets/images/3.jpg"),
            postPersonImage: require("../../../assets/images/global.jpg"),
            likes: 762,
            isLiked: false,
        },
        {
            postTitle: "Larissa",
            postImage: require("../../../assets/images/1.jpg"),
            postPersonImage: require("../../../assets/images/men.jpg"),
            likes: 762,
            isLiked: false,
        },
        {
            postTitle: "Sorel_Blanch",
            postImage: require("../../../assets/images/4.jpg"),
            postPersonImage: require("../../../assets/images/generale.jpg"),
            likes: 762,
            isLiked: false,
        },
        {
            postTitle: "Yvan_La_Fleure",
            postImage: require("../../../assets/images/1.jpg"),
            postPersonImage: require("../../../assets/images/train.png"),
            likes: 762,
            isLiked: false,
        },
        {
            postTitle: "Docta",
            postImage: require("../../../assets/images/1.jpg"),
            postPersonImage: require("../../../assets/images/2.jpg"),
            likes: 762,
            isLiked: false,
        },

    ]
    
  return (
    <View>
        {
            postInfo.map((data, index) => {
                const [like, setLike] = useState(data.isLiked)
                return(
                    <View style={{
                        paddingBottom: 10,
                        borderBottomColor: "gray",
                        borderBottomWidth: 0.1
                    }}>
                        <View  style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: 15
                            }}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                              
                            }}>
                                <Image source={data.postPersonImage} style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 100
                                }} />
                                <View style={{
                                    paddingLeft: 5
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: "bold"
                                    }}>
                                        {data.postTitle}
                                    </Text>
                                </View>
                            </View>
                            <Feather name="more-vertical" style={{
                                fontSize: 20,
                              }} />
                        </View>
                        <View style={{
                            position: 'relative',
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image source={data.postImage} style={{width: "100%", height: 400,}}/>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between", 
                            alignItems: "center",
                            paddingHorizontal: 12,
                            paddingVertical: 15
                            }}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <TouchableOpacity onPress={() => setLike(!like)}>
                                    <AntDesign name={like ? "heart" : "hearto"} style={{
                                        paddingRight: 10,
                                        fontSize: 20,
                                        color: like ? 'red' : "black"
                                    }}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionic name="chatbubble-outline"
                                        style={{
                                            fontSize: 20,
                                            paddingRight: 10
                                        }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather name="send"
                                        style={{
                                            fontSize: 20,
                                        }} />
                                </TouchableOpacity>
                            </View>
                            <Feather  name="bookmark" style={{fontSize: 20}}/>
                        </View>
                        <View style={{
                            paddingHorizontal: 15
                        }}> 
                            <Text>
                                Aimer par {like ? 'toi et' : ''} {' '}
                                {like ? data.likes + 1 : data.likes} autres
                            </Text>
                            <Text style={{fontWeight: "700", fontSize: 14, paddingVertical: 2}}>
                                si tu as aimé la photo like et follow moi
                                <Entypo name="emoji-happy" style={{
                                        fontSize: 15,
                                        color: "green",
                                        marginRight: 10
                                    }}/>
                            </Text>
                            <Text style={{
                                opacity: 0.4,
                                paddingVertical: 2
                            }}>
                                Voir tous les commentaires
                            </Text>
                            <View style={{
                                flexDirection: "row",
                                 justifyContent: "space-between"
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Image source={data.postPersonImage} style={{
                                        width: 25,
                                        height: 25, 
                                        borderRadius: 100,
                                        backgroundColor: 'orange',
                                        marginRight: 10
                                    }} />
                                    <TextInput 
                                        placeholder="Ajouter un commentaire" 
                                        placeholderTextColor="" 
                                        style={{
                                        opacity: 0.5
                                    }} />
                                </View>
                                <View style={{flexDirection: "row", alignItems: "center"}}>
                                    <Entypo name="emoji-happy" style={{
                                        fontSize: 15,
                                        color: "lightgreen",
                                        marginRight: 10
                                    }}/>
                                    <Entypo name="emoji-neutral" style={{
                                        fontSize: 15,
                                        color: "pink",
                                        marginRight: 10
                                    }}/>
                                    <Entypo name="emoji-sad" style={{
                                        fontSize: 15,
                                        color: "red"
                                    }}/>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
    </View>
  )
}