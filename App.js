import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import Jobs from './components/Jobs';



// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache()
});



export default function App() {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
      <StatusBar style="auto" />
        <Jobs />
      </View>
    </ApolloProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});

AppRegistry.registerComponent('MyApplication', () => App);
