"use client";
import { Box, Heading, SimpleGrid, Image, Text, Link as ChakraLink } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="secondary" py={6} mt={20} color="white">
        <SimpleGrid columns={[1, null, 4]} spacing={6} mt={5} maxW="7xl" mx="auto" px={5}>
          <Box mt={"-30px"} zIndex={20}>
            <Image
              w={"200px"}
              src={"/logo.png"}
              alt='dk-flytte'
            />
          </Box>
          <Box>
            <Heading size="md"  fontWeight={"semibold"}>DK Flytte</Heading>
            <Box mt={5}>
              <Text>
                DK Flytte er din stabile flyttepartner: privat & erhverv, pakning, opbevaring og tunge løft – altid klare aftaler og faste priser.
              </Text>
            </Box>
          </Box>
          <Box>
            <Heading size="md" color="primary" fontWeight={"semibold"}>Kontakt os</Heading>
            <Box mt={5}>
              <Text>CVR: 45 30 66 90</Text>
              <Text mt={1}>
                Email:{" "}
                <ChakraLink href={`mailto:kundeservice@dkflytte.dk`} _hover={{textDecoration: "underline"}} textColor="secondary.500">
                  kundeservice@dkflytte.dk
                </ChakraLink>
              </Text>
              <Text mt={1}>
                Telefon:{" "}
                <ChakraLink href={`tel:+4552698285`} _hover={{textDecoration: "underline"}} textColor="secondary.500">
                  +45 52 69 82 85
                </ChakraLink>
              </Text>
            </Box>
          </Box>
          <Box>
            <Heading size="md" color="primary" fontWeight={"semibold"}>Læs mere</Heading>
            <Box mt={5} fontSize="sm">
              <Text mt={1}>
                <ChakraLink href="/privatflytning" _hover={{textDecoration: "underline"}} textColor="secondary.500">
                    Privatflytning
                </ChakraLink>
              </Text>
              <Text mt={1}>
                <ChakraLink href="/erhvervsflytning" _hover={{textDecoration: "underline"}} textColor="secondary.500">
                    Erhvervsflytning
                </ChakraLink>
              </Text>
              <Text mt={1}>
                <ChakraLink href="/priser" _hover={{textDecoration: "underline"}} textColor="secondary.500">
                    Vores priser
              </ChakraLink>
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
        <Box textAlign="center" mt={5}>
          <Text>&copy; {new Date().getFullYear()} DK Flytte — Alle rettigheder forbeholdes.</Text>
        </Box>
    </Box>
  );
}
