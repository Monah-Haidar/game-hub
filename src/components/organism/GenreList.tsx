import useGenres, {Genre} from "../../hooks/useGenres.ts";
import {HStack, List, ListItem, Image, Skeleton, SkeletonText, SkeletonCircle, Button, Heading} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

    const {data, isLoading, error} = useGenres();


    if (error) return null;

    // if (isLoading) return <Spinner/>;

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <>
            <Heading as='h1' fontSize='2xl' marginBottom={3}>Genres</Heading>
            {isLoading && (
                <List>
                    {skeletons.map((skeleton) => (
                        <Skeleton key={skeleton} marginY='5px'>
                            <HStack>
                                <SkeletonCircle
                                    size='10'
                                />
                                <SkeletonText/>
                            </HStack>
                        </Skeleton>
                    ))}
                </List>
            )}
            <List>
                {data?.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(genre)} fontSize='lg'
                                variant='link'
                                whiteSpace={'normal'}
                                textAlign='left'

                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>

        </>


    );
};

export default GenreList;