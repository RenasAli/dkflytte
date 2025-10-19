"use client";
import { Accordion, AccordionItem, AccordionButton, Flex, Button, AccordionIcon, AccordionPanel, VStack, Menu, MenuButton, MenuList, MenuItem, useDisclosure, Link } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import NavButton from "./NavButton";
import { useRef } from "react";
import { useScrollToId, useNextRouter } from "@/hooks/useScrollToId";

interface BussinessMovingNavButtonProps {
    isActive: boolean,
    onClose?: () => void; 
}

const BussinessMovingNavButton = ({isActive, onClose}:BussinessMovingNavButtonProps) => {
    const router = useNextRouter()
    const closeTimeout = useRef<number | null | NodeJS.Timeout>(null);
    const { isOpen: privateMovingMenuIsOpen, onOpen: privateMovingMenuOnOpen, onClose: privateMovingMenuOnClose } = useDisclosure();
    const navMenuItem = bussinessMovinOffers;
    const handleMenuBtnClick = ()=>{
        router("/erhvervsflytning");
    }
    const scrollerHook = useScrollToId()
        const scrollTo = (path: string, id: string) => {
          scrollerHook(path, id)
          if(onClose){
            onClose()
          }
        }
    const handleMouseEnter = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current)
        }
        privateMovingMenuOnOpen()
    }
    
    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            privateMovingMenuOnClose()
        }, 200)
    }
  return (
    <>
    <Accordion allowToggle display={{ md: 'flex', lg: 'none' }} w={"100%"}>
        <AccordionItem border={0} p={0}>
          <AccordionButton as={Flex} align="center" justifyContent="space-between" _hover={{bg: "none"}} >
            <Button
              pl={0}
              as={Link}
              href={"/erhvervsflytning"}
              variant="ghost"
              _hover={{bg: "none", color: "secondary"}}
              fontWeight="bold"
              fontSize="md"
              color={isActive ? "accent" : "primary.500"}
              onClick={onClose}
            >
              ERHVERVSFLYTNING
            </Button>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack align='stretch' >
              {navMenuItem.map((item)=> (
                <Link
                  key={item.id}
                  color={"primary.500"}
                  ml={5}
                  mb={1}
                  fontWeight="semibold"
                  onClick={()=>{scrollTo( item.path, String(item.id))}}
                >
                  {item.title}
                </Link>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
    </Accordion>
    <Menu isOpen={privateMovingMenuIsOpen}>
        <MenuButton
            onClick={handleMenuBtnClick}
            _focusVisible={{ boxShadow: 'none' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            display={{ base: 'none', md: 'none', lg: 'flex' }}
        >
            <Flex align="center">
                <NavButton onClose={onClose} href="/erhvervsflytning" isActive={isActive} title="ERHVERVSFLYTNING"/>
                <FaAngleDown fontSize={15} color="#0E79AD"/>
            </Flex>
          </MenuButton>
          <MenuList
            bg={"rgba(255,255,255, 1)"}
            borderRadius='0px'
            mt={5}
            position="absolute"
            zIndex="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {navMenuItem.map((item)=> (
                <MenuItem
                    key={item.id}
                    bg={"none"}
                    mb={1}
                    ml={5}
                    fontWeight="semibold"
                    color={"primary.500"}
                    _hover={{color: 'secondary'}} 
                    onClick={()=>{scrollTo(item.path ,String(item.id)); handleMouseLeave()}}
                >
                    {item.title}
                </MenuItem>
              ))}
          </MenuList>
    </Menu>
    </>

  )
}

export default BussinessMovingNavButton
const bussinessMovinOffers = [
    {
        id: 10,
        title: "kontorflytning",
        path: '/erhvervsflytning',
    },
    {
        id: 11,
        title: "Express transport",
        path: '/erhvervsflytning',
    },
];