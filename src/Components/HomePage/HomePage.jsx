// src/components/HomePage.js
import React from 'react';
import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gwaliorImage from '../../assets/Image1.webp';
import mpImage from '../../assets/Image1.webp';
import indiaImage from '../../assets/Image1.webp';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box className="home-page" mt={4}>
      <Slider {...settings}>
        <Box position="relative">
          <Image src={gwaliorImage} alt="Gwalior" />
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" bg="rgba(0, 0, 0, 0.5)" p={4} borderRadius="md">
            <Text fontSize={isMobile ? 'md' : 'xl'}>IEEE MPSec ICET 2025</Text>
            <Text fontSize={isMobile ? 'sm' : 'lg'}>7-9 February, 2025</Text>
            <Text fontSize={isMobile ? 'sm' : 'lg'}>Gwalior, Madhya Pradesh, India</Text>
          </Box>
        </Box>
        <Box position="relative">
          <Image src={mpImage} alt="Madhya Pradesh" />
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" bg="rgba(0, 0, 0, 0.5)" p={4} borderRadius="md">
            <Text fontSize={isMobile ? 'md' : 'xl'}>IEEE MPSec ICET 2025</Text>
            <Text fontSize={isMobile ? 'sm' : 'lg'}>7-9 February, 2025</Text>
            <Text fontSize={isMobile ? 'sm' : 'lg'}>Gwalior, Madhya Pradesh, India</Text>
          </Box>
        </Box>
        <Box position="relative">
          <Image src={indiaImage} alt="India" />
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" bg="rgba(0, 0, 0, 0.5)" p={4} borderRadius="md">
            <Text fontSize={isMobile ? 'md' : 'xl'}>IEEE MPSec ICET 2025</Text>
            <Text fontSize={isMobile ? 'sm' : 'lg'}>7-9 February, 2025</Text>
            <Text fontSize={isMobile ? 'sm' : 'lg'}>Gwalior, Madhya Pradesh, India</Text>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

export default HomePage;
