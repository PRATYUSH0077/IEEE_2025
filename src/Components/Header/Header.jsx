// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>IEEE MPSec ICET 2025</Box>
        <Flex alignItems="center">
          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onOpen}
          />
          <VStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <Link to="/">Home</Link>
            <Link to="/venue">Venue</Link>
            <Link to="/committee">Committee</Link>
            <Link to="/submission">Submission</Link>
            <Link to="/contact">Contact</Link>
          </VStack>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack as={'nav'} spacing={4}>
                <Link to="/">Home</Link>
                <Link to="/venue">Venue</Link>
                <Link to="/committee">Committee</Link>
                <Link to="/submission">Submission</Link>
                <Link to="/contact">Contact</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
