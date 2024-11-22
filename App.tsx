import {StatusBar} from 'expo-status-bar';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" translucent/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? 40 : 1
    },
});
