import {
    Box,
    Button,
    ButtonGroup, 
    Card, 
    CardBody, 
    CardFooter, 
    Heading, 
    Image, 
    Stack, 
    Text,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { CardProps, RatingProps } from '../../@types/cardProps';
import { data } from '../../data/card-data';

function Rating({ rating, numReviews }: RatingProps) {
    return (
        <Box display={'flex'} alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: '1' }}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        );
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
                    }
                    return <BsStar key={i} style={{ marginLeft: '1' }} />;
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    );
}

export function CardContainer({ img, title, description, price }: CardProps) {
    return (
        <Card maxW='xs' boxShadow={'2xl'}>
            <CardBody>
                <Image
                    src={img}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='4' spacing='3'>
                    <Heading size='md' textAlign={'center'}>{title}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <Rating rating={data.rating} numReviews={data.numReviews} />
                    <Text color='blue.600' fontSize='lg'>
                        R$ {price}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup>
                    <Button variant='solid' colorScheme='blue'>
                        Reserva Hotel
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}