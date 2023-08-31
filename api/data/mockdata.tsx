export type Cocktail = {
    id: string;
    name: string;
    description: string;
    difficulty: string;
    tags: string[];
    likes: number;
};

export const cocktails: Cocktail[] = [
    {
        id: "1",
        name: "Amaretto Sour",
        description: "A classic cocktail with a modern twist",
        difficulty: "Beginner",
        tags: ["Sweet", "Tart", "Citrus", "Nutty"],
        likes: 941,
    }
];

export const getCocktailById = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return cocktails.find((cocktail) => cocktail.id === id);
}