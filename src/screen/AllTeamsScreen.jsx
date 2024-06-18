import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getPlayers } from '../services/apikl';
import PlayerCard from '../components/PlayerCard';

export default function AllTeamsScreen() {
    const route = useRoute();
    const { teamId, teamColor } = route.params;
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const playersData = await getPlayers(teamId);
            setPlayers(playersData);
        };
        fetchPlayers();
    }, [teamId]);

    return (
        <View style={styles.screenContainer}>
            <FlatList
                data={players}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <PlayerCard item={item} teamColor={teamColor} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
});