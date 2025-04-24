import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import GameHeading from "./components/atoms/GameHeading.tsx";
import PlatformSelector from "./components/molecules/PlatformSelector.tsx";
import SortSelector from "./components/molecules/SortSelector.tsx";
import GameGrid from "./components/organism/GameGrid.tsx";
import GenreList from "./components/organism/GenreList.tsx";
import NavBar from "./components/organism/NavBar.tsx";

function App() {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "200px 1fr",
                }}
            >
                <GridItem area="nav">
                    <NavBar />
                </GridItem>

                <Show above="lg">
                    <GridItem area="aside" paddingX={5}>
                        <GenreList />
                    </GridItem>
                </Show>

                <GridItem area="main">
                    <Box paddingLeft={2}>
                        <GameHeading />

                        <HStack spacing={5} marginBottom={5}>
                            <PlatformSelector />
                            <SortSelector />
                        </HStack>
                    </Box>
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
