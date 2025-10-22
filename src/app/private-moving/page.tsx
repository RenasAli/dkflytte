"use client";
import PageHero from "@/components/PageHero";
import { Box, SimpleGrid, Image, Heading, Text, Button, Stack, Container, Link } from "@chakra-ui/react";

const PrivateMoving = () => {
    const imgSrc = "/dkflytte_1.jpeg";
    const title = "Privatflytning";
    const desc = "Skal du flytte til et nyt hjem? Vi forstår, at en privat flytning kan være både spændende og udfordrende. Hos DK Flytte er vi dedikerede til at gøre hele processen så problemfri som muligt.";
  return (
    <Box>
        <PageHero 
            imageSrc={imgSrc}
            title={title}
            desc={desc}
        />
        <Container maxW="container.xl" py={10} mt={{ base: 0, md: "100px" }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Privatflytning
                    </Heading>
                    <Text my={5}>
                        Skal du flytte til et nyt hjem? Vi forstår, at en privat flytning kan være både spændende og udfordrende. Hos DK Flytte er vi dedikerede til at gøre hele processen så problemfri som muligt.
                    </Text>
                    <Text mb={5}>
                        Vores erfarne team af flytteeksperter står klar til at hjælpe dig med alt fra pakning og transport til udpakning på din nye adresse. Vi lægger vægt på omhu og professionalisme for at sikre, at dine ejendele behandles med den største omhu under hele flytningsprocessen.
                    </Text>
                    <Text mb={5}>
                        Vi tilbyder skræddersyede løsninger, der passer til dine individuelle behov. Uanset om du flytter lokalt eller til en fjern destination, sørger vi for, at din flytning bliver en glat og vellykket oplevelse. Vores mål er at lette byrden af at flytte, så du kan fokusere på at nyde din nye tilværelse.
                    </Text>
                </Box>
                <Box >
                    <Image
                        src="/dkflytte_1.jpeg"
                        alt="dkflytte"
                        rounded="xl"
                    />
                </Box>
            </SimpleGrid>
        </Container>
        <Box bgColor="secondary" m={5} p={5} rounded={"3xl"}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Image
                        src="/dkflytte_1.jpeg"
                        alt="dkflytte"
                        rounded={"xl"}
                    />
                </Box>
                <Box py={1}>
                    <Heading color={"white"} mb={5}>
                        De værdier, der driver alt hvad vi gør
                    </Heading>
                    <Text my={5} color={"white"}>
                        Vores kunder - Kundetilfredshed er kernen i vores arbejde hos Hammerflyt. Vi prioriterer din unikke oplevelse og skræddersyr hver flytning efter dine behov. Fra start til slut er vores mål at gøre hele processen så personlig og problemfri som muligt.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Forpligtelse - Vi forpligter os til kvalitet og professionalisme i hver opgave. Vores hold er dedikeret til at levere pålidelige og effektive løsninger, uanset størrelsen af opgaven. Din tillid er vores motivationskilde.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vores kunder - Kundetilfredshed er kernen i vores arbejde hos Hammerflyt. Vi prioriterer din unikke oplevelse og skræddersyr hver flytning efter dine behov. Fra start til slut er vores mål at gøre hele processen så personlig og problemfri som muligt.
                    </Text>
                </Box>

            </SimpleGrid>
        </Box>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Pakningstips og rådgivning
                    </Heading>
                    <Text my={10}>
                        Vil du sikre, at dine ejendele når sikkert frem til din nye destination? Hammerflyt er her for at give dig essentielle pakkningstips og rådgivning, der gør din privatflytning så glat som muligt.
                    </Text>
                    <Text mb={10}>
                        Vores eksperter deler værdifulde indsigter i, hvordan du bedst pakker og organiserer dine ejendele. Fra korrekt indpakning af skrøbelige genstande til smart etikettering af kasser, hjælper vores rådgivning med at minimere stress og maksimere effektiviteten under hele flytningsprocessen.
                    </Text>
                    <Text mb={10}>
                        Uanset om det er din første flytning eller du har erfaring, vil vores pakkningstips lette byrden og give dig selvtillid i hele processen. Gør din privatflytning til en velorganiseret og positiv oplevelse med Hammerflyts ekspertrådgivning.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                        <Button as={Link} href='/kontakt' size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500", color: "secondary", borderColor: "secondary"}}>Få et tilbud</Button>
                        <Button as={Link} href={`tel:+4552698285`} size="lg" py={9} px={20} variant="outline" textColor="secondary" borderColor={"secondary"} rounded="full" _hover={{bgColor: "blackAlpha.50"}}>Ring: +45 52 69 82 85</Button>
                    </Stack>
                </Box>
                <Box>
                    <Image
                        src="/moving_box_1.jpg"
                        alt="dkflytte"
                        h={"520px"}
                    />
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}

export default PrivateMoving
