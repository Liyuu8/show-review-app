import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  score: number;
  starSize?: number;
  textSize?: number;
};

const Stars: React.FC<Props> = ({ score, starSize = 16, textSize = 14 }) => (
  <View style={styles.container}>
    {[1, 2, 3, 4, 5].map((num) => (
      <FontAwesome
        name={
          score >= num ? 'star' : score >= num - 0.5 ? 'star-half-o' : 'star-o'
        }
        key={num}
        style={[styles.star, { fontSize: starSize }]}
      />
    ))}
    <Text style={[styles.scoreText, { fontSize: textSize }]}>{score}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#800',
    marginRight: 4,
  },
  scoreText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Stars;
