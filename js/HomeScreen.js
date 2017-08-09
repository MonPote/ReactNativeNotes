
import React from 'react';
import { Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    
    const { navigate } = this.props.navigation;
    console.log(navigate);
    return (
      <Button
        title="Go to Note"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}