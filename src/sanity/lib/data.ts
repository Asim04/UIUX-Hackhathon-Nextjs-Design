import { client } from "./client";

export interface TMenuItem {
    _id: string;
    name: string;
    tags: string[];
    category: string;
    imageUrl: string;
    price: number
  };

export interface TChefItem {
    _id: string;
    name: string;
    tags: string[];
    category: string;
    imageUrl: string;
    price: number
  };



export const getAllPost = async () => {
    try {
        const queryAllPosts = `*[_type == "food"]{name, _id, tags, price, category, 
 "imageUrl" : image.asset->url }`
        const data = await client.fetch(queryAllPosts);

        const queryAllPostsChef = `*[_type == "chef"]{name, _id, tags, price, category, 
 "imageUrl" : image.asset->url }`
        const dataChef = await client.fetch(queryAllPostsChef);
        return { data, dataChef }
    } catch (error) {
        console.error(error)
        return []
    }
}
