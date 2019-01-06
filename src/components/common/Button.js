import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// props.children => gives what's imbetween the component tags in the parent tag
const Button = ({ onPress, children }) => {
  const {buttonStyle, textStyle} = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    // flex: 1 will fill the container
    flex: 1,
    // alignself tied to flexbox - streches to fill limits of container
    alignSelf: 'stretch',
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColorColor: '#007aff',
    marginRight: 5,
    marginLeft: 5,
  }
}

export { Button };
