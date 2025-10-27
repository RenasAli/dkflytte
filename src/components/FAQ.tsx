"use client";
import { Box, Container, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, SimpleGrid } from '@chakra-ui/react'

const faqs = [
  {
    q: "Hvordan beskytter I skrøbelige ting under flytningen?",
    a: "Vi pakker skrøbelige genstande i kvalitetsmaterialer som bobleplast og flyttetæpper, mærker kasserne ‘fragile’ og fastspænder dem korrekt i bilen, så alt ankommer sikkert."
  },
  {
    q: "Er der ting, I ikke transporterer?",
    a: "Vi flytter ikke farligt gods eller ulovlige genstande, fx brandfarlige væsker, gasflasker og bestemte kemikalier. Er du i tvivl, så kontakt os inden booking."
  },
  {
    q: "Hvordan håndterer I tunge eller særlige møbler?",
    a: "Vores flytteteam bruger egnet løfteudstyr og bæreseler, beskytter gulve og vægge, og vi kan om nødvendigt demontere og samle møbler for en sikker transport."
  },
  {
    q: "Hvad gør I ved forsinkelser eller uforudsete hændelser?",
    a: "Vi informerer dig proaktivt, justerer planen og sætter alternative løsninger i gang, så flytningen gennemføres så tæt på den aftalte tidsramme som muligt."
  },
  {
    q: "Hvordan er mine ejendele forsikret under flytningen?",
    a: "Vi er ansvarsforsikret under flytningen og kan rådgive om ekstra dækning, hvis du ønsker udvidet beskyttelse. Kontakt os for detaljer om policer og vilkår."
  },
  {
    q: "Hvor lang tid før skal jeg booke?",
    a: "Book gerne i god tid—gerne 1–2 uger før i travle perioder. Bemærk, at vi afregner pr. time med minimumsbooking på 2 timer."
  },
];


export default function FAQ(){
  return (
    <Container maxW="container.lg" py={10}>
      <Heading mb={10} textAlign="center" color="secondary">Ofte stillede spørgsmål</Heading>
      <Accordion allowMultiple borderWidth={0}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={6}>
          <Box>
            {faqs.map((f, i) => {
              if(i%2 != 0) return;
              return(
                <AccordionItem key={i} borderWidth={1} m={1} bg="#f6f7fb" minH={10}>
                  <Heading bg="#f6f7fb" py={2}>
                    <AccordionButton _hover={{bg: "none"}}>
                      <Box flex="1" textAlign="left">{f.q}</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel pb={4}>{f.a}</AccordionPanel>
                </AccordionItem>
              )
            })}
          </Box>
          <Box>
            {faqs.map((f, i) => {
              if(i%2 == 0) return;
              return(
                <AccordionItem key={i} borderWidth={1} m={1} bg="#f6f7fb" minH={10}>
                  <Heading bg="#f6f7fb" py={2}>
                    <AccordionButton _hover={{bg: "none"}}>
                      <Box flex="1" textAlign="left">{f.q}</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel pb={4}>{f.a}</AccordionPanel>
                </AccordionItem>
              )
            })}
          </Box>
        </SimpleGrid>
      </Accordion>
    </Container>
  )
}
