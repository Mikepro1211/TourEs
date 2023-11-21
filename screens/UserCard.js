import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import colors from '../components/colors';

colors

const UserCard = ({email}) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title={email}
        left={(props) => <Avatar.Icon {...props} icon="account" />}
      />
      
    </Card>
  );
};

const styles = StyleSheet.create({
 
  card: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: colors.blanquito2,
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

export default UserCard;