import React from 'react';
import { View, Text, Touchable, TouchableOpacity, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from 'twrnc';
import { theme } from '../theme';
import { categoriesData } from '../constrants';

export default function Categories() {
    return (
        <View>
            <View style={{ ...tw`mx-5 flex-row justify-between items-center` }}>
                <Text style={{ ...tw`font-semibold text-neutral-700`, width: wp(20) }}>Categories</Text>
                <TouchableOpacity >
                    <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
                style={tw`mt-5`}
            >
                {
                    categoriesData.map((cat, index) => {
                        return (
                            <TouchableOpacity key={index} style={{ ...tw`flex items-center mx-2` }}>
                                <Image
                                    source={cat.image}
                                    style={{ ...tw`rounded-3xl`, width: wp(20), height: wp(19) }}
                                />
                                <Text style={{ ...tw`text-neutral-700 font-medium mt-1`, fontSize: wp(3) }}>{cat.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}