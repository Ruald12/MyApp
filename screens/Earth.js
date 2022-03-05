import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
const MarsImg = require('../json/Mars.json');
import { RFValue } from 'react-native-responsive-fontsize';
export default class EarthScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.appTitleText}>Earth Images</Text>
          <TouchableOpacity
              style={styles.backButton}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={{fontSize: 10, backgroundColor:'white'}}>Back</Text>
            </TouchableOpacity>
        </View>

        <View>

        <View style={styles.contentCard}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://api.nasa.gov/planetary/earth/imagery?lon=-74.01&lat=40.69&date=2020-06-16&dim=0.15&api_key=DEMO_KEY',
              }}
            />
            <View style={{ padding: 15, marginTop: 10 }}>
              <Text
                style={styles.contentText}>
                Place: Upper New York Bay
              </Text>
              <Text style={styles.contentText}>
                Date: 2020-06-16
              </Text>
              <Text style={styles.contentText}>
                Lon & Lat: -74.01 & 40.69 
              </Text>
            </View>
          </View>

        </View>   
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0873',
  },
  appTitleText: {
    flex: 0.4,
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
  },
  titleText: {
    flex: 0.4,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  },
  buttonTextMars: {
    fontSize: 12,

    color: 'white',
    textAlign: 'center',
  },
  buttonMars: {
    width: RFValue(250),
    height: RFValue(50),
    alignSelf: 'center',
    borderRadius: RFValue(30),
    backgroundColor: '#D64809',
    marginTop: 0,
    marginBottom: 30,
    zIndex: -2,
  },
  buttonEarth: {
    width: RFValue(250),
    height: RFValue(50),

    alignSelf: 'center',
    borderRadius: RFValue(30),
    backgroundColor: '#067310',
    zIndex: -2,
  },
  buttonImage: {
    width: RFValue(250),
    height: RFValue(50),

    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderRadius: RFValue(30),
    marginTop: 0,
    marginBottom: 0,
    zIndex: -3,
  },
  image: {
    width: RFValue(175),
    height: RFValue(175),
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  contentCard: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    elevation: 10,
    backgroundColor: 'white',
  },
  contentText: {
    color: '#A9A9A9',
    fontSize: 13,
    textAlign: 'left'
  },
});

