import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

export default () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const viewStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{ scale: scale.value }, { rotate: `${progress.value * 2 * Math.PI}rad` }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1, { damping: 10 }), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, viewStyle]}>
        <Animated.Text style={[styles.text]}>Animated</Animated.Text>
      </Animated.View>
    </View>
  );
};
const SIZE = 100;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: SIZE,
    width: SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});
