import React from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import tw from 'twrnc';
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Destinations from '../components/destinations';

const ios = Platform.OS == 'ios';
const topMaring = ios ? 'mt-3' : 'mt-10';

export default function HomeScreen() {
    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`${topMaring}`}>
                {/* Avatar */}
                <View style={tw`mx-5 flex-row justify-between items-center mb-10`}>
                    <Text style={{ ...tw`font-bold text-neutral-700`, fontSize: wp(7) }}>Let's Discover</Text>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/avatar.png')}
                            style={{ height: wp(12), width: wp(12) }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View style={{ ...tw`mx-5 mb-5` }}>
                    <View style={{ ...tw`flex-row items-center bg-neutral-100 rounded-full p-4 pl-6` }}>
                        <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
                        <TextInput
                            placeholder='Search destination'
                            placeholderTextColor={'gray'}
                            style={{ ...tw`flex-1 text-base pl-4 tracking-wider` }}
                        />
                    </View>
                </View>

                {/* Categories */}
                <View style={{ ...tw`mb-4` }}>
                    <Categories />
                </View>

                {/* Sort Categories */}
                <View style={{ ...tw`mb-4` }}>
                    <SortCategories />
                </View>

                {/* Destinations */}
                <View>
                    <Destinations />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
