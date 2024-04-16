import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categores from '../Components/Categores';
import Recipes from '../Components/Recipes';
import { categoriesData } from '../constants';





const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState('Beef')
    return (
        <View className="flex-1 bg-white">
            <StatusBar style='dark' />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                className="space-y-6 pt-14"
            >

                {/* AVATART AND BELL ICON */}
                <View className="mx-4 flex-row justify-between mb-2">
                    <Image source={require('../assets/img/avatar.jpg')}
                        className="rounded-full"
                        style={{ height: hp(5), width: hp(5) }}
                    />
                    <BellIcon size={hp(4)} color="gray" />
                </View>

                {/* GREATHING AND PUNCHLINE */}
                <View className="mx-4 space-y-2 mb-2">
                    <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">Hello , Parsa!</Text>
                    <View>
                        <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">Make your own food,</Text>
                    </View>
                    <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">
                        Stay at <Text className="text-amber-400">HOME</Text>
                    </Text>
                </View>


                {/* SEARCH BAR */}
                <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
                    <TextInput
                        placeholder='Search any recipe'
                        placeholderTextColor={'gray'}
                        style={{ fontSize: hp(1.7) }}
                        className="flex-1 text-base mb-1 pl-3 tracking-wider"
                    />
                    <View className="bg-white rounded-full p-3">
                        <MagnifyingGlassIcon scale={hp(2.5)} strokeWidth={3} color="gray" />
                    </View>
                </View>


                {/* CATEGORY */}
                <View>
                    <Categores activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </View>

                {/* RECIPES */}
                <View>
                    <Recipes Categores={categoriesData} />
                </View>


            </ScrollView>
        </View>
    )
}

export default HomeScreen