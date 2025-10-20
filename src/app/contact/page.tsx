"use client";

import { Box, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import MovingForm from "@/components/ContactForm";

const Kontakt = () => {
  return (
    <Box>
        <Flex h={"30vh"} bg={"primary.500"} borderBottomRadius="50%" alignItems={"center"} justifyContent={"center"}>
            <Heading color={"white"} fontSize={"6xl"}> Kontakt os</Heading>
        </Flex>
        <Container maxW={"container.xl"} zIndex={1}  rounded={"2xl"} py={10} px={5}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Kontakt DK Flytte – få et uforpligtende tilbud i dag
                    </Heading>
                    <Text my={10}>
                        Vi er tilgængelige 24/7, så du kan få fat i os, når det passer dig. Vores mål er altid at besvare din henvendelse så hurtigt som muligt, så du får den hjælp, du har brug for – uden ventetid.
                    </Text>
                    <Text mb={5}>
                        Med vores professionelle flyttemænd og moderne udstyr sørger vi for, at dine kontormøbler, IT-udstyr og dokumenter transporteres sikkert til din nye placering. Vi har blandt andet hjulpet med flytning for erhverv rundt på Sjælland, eksempelvis i København og Nordsjælland, men vi hjælper gerne med netop din firmaflytning, uanset hvor i Danmark du skal flytte til og fra – også hvis det er i udlandet.
                    </Text>
                    <Text mb={5}>
                        📞 Ring til os eller 📧 send en besked allerede i dag – vi vender hurtigt tilbage med et skræddersyet tilbud til dine behov.
                    </Text>
                </Box>
                <Box bgColor="blackAlpha.50" p={6} rounded="3xl" boxShadow={"2xl"}  borderColor="grey.50" borderWidth="1px">
                    <Heading color={"secondary"} mb={10}>
                        Få et uforpligtende tilbud i dag
                    </Heading>
                    <MovingForm />
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}

export default Kontakt;
