import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    marginTop: 25,
    paddingTop: 20,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
    color: '#34495e',
    fontWeight: '500',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c', // Vermelho para erros
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;