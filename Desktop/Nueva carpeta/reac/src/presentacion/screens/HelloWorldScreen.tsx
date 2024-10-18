import { StyleSheet, Text, View } from 'react-native';

interface Props {
    name?: string;
}

const HelloWorldScreen = ({ name = 'Word' }: Props) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} ellipsizeMode='clip' style={styles.title}>Hola {name}</Text>
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
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20,
    },
});

export default HelloWorldScreen;
