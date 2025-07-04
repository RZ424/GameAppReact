import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { Header } from './components/header';
import Dropdown from './dropdown';

const DATA = [
  {
    "id": 1,
    "titre": "The Last of Us Part II",
    "prix": 25,
    "genre": "Action-Aventure"
  },
  {
    "id": 2,
    "titre": "FIFA 23",
    "prix": 20,
    "genre": "Sport"
  },
  {
    "id": 3,
    "titre": "Call of Duty: Modern Warfare II",
    "prix": 30,
    "genre": "FPS"
  },
  {
    "id": 4,
    "titre": "Horizon Forbidden West",
    "prix": 28,
    "genre": "Action-RPG"
  },
  {
    "id": 5,
    "titre": "Mario Kart 8 Deluxe",
    "prix": 35,
    "genre": "Course"
  },
  {
    "id": 6,
    "titre": "Animal Crossing: New Horizons",
    "prix": 22,
    "genre": "Simulation"
  },
  {
    "id": 7,
    "titre": "Elden Ring",
    "prix": 32,
    "genre": "Action-RPG"
  },
  {
    "id": 8,
    "titre": "God of War Ragnarök",
    "prix": 40,
    "genre": "Action-Aventure"
  },
  {
    "id": 9,
    "titre": "Gran Turismo 7",
    "prix": 27,
    "genre": "Course"
  },
  {
    "id": 10,
    "titre": "Minecraft",
    "prix": 18,
    "genre": "Sandbox"
  },
  {
    "id": 11,
    "titre": "Fortnite",
    "prix": 0,
    "genre": "Battle Royale"
  },
  {
    "id": 12,
    "titre": "Red Dead Redemption 2",
    "prix": 23,
    "genre": "Action-Aventure"
  },
  {
    "id": 13,
    "titre": "Cyberpunk 2077",
    "prix": 15,
    "genre": "RPG"
  },
  {
    "id": 14,
    "titre": "Resident Evil Village",
    "prix": 19,
    "genre": "Horreur"
  },
  {
    "id": 15,
    "titre": "Assassin's Creed Valhalla",
    "prix": 21,
    "genre": "Action-Aventure"
  }
]

export default function App() {
  const [games, setGames] = useState(DATA);
  const [titre, setTitre] = useState('');
  const [prix, setPrix] = useState('');
  const [genre, setGenre] = useState('');

  const addGame = (titre, prix, genre) => {
    const newGame = {
      id: Date.now().toString(),
      titre,
      prix: Number(prix),
      genre,
    };
    setGames([...games, newGame]);
  };

  return (
    <View style={styles.container}>

      <Header nombreJeux={DATA.length} />

      <View style={{ height: '10%' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sélectionnez un catégorie :</Text>
        <Dropdown />
      </View>

      <View style={styles.flatList}>
        <FlatList
          data={games}
          numColumns={3}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardGame}>
              <Text style={{ textAlign: 'center', marginBottom: 5 }}>{item.titre}</Text>
              <Image
                source={{ uri: `https://static.vecteezy.com/system/resources/previews/022/859/568/large_2x/abstract-letter-jv-logo-design-with-line-connection-for-technology-and-digital-business-company-vector.jpg` }}
                style={{ width: 50, height: 50, marginBottom: 5, borderRadius: 25 }}
              />
              <View style={styles.detailsCard}>
                <Text>{item.prix} €</Text>
                <Text>{item.genre}</Text>
              </View>
            </View>
          )}
        >
        </FlatList>
      </View>

      <Text style={{ marginTop: 15, fontStyle: 'bold', fontSize: 20, backgroundColor: 'rgba(232, 160, 115, 0.3)', padding: 10, borderRadius: 5 }}>Ajout d'un Jeu</Text>

      <View style={styles.containerAjout}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ height: 40, borderWidth: 1, width: '80%', paddingLeft: 10 }}
            placeholder="Entrez le titre du jeu"
            value={titre}
            onChangeText={setTitre}
          />
          <TextInput
            style={{ height: 40, borderWidth: 1, width: '80%', marginTop: 10, paddingLeft: 10 }}
            placeholder="Entrez le prix du jeu"
            value={prix}
            onChangeText={setPrix}
          />
          <TextInput
            style={{ height: 40, borderWidth: 1, width: '80%', marginTop: 10, paddingLeft: 10 }}
            placeholder="Entrez le genre du jeu"
            value={genre}
            onChangeText={setGenre}
          />
        </View>
        <Pressable
          style={{
            backgroundColor: 'rgba(211, 116, 27, 0.9)',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            width: '30%',
            height: 'auto',
          }}
          onPress={() => {
            if (titre.trim() !== '' && prix.trim() !== '' && genre.trim() !== '') {
              addGame(titre.trim(), prix.trim(), genre.trim());
              setTitre('');
              setPrix('');
              setGenre('');
            }
          }}>
          <Text>ADD</Text>
        </Pressable>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    width: '100%',
    height: '37%',
    backgroundColor: 'rgba(232, 160, 115, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25,
  },
  cardGame: {
    backgroundColor: 'rgba(211, 116, 27, 0.9)',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
    height: 'auto',
    elevation: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
  },
  detailsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerAjout: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '22%',
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    marginBottom: 10,
  },
});
