import {Platform} from "../Hooks/usePlatforms";
import APIClient from "./api-client";

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

export const gameClient = new APIClient<Game>("/games")