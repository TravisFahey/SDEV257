import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'ghostwhite',
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  scroll: {
    flex: 1,
    alignSelf: 'stretch',
  },
  swipeContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  textInputContainer: {
    padding: 20,
    paddingBottom: 0,
  },
  textInputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightsteelblue',
    backgroundColor: 'white',
    padding: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalInner: {
    maxWidth: '90%',
    maxHeight: '80%',
    backgroundColor: 'azure',
    padding: 20,
    borderWidth: 1,
    borderColor: 'lightsteelblue',
    borderRadius: 2,
    alignItems: 'center',
  },
  modalScroll: {
    flexGrow: 0,
    flexShrink: 1,
    alignSelf: 'stretch',
  },
  modalText: {
    fontSize: 16,
    margin: 5,
    color: 'slategrey',
  },
  modalButton: {
    fontWeight: 'bold',
    margin: 5,
    color: 'slategrey',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'darkslategray',
    marginBottom: 8,
  },
  introduction: {
    fontSize: 16,
    lineHeight: 24,
    color: '#52616B',
    marginBottom: 24,
  },
  card: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D7DFE5',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkslategray',
    marginBottom: 12,
  },
  facts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  fact: {
    flexShrink: 1,
    backgroundColor: '#EDF2F5',
    color: '#334652',
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#35424B',
  },
});
