import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    paddingTop: 15,
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10,
  },
  label: {
    color: '#2c3e50',
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    height: 50,
    margin: 12,
    paddingLeft: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#3498db',
    paddingVertical: 14,
    marginLeft: 12,
    marginTop: 20,
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textButton: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;