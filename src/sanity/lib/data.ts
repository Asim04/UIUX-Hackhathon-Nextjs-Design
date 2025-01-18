import { client } from "./client";

export interface TMenuItem {
    _id: string;
    name: string;
    tags: string[];
    category: string;
    imageUrl: string;
    price: number
  }



export const getAllPost = async () => {
    try {
        const queryAllPosts = `*[_type == "food"]{name, _id, tags, price, category, 
 "imageUrl" : image.asset->url }`
        const data = await client.fetch(queryAllPosts)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}
