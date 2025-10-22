"use client";
import PageHero from "@/components/PageHero";
import { Box, Container, Heading, SimpleGrid, Text, Image, Button, Stack, Link } from "@chakra-ui/react";
import { useEffect } from "react";

const ExtraServices = () => {
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
    const title = "Ekstra services & Tryghedspakker";
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
                <Box id="7">
                    <Heading color={"secondary"} mb={5}>
                        Professionel hjælp til nedpakning ved flytning
                    </Heading>
                    <Text mt={5}>
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
                        h={"700px"}
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
                <Box py={1} id="8">
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
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box id="9">
                    <Heading color={"secondary"} mb={5}>
                        Sikker og fleksibel møbelopbevaring hos DK Flytte
                    </Heading>
                    <Text my={5}>
                        Når du har brug for at opbevare dine møbler sikkert og fleksibelt, er DK Flytte det oplagte valg. Vi tilbyder moderne faciliteter til møbelopbevaring, hvor dine ejendele beskyttes mod fugt, støv og skader. Vores lagre er udstyret med overvågning og avancerede sikkerhedssystemer, så dine møbler altid står trygt – uanset om du har brug for kort- eller langtidsopbevaring.
                    </Text>
                    <Text mb={10}>
                        Vi sørger for, at dine møbler bliver pakket, organiseret og opbevaret optimalt, så du kan føle dig helt tryg. Vores opbevaringsløsninger er ideelle for både private og erhverv, og vi henter gerne dine møbler direkte hos dig.
                    </Text>
                    <Heading color={"secondary"} mb={5}>
                        Opbevaring af møbler i forbindelse med flytning
                    </Heading>
                    <Text my={5}>
                        Har du en periode, hvor din nye bolig ikke er klar til indflytning, eller har du brug for midlertidig opbevaring, mens du flytter? Hos DK Flytte tilbyder vi praktisk og fleksibel flytteopbevaring, så du slipper for bekymringer under flytningen.
                    </Text>
                    <Text mb={5}>
                        Vi tilbyder forskellige størrelser på lagerrum, så du kun betaler for den plads, du reelt har brug for. Vores faciliteter ligger på Sjælland – tæt på København og Nordsjælland, men vi hjælper kunder i hele landet.
                    </Text>
                    <Text mb={5}>
                        Hos DK Flytte behandler vi dine møbler med omhu, respekt og professionalisme, uanset om du skal opbevare et enkelt møbel eller et helt hjem.
                    </Text>
                    <Text mb={20}>
                        DK Flytte – sikker og fleksibel møbelopbevaring i trygge rammer.
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
                    />
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}

export default ExtraServices
