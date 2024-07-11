import React from 'react';
import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gwaliorImage from '../../assets/clg.jpg'; // Adjust these paths to your actual images
import mpImage from '../../assets/fort.jpg';
import indiaImage from '../../assets/fort2.jpg';
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
    autoplaySpeed: 2000,
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
          {[gwaliorImage, mpImage, indiaImage].map((image, idx) => (
            <Box key={idx} height="100vh" overflow="hidden" position="relative">
              <Image
                src={image}
                alt={`Slide ${idx + 1}`}
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
                bg="rgba(0, 0, 0, 0.75)"
                borderRadius="md"
              >
                <Text fontSize={isMobile ? 'md' : 'xl'} fontWeight="bold">
                  IEEE Madhya Pradesh Section International Conference on Emerging Technologies 2025
                </Text>
                <Text  fontSize={isMobile ? 'lg' : 'xl'}>7-9 February, 2025</Text>
                <Text  fontSize={isMobile ? 'lg' : 'xl'}>ABV-IIITM, GWALIOR</Text>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image Width={"150px"} backgroundColor={"white"} src={mpLogo} alt="MP Logo" boxSize={isMobile ? '40px' : '120px'} />
                </div>
                <Text fontSize={isMobile ? 'sm' : 'lg'} mt={2} fontWeight="bold">
                  Being Jointly organized by:
                </Text>
                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} textAlign="center" mt={2}>
                  {organizingInstitutions.map((inst, index) => (
                    <Text key={index} fontSize={isMobile ? 'sm' : 'xl'}>
                      {inst}
                    </Text>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
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
