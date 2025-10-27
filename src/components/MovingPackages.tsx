"use client";

import { movingPackages } from "@/data/movingPackages";
import { Container, Heading, SimpleGrid, Box, Stack, StackDivider, HStack, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa6";

const MovingPackages = () => {
  return (
    <Container maxW="container.xl" py={10}>
        <Heading color="primary.500" textAlign="center">Vores flyttepakker og priser</Heading>
        <Text textAlign="center" my={2} fontSize="sm">Vi afregner pr. time og kan som minimum bookes i 2 timer.</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} my={10}>
            {movingPackages.map((p, i)=> (
            <Box key={i} borderWidth={1} boxShadow="md">
                <Box p={5} bg="secondary">
                <Heading fontSize="2xl" textAlign="center" color="white">{p.title}</Heading>
                </Box>
                <Box p={5}>
                <Heading textAlign="center" fontSize="5xl">{p.price}, -</Heading>
                <Text textAlign="center" my={2} fontSize="sm">pris pr. time inkl. moms.</Text>
                <Stack divider={<StackDivider />} spacing={4} mt={10}>
                    <HStack>
                        <FaCheck color='green'/>
                        <Text fontSize="md" fontWeight="semibold">
                            {p.resource}
                        </Text>
                    </HStack>
                    <HStack>
                        <FaCheck color='green'/>
                        <Text fontSize="md" fontWeight="semibold">
                            Film
                        </Text>
                    </HStack>
                    <HStack>
                        <FaCheck color='green'/>
                        <Text fontSize="md" fontWeight="semibold">
                            Flyttetæpper
                        </Text>
                    </HStack>
                    <HStack>
                        <FaCheck color='green'/>
                        <Text fontSize="md" fontWeight="semibold">
                            Bobleplast
                        </Text>
                    </HStack>
                </Stack>
                </Box>
            </Box>
            ))}
        </SimpleGrid>
    </Container>
  )
}

export default MovingPackages
