"use client";
import { Box, Container, Heading, Text, Stack, Button, SimpleGrid, Flex, ListItem, UnorderedList, Image, StackDivider, HStack, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { FaCheck } from "react-icons/fa6";
import FAQ from '../components/FAQ';
import { movingPackages } from "@/data/movingPackages";


export default function Home(){
  return (
    <>
      {/* HERO */}
      <Box position="relative" minH={{ base: '60vh', md: '85vh' }} overflow="hidden">
        <video
          autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          src={"/dkflytte_hero.mp4"}
          onError={(e)=> { e.currentTarget.style.display='none' }}
        />
        {/* fallback image */}
        {/* <Image src={heroFallback} alt="flytning" display={{ base: 'block', md: 'none' }} position="absolute" inset={0} w="100%" h="100%" objectFit="cover" /> */}

        <Box position="absolute" inset={0} bgGradient="linear(to-b, rgba(0,0,0,0.55), rgba(0,0,0,0.75))" />
          <Flex maxW="container.2xl" minH={{ base: '60vh', md: '85vh' }}  position="relative" zIndex="5"  align="center" justify="center">
            <Box>
              <Heading fontSize={{ base: '2xl', md: '4xl', lg: "6xl" }} lineHeight="1.05" color="white" textAlign="center" my={10}>Pålidelig og Punktlig Flytteservice</Heading>
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
                  <Button size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500"}}>Få et tilbud</Button>
                  <Button size="lg" py={9} px={20} variant="outline" textColor="white" rounded="full" _hover={{bgColor: "whiteAlpha.500"}}>Ring: 42 66 92 42</Button>
                </Stack>
              </Stack>
            </Box>
          </Flex>
      </Box>

      <Container maxW="container.xl" py={10}>
        <Heading color="primary.500" textAlign="center" mb={10}>Dit fleksible flyttefirma på hele Sjælland</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Stack direction={{ base: 'column', md: 'row' }} py={5} borderWidth={1} boxShadow="md" align="center" justify={"center"}>
            <Image
              w={"100PX"}
              src={"/business_moving.gif"}
              alt='dk-flytte'
              ml={{ base: 0, md: 5 }}
            />
            <Box p={5}>
              <Heading fontSize="md" color="secondary">Erhvervsflytning</Heading>
              <Text fontSize="sm">
                Skal din virksomhed flytte, eller er det tid til at rykke kontoret til nye lokaler? Med vores erfarne flyttemænd og sikre opbevaringsløsninger får du en nem og tryg erhvervsflytning. Vi tilbyder attraktive flyttetilbud til konkurrencedygtige priser.
              </Text>
            </Box>
          </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} py={5} borderWidth={1} boxShadow="md" align="center" justify={"center"}>
            <Image
              w={"100PX"}
              src={"/private_moving.gif"}
              alt='dk-flytte'
              ml={{ base: 0, md: 5 }}
            />
            <Box p={5}>
              <Heading fontSize="md" color="secondary">Privatflytning</Heading>
              <Text fontSize="sm">
                Planlægger du en flytning? Vores erfarne flyttemænd og sikre opbevaringsløsninger gør det nemt og trygt at flytte dit hjem til nye omgivelser. Oplev en problemfri privatflytning med attraktive flyttetilbud til konkurrencedygtige priser.
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Container maxW="container.xl" py={10}>
        <Heading color="primary.500" textAlign="center">Vores flyttepakker og priser</Heading>
        <Text textAlign="center" my={2} fontSize="sm">Vi kan som minimum bookes til 2 timers flytteservice.</Text>
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
                      Bølgepap
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

      <Box bgColor="secondary"> 
        <Container maxW="container.xl" py={10}>
          <Heading color="white" textAlign="center" mb={10}>Flytteservice med kompetente flyttefolk</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Image
                src={"/dkflytte_1.jpeg"}
                alt='dk-flytte'
              />
              <Box >
                <Text fontSize="md" color="white">
                  Hos DK Flytte får du en pålidelig partner, der står klar til at tage sig af alt vedrørende din flyttedag. Vi er et velrenommeret flyttefirma med erfarne flyttemænd, der har ekspertisen til at håndtere enhver form for flytteopgave. Uanset om du flytter som privatperson eller virksomhed, tilbyder vi en skræddersyet flytteservice, der passer til dine behov.
                </Text>
                <Text fontSize="md" mt={8} color="white">
                  Vores dygtige flyttefolk er uddannet til at håndtere og transportere dine ejendele sikkert og effektivt. Med vores omfattende flytteservice, der inkluderer både nedpakning, transport og udpakning, slipper du for stress og besvær. I vores flyttefirma betjener vi mange kunder på Sjælland, herunder i København og Nordsjælland, men vi sender gerne en flyttemand ud for at hjælpe dig med at flytte, uanset hvor du har brug for det – i Danmark såvel som udlandet.
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                  <Button size="lg" py={9} px={20} rounded="full" fontWeight="semibold" bgColor="white" color="primary.500" _hover={{bg: "whiteAlpha.500", color: "white"}}>Få et tilbud</Button>
                  <Button size="lg" py={9} px={20} variant="outline" rounded="full" color="white" _hover={{ bg: "whiteAlpha.500"}}>Ring: 42 66 92 42</Button>
                </Stack>
              </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Container maxW="container.lg" py={10}>
         <Card my={10} boxShadow=" 4px 0px 0px 0px rgba(0, 144, 200, 0.3)">
            <CardHeader>
              <Heading
                  color="secondary"
                  size="lg"
                  mt={5}
              >
                  Dit foretrukne flyttefirma til erhvervs- og privatflytning
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="lg">
                Gennem årene har vi hjulpet mange både privatpersoner og virksomheder med at flytte. Dette har givet os en dyb forståelse af de unikke krav og behov, der kan opstå under en flytning. Skal du flytte fra en lille lejlighed eller et stort hus, eller står du foran en erhvervsflytning af din butik eller dit kontor?
              </Text>
              <Text fontSize="lg" mt={8}>
                Vores erfarne flyttemænd er klar til at håndtere alt med den største omhu og respekt for dine ejendele. Vi leverer altid en flytteservice, der sikrer en problemfri proces fra start til slut. I vores flyttefirma er vi behjælpelige med mange forskellige flytteopgaver, og du kan blandt andet kontakte os, hvis du skal bruge flyttefolk til:
              </Text>

            </CardBody>
         </Card>
      </Container>
      <FAQ/>
    </>
  )
}
