import *as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


class AppHeader extends React.Component{
    render(){
        return(
            <View style={styles.main}>
                <Text style={styles.text}>Air Technology</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'blue',
    },

    text:{
        textAlign: 'center',
        fontSize: 35,
        color:'white',
        paddingBottom: 25,
        paddingTop: 25,
    },
});

export default AppHeader;