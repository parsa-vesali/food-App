import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const WellcomeScreen = () => {

    const ringPading1 = useSharedValue(0)
    const ringPading2 = useSharedValue(0)

    const navigation = useNavigation()

    useEffect(() => {
        ringPading1.value = 0
        ringPading2.value = 0
        setTimeout(() => ringPading1.value = withSpring(ringPading1.value + hp(5)), 100)
        setTimeout(() => ringPading2.value = withSpring(ringPading2.value + hp(5.5)), 400)

        setTimeout(() => navigation.navigate('Home'), 2500)
    }, [])

    return (

        <View className="flex-1 justify-center items-center space-y-10 bg-amber-600">
            <StatusBar style='light' />

            {/* LOGO AND RINGS */}
            <Animated.View className="bg-white/20 rounded-full" style={{ padding: ringPading2 }}>
                <Animated.View className="bg-white/20 rounded-full " style={{ padding: ringPading1 }}>
                    <Image
                        source={require('../assets/img/wellcome.png')}
                        style={{ width: hp(20), height: hp(20) }} />
                </Animated.View>
            </Animated.View >

            {/* title and punchline */}
            <View className="flex items-center space-y-2">
                <Text style={{ fontSize: hp(7) }} className="font-bold text-white tracking-widest">
                    FOODY
                </Text>
                <Text style={{ fontSize: hp(2) }} className="text-white tracking-widest font-medium ">
                    food is always right
                </Text>
            </View>
        </View>

    )
}

export default WellcomeScreen