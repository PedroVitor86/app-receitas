import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';

export default function Detalhes({ route }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.strMealThumb }} style={styles.imagem} />
      <Text style={styles.nome}>{receita.strMeal}</Text>
      <Text style={styles.categoria}>Categoria: {receita.strCategory}</Text>
      <Text style={styles.instrucoes}>{receita.strInstructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoria: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  instrucoes: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 30,
  },
});
