import { View, Text } from 'react-native';
import CallToAction from '../components/callToAction';

export default function Home() {
  return (
    <View className="flex-1 px-5 py-8 bg-slate-700">
      <CallToAction />
    </View>
  );
}
