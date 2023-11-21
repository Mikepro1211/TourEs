import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ConfirmationCard = ({ date, guests, place , totalAmount }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>Confirmación de Reserva</Title>
        <View style={styles.row}>
          <Paragraph style={styles.label}>Lugar:</Paragraph>
          <Paragraph style={styles.value}>{place}</Paragraph>
        </View>
        <View style={styles.row}>
          <Paragraph style={styles.label}>Fecha:</Paragraph>
          <Paragraph style={styles.value}>{date.toString()}</Paragraph>
        </View>
        <View style={styles.row}>
          <Paragraph style={styles.label}>Número de personas:</Paragraph>
          <Paragraph style={styles.value}>{guests}</Paragraph>
        </View>
        <View style={styles.row}>
          <Paragraph style={styles.label}>Total a pagar:</Paragraph>
          <Paragraph style={styles.value}>${totalAmount}.00</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 10,
  },
});

export default ConfirmationCard;