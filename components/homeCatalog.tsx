import { useEffect, useState } from "react";
import { Cocktail, getCocktails } from "../api/data/mockdata";
import { View, Text, Image } from "react-native";
import placeholderImage from "../assets/placeholder160x160.png";

export default function homeCatalog() {
  const [data, setData] = useState<Cocktail[]>([]);
  const [cocktailRows, setCocktailRows] = useState<Cocktail[][]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setData(await getCocktails());
    };
    fetchData();

    // Transform data into rows of 2 by reducing to a 2d array
    setCocktailRows(data.reduce(
        (rows, key, index) =>
          (index % 2 === 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows,
        []
    ));
  }, []);

  return (
    <View className="flex">
      <View className="px-6 flex-row items-center justify-between mb-6">
        <Text className="text-4xl text-white leading-relaxed">
          Popular Recipes
        </Text>
        <Text className="text-xs text-white/80 leading-3">
          View All
        </Text>
      </View>
      <View className="px-6">
        {
          cocktailRows.map((row, index) => {
            return (
              <View key={index} className="flex-row items-center justify-between">
                {row.map((cocktail: Cocktail) => {
                  return (
                    <View
                      key={cocktail.id}
                      className="flex w-[45%] items-center justify-center bg-black/20 rounded mb-3"
                    >
                      <Image source={placeholderImage} ></Image>
                      <Text className="text-white text-lg">{cocktail.name}</Text>
                      <Text className="text-white"><Text className="text-red-500">♥</Text> {cocktail.likes}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })
        }
      </View>
    </View>
  );
}
