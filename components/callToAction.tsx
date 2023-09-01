import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Cocktail, getCocktailById } from "../api/data/mockdata";

const TAGS_TO_SHOW = 4;

export default function CallToAction() {
  const [data, setData] = useState<Cocktail>({
    id: "-1",
    name: "Loading...",
    description: "Loading...",
    difficulty: "Loading...",
    tags: ["Loading..."],
    likes: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      setData(await getCocktailById("1"));
    };
    fetchData();
  }, []);
  return (
    // <View className="flex-1 items-start justify-start mt-5 ml-0">
    <View className="flex-col justify-start items-start gap-1.5 inline-flex">
      <Text className="text-center text-white text-opacity-80 text-xs font-normal leading-3">Today's featured recipe</Text>
      {/* <Text className="text-center text-white text-opacity-80 text-xs font-normal leading-3">Today's featured recipe</Text> */}
      <Text className="text-white text-5xl font-normal leading-[48px]">{data.name}</Text>
      {/* <Text className="text-4xl font-papyrus">{data.name}</Text> */}
      <View className="justify-end items-center gap-1.5 flex-row">
        {/* <View className="flex-row">{ */}
        {
        data.tags.slice(0, TAGS_TO_SHOW).map((tag) => {
          return (
            <View key={tag} className="px-1.5 bg-black bg-opacity-20 rounded justify-center items-center gap-2.5 flex">
              <View className="text-center text-white text-opacity-90 text-[10px] font-semibold leading-none">
                <Text className="text-white text-opacity-90 text-[10px] font-semibold leading-none">{tag}</Text>
              </View>
              {/* <Text className="flex mr-3 p-3 text-white font-bold bg-slate-950 rounded-lg">{tag}</Text> */}
            </View>
            
          );
        })
      }</View>
      <View className="w-44 h-3 justify-start items-center gap-2.5 inline-flex">
      {/* <View className="flex-row"> */}
        <Text className="text-center text-white text-xs font-light leading-3">{data.difficulty}</Text>
        {/* <Text className="mr-3">{data.difficulty}</Text> */}
        <View className="w-[34px] h-3 justify-start items-center gap-1 inline-flex">
          
        </View>
        {/* <Text>{data.likes}</Text> */}
      </View>
    </View>
  );
}
