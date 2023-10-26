import React from "react";
import { Image, Text, View, StyleSheet} from "react-native";
import colors from "../../../utils/colors";

export default function ItemMenu({ image, name, description }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <Image style={styles.img}  source={image} />
            </View>
            <View style={styles.containerInfos}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 25,
        marginTop: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        gap: 5,
        backgroundColor: '#f2f2f2',
        width: 325,
        height: 110,
    },
    logoArea: {
        width: '100%',
        height: 100,
    },
    containerInfos: {
        backgroundColor: colors.offWhite,
        padding: 8,
        borderRadius: 25,
        gap: 3,
        justifyContent: 'center',
        height: 95,
        width: 200,
    },

    containerImg: {
        backgroundColor: colors.offWhite,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        height: 100,
        width: 100,
    },

    img: {
        borderRadius: 15,
        height: '90%',
        width: '90%',
    },

    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    description: {
        fontSize: 12,
    }


});
