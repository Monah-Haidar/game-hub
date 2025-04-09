import {Game} from "../../hooks/useGames.ts";
import {Card, CardBody, Image, Heading, HStack} from "@chakra-ui/react";
import PlatformIconsList from "./../atoms/PlatformIconsList.tsx";
import CriticScore from "./../atoms/CriticScore.tsx";
import getCroppedImageUrl from "../../services/image-url.ts";
import Emoji from "../atoms/Emoji.tsx";


interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {

    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack spacing={2} justifyContent='space-between' marginBottom={3}>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top}/> </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;