import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
