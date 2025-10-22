"use client";
import { Box, Flex, HStack, Link, Image, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from '@/components/NavLinks';

export default function Navbar(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box bg="rgba(255,255,255, 0.9)" boxShadow="sm" px={5} position="fixed" zIndex={10} w="100%" h="100px">
      <Flex maxW="8xl" mx="auto" align="center" justify="space-between" h="100px">
        <Box as={Link} href={"/"} cursor="pointer">
        <Image
          minW={"120px"}
          h={"120px"}
          src={"/dk-flytte-logo.png"}
          alt='dk-flytte'
        />
        </Box>
        {/* Desktop */}
        <HStack spacing={6} display={{ base: 'none', md: 'none', lg: 'flex' }}>
            <NavLinks/>
        </HStack>
        {/* Mobile menu button */}
        <IconButton
          icon={<RxHamburgerMenu />}
          color="primary.500"
          aria-label="Open menu"
          onClick={onOpen}
          borderWidth={0}
          display={{ md: 'flex', lg: 'none' }}
          _hover={{bg: 'none'}}
          fontSize="25px"
          bg='none'
          size="lg"
          mr={"-25"}
        />

      </Flex>
        {/* Mobile Menu */}
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton  />
            <Flex direction="column" alignItems="start" mt={10}>
                <NavLinks onClose={onClose}/>
            </Flex>
          </DrawerContent>
        </Drawer>
    </Box>
  )
}

