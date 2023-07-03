import { ScrollView } from 'react-native-gesture-handler';

import Carousel from './Carousel';
import ScrollAnim from './ScrollAnim';

export default () => {
  return (
    <ScrollView>
      <Carousel />
      <ScrollAnim />
    </ScrollView>
  );
};
