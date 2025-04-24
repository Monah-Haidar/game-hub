import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames.ts";
import GameCard from "../molecules/GameCard.tsx";
import GameCardSkeleton from "../molecules/GameCardSkeleton.tsx";
import GameCardContainer from "../molecules/GameCardContainer.tsx";
import { GameQuery } from "../../App.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useGames(gameQuery);

    const skeletons = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    if (error) return <Text>{error.message}</Text>;

    const fetchedGamesCount =
        data?.pages.reduce((total, page) => total + page.results.length, 0) ||
        0;

    return (
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}
        >
            <SimpleGrid
                columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                }}
                spacing={6}
                padding="10px"
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}

                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />{" "}
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    );
};

export default GameGrid;
