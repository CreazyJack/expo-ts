import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

export default () => {
  const [list, setList] = useState<Obj[]>([]);

  useEffect(() => {
    fetch('https://mobile.ximalaya.com/elderly-aged-api/api/home/v2')
      .then((res) => res.json())
      .then((data) => setList(data.data.scene_banners));
  }, []);

  return (
    <Animated.ScrollView
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      snapToInterval={WIDTH}
      decelerationRate={0.2}
      // scrollEnabled={false}
    >
      {list?.map((item) => {
        return (
          <Animated.Image
            key={item.id}
            source={{ uri: item.img }}
            style={styles.img}
            resizeMode='cover'
            resizeMethod='resize'
          />
        );
      })}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: WIDTH,
    height: WIDTH * 0.6,
  },
});
