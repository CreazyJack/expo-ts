import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, TextProps, View } from 'react-native';

const Item = (props: TextProps) => <Text style={styles.text} {...props} />;

export default () => {
  const { navigate } = useNavigation<Obj>();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Item onPress={() => navigate('Reanimated')}>ReAnimated</Item>
        <Item onPress={() => navigate('PanGesture')}>PanGesture</Item>
        <Item onPress={() => navigate('Carousel')}>Carousel</Item>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 12,
    fontSize: 18,
  },
});
