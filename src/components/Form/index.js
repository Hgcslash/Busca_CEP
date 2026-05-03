import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, Keyboard } from 'react-native';
import api from '../../../services/Api';
import Result from './Result';
import styles from './style';

export default function Form() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const buscarCep = async () => {
    if (cep.length !== 8) {
      setMensagem("O CEP deve ter 8 números");
      return;
    }
    setLoading(true);
    setMensagem("");
    try {
      const response = await api.get(`${cep}/json/`);
      if (response.data.erro) {
        setMensagem("CEP não encontrado.");
        setDados(null);
      } else {
        setDados(response.data);
      }
      Keyboard.dismiss();
    } catch (error) {
      setMensagem("Erro ao buscar o CEP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.label}>Digite o CEP:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCep}
          value={cep}
          placeholder="Ex: 74000000"
          keyboardType="numeric"
          maxLength={8}
        />
        <TouchableOpacity style={styles.button} onPress={buscarCep}>
          {loading ? <ActivityIndicator color="#fff"/> : <Text style={styles.textButton}>BUSCAR</Text>}
        </TouchableOpacity>
      </View>
      <Result dados={dados} mensagem={mensagem} />
    </View>
  );
}