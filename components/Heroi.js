import { Text, View, StyleSheet, Image } from 'react-native';

export default function Heroi({image, heroi, desc}) {
  
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}/>
      <View style={styles.textContainer}>
          <Text style={styles.heroi}>{heroi}</Text>
          <Text style={styles.descrip}>{desc}</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'row'
  },
  image: {
      width: 50,
      height: 50,
      marginTop: 23,
    
      borderRadius: 25
  },
  heroi: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: '700'
  },
  textContainer: {
      height: 100,
      width: 296,
      borderTopColor: 'white',
      borderStartColor: 'white',
      borderEndColor: 'white',
      borderBottomColor: '#cecece',
      borderWidth: 2,
      marginStart: 25,
  },
  descrip: {
    fontSize: 18,
    color: '#8e8e8e'
  }
});
