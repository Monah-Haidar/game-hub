import {SimpleGrid, Text} from '@chakra-ui/react';
import useGames from "../../hooks/useGames.ts";
import GameCard from "../molecules/GameCard.tsx";
import GameCardSkeleton from "../molecules/GameCardSkeleton.tsx";
import GameCardContainer from "../molecules/GameCardContainer.tsx";


const GameGrid = () => {

    const {data, error, isLoading} = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <>
            {error && (<Text>{error}</Text>)}

            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 5
            }} spacing={3} padding='10px'>
                {isLoading && skeletons.map(skeleton => <GameCardContainer><GameCardSkeleton
                    key={skeleton}/></GameCardContainer>)}

                {data.map((game) => (
                    <GameCardContainer><GameCard key={game.id} game={game}/> </GameCardContainer>
                ))}
            </SimpleGrid>
        </>

    );
};

export default GameGrid;