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


export default class MarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      marsImages: {}
    }
  }

componentDidMount() {
  this.getMarsImages();
}



getMarsImages = () => {
  axios
    .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    .then((response) => {
      this.setState({ marsImages: response.data });
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
}

/* 
can't find refrance for apis
need to start rendering apis
cant get apis for earth screen 
*/


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Mars Screen</Text>
        <View>
          <Text style={styles.subTitleText}>Daily Images</Text>
          <View>
            
          </View>
        </View>
        <View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5530',
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
  subTitleText: {
    flex: 0.4,
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    marginBottom: 800
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
});
