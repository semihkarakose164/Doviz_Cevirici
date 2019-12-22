import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import axios from 'axios';

export default class converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: '',
      usd: '',
      cad: '',
      jpy: '',
      eur: '',
      input: '',
      rates: [],
    };
    this.getRates = this.getRates.bind(this);
  }
  getRates() {
    axios
      .get(
        'http://data.fixer.io/api/latest?access_key=b130d7eaa8f84b1ab6df047698eab427&symbols=EUR,TRY,USD,CAD,JPY',
      )
      .then(response => {
        console.log('response');
        const rates = response.data.rates;
        this.setState({
          rates: rates,
        });
      });
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.getRates();
  }

  render() {
    const {converterWrapper, inputStyle, textStyle} = styles;
    const {input, tl, usd, cad, jpy, eur, rates} = this.state;
    return (
      <View style={converterWrapper}>
        <TextInput
          placeholder="Enter EUR value"
          style={inputStyle}
          keyboardType="numeric"
          onChangeText={text => {
            const i = parseFloat(text)||0;
            this.setState({
              input: text,
              tl: (i * rates['TRY']).toFixed(3),
              cad:(i * rates['CAD']).toFixed(3),
              usd:(i * rates['USD']).toFixed(3),
              jpy:(i * rates['JPY']).toFixed(3),
              eur:(i * rates['EUR']).toFixed(3),
            });
          }}
          value={{input}}></TextInput>
        <Text style={textStyle}>TRY : {tl}</Text>
        <Text style={textStyle}>CAD : {cad}</Text>
        <Text style={textStyle}>USD : {usd}</Text>
        <Text style={textStyle}>JPY : {jpy}</Text>
        <Text style={textStyle}>EUR : {eur}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  converterWrapper: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    width: 200,
    height: 60,
    paddingBottom: 25,
  },
  textStyle: {
    width: 170,
    height: 50,
    fontWeight: 'bold',
  },
});
