import React from "react";
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Link,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Time <Text color={'purple.400'}>Machine</Text>
                    </Heading>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Link to="https://app.carteira.me">
                        <Button
                            colorScheme={'purple'}
                            bg={'purple.400'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'purple.500',
                            }}>
                                use now
            </Button></Link>
                        <Link to="https://twitter.com/carteirame">
                        <Button variant={'link'} colorScheme={'blue'} size={'sm'} >
                                Learn more
            </Button></Link>
                            
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
