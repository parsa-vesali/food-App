import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { categories } from '../constants/index'
import Animated, { FadeInDown } from 'react-native-reanimated';

const Categores = ({ activeCategory, setActiveCategory }) => {
    return (
        <Animated.View entering={FadeInDown.duration(800).springify()}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    categories.map(item => {
                        let isActive = item.title == activeCategory
                        let activeButtonClass = isActive ? ' bg-amber-400' : " bg-black/10"
                        return (
                            <TouchableOpacity
                                key={item.id}
                                className="flex items-center space-y-1"
                                onPress={() => setActiveCategory(item.title)}
                            >
                                <View className={"rounded-full p-[6px]" + activeButtonClass}>
                                    <Image
                                        source={item.image}
                                        style={{ width: hp(6), height: hp(6) }}
                                        className="rounded-full"
                                    />
                                </View>
                                <Text className="text-neutral-600" style={{ fontSize: hp(1.6) }}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </Animated.View>
    )
}

export default Categores