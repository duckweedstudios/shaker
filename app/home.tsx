import { View, Text } from 'react-native';
import CallToAction from '../components/callToAction';
import HomeCatalog from '../components/homeCatalog';

export default function Home() {
  return (
    <View className="flex-1 bg-slate-700">
      <CallToAction />
      <HomeCatalog />
    </View>
  );
}
