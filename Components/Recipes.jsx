import { View, Text, Pressable, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import { categoriesData } from '../constants'
import Animated, { FadeInDown } from 'react-native-reanimated';

const Recipes = ({ categories }) => {
    return (
        <View className="mx-4 space-y-3">
            <Text className="font-semibold text-neutral-600 " style={{ fontSize: hp(3) }}>Recipes</Text>
            <View>
                <MasonryList
                    data={categoriesData}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, i }) => <RecipesCard item={item} index={i} />}
                    // refreshing={isLoadingNext}
                    // onRefresh={() => refetch({ first: ITEM_CNT })}
                    onEndReachedThreshold={0.1}
                // onEndReached={() => loadNext(ITEM_CNT)}
                />
            </View>
        </View>
    )
}

const RecipesCard = ({ item, index }) => {
    let isEven = index % 2 == 0
    return (
        <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}>
            <Pressable
                style={{ width: '100%', paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }}
                className="flex justify-center mb-4 space-y-1"
            >
                <Image
                    source={item.image}
                    style={{ width: '100%', height: index % 3 == 0 ? hp(25) : hp(35), borderRadius: 35 }}
                />
                <Text style={{ fontSize: hp(1.8) }} className="font-semibold ml-2 text-neutral-600">
                    {
                        item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title
                    }
                </Text>
            </Pressable>
        </Animated.View>
    )
}

export default Recipes