import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function SearchContent(props) {

const searchData = [
    {
        id: 0,
        images: [
            require('../../../assets/images/1.jpg'),
            require('../../../assets/images/2.jpg'),
            require('../../../assets/images/3.jpg'),
            require('../../../assets/images/4.jpg'),
            require('../../../assets/images/5.jpeg'),
            require('../../../assets/images/1.jpg')
        ]
    },
    {
        id: 1,
        images: [
            require('../../../assets/images/1.jpg'),
            require('../../../assets/images/2.jpg'),
            require('../../../assets/images/3.jpg'),
            require('../../../assets/images/4.jpg'),
            require('../../../assets/images/5.jpeg'),
            require('../../../assets/images/1.jpg')
        ]
    },
    {
        id: 2,
        images: [
            require('../../../assets/images/3.jpg'),
            require('../../../assets/images/4.jpg'),
            require('../../../assets/images/1.jpg')
        ]
    },
]

  return (
    <View>
      {
        searchData.map((data, index) => {
            return(
                <>
                {
                    data.id === 0 ?( 
                        <View style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between"
                        }}>
                            {
                                data.images.map((imageData, imgIndex) => {
                                    return(
                                        <TouchableOpacity 
                                            onPressIn={() => props.data(imageData)}
                                            onPressOut={() =>props.data(null)}
                                            style={{paddingBottom: 2}}>
                                            <Image source={imageData} 
                                            style={{width: 119, height: 150}}/>
                                        </TouchableOpacity>
                                    );
                                })}
                        </View>
                    ) : null
                }
                {
                    data.id === 1 ? (
                       <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                             <View style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                width:241,
                                justifyContent: 'space-between',
                            }}>
                            {data.images.slice(0,4).map((imageData, imgIndex) => {
                                return(
                                    <TouchableOpacity 
                                        onPressIn={() => props.data(imageData)}
                                        onPressOut={() =>props.data(null)}
                                        style={{paddingBottom: 2}}>
                                        <Image source={imageData} style={{width: 119, height: 150}} />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        <View>
                            <TouchableOpacity
                            onPressIn={() => props.data(data.images[5])}
                            onPressOut={() =>props.data(null)}
                            style={{marginLeft: 2}}>
                                <Image source={data.images[5]} 
                                style={{
                                    width: 129,
                                    height: 302
                                }} />
                            </TouchableOpacity>
                        </View>
                       </View>
                    ) : null
                }
                {
                    data.id === 2 ? (
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <TouchableOpacity 
                                onPressIn={() => props.data(data.images[2])}
                                onPressOut={() =>props.data(null)}
                                style={{paddingRight: 2}}>
                            <Image source={data.images[2]} 
                                style={{
                                    width: 241,
                                    height: 302
                                }} />
                            </TouchableOpacity>
                            <View style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                width:241,
                                justifyContent: 'space-between',
                            }}>
                            {data.images.slice(0, 2).map((imageData, imgIndex) => {
                                return(
                                    <TouchableOpacity 
                                        onPressIn={() => props.data(imageData)}
                                        onPressOut={() =>props.data(null)}
                                        style={{paddingBottom: 2}}>
                                        <Image source={imageData} style={{width: 129, height: 150}} />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        </View>
                    ) : null
                }
                </>
            );
        })
      }
    </View>
  )
}