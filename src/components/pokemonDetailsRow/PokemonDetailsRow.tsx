import React from 'react';
import styles from './styles';
import {ScrollView, Text, View} from 'react-native';

interface Props {
  title: string;
  data: string[];
}

const PokemonDetailsRow: React.FC<Props> = ({title, data}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <ScrollView
        horizontal
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.contentContainer}>
        {data.map(item => (
          <Text style={styles.contentItem} key={item}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export {PokemonDetailsRow};
