import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ImperialConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [conversionType, setConversionType] = useState('MilesToKilometers');

  const convertUnits = (value) => {
    const input = parseFloat(value);

    if (isNaN(input)) {
      setConvertedValue('Please enter a valid number');
      return;
    }

    let result;
    switch (conversionType) {
      case 'MilesToKilometers':
        result = input * 1.60934;
        setConvertedValue(`${input} miles is approximately ${result.toFixed(2)} kilometers`);
        break;
      case 'KilometersToMiles':
        result = input / 1.60934;
        setConvertedValue(`${input} kilometers is approximately ${result.toFixed(2)} miles`);
        break;
      case 'FeetToMeters':
        result = input * 0.3048;
        setConvertedValue(`${input} feet is approximately ${result.toFixed(2)} meters`);
        break;
      case 'MetersToFeet':
        result = input / 0.3048;
        setConvertedValue(`${input} meters is approximately ${result.toFixed(2)} feet`);
        break;
      case 'PoundsToKilograms':
        result = input * 0.453592;
        setConvertedValue(`${input} pounds is approximately ${result.toFixed(2)} kilograms`);
        break;
      case 'KilogramsToPounds':
        result = input / 0.453592;
        setConvertedValue(`${input} kilograms is approximately ${result.toFixed(2)} pounds`);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter a value:</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        keyboardType="numeric"
        editable
      />

      <View style={styles.buttonContainer}>
        <Button title="Miles to Kilometers" onPress={() => setConversionType('MilesToKilometers')} />
        <Button title="Kilometers to Miles" onPress={() => setConversionType('KilometersToMiles')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Feet to Meters" onPress={() => setConversionType('FeetToMeters')} />
        <Button title="Meters to Feet" onPress={() => setConversionType('MetersToFeet')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Pounds to Kilograms" onPress={() => setConversionType('PoundsToKilograms')} />
        <Button title="Kilograms to Pounds" onPress={() => setConversionType('KilogramsToPounds')} />
      </View>

      <Button title="Convert" onPress={() => convertUnits(inputValue)} />

      {convertedValue ? <Text style={styles.result}>{convertedValue}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  result: {
    marginTop: 10,
  },
});

export default ImperialConverter;
