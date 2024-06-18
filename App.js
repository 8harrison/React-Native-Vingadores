import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';

import Heroi from './components/Heroi';

const Herois = [
  {
    image: require('./assets/homemAranha.png'),
    nome: 'Homem-Aranha',
    descricao: 'Todos os poderes de uma aranha.',
  },
  {
    image: require('./assets/capAmerica.png'),
    nome: 'Capitão América',
    descricao: 'Força, agilidade e um grande coração.',
  },
  {
    image: require('./assets/viuvaNegra.jpg'),
    nome: 'Viúva Negra',
    descricao: 'Uma espiã muito habilidosa.',
  },
   {
    image: require('./assets/hulk.jpg'),
    nome: 'Hulk',
    descricao: 'Incrível força e agilidade.',
  },
   {
    image: require('./assets/thor.jpg'),
    nome: 'Thor',
    descricao: 'Poderoso martelo e poderes de raios.',
  },
   {
    image: require('./assets/homemdeFerro.png'),
    nome: 'Homem de Ferro',
    descricao: 'Armadura ultra tecnológica.',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.top}>
    <Text style={styles.titulo}>Recrutamento Vingadores</Text>
     </View>
          <FlatList
          style={styles.list}
          data={Herois}
          renderItem={({item}) =>(
                    <Heroi image={item.image} heroi={item.nome} desc={item.descricao} />
          )}
           />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  top: {
    backgroundColor: '#a50000',
    height: '9%'
  },
  titulo: {
      color: '#f5f5f5',
      marginTop: 35,
      marginStart: 25,
      fontSize: 24,
      fontWeight: '500'
  }, list: {
    height: '90%'
  }
});
