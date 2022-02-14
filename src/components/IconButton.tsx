import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  iconName: 'x';
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
};

const IconButton: React.FC<Props> = ({ iconName, onPress, color = '#000' }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Feather name={iconName} color={color} size={32} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
});

export default IconButton;
