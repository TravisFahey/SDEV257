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
