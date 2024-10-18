import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

const CounterScreen = () => {
    const [count, setCount] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            <Pressable
                onPress={() => setCount(count + 2)}
                title="+1"
            >
                <Text>+1</Text>
                </Pressable>
            {/*<Button
                onPress={() => setCount(count + 2)}
                title="+1"
            />*/}
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        textAlign: 'center',
        color: 'black',
        padding: 20, // Changed to a number
    },
});

export default CounterScreen;
