import { View, Image, Text } from "react-native";
import { Cocktail } from "../api/data/mockdata";
import placeholderImage from "../assets/placeholder160x160.png";
import { useEffect, useState } from "react";

interface CatalogProps {
  cocktails: Cocktail[];
}

export default function Catalog(props: CatalogProps) {
  const [cocktailRows, setCocktailRows] = useState<Cocktail[][]>([]);
  
  useEffect(() => {
    // Transform data into rows of 2 by reducing to a 2d array
    setCocktailRows(
      props.cocktails.reduce(
        (rows, key, index) =>
          (index % 2 === 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows,
        []
      )
    );
  }, [props.cocktails]);

  return (
    <View className="px-6">
      {cocktailRows.map((row, index) => {
        return (
          <View key={index} className="flex-row items-center justify-between">
            {row.map((cocktail: Cocktail) => {
              return (
                <View
                  key={cocktail.id}
                  className="flex w-[45%] items-center justify-center bg-black/20 rounded mb-3"
                >
                  <Image source={placeholderImage} width={45}></Image>
                  <Text className="text-white text-lg">{cocktail.name}</Text>
                  <Text className="text-white">
                    <Text className="text-red-500">♥</Text> {cocktail.likes}
                  </Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
