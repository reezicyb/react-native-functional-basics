import { TextInput, StyleSheet, View } from 'react-native';

const SearchBar = () => (
    <View style={styles.container}>
        <TextInput placeholder="Search..." style={styles.input} />
    </View>
);

const styles = StyleSheet.create({
    container: { width: '100%', marginBottom: 20 },
    input: { borderWidth: 1, borderColor: '#bc13fe', padding: 12, borderRadius: 12, backgroundColor: '#2d1b4e', color: '#fff' }
});
export default SearchBar;