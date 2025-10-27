"use client";
import PageHero from "@/components/PageHero";
import { Box, SimpleGrid, Image, Heading, Text, Button, Stack, Container, Link, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { useEffect } from "react";

const PrivateMoving = () => {
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
    const title = "Privatflytning";
    const desc = "Skal du flytte i nyt hjem? Vi ved, at en privatflytning både kan være spændende og krævende, og hos DK Flytte gør vi processen enkel, sikker og så problemfri som muligt fra start til slut.";
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
                        Skal du flytte i nyt hjem? En privatflytning kan føles stor, men med DK Flytte får du et professionelt flyttefirma, der gør processen enkel, sikker og uden unødigt stress.
                    </Text>
                    <Text mb={5}>
                        Vores erfarne flyttemænd hjælper med hele forløbet – fra skånsom pakning og forsvarlig transport til effektiv udpakning på den nye adresse. Vi arbejder omhyggeligt og professionelt, så dine ejendele behandles trygt fra start til slut.
                    </Text>
                    <Text mb={5}>
                        Vi skræddersyr løsningen til dine behov, uanset om du flytter lokalt eller på tværs af landet, så din privatflytning bliver glidende og vellykket – og du kan fokusere på at falde til i dit nye hjem.
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
                        Vores værdier i DK Flytte – kvalitet, tryghed og kundetilfredshed
                    </Heading>
                    <Text my={5} color={"white"}>
                        Kundetilfredshed – Som flyttefirma sætter vi din oplevelse først. Vi skræddersyr hver flytning efter dine behov, så din flytteservice bliver personlig, effektiv og så problemfri som muligt.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Kvalitet og professionalisme – Vi leverer gennemført arbejde fra første plan til sidste kasse. Vores erfarne flyttemænd arbejder omhyggeligt og punktligt, uanset opgavens størrelse.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Tryghed og klar kommunikation – Vi passer på dine ejendele, holder dig løbende orienteret og giver gennemsigtighed i pris og proces, så du kan føle dig helt tryg under flytningen.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        <Container maxW="container.lg" py={10} id="1">
            <Card my={10} boxShadow=" 4px 0px 0px 0px rgba(0, 144, 200, 0.3)">
            <CardHeader>
                <Heading
                    color="secondary"
                    textAlign={"center"}
                    size="lg"
                    mt={5}
                >
                    Flyttehjælp
                </Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize="lg">
                    En flytning kan føles krævende, men hos DK Flytte står vi klar til at hjælpe fra første plan til sidste kasse. Vi tilbyder fuld flytteservice med erfarne flyttemænd, så din flytning bliver enkel og tryg. Vi løser alle typer opgaver – fra mindre lejligheder til større virksomheder – og hjælper med alt fra nedpakning og transport til udpakning.
                </Text>
                <Text fontSize="lg" mt={8}>
                    Uanset om du flytter lokalt, på tværs af Danmark eller internationalt, er dine ejendele i sikre hænder. Vi håndterer mange flytninger til og fra Sjælland – særligt København og Nordsjælland – men vi kører gerne i hele landet og til udlandet efter behov.
                </Text>
            </CardBody>
            </Card>
        </Container>
        <Container maxW="container.xl" py={10} id="2">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Dør-til-dør flytning – smart og prisvenlig transport
                    </Heading>
                    <Text my={10}>
                        Vil du holde prisen nede og selv klare bæringen? Med DK Flyttes dør-til-dør flytning sørger vi for sikker transport fra adresse til adresse, mens du selv bærer tingene ind og ud.
                    </Text>
                    <Text mb={10}>
                        Løsningen er ideel, hvis du mangler flyttebil eller kørekort, men ønsker en billig og fleksibel flytning. Vores erfarne flyttemænd pakker bilen optimalt, så dine ejendele står stabilt og beskyttet under hele turen.
                    </Text>
                    <Text mb={10}>
                        DK Flytte er et professionelt flyttefirma på Sjælland og hjælper kunder i hele Danmark – særligt i København og Nordsjælland, hvor dør-til-dør er en populær og økonomisk løsning.
                    </Text>
                    <Text mb={10}>
                        Vil du slippe for alt besværet? Vi tilbyder også fuld flytteservice med nedpakning, bæring, transport og udpakning.
                    </Text>
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
        <Box bgColor="secondary" id="3">
            <Container maxW="container.xl" >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Box>
                        <Image
                            src={"/moving_box_1.jpg"}
                            alt='dk-flytte'
                            h={"600px"}
                        />
                    </Box>
                    <Box pt={5}>
                        <Heading color={"white"} mb={5}>
                            Sikker flytning af tunge genstande – klaver, store møbler m.m.
                        </Heading>
                        <Text my={5} color={"white"}>
                            Har du brug for hjælp til at flytte tunge genstande som klaver, skabe eller andre voluminøse møbler? DK Flytte tager det tunge læs for dig – hurtigt, sikkert og effektivt.
                        </Text>
                        <Text mb={5} color={"white"}>
                            Med et erfarent flyttefirma minimerer du risikoen for skader. Vi har både specialudstyr og ekspertise til krævende løft, så dine ejendele og omgivelser beskyttes hele vejen.
                        </Text>
                        <Text mb={5} color={"white"}>
                            Vi flytter tunge genstande på hele Sjælland – især i København og Nordsjælland – og kører også i resten af Danmark. Uanset rute sørger vi for, at dine ting ankommer sikkert.
                        </Text>
                        <Text mb={5} color={"white"}>
                            Vores flyttemænd bruger korrekt udstyr som stropper, flyttetæpper og sækkevogne samt sikre løfteteknikker for en tryg og kontrolleret håndtering.
                        </Text>
                        <Text mb={5} color={"white"}>
                            Ud over tunge løft hjælper vi også med flyttekasser, almindelige møbler og kontorudstyr for både private og virksomheder. DK Flytte gør flytningen nemmere, hurtigere og mere sikker.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box id="4">
                    <Heading color={"secondary"} mb={5}>
                    Professionel nedpakning til flytning – sikker og effektiv
                    </Heading>
                    <Text my={5}>
                        Vil du gøre flytningen nemmere og mere overskuelig? DK Flytte tilbyder professionel nedpakning, så du slipper for besværet og kan være tryg ved, at dine ejendele pakkes korrekt og effektivt.
                    </Text>
                    <Text mb={5}>
                        Vi håndterer alt det praktiske – fra sortering og organisering til indpakning i flyttekasser, bobleplast og beskyttelsesmaterialer. Vores erfarne flyttefolk pakker sikkert, så dine ting er beskyttet under hele transporten.
                    </Text>
                    <Text mb={5}>
                        Med base på Sjælland hjælper vi mange kunder i København og Nordsjælland, men vi tilbyder naturligvis nedpakning og flyttehjælp i hele Danmark – også ved udlandsflytninger.
                    </Text>
                    <Text mb={5}>
                        Vi hjælper både private og virksomheder og tilpasser altid løsningen til dine behov. Uanset om det gælder møbler, elektronik eller kontorudstyr, behandles alt med omhu og respekt.
                    </Text>
                    <Text mb={5}>
                        For at gøre udpakningen let, mærker vi alle kasser tydeligt med rum og indhold – og vi kan også stå for udpakningen, hvis du ønsker en komplet løsning.
                    </Text>
                    <Text mb={5}>
                        DK Flytte – vi gør din flytning nem, tryg og professionel fra start til slut.
                    </Text>
                </Box>
                <Box >
                    <Image
                        src="/moving_box_2.jpg"
                        alt="dkflytte"
                        h={"640px"}
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
                <Box py={1} id="6">
                    <Heading color={"white"} mb={5}>
                        Hjælp til udpakning – hurtigt på plads uden stress
                    </Heading>
                    <Text my={5} color={"white"}>
                        Vil du slippe for besværet efter flytningen? DK Flytte tilbyder professionel udpakning, så du hurtigt og problemfrit kommer på plads i dit nye hjem eller på kontoret.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vi leverer komplet flytteservice – transport, nedpakning og udpakning – så du ikke behøver løfte en finger. Vores erfarne flyttemænd pakker effektivt ud og placerer tingene, præcis som du ønsker.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vi hjælper både private og virksomheder i hele Danmark, særligt i København, Nordsjælland og på Sjælland. For erhverv betyder det mindre nedetid – for private et indflytningsklart hjem.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Udpakningen planlægges sammen med dig, så rækkefølge og placering er tydelig. Ønsker du en fuld løsning, hjælper vi også gerne med nedpakningen.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Med DK Flytte får du en tryg, hurtig og fleksibel udpakningsservice – så du kan fokusere på at falde til i dine nye omgivelser.
                    </Text>
                    <Text mb={5} color={"white"}>
                        DK Flytte – vi gør flyttedagen nem, effektiv og bekymringsfri.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        <Container maxW="container.lg" py={10} id="5">
            <Card my={10} boxShadow="4px 4px 14px rgba(0, 144, 200, 0.3)">
                <CardHeader>
                    <Heading
                    color="secondary"
                    textAlign={"center"}
                    size="lg"
                    mt={5}
                    >
                    Møbelopbevaring – sikker og fleksibel løsning hos DK Flytte
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Text fontSize="lg">
                    Skal dine møbler opbevares trygt og fleksibelt? DK Flytte tilbyder moderne møbelopbevaring, hvor dine ejendele er beskyttet mod fugt, støv og skader. Vores faciliteter har overvågning og sikre adgangssystemer, så dine møbler står trygt – uanset om du har brug for kort- eller langtidsopbevaring.
                    </Text>
                    <Text fontSize="lg" mt={8}>
                    Vi sørger for professionel indpakning, systematisk organisering og optimal placering, så du kan være helt tryg. Løsningen passer til både private og erhverv, og vi henter gerne dine møbler direkte hos dig for nem og bekvem opbevaring.
                    </Text>
                </CardBody>
            </Card>
        </Container>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Pakningstips og rådgivning til privatflytning
                    </Heading>
                    <Text my={10}>
                        Vil du sikre, at dine ejendele kommer sikkert frem? DK Flytte deler praktiske pakningstips og rådgivning, der gør din privatflytning mere overskuelig, effektiv og tryg.
                    </Text>
                    <Text mb={10}>
                        Vores eksperter viser, hvordan du pakker og organiserer bedst muligt – fra korrekt indpakning af skrøbelige genstande til smart etikettering og rumopdeling af kasser – så du minimerer stress og sparer tid gennem hele flytteprocessen.
                    </Text>
                    <Text mb={10}>
                        Uanset om det er din første flytning eller du har prøvet det før, hjælper vores pakningstips dig med at bevare overblikket og skabe en velorganiseret, positiv oplevelse. Få mere ud af din privatflytning med rådgivning fra DK Flytte.
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
