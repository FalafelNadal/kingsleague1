import React from 'react';
import { View, Image, Text } from 'react-native';

export default function PlayerCard({ item }) {
    return (
        <View>
            <Image source={{ uri: item.imagen }} />
            <View>
                <Text>{item.nombre}</Text>
                <Text>{item.demarcacion}</Text>
                <Text>Media {item.media}</Text>
            </View>
        </View>
    );
}
