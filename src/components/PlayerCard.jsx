import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function PlayerCard({ item, teamColor }) {
    return (
        <View style={[styles.cardContainer, { backgroundColor: teamColor }]}>
            <Image source={{ uri: item.imagen }} style={styles.playerImage} />
            <View style={styles.infoSection}>
                <Text style={styles.playerName}>{item.nombre}</Text>
                <Text style={styles.playerPosition}>{item.demarcacion}</Text>
            </View>
            <Text style={styles.playerRating}>Media {item.media}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    playerImage: {
        width: 55,
        height: 55,
    },
    infoSection: {
        marginLeft: 12,
        flex: 1,
    },
    playerName: {
        color: 'white',
        fontWeight: '600',
    },
    playerPosition: {
        color: 'lightgray',
    },
    playerRating: {
        color: 'gold',
    },
});