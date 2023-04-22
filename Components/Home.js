import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Home = (props) => {
    const [name, setName] = useState('');
    const [deptId, setDeptId] = useState();
    const gotoDashboard = () => {
        props.navigation.navigate('Dashboard', {
            name: name,
            deptId: deptId,
        });

    }
    const onChangeDeptid = (deptidInput) => {
        setDeptId(deptidInput)
    }
    const onChangeName = (nameInput) => {
        setName(nameInput)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <TextInput
                value={name}
                onChangeText={onChangeName}
                placeholder='Enter Name'
            />
            <TextInput
                value={deptId}
                onChangeText={onChangeDeptid}
                placeholder='Enter Deptid'
            />
            <Button title='Dashboard' onPress={gotoDashboard} />
        </View>
    )
}

export default Home;