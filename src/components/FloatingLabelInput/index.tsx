import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

interface TextProps {
  position: string;
  left: number;
  top: number;
  fontSize: number;
  color: string;
  label: any;
}

export class FloatingLabelInput extends React.Component<TextProps> {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  render() {
    const {label, ...props} = this.props;
    const {isFocused} = this.state;
    const styles = StyleSheet.create({
      labelStyle: {
        position: 'absolute',
        left: 0,
        top: !isFocused ? 18 : 0,
        fontSize: !isFocused ? 20 : 16,
        color: !isFocused ? '#aaa' : '#000',
      },
    });

    return (
      <View style={{paddingTop: 18}}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
          {...props}
          style={{
            height: 26,
            fontSize: 20,
            color: '#000',
            borderBottomWidth: 1,
            borderBottomColor: '#555',
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}
