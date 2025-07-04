import { Text, View, StyleSheet } from 'react-native';

export function Header({ nombreJeux }) {
  return (
    <View style={styles.header}>
      <Text>Pseudo</Text>
      <Text>Nombre de jeux: { nombreJeux }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: '90%',
    margin: 20,
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 30,
    borderRadius: 10,
  },
});