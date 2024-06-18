import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { getTeams } from '../services/apikl';
import TeamCard from '../components/TeamCard';
import { useNavigation } from '@react-navigation/native';

export default function AllPlayersScreen() {
    const [teams, setTeams] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchTeams = async () => {
            const teamsData = await getTeams();
            setTeams(teamsData);
        };
        fetchTeams();
    }, []);

    return (
        <View>
            <FlatList
                data={teams}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AllTeamsScreen', {
                            teamColor: item.color,
                            teamName: item.nombre,
                            teamId: item.id
                        })}
                    >
                        <TeamCard key={item.id} item={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
