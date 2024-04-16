import { View, Text, Pressable, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import { categories } from '../constants'

const Recipes = () => {
    return (
        <View className="mx-4 space-y-3">
            <Text className="font-semibold text-neutral-600 " style={{ fontSize: hp(3) }}>Recipes</Text>
            <View>
                <MasonryList
                    data={categories}
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
        <View>
            <Pressable
                style={{ width: '100%', paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }}
                className="flex justify-center mb-4 space-y-1"
            >
                <Image
                    source={item.image}
                    style={{ width: '100%', height: hp(35), borderRadius: 35 }}
                />
            </Pressable>
        </View>
    )
}

export default Recipes