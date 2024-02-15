import { client } from "@api/client"

interface Item{
    id: number;
    name: string;
    info: string;
    cost: number;
}

export const getAllItems = async () => {
    return await client.get<Item[]>("Item/getAllItems")
}