import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client';



const GET_JOBS = gql`
  query GetJobs {
    jobs {
      id
      title
      description
    }
  }
`;

//Hello

function Jobs() {

  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading)
    return (
      <Text>'Api is Loading...'</Text>
    );
  if (error)
    return (
      <Text>`Error! ${error.message}`</Text>
    );


  return (<View>

    <FlatList
      data={data.jobs}
      renderItem={({ item }) => {
        return <View>
         <Text style={styles.textStyle}>{item.title}</Text>
        </View>
      }} />
  </View>
  );

}


const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 40
      }
});

export default Jobs
