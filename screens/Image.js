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

export default class ImageScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.appTitleText}>Mars Images</Text>
          <View>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={{fontSize: 10, backgroundColor:'white'}}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.contentCard}>
            <Image
              style={styles.image}
              source={{
                uri: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
              }}
            />
            <View style={{ padding: 15, marginTop: 10 }}>
              <Text style={styles.contentText}>Rover: Curiosity</Text>
              <Text style={styles.contentText}>Date: 2015-05-30</Text>
              <Text style={styles.contentText}>
                Camera: Front Hazard Avoidance Camera
              </Text>
            </View>
          </View>

          <View style={styles.contentCard}>
            <Image
              style={styles.image}
              source={{
                uri: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG',
              }}
            />
            <View style={{ padding: 15, marginTop: 10 }}>
              <Text style={styles.contentText}>Rover: Curiosity</Text>
              <Text style={styles.contentText}>Date: 2015-05-30</Text>
              <Text style={styles.contentText}>
                Camera: Rear Hazard Avoidance Camera
              </Text>
            </View>
          </View>

          <View style={styles.contentCard}>
            <Image
              style={styles.image}
              source={{
                uri: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg',
              }}
            />
            <View style={{ padding: 15, marginTop: 10 }}>
              <Text style={styles.contentText}>
                Rover: Curiosity Date: 2015-05-30
              </Text>
              <Text style={styles.contentText}>Date: 2015-05-30</Text>
              <Text style={styles.contentText}>Camera: Mast Camera</Text>
            </View>
          </View>

          <View style={styles.contentCard}>
            <Image
              style={styles.image}
              source={{
                uri: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630930405190E01_DXXX.jpg',
              }}
            />
            <View style={{ padding: 15, marginTop: 10 }}>
              <Text style={styles.contentText}>Rover: Curiosity</Text>
              <Text style={styles.contentText}>Date: 2015-05-30</Text>
              <Text style={styles.contentText}>Camera: Mast Camera</Text>
            </View>
          </View>

          <View style={styles.contentCard}>
            <Image
              style={styles.image}
              source={{
                uri: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486270860EDR_F0481570NCAM00323M_.JPG',
              }}
            />
            <View style={{ padding: 15, marginTop: 10 }}>
              <Text style={styles.contentText}>Rover: Curiosity</Text>
              <Text style={styles.contentText}>Date: 2015-05-30</Text>
              <Text style={styles.contentText}>Camera: Navigation Camera</Text>
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
    textAlign: 'left',
  },
  backButton: {
    width: RFValue(30),
    height: RFValue(15),
    color: 'black',
    alignSelf: 'left',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
  },
});
