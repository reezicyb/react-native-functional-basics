import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

export default function HomeScr() {
    const rtr = useRouter();
    const [mVis, setMVis] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.ctr}>
        <Text style={styles.tit}>Home Screen</Text>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500' }} style={styles.img} />
      
        <SearchBar />
        <TouchableOpacity style={styles.btn} onPress={() => rtr.push('/orders')}>
            <Text style={styles.btnTxt}>Go to Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: '#6c757d' }]} onPress={() => setMVis(true)}>
            <Text style={styles.btnTxt}>Show Modal</Text>
        </TouchableOpacity>

        <Modal visible={mVis} transparent={true} animationType="slide">
            <View style={styles.mOverlay}>
                <View style={styles.mView}>
                    <Text style={styles.mTxt}>This is a modal</Text>
                    <TouchableOpacity onPress={() => { setMVis(false); Alert.alert("Closed", "The modal was closed."); }}>
                    <Text style={{ color: 'blue', marginTop: 10 }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ 
    ctr: { flexGrow: 1, padding: 24, alignItems: 'center', backgroundColor: '#1a0b2e' }, 
    tit: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 20 }, 
    img: { width: 150, height: 150, borderRadius: 75, marginBottom: 20, borderWidth: 2, borderColor: '#bc13fe' },
    btn: { backgroundColor: '#bc13fe', paddingVertical: 14, borderRadius: 12, marginVertical: 8, width: '100%', alignItems: 'center' },
    btnTxt: { color: '#fff', fontSize: 16, fontWeight: '700' },
    mOverlay: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)' },
    mView: { margin: 40, padding: 30, backgroundColor: '#2d1b4e', borderRadius: 20, alignItems: 'center' },
    mTxt: { fontSize: 18, color: '#fff' }
});