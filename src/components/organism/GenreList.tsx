import useGenres from "../../hooks/useGenres.ts";
import {HStack, List, ListItem, Image, Text, Skeleton, SkeletonText, SkeletonCircle} from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url.ts";


const GenreList = () => {

    const {data, isLoading, error} = useGenres();


    if (error) return null;

    // if (isLoading) return <Spinner/>;

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <>
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
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Text fontSize='lg'> {genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </List>

        </>


    );
};

export default GenreList;