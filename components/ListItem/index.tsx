import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type ListItemType = {
  label: string;
  route: string;
};

export type ListItemProps = {
  item: ListItemType;
  index: number;
  onPress?: (item: ListItemType, index: number) => void;
};

export default (props: ListItemProps) => {
  const { item, index } = props;
  return (
    <TouchableOpacity onPress={() => props.onPress?.(item, index)}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 12,
    fontSize: 18,
  },
});
