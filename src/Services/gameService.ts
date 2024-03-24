import {Platform} from "../Hooks/usePlatforms";
import APIClient from "./api-client";

export interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    description_raw: string;
}

export const gameClient = new APIClient<Game>("/games")