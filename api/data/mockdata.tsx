export type Cocktail = {
    id: string;
    name: string;
    description: string;
    difficulty: string;
    tags: string[];
    likes: number;
    glass: string;
};

export const cocktails: Cocktail[] = [
    {
        id: "1",
        name: "Amaretto Sour",
        description: "A classic cocktail with a modern twist",
        difficulty: "Beginner",
        tags: ["Sweet", "Tart", "Citrus", "Nutty"],
        likes: 941,
        glass: "Tumbler"
    },
    {
        id: "2",
        name: "Tom Collins",
        description: "A classic cocktail with a modern twist",
        difficulty: "Beginner",
        tags: ["Sweet", "Tart", "Citrus", "Nutty"],
        likes: 226,
        glass: "Highball"
    },
    {
        id: "3",
        name: "Manhattan",
        description: "A classic cocktail with a modern twist",
        difficulty: "Beginner",
        tags: ["Sweet", "Tart", "Citrus", "Nutty"],
        likes: 941,
        glass: "Martini"
    },
];

export const getCocktailById = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return cocktails.find((cocktail) => cocktail.id === id);
}

export const getCocktails = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return cocktails;
}