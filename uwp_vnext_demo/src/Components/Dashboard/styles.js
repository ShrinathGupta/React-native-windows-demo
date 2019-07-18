import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  subcontainer: {
    flexDirection: 'row'
  },
  column1: {
    // flex: 1,
    flexDirection: 'column',
    width: '30%',
    marginTop: 35,
    marginLeft: 35,
    flexWrap: 'wrap'
  },
  column2: {
    //flex: 1,
    flexDirection: 'column',
    width: '30%',
    marginTop: 20,
    flexWrap: 'wrap'
  },
  column3: {
    //  flex: 1,
    flexDirection: 'column',
    width: '30%',
    flexWrap: 'wrap'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'grey'
  }
});
