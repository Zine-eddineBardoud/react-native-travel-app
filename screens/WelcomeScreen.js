import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation()
    return (
        <View style={tw`flex-1 flex justify-end`}>
            {/* Background Image */}
            <Image
                source={require('../assets/images/welcome.png')}
                style={tw`h-full w-full absolute`}
            />
            {/* Content & gradient */}
            <View style={tw`p-5 pb-10`}>
                <LinearGradient
                    colors={['transparent', 'rgba(3, 105, 161, 0.8)']}
                    style={{ width: wp(100), height: hp(60), position: 'absolute', bottom: 0 }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />
                <View style={tw``}>
                    <Text style={tw`text-white font-bold text-5xl mb-4`}>Traveling made easy !</Text>
                    <Text style={tw`text-neutral-200 font-medium mb-4`}>Experience the world's best adventure around the world with us</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={tw`bg-orange-500 mx-auto p-3 px-12 rounded-full`}>
                    <Text style={tw`text-white font-bold`}>Let's Go !</Text>
                </TouchableOpacity>

            </View>
        </View >
    )
}
