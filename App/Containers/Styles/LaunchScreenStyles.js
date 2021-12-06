import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'green',
    paddingTop: 50,
  },
  scrollViewStyle: {
    backgroundColor: 'orange',
  },
});
