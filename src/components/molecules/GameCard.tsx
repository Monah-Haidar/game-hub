import {Game} from "../../hooks/useGames.ts";
import {Card, CardBody, Image, Heading, HStack} from "@chakra-ui/react";
import PlatformIconsList from "./../atoms/PlatformIconsList.tsx";
import CriticScore from "./../atoms/CriticScore.tsx";
import getCroppedImageUrl from "../../services/image-url.ts";


interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {

    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack spacing={2} justifyContent='space-between'>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;