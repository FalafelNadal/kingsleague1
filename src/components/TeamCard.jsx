import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function TeamCard({ item }) {
    const backgroundColor = item.color;
    return (
        <View style={[styles.cardContainer, { backgroundColor }]}>
            <Image source={{ uri: item.escudo }} style={styles.teamLogo} />
            <View style={styles.infoSection}>
                <Text style={styles.teamName}>{item.nombre}</Text>
            </View>
            <Image source={{ uri: item.imagenpresidente }} style={styles.presidentImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 12,
    },
    teamLogo: {
        width: 75,
        height: 75,
        marginRight: 12,
    },
    infoSection: {
        flex: 1,
    },
    teamName: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    presidentImage: {
        width: 75,
        height: 75,
    },
});