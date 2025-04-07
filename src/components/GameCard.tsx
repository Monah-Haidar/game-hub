import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Image, Heading, Text} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList.tsx";


interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {

    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <Text>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
                </Text>
            </CardBody>
        </Card>
    );
};

export default GameCard;