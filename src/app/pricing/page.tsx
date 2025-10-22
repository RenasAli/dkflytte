"use client";

import MovingPackages from "@/components/MovingPackages";
import { Box, Button, Container, Flex, Heading, Image, Link, ListItem, SimpleGrid, Stack, StackDivider, Text, UnorderedList } from "@chakra-ui/react";

const Pricing = () => {
  return (
    <Box>
        {/* HERO */}
        <Box position="relative" minH={{ base: '60vh', md: '85vh' }} overflow="hidden">
            <Image src={"/dkflytte_1.jpeg"} alt="flytning" position="absolute" inset={0} w="100%" h="100%" objectFit="cover" />
            <Box position="absolute" inset={0} bgGradient="linear(to-b, rgba(0,0,0,0.55), rgba(0,0,0,0.75))" />
            <Flex maxW="container.2xl" minH={{ base: '60vh', md: '85vh' }}  position="relative" zIndex="5"  align="center" justify="center">
            <Box>
                <Heading fontSize={{ base: '2xl', md: '4xl', lg: "6xl" }} lineHeight="1.05" color="white" textAlign="center" my={10}>Priser</Heading>
                <Stack spacing={6} color="white" p={5} m={5} bg="blackAlpha.200">
                <Text fontSize="lg" textAlign="center">Leder du efter et professionelt flyttefirma, der leverer pålidelig og punktlig flytteservice hver eneste gang?</Text>
                <Text fontSize="lg">Hos os er tid, tryghed og kvalitet nøgleordene i alt, vi gør.<br/>Vi forstår, hvor vigtigt det er, at din flytning forløber effektivt, sikkert og uden stress – uanset om det drejer sig om privatflytning, erhvervsflytning eller akut flytning.</Text>
                <Text fontSize="lg">Vores Fordele</Text>
                <UnorderedList spacing={3} pl={5} styleType={`'- '`}>
                    <ListItem>
                        Punktlighed – 99 % af flytninger leveres til aftalt tid.
                    </ListItem>
                    <ListItem>
                        Erfarent team – Vi håndterer dine ejendele sikkert og professionelt.
                    </ListItem>
                    <ListItem>
                        Akut flytning 24/7 – Vi er klar, når du har brug for hurtig hjælp.
                    </ListItem>
                    <ListItem>
                        Flyttegaranti – Tryg og forsvarlig transport af alle dine ting.
                    </ListItem>
                </UnorderedList>
                <Text fontSize="lg">Vælg os for en stressfri og pålidelig flytning.</Text>
                <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                    <Button as={Link} href='/kontakt' size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500"}}>Få et tilbud</Button>
                    <Button as={Link} href={`tel:+4552698285`} size="lg" py={9} px={20} variant="outline" textColor="white" rounded="full" _hover={{bgColor: "whiteAlpha.500"}}>Ring: +45 52 69 82 85</Button>
                </Stack>
                </Stack>
            </Box>
            </Flex>
        </Box>
        <MovingPackages />
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} my={5}>
                        Vores Gebyr ekstra service priser
                    </Heading>
                    <Stack divider={<StackDivider />} spacing={4} mt={10}>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize="md">
                                Tungløft gebyr over 50 kg
                            </Text>
                            <Text fontSize="md" fontWeight="bold">
                                349 DKK
                            </Text>
                        </Flex>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize="md">
                                Tungløft gebyr over 80 kg
                            </Text>
                            <Text fontSize="md" fontWeight="bold">
                               349 DKK
                            </Text>
                        </Flex>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize="md">
                                Tungløft gebyr over 100 kg
                            </Text>
                            <Text fontSize="md" fontWeight="bold">
                               749 DKK
                            </Text>
                        </Flex>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize="md">
                                Slutrengøring – pr. påbegyndt time
                            </Text>
                            <Text fontSize="md" fontWeight="bold">
                               549 DKK
                            </Text>
                        </Flex>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize="md">
                                Handyman – pr. påbegyndt time
                            </Text>
                            <Text fontSize="md" fontWeight="bold">
                               349 DKK
                            </Text>
                        </Flex>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize="md">
                                Flyttekasser – pr. stk. inkl. levering
                            </Text>
                            <Text fontSize="md" fontWeight="bold">
                               25 DKK
                            </Text>
                        </Flex>
                        <Flex justifyContent={"space-between"}>
                            <Text fontSize="md">
                                Broafgift
                            </Text>
                        </Flex>
                        <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                            <Button as={Link} href='/kontakt' size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500", color: "secondary", borderColor: "secondary"}}>Få et tilbud</Button>
                            <Button as={Link} href={`tel:+4552698285`} size="lg" py={9} px={20} variant="outline" textColor="secondary" borderColor={"secondary"} rounded="full" _hover={{bgColor: "blackAlpha.50"}}>Ring: +45 52 69 82 85</Button>
                        </Stack>
                    </Stack>
                </Box>
                <Box >
                    <Image
                        src="/moving_box_1.jpg"
                        alt="dkflytte"
                        h={"620px"}
                    />
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}

export default Pricing
