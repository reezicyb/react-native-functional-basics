import { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function OrdScr() {
    const rtr = useRouter(); 
    const [txt, setTxt] = useState('');
    const dta = [{ id: '1', title: 'Order 1' }, { id: '2', title: 'Order 2' }, { id: '3', title: 'Order 3' }, { id: '4', title: 'Order 4' }, { id: '5', title: 'Order 5' }];

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.ctr}>
        
        <TouchableOpacity style={styles.backBtn} onPress={() => rtr.back()}>
            <Text style={styles.backBtnTxt}>{"< Back"}</Text>
        </TouchableOpacity>

        <FlatList 
            data={dta} 
            keyExtractor={(itm) => itm.id} 
            renderItem={({ item }) => (
            <View style={styles.card}><Text style={styles.item}>{item.title}</Text></View>
            )} 
        />
        <TextInput 
        style={styles.inp} 
        onChangeText={setTxt} 
        value={txt} 
        placeholder="Add order note..." 
        placeholderTextColor="#888" 
        selectionColor="#bc13fe" 
        />
        <TouchableOpacity onPress={() => alert('Submitted: ' + txt)} style={styles.btn}>
            <Text style={styles.btnTxt}>Submit Note</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({ 
    ctr: { flex: 1, padding: 20, backgroundColor: '#1a0b2e' }, 
    backBtn: { 
        paddingVertical: 10, 
        marginBottom: 10 
    },
    backBtnTxt: { color: '#bc13fe', fontSize: 16, fontWeight: '600' },
    card: { backgroundColor: '#2d1b4e', padding: 15, borderRadius: 10, marginBottom: 10 },
    item: { fontSize: 16, color: '#e0e0e0' },
    inp: { borderWidth: 1, borderColor: '#bc13fe', borderRadius: 10, padding: 12, marginVertical: 10, color: '#fff', backgroundColor: '#2d1b4e' },
    btn: { backgroundColor: '#bc13fe', padding: 15, borderRadius: 10, alignItems: 'center' },
    btnTxt: { color: '#fff', fontWeight: 'bold' }
});