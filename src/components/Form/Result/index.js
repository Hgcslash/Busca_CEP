import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Result({ dados, mensagem }) {
  return (
    <View style={styles.resultContainer}>
      {dados ? (
        <View>
          <Text style={styles.item}>Rua: {dados?.logradouro}</Text>
          <Text style={styles.item}>Bairro: {dados?.bairro}</Text>
          <Text style={styles.item}>Cidade: {dados?.localidade} - {dados?.uf}</Text>
        </View>
      ) : (
        <Text style={styles.errorText}>{mensagem}</Text>
      )}
    </View>
  );
}