import {Platform} from "./Platform";

export interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    rating_top: number;
    description_raw: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: string;
    publishers: string;
}