import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View>
        <Link href={`/home`}>
          Go to home
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
