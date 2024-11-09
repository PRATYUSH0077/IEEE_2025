import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import './Header.css'; // Import your CSS file

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial check
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/tracks', text: 'Tracks' },
    { to: '/committee', text: 'Committee' },
    { to: '/submission', text: 'Submission' },
    { to: '/registration', text: 'Registration' },
    { to: '/venue', text: 'Venue' },
    // { to: '/contact', text: 'Contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header"> {/* Apply header class here */}
      <Box bg="gray.800" color="white" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>IEEE MPSec ICETA 2025</Box>
          <Flex alignItems="center">
            {isMobile ? (
              <IconButton
                size="md"
                icon={<HamburgerIcon />}
                aria-label="Open Menu"
                onClick={onOpen}
              />
            ) : (
              <nav className="navbar" >
                <ul className="nav-links">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.to}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </Flex>
        </Flex>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack as="nav" spacing={4}>
                  {navLinks.map((link, index) => (
                    <Link key={index} to={link.to}>
                      {link.text}
                    </Link>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </header>
  );
};

export default Header;
