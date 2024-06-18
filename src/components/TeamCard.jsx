import React from 'react';
import { View, Image, Text } from 'react-native';

export default function TeamCard({ item }) {
    return (
        <View>
            <Image source={{ uri: item.escudo }} />
            <View>
                <Text>{item.nombre}</Text>
            </View>
            <Image source={{ uri: item.imagenpresidente }} />
        </View>
    );
}
