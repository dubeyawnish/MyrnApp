import { View, Text, Button } from 'react-native'
import React from 'react'

const Dashboard = ({ route, navigation }) => {
    //const { name, deptId } = route.params;

    //console.log(name);

    const gotoHome = () => {
        navigation.navigate('Home');

    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


            <Text>Dashboard</Text>
            {/* {<Text>{name} - {deptId}</Text>} */}
            <Button title='Home' onPress={gotoHome} />
            <Button title='Go Back' onPress={gotoHome} />
        </View>
    )
}

export default Dashboard