import platforms from "../components/data/platforms.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data: platforms, error: null});

export default usePlatforms;