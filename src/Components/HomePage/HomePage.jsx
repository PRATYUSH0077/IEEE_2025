import React from 'react';
import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gwaliorImage from '../../assets/Image1.webp'; // Adjust these paths to your actual images
import mpImage from '../../assets/Image1.webp';
import indiaImage from '../../assets/Image1.webp';
import mpLogo from '../../assets/MP-logo.png'; // Adjust the path to your MP logo image
import ConferenceDetails from './ConferenceDetails';
import ObjectiveComponent from './ObjectiveComponent';
import ImportantDates from './ImportantDates';
import ContactUs from './ContactUs';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  const organizingInstitutions = [
    'ABV-IIITM Gwalior',
    'IIT Indore',
    'PDPM-IIITDM Jabalpur',
    'MANIT Bhopal',
    'IISER Bhopal',
    'IIIT Bhopal',
    'NITTTR Bhopal',
  ];

  return (
    <>
      <Box className="home-page" mt={0} pt={0} overflow="hidden">
        <Slider {...settings}>
          <Box
            height="100vh"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={gwaliorImage}
              alt="Gwalior"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              bottom="10%"
              left="50%"
              transform="translateX(-50%)"
              textAlign="center"
              color="white"
              p={4}
              bg="rgba(0, 0, 0, 0.5)"
              borderRadius="md"
            >
              <Text fontSize={isMobile ? 'md' : 'xl'} fontWeight="bold">
                IEEE Madhya Pradesh Section International Conference on Emerging Technologies 2025
              </Text>
              <Text fontSize={isMobile ? 'sm' : 'lg'}>7-9 February, 2025</Text>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={mpLogo} alt="MP Logo" boxSize={isMobile ? '40px' : '80px'} />
              </div>
              <Text fontSize={isMobile ? 'sm' : 'lg'} mt={2} fontWeight="bold">
                Being Jointly organized by:
              </Text>
              <Box textAlign="center" mt={2}>
                {organizingInstitutions.map((inst, index) => (
                  <Text key={index} fontSize={isMobile ? 'sm' : 'md'}>{inst}</Text>
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            height="100vh"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={mpImage}
              alt="Madhya Pradesh"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              bottom="10%"
              left="50%"
              transform="translateX(-50%)"
              textAlign="center"
              color="white"
              p={4}
              bg="rgba(0, 0, 0, 0.5)"
              borderRadius="md"
            >
              <Text fontSize={isMobile ? 'md' : 'xl'} fontWeight="bold">
                IEEE Madhya Pradesh Section International Conference on Emerging Technologies 2025
              </Text>
              <Text fontSize={isMobile ? 'sm' : 'lg'}>7-9 February, 2025</Text>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={mpLogo} alt="MP Logo" boxSize={isMobile ? '40px' : '80px'} />
              </div>
              <Text fontSize={isMobile ? 'sm' : 'lg'} mt={2} fontWeight="bold">
                Being Jointly organized by:
              </Text>
              <Box textAlign="center" mt={2}>
                {organizingInstitutions.map((inst, index) => (
                  <Text key={index} fontSize={isMobile ? 'sm' : 'md'}>{inst}</Text>
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            height="100vh"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={indiaImage}
              alt="India"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              bottom="10%"
              left="50%"
              transform="translateX(-50%)"
              textAlign="center"
              color="white"
              p={4}
              bg="rgba(0, 0, 0, 0.5)"
              borderRadius="md"
            >
              <Text fontSize={isMobile ? 'md' : 'xl'} fontWeight="bold">
                IEEE Madhya Pradesh Section International Conference on Emerging Technologies 2025
              </Text>
              <Text fontSize={isMobile ? 'sm' : 'lg'}>7-9 February, 2025</Text>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src={mpLogo} alt="MP Logo" boxSize={isMobile ? '40px' : '80px'} />
              </div>
              <Text fontSize={isMobile ? 'sm' : 'lg'} mt={2} fontWeight="bold">
                Being Jointly organized by:
              </Text>
              <Box textAlign="center" mt={2}>
                {organizingInstitutions.map((inst, index) => (
                  <Text key={index} fontSize={isMobile ? 'sm' : 'md'}>{inst}</Text>
                ))}
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>
      
      {/* Include other components like ConferenceDetails, ObjectiveComponent, ImportantDates, ContactUs */}
      <ConferenceDetails />
      <ObjectiveComponent />
      <ImportantDates />
      <ContactUs />
    </>
  );
};

export default HomePage;
