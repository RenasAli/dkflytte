"use client";
import { Accordion, AccordionItem, AccordionButton, Flex, Button, AccordionIcon, AccordionPanel, VStack, Menu, MenuButton, MenuList, HStack, MenuGroup, MenuDivider, MenuItem, useDisclosure, Link } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import NavButton from "./NavButton";
import { useRef } from "react";
import { useScrollToId, useNextRouter } from "@/hooks/useScrollToId";

interface PrivateMovingNavButtonProps {
    isActive: boolean,
    onClose?: () => void; 
}

const PrivateMovingNavButton = ({isActive, onClose}:PrivateMovingNavButtonProps) => {
    const router = useNextRouter()
    const closeTimeout = useRef<number | null | NodeJS.Timeout>(null);
    const { isOpen: privateMovingMenuIsOpen, onOpen: privateMovingMenuOnOpen, onClose: privateMovingMenuOnClose } = useDisclosure();
    const navMenuItem = privateMovinOffers;
    const handleMenuBtnClick = ()=>{
        router("/privatflytning");
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
              href={"/privatflytning"}
              variant="ghost"
              _hover={{bg: "none", color: "secondary"}}
              fontWeight="bold"
              fontSize="md"
              color={isActive ? "accent" : "primary.500"}
              onClick={onClose}
            >
              PRIVATFLYTNING
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
                <NavButton href="/privatflytning" isActive={isActive} title="PRIVATFLYTNING"/>
                <FaAngleDown fontSize={15} color="#0E79AD"/>
            </Flex>
          </MenuButton>
          <MenuList
            bg={"rgba(255,255,255, 1)"}
            borderRadius='0px'
            mt={5}
            w={"900px"}
            position="absolute"
            zIndex="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <HStack>
            <MenuGroup title='Flytteservice'>
              <MenuDivider />
              {navMenuItem.map((item)=> {
                if(item.path !== "/flytteservice") return;
                return(
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
              )})}
            </MenuGroup>
            <MenuGroup title='Landsdækkende og internationale flytninger'>
              <MenuDivider />
              {navMenuItem.map((item)=> {
                if(item.path !== "/landsdaekkende-og-internationale-flytninger") return;
                return(
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
              )})}
            </MenuGroup>
            <MenuGroup title='Ekstra services & Tryghedspakker'>
              <MenuDivider />
              {navMenuItem.map((item)=> {
                if(item.path !== "/extra-services") return;
                return(
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
              )})}
            </MenuGroup>
            </HStack>
          </MenuList>
    </Menu>
    </>

  )
}

export default PrivateMovingNavButton
const privateMovinOffers = [
    {
        id: 1,
        title: "Flyttehjælp",
        path: '/flytteservice',
    },
    {
        id:2 ,
        title: "Dør til dør flytning",
        path: '/flytteservice',
    },
    {
        id: 3,
        title: "Flytning af tunge genstande",
        path: '/flytteservice',
    },
    {
        id: 4,
        title: "Flytning mellem Sjælland og Jylland",
        path: '/landsdaekkende-og-internationale-flytninger',
    },
    {
        id: 5,
        title: "Udlandsflytning",
        path: '/landsdaekkende-og-internationale-flytninger',
    },
    {
        id: 6,
        title:"Flytteopbevaring",
        path: '/landsdaekkende-og-internationale-flytninger',
    },
    {
        id: 7,
        title: "Nedpakning",
        path: '/extra-services',
    },
    {
        id: 8,
        title: "Udpakning",
        path: '/extra-services',
    },
    {
        id: 9,
        title: "Møbelopbevaring",
        path: '/extra-services',
    },
];