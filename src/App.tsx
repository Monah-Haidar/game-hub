import {Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import NavBar from "./components/organism/NavBar.tsx";
import GameGrid from "./components/organism/GameGrid.tsx";
import GenreList from "./components/organism/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/molecules/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";
import SortSelector from "./components/molecules/SortSelector.tsx";


export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}


function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '250px 1fr'
                }}
            >
                <GridItem area="nav">
                    <NavBar/>
                </GridItem>

                <Show above="lg">
                    <GridItem area="aside" paddingX={5}>
                        <GenreList selectedGenre={gameQuery.genre}
                                   onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                    </GridItem>
                </Show>

                <GridItem area="main">
                    <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                        <PlatformSelector selectedPlatform={gameQuery.platform}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                        <SortSelector sortOrder={gameQuery.sortOrder}
                                      onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                    </HStack>

                    <GameGrid gameQuery={gameQuery}/>
                </GridItem>
            </Grid>
        </>
    )
}

export default App
