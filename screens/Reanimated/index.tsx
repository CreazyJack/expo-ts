import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { FlatList } from 'react-native';

import type { ListItemProps, ListItemType } from '../../components/ListItem';
import ListItem from '../../components/ListItem';

const list: ListItemType[] = [
  { label: 'ScaleBox', route: 'ScaleBox' },
  { label: 'Carousel', route: 'Carousel' },
];

export default () => {
  const { navigate } = useNavigation<Obj>();

  const onItemPress = useCallback((item: ListItemType) => {
    navigate(item.route);
  }, []);

  const renderItem = useCallback(
    (props: ListItemProps) => <ListItem {...props} onPress={onItemPress} />,
    [],
  );

  return <FlatList data={list} renderItem={renderItem} />;
};
