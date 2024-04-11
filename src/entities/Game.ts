import {Platform} from "./Platform";
import {Publisher} from "./Publisher";
import {Genre} from "./Genre";

export default interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    rating_top: number;
    description_raw: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: Genre[];
    publishers: Publisher[];
}