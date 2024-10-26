import { TouchableOpacity, View, Image } from 'react-native';
import tw from 'twrnc';

interface AvatarProps {
  source: string;
  size?: number;
  onPress?: () => void;
}

const Avatar = ({ source, size = 10, onPress }: AvatarProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tw`border border-gray-300 rounded-full w-[${size}] h-[${size}]`}
      >
        <Image
          source={{ uri: source }}
          style={tw`w-full h-full rounded-full`}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Avatar;
