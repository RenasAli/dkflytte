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
                        Vores kunder - Kundetilfredshed er kernen i vores arbejde hos DK Flytte. Vi prioriterer din unikke oplevelse og skræddersyr hver flytning efter dine behov. Fra start til slut er vores mål at gøre hele processen så personlig og problemfri som muligt.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Forpligtelse - Vi forpligter os til kvalitet og professionalisme i hver opgave. Vores hold er dedikeret til at levere pålidelige og effektive løsninger, uanset størrelsen af opgaven. Din tillid er vores motivationskilde.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vores kunder - Kundetilfredshed er kernen i vores arbejde hos DK Flytte. Vi prioriterer din unikke oplevelse og skræddersyr hver flytning efter dine behov. Fra start til slut er vores mål at gøre hele processen så personlig og problemfri som muligt.
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
                    At flytte kan være en stressende proces, men hos DK Flytte er vi her for at hjælpe dig hele vejen. Vi tilbyder omfattende flyttehjælp, hvor vores erfarne ansatte sørger for, at din flytning bliver nem og tryg. Vi håndterer alle typer flytninger – fra små lejligheder til store virksomheder – og vi kan hjælpe med alt fra nedpakning til transport og udpakning.
                </Text>
                <Text fontSize="lg" mt={8}>
                    Uanset om du flytter inden for samme by eller til den anden ende af Danmark, eller endda udlandet, kan du stole på, at dine ejendele er i gode hænder hos os. Vi hjælper mange kunder med flytninger til og fra Sjælland, herunder Nordsjælland og København, men vi tager imod enhver opgave, uanset hvor du skal flytte til eller fra.
                </Text>
            </CardBody>
            </Card>
        </Container>
        <Container maxW="container.xl" py={10} id="2">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Dør til dør flytning – den smarte og billige løsning
                    </Heading>
                    <Text my={10}>
                        Vil du gerne spare penge på flytningen og selv tage det tunge læs? Hos DK Flytte tilbyder vi en effektiv dør til dør flytning, hvor du står for at bære dine ting ind og ud – mens vi sørger for transporten sikkert fra adresse til adresse.
                    </Text>
                    <Text mb={10}>
                        Denne løsning er perfekt til dig, der ikke har flyttebil eller kørekort, men stadig ønsker en billig og fleksibel flytning. Vores erfarne flyttemænd hjælper med at pakke bilen optimalt, så dine ejendele står stabilt og sikkert under hele turen.
                    </Text>
                    <Text mb={10}>
                        DK Flytte er et professionelt flyttefirma på Sjælland, og vi hjælper kunder i hele Danmark – særligt i København og Nordsjælland, hvor mange unge vælger denne prisvenlige flytteløsning.
                    </Text>
                    <Text mb={10}>
                        Vil du hellere overlade det hele til os? Vi tilbyder også komplet flyttehjælp med nedpakning, udpakning og bæring af alle dine ting.
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
                            Flytning af tunge genstande – sikkert og professionelt
                        </Heading>
                        <Text my={5} color={"white"}>
                            Har du brug for hjælp til at flytte tunge genstande som klaverer, store møbler eller andet, der kræver ekstra kræfter? Hos DK Flytte står vi klar til at tage det tunge læs for dig – hurtigt, sikkert og effektiv.
                        </Text>
                        <Text mb={5} color={"white"}>
                            Når der er tunge genstande involveret, er det vigtigt at få hjælp fra et erfarent flyttefirma. Vi har både udstyret og ekspertisen til at håndtere selv de mest krævende løft uden risiko for skader på hverken dine ejendele eller dig selv.
                        </Text>
                        <Text mb={5} color={"white"}>
                            Vi udfører flytning af tunge genstande på Sjælland, herunder i København og Nordsjælland, men kører også i resten af Danmark. Uanset hvor du skal flytte til eller fra, sørger vi for, at dine ting kommer sikkert frem.
                        </Text>
                        <Text mb={5} color={"white"}>
                        Vores professionelle flyttemænd bruger det rette udstyr – som stropper, flyttetæpper og sækkevogne – og arbejder med korrekte løfteteknikker for at sikre en tryg flytning.
                        </Text>
                        <Text mb={5} color={"white"}>
                        Udover tunge løft hjælper vi også gerne med almindelige flyttekasser, møbler og kontorudstyr for både private og virksomheder. DK Flytte gør din flytning nemmere, hurtigere og mere sikker – skal vi hjælpe dig også?
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box id="4">
                    <Heading color={"secondary"} mb={5}>
                        Professionel hjælp til nedpakning ved flytning
                    </Heading>
                    <Text my={5}>
                        Vil du gøre flytningen nemmere og mere overskuelig? Hos DK Flytte tilbyder vi professionel hjælp til nedpakning, så du slipper for besværet og kan være sikker på, at dine ejendele bliver pakket forsvarligt og effektivt.
                    </Text>
                    <Text mb={5}>
                        Vi sørger for alt det praktiske – fra sortering og organisering til indpakning i flyttekasser, bobleplast og beskyttelsesmaterialer. Vores erfarne flyttefolk sørger for, at alt bliver pakket sikkert, så intet tager skade under transporten.
                    </Text>
                    <Text mb={5}>
                        DK Flytte har base på Sjælland og hjælper mange kunder i København og Nordsjælland, men vi tilbyder naturligvis flyttehjælp i hele Danmark – og også ved udlandsflytninger.
                    </Text>
                    <Text mb={5}>
                        Vi tilbyder nedpakning for både private og erhverv, og tilpasser altid vores arbejde efter dine behov. Uanset om det gælder møbler, elektronik eller kontorudstyr, håndterer vi alt med omhu og respekt.
                    </Text>
                    <Text mb={5}>
                        For at gøre udpakningen nemmere, mærker vi hver kasse tydeligt med rummets navn og indhold. Så kan du nemt finde rundt – eller lade os stå for udpakningen også.
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
                        Hjælp til udpakning – få en nem og effektiv flyttedag
                    </Heading>
                    <Text my={5} color={"white"}>
                        Vil du slippe for besværet med at pakke ud efter flytningen? Hos DK Flytte tilbyder vi professionel hjælp til udpakning, så du hurtigt og problemfrit kan komme på plads i dit nye hjem eller på dit kontor.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vi tilbyder en komplet flytteservice, hvor vi håndterer både transport, nedpakning og udpakning – så du ikke behøver løfte en finger. Vores erfarne flyttemænd sørger for, at dine ejendele bliver pakket ud effektivt og placeret, præcis som du ønsker det.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Hos DK Flytte hjælper vi både private og erhvervskunder i hele Danmark – særligt i København, Nordsjælland og på Sjælland. For virksomheder betyder det mindre spildtid, og for privatkunder betyder det, at de kan flytte ind i et nyt hjem, hvor alt allerede er på plads.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vi planlægger udpakningen sammen med dig, så vi ved, hvor tingene skal stå, og i hvilken rækkefølge de skal pakkes ud. Hvis du ønsker det, kan vi også hjælpe med nedpakningen, så processen bliver endnu mere effektiv.
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
            <Card my={10} boxShadow=" 4px 4px 14px rgba(0, 144, 200, 0.3)">
            <CardHeader>
                <Heading
                    color="secondary"
                    textAlign={"center"}
                    size="lg"
                    mt={5}
                >
                    Sikker og fleksibel møbelopbevaring hos DK Flytte
                </Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize="lg">
                    Når du har brug for at opbevare dine møbler sikkert og fleksibelt, er DK Flytte det oplagte valg. Vi tilbyder moderne faciliteter til møbelopbevaring, hvor dine ejendele beskyttes mod fugt, støv og skader. Vores lagre er udstyret med overvågning og avancerede sikkerhedssystemer, så dine møbler altid står trygt – uanset om du har brug for kort- eller langtidsopbevaring.
                </Text>
                <Text fontSize="lg" mt={8}>
                    Vi sørger for, at dine møbler bliver pakket, organiseret og opbevaret optimalt, så du kan føle dig helt tryg. Vores opbevaringsløsninger er ideelle for både private og erhverv, og vi henter gerne dine møbler direkte hos dig.
                </Text>
            </CardBody>
            </Card>
        </Container>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Pakningstips og rådgivning
                    </Heading>
                    <Text my={10}>
                        Vil du sikre, at dine ejendele når sikkert frem til din nye destination? DK Flytte er her for at give dig essentielle pakkningstips og rådgivning, der gør din privatflytning så glat som muligt.
                    </Text>
                    <Text mb={10}>
                        Vores eksperter deler værdifulde indsigter i, hvordan du bedst pakker og organiserer dine ejendele. Fra korrekt indpakning af skrøbelige genstande til smart etikettering af kasser, hjælper vores rådgivning med at minimere stress og maksimere effektiviteten under hele flytningsprocessen.
                    </Text>
                    <Text mb={10}>
                        Uanset om det er din første flytning eller du har erfaring, vil vores pakkningstips lette byrden og give dig selvtillid i hele processen. Gør din privatflytning til en velorganiseret og positiv oplevelse med DK Flyttes ekspertrådgivning.
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
