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
    glass: "Loading...",
  });
  useEffect(() => {
    const fetchData = async () => {
      setData(await getCocktailById("1"));
    };
    fetchData();
  }, []);
  return (
    // <View className="flex-1 items-start justify-start mt-5 ml-0">
    <View className="flex pl-[24px] pt-[64px] flex-col justify-start items-start">
      <Text className="mb-1.5 text-center text-white opacity-80 text-xs font-normal leading-3">Today's featured recipe</Text>
      {/* <Text className="text-center text-white text-opacity-80 text-xs font-normal leading-3">Today's featured recipe</Text> */}
      <Text className="mb-1.5 text-white text-5xl font-normal leading-[48px]">{data.name}</Text>
      {/* <Text className="text-4xl font-papyrus">{data.name}</Text> */}
      <View className="mb-1.5 justify-end items-center flex-row">
        {/* <View className="flex-row">{ */}
        {
        data.tags.slice(0, TAGS_TO_SHOW).map((tag) => {
          return (
            <View key={tag} className="mb-1.5 mr-1.5 px-1.5 bg-black bg-opacity-20 rounded justify-center items-center flex">
              <Text className="m-1 text-white text-opacity-90 text-[12px] font-semibold">{tag}</Text>
              {/* <Text className="flex mr-3 p-3 text-white font-bold bg-slate-950 rounded-lg">{tag}</Text> */}
            </View>
            
          );
        })
      }</View>
      <View className="mb-24 justify-start items-start flex-row">
      {/* <View className="flex-row"> */}
        <Text className="mb-2.5 mr-2.5 text-center text-white text-sm font-light">{data.difficulty}</Text>
        {/* <Text className="mr-3">{data.difficulty}</Text> */}
        <Text className="text-center text-white text-sm font-light">♥ {data.likes}</Text>
        {/* <Text>{data.likes}</Text> */}
      </View>
    </View>
  );
}
