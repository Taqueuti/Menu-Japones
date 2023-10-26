import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { filterCategory } from '../../services/searchFilter';
import ItemMenu from '../itemMenu';
import colors from '../../../utils/colors';


export default function Category({ route }) {

    const category = route.params.category;
    const productCategory = filterCategory(category)


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category}</Text>
            <ScrollView>
                {
                    productCategory.map((product, index) => (
                        <ItemMenu key={index} image={product.image} name={product.name} description={product.description} />
                    ))
                }
            </ScrollView>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.background
    },

    title: {
        fontSize: 30,
        textTransform: 'uppercase',
        color: colors.offWhite,
        textAlign: 'center',
    }
});