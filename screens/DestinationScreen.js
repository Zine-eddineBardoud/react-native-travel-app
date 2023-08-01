import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon, ClockIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import { theme } from '../theme';

export default function DestinationScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <View style={tw`bg-white flex-1`}>
            {/* Destination Image */}
            <Image
                source={item.image}
                style={{ ...tw``, width: wp(100), height: hp(65) }}
            />
            <StatusBar color={'light'} />

            <SafeAreaView
                style={tw`flex-row justify-between items-center w-full absolute top-10`}
            >
                {/* Back Button */}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ ...tw`p-2 rounded-full ml-4`, backgroundColor: 'rgba(255, 255,255, 0.5)' }}
                >
                    <ChevronLeftIcon
                        size={wp(7)}
                        strokeWidth={4}
                        color="white"
                    />
                </TouchableOpacity>

                {/* Heart Button */}
                <TouchableOpacity
                    onPress={() => setIsFavorite(!isFavorite)}
                    style={{ ...tw`p-2 rounded-full mr-4`, backgroundColor: 'rgba(255, 255,255, 0.5)' }}
                >
                    <HeartIcon
                        size={wp(7)}
                        strokeWidth={4}
                        color={isFavorite ? 'red' : 'white'}
                    />
                </TouchableOpacity>
            </SafeAreaView>

            {/* Title - Description - Booking Button */}
            <View style={{ ...tw`px-5 flex flex-1 justify-between bg-white pt-8 -mt-16`, borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={tw`flex-row justify-between items-center`}>
                        <Text style={{ ...tw`font-bold flex-1 text-neutral-700`, fontSize: wp(7) }}>{item?.title}</Text>
                        <Text style={{ ...tw`font-semibold`, fontSize: wp(7), color: theme.text }}>$ {item?.price}</Text>
                    </View>

                    <Text style={{ ...tw`text-neutral-700 mt-4 mb-2`, fontSize: wp(3.7) }}>{item?.longDescription}</Text>

                    <View style={tw`flex-row justify-between mx-1 mt-4`}>
                        <View style={tw`flex-row items-start`}>
                            <ClockIcon size={wp(7)} color="skyblue" />
                            <View style={tw`flex mx-2`}>
                                <Text style={{ ...tw`font-bold text-neutral-700`, fontSize: wp(3.5) }}>{item.duration}</Text>
                                <Text style={{ ...tw`text-neutral-600` }}>Duration</Text>
                            </View>
                        </View>

                        <View style={tw`flex-row items-start`}>
                            <MapPinIcon size={wp(7)} color="$f871717" />
                            <View style={tw`flex mx-2`}>
                                <Text style={{ ...tw`font-bold text-neutral-700`, fontSize: wp(3.5) }}>{item.distance}</Text>
                                <Text style={{ ...tw`text-neutral-600` }}>Distance</Text>
                            </View>
                        </View>

                        <View style={tw`flex-row items-start`}>
                            <SunIcon size={wp(7)} color="orange" />
                            <View style={tw`flex mx-2`}>
                                <Text style={{ ...tw`font-bold text-neutral-700`, fontSize: wp(3.5) }}>{item.weather}</Text>
                                <Text style={{ ...tw`text-neutral-600` }}>Sunny</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity
                    style={{
                        ...tw`mb-6 mx-auto flex justify-center items-center rounded-full`,
                        backgroundColor: theme.bg(0.7),
                        height: wp(12),
                        width: wp(50)
                    }}
                >
                    <Text style={{ ...tw`text-white font-bold`, fontSize: wp(4.5) }}>Book now</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}