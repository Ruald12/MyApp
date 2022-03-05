import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Home Screen</Text>
        <View>
          <TouchableOpacity
            style={styles.buttonMars}
            onPress={() => this.props.navigation.navigate('Image')}>
            >
            <Image
              source={require('../assets/C-93-Img1-Mars.jpg')}
              style={styles.buttonImage}></Image>
            <Text style={styles.buttonTextMars}>Mars Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMars}
            onPress={() => this.props.navigation.navigate('Earth')}>
            >
            <Image
              source={require('../assets/C-93-Img2-Earth.jpg')}
              style={styles.buttonImage}></Image>
            <Text style={styles.buttonTextMars}>Earth Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>image</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  appTitleText: {
    flex: 0.4,
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  },
  titleText: {
    flex: 0.4,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  },
  buttonTextMars: {
    fontSize: 15,
    marginTop: -29,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonMars: {
    width: RFValue(250),
    height: RFValue(50),
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 30,
    zIndex: 0,
  },
  buttonEarth: {
    width: RFValue(250),
    height: RFValue(50),

    alignSelf: 'center',
    borderRadius: RFValue(10),
    backgroundColor: '#067310',
    zIndex: -2,
  },
  buttonImage: {
    opacity: 0.85,
    width: RFValue(250),
    height: RFValue(50),
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginTop: 0,
    marginBottom: 0,
    zIndex: -3,
  },
});
