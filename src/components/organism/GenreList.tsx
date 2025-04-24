import { Button, Heading, HStack, Image, List, ListItem, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres.ts";
import getCroppedImageUrl from "../../services/image-url.ts";
import useGameQueryStore from "../../stores/store.ts";



const GenreList = () => {

    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

    const {data, isLoading, error} = useGenres();

    if (error) return null;

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
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                                onClick={() => setSelectedGenreId(genre.id)} fontSize='lg'
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