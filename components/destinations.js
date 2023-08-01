import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { destinationData } from '../constrants';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export default function Destinations() {
    const navigation = useNavigation();
    return (
        <View style={tw`mx-4 flex-row justify-between flex-wrap`}>
            {
                destinationData.map((item, index) => {
                    return (
                        <DestinationCard navigation={navigation} item={item} key={index} />
                    )
                })
            }
        </View>
    )
}

const DestinationCard = ({ item, navigation }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Destination', { ...item })}
            style={{
                ...tw`flex justify-end relative p-4 py-6 mb-5`,
                width: wp(44), height: wp(65)
            }}
        >
            <Image
                source={item.image}
                style={{ ...tw`absolute rounded-[35px]`, width: wp(44), height: wp(65) }}
            />

            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                style={{ width: wp(44), height: hp(15), position: 'absolute', bottom: 0, borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />

            <TouchableOpacity
                style={{ ...tw`absolute top-3 right-3 rounded-full p-3`, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                onPress={() => setIsFavorite(!isFavorite)}
            >
                <HeartIcon size={wp(5)} color={isFavorite ? "red" : 'white'} />
            </TouchableOpacity>

            <Text style={{ ...tw`text-white font-semibold`, fontSize: wp(4) }}>{item.title}</Text>
            <Text style={{ ...tw`text-white`, fontSize: wp(2.2) }}>{item.shortDescription}</Text>
        </TouchableOpacity>
    )
}