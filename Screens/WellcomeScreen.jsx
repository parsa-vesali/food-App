import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const WellcomeScreen = () => {
    return (
        <View className="flex-1 justify-center items-center space-y-10 bg-amber-600">
            <StatusBar style='light' />

            {/* LOGO AND RINGS */}
            <View className="bg-white/20 rounded-full p-10">
                <View className="bg-white/20 rounded-full p-8">
                    <Image
                        source={require('../assets/img/wellcome.png')}
                        style={{
                            width: 200, height: 200
                        }}
                    />
                </View>
            </View>

            {/* title and punchline */}
            <View className="flex items-center space-y-2">
                <Text className="font-bold text-white tracking-widest text-6xl">
                    FOODY
                </Text>
                <Text className="text-white tracking-widest font-medium text-lg">
                    food is always right
                </Text>
            </View>
        </View>

    )
}

export default WellcomeScreen