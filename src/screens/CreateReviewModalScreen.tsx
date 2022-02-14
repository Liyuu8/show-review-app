import { useEffect } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { RootStackParamList } from '../../types/navigation';
import IconButton from '../components/IconButton';

const CreateReviewModalScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'CreateReview'>>();
  const { shop } = route.params;

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'CreateReview'>>();
  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton iconName="x" onPress={() => navigation.goBack()} />
      ),
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>CreateReviewScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreateReviewModalScreen;
