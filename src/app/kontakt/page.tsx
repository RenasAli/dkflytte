"use client";

import { Box, Card, CardBody, Container, Flex, Heading, IconButton, Link, SimpleGrid, Text } from "@chakra-ui/react";
import MovingForm from "@/components/ContactForm";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Kontakt = () => {
  return (
    <Box>
        <Flex h={"20vh"} bg={"primary.500"} borderBottomRadius="50%" alignItems={"center"} justifyContent={"center"}>
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
                    <SimpleGrid columns={2} spacing={6} p={{sm: 0, md: 5}}>
                        <Card align='center' boxShadow=" 0 4px 14px  rgba(0, 144, 200, 0.3)" py={1}>
                            <CardBody>
                                <Flex alignItems={"center"} justifyContent={"center"}>
                                <IconButton
                                    as={Link}
                                    href={`mailto:kundeservice@dkflytte.dk`}
                                    variant='outline'
                                    color='secondary'
                                    borderWidth={0}
                                    aria-label='mail Sage'
                                    fontSize="5xl"
                                    w={20}
                                    h={20}
                                    icon={<MdEmail />}
                                    textAlign={"center"}
                                /></Flex>
                                <Heading size='lg' color="secondary" mb={3} textAlign={"center"}> Skriv til os </Heading>
                                <Text fontSize={{base: "sm", md: "md"}} color="secondary">
                                    <Link href={`mailto:kundeservice@dkflytte.dk`} _hover={{textDecoration: "underline"}} textColor="secondary.500">
                                        kundeservice@dkflytte.dk
                                    </Link>
                                </Text>
                            </CardBody>
                        </Card>
                        <Card align='center' boxShadow=" 0 4px 14px  rgba(0, 144, 200, 0.3)" py={1}>
                            <CardBody>
                                <Flex alignItems={"center"} justifyContent={"center"}>
                                <IconButton
                                    as={Link}
                                    href={`tel:+4552698285`}
                                    variant='outline'
                                    color='secondary'
                                    borderWidth={0}
                                    aria-label='Call Sage'
                                    fontSize="5xl"
                                    w={20}
                                    h={20}
                                    icon={<FaPhone />}
                                    textAlign={"center"}
                                /></Flex>
                                <Heading size='lg' color="secondary" mb={3}> Ring til os </Heading>
                                <Text fontSize={{base: "sm", md: "md"}} color="secondary">
                                    <Link href={`tel:+4552698285`} _hover={{textDecoration: "underline"}} textColor="secondary.500">
                                        +45 52 69 82 85
                                    </Link>
                                </Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
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
