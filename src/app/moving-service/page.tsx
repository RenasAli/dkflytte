"use client";

import PageHero from "@/components/PageHero";
import { Box, Container, Heading, SimpleGrid, Text, Image, Button, Stack, Link } from "@chakra-ui/react";
import { useEffect } from "react";

const MovingService = () => {
    useEffect(() => {
        const scrollToId = sessionStorage.getItem('scrollToId');
        if (scrollToId) {
            const el = document.getElementById(scrollToId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            sessionStorage.removeItem('scrollToId');
        }
    }, [])
    const imgSrc = "/dkflytte_1.jpeg";
    const title = "Flytteservice";
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
                <Box id="1">
                    <Heading color={"secondary"} mb={5}>
                        Flyttehjælp
                    </Heading>
                    <Text my={5}>
                        At flytte kan være en stressende proces, men hos Hammerflyt er vi her for at hjælpe dig hele vejen. Vi tilbyder omfattende flyttehjælp, hvor vores erfarne ansatte sørger for, at din flytning bliver nem og tryg. Vi håndterer alle typer flytninger – fra små lejligheder til store virksomheder – og vi kan hjælpe med alt fra nedpakning til transport og udpakning.
                    </Text>
                    <Text mb={5}>
                        Uanset om du flytter inden for samme by eller til den anden ende af Danmark, eller endda udlandet, kan du stole på, at dine ejendele er i gode hænder hos os. Vi hjælper mange kunder med flytninger til og fra Sjælland, herunder Nordsjælland og København, men vi tager imod enhver opgave, uanset hvor du skal flytte til eller fra.
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
                <Box py={1} id="2">
                    <Heading color={"white"} mb={5}>
                        Dør til dør flytning – den smarte og billige løsning
                    </Heading>
                    <Text my={5} color={"white"}>
                        Vil du gerne spare penge på flytningen og selv tage det tunge læs? Hos DK Flytte tilbyder vi en effektiv dør til dør flytning, hvor du står for at bære dine ting ind og ud – mens vi sørger for transporten sikkert fra adresse til adresse.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Denne løsning er perfekt til dig, der ikke har flyttebil eller kørekort, men stadig ønsker en billig og fleksibel flytning. Vores erfarne flyttemænd hjælper med at pakke bilen optimalt, så dine ejendele står stabilt og sikkert under hele turen.
                    </Text>
                    <Text mb={5} color={"white"}>
                        DK Flytte er et professionelt flyttefirma på Sjælland, og vi hjælper kunder i hele Danmark – særligt i København og Nordsjælland, hvor mange unge vælger denne prisvenlige flytteløsning.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vil du hellere overlade det hele til os? Vi tilbyder også komplet flyttehjælp med nedpakning, udpakning og bæring af alle dine ting.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box id="3">
                    <Heading color={"secondary"} mb={5}>
                        Flytning af tunge genstande – sikkert og professionelt
                    </Heading>
                    <Text my={5}>
                        Har du brug for hjælp til at flytte tunge genstande som klaverer, store møbler eller andet, der kræver ekstra kræfter? Hos DK Flytte står vi klar til at tage det tunge læs for dig – hurtigt, sikkert og effektiv
                    </Text>
                    <Text mb={5}>
                        Når der er tunge genstande involveret, er det vigtigt at få hjælp fra et erfarent flyttefirma. Vi har både udstyret og ekspertisen til at håndtere selv de mest krævende løft uden risiko for skader på hverken dine ejendele eller dig selv.
                    </Text>
                    <Text mb={5}>
                        Vi udfører flytning af tunge genstande på Sjælland, herunder i København og Nordsjælland, men kører også i resten af Danmark. Uanset hvor du skal flytte til eller fra, sørger vi for, at dine ting kommer sikkert frem.
                    </Text>
                    <Text mb={5}>
                        Vores professionelle flyttemænd bruger det rette udstyr – som stropper, flyttetæpper og sækkevogne – og arbejder med korrekte løfteteknikker for at sikre en tryg flytning.
                    </Text>
                    <Text mb={5}>
                        Udover tunge løft hjælper vi også gerne med almindelige flyttekasser, møbler og kontorudstyr for både private og virksomheder.
                        DK Flytte gør din flytning nemmere, hurtigere og mere sikker – skal vi hjælpe dig også?
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                        <Button as={Link} href='/kontakt' size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500", color: "secondary", borderColor: "secondary"}}>Få et tilbud</Button>
                        <Button as={Link} href={`tel:+4552698285`} size="lg" py={9} px={20} variant="outline" textColor="secondary" borderColor={"secondary"} rounded="full" _hover={{bgColor: "blackAlpha.50"}}>Ring: +45 52 69 82 85</Button>
                    </Stack>
                </Box>
                <Box>
                    <Image
                        src="/moving_box_2.jpg"
                        alt="dkflytte"
                        h={"700px"}
                    />
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}

export default MovingService
