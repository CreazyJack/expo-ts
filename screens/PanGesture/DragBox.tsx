import { Dimensions, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const SIZE = width * 0.16;
const WIDTH = width * 0.8;

export default () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      context.value = {
        x: translateX.value,
        y: translateY.value,
      };
    })
    .onUpdate((e) => {
      translateX.value = e.translationX + context.value.x;
      translateY.value = e.translationY + context.value.y;
    })
    .onEnd(() => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < WIDTH / 2 + SIZE / 2) {
        translateX.value = withSpring(0, { damping: 20 });
        translateY.value = withSpring(0, { damping: 20 });
      }
    });

  const rViewStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.square, rViewStyle]} />
        </GestureDetector>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: WIDTH,
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WIDTH,
    borderColor: '#eb4d4b',
    borderWidth: 4,
  },
  square: {
    width: SIZE,
    height: SIZE,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,255,0.5)',
  },
});
