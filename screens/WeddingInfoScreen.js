import React from 'react';
import { MapView } from 'expo';
import {
  Platform,
  Linking,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import Colors from '../constants/Colors';

const WEDDING_LOCATION = {
  latitude: 38.900723,
  longitude: -76.363388,
};

const WEDDING_VENUE = 'Silver Swan Bayside';

class VenuInfoScreen extends React.Component {
  openInMapsApp = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${WEDDING_LOCATION.latitude},${WEDDING_LOCATION.longitude}`;

    const url = Platform.select({
      ios: `${scheme}${WEDDING_VENUE}@${latLng}`,
      android: `${scheme}${latLng}(${WEDDING_VENUE})`,
    });

    Linking.openURL(url);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>About the Venue</Text>
        <View style={{ width: '100%', height: 300 }}>
          <MapView
            onMarkerPress={this.openInMapsApp}
            style={{ flex: 1 }}
            initialRegion={{
              ...WEDDING_LOCATION,
              latitudeDelta: 0.2,
              longitudeDelta: 0.15,
            }}
          >
            <MapView.Marker
              coordinate={WEDDING_LOCATION}
              title={WEDDING_VENUE}
            />
          </MapView>
        </View>
      </ScrollView>
    );
  }
}

const Tabs = createMaterialTopTabNavigator(
  {
    VenuInfo: {
      screen: VenuInfoScreen,
      navigationOptions: {
        title: 'Venu Info',
      },
    },
    Schedule: {
      screen: VenuInfoScreen,
      navigationOptions: {
        title: 'Schedule',
      },
    },
    Contact: {
      screen: VenuInfoScreen,
      navigationOptions: {
        title: 'Contact Us',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondaryTabSelected,
      inactiveTintColor: 'rgba(255, 255, 255, 0.95)',
      style: {
        backgroundColor: Colors.tintColor,
      },
      indicatorStyle: {
        backgroundColor: Colors.tabLabelSelected,
      },
    },
  }
);

const TheTabs = createAppContainer(Tabs);

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.tabLabelSelected,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    title: 'Wedding Info',
  };

  render() {
    return <TheTabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
