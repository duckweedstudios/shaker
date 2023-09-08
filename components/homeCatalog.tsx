import { useEffect, useState } from "react";
import { Cocktail, getCocktails } from "../api/data/mockdata";
import { View, Text, Image } from "react-native";
import Catalog from "./catalog";

export default function homeCatalog() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      setCocktails(await getCocktails());
    };
    fetchData();
  }, []);

  return (
    <View className="flex">
      <View className="px-6 flex-row items-center justify-between mb-6">
        <Text className="text-4xl text-white leading-relaxed">
          Popular Recipes
        </Text>
        <Text className="text-xs text-white/80 leading-3">View All</Text>
      </View>
      <Catalog cocktails={cocktails} />
    </View>
  );
}
