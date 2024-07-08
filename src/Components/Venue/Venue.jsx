import React from 'react';
import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import venue_background from '../../assets/venue_background.jpg';
import temp from '../../assets/temp.gif';
import './Venue.css';

const Venue = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            <Box className="venue-top-image">
                <Image src={temp} alt="Venue Top Part" />
            </Box>
            <Box
                className="venue-page"
                style={{ backgroundImage: `url(${venue_background})` }}
            >

                <div className="venue-row">
                    <Box className="venue-box">
                        <Text color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">Venue</Text>
                        <Text fontSize={isMobile ? 'lg' : 'xl'}>ABV-Indian Institute of Information Technology and Management Gwalior,
                            Morena Link Road
                            Gwalior,Madhya Pradesh
                            474015, India </Text>
                    </Box>

                    <Box className="venue-box">
                        <Text color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">Dates</Text>
                        <Text fontSize={isMobile ? 'lg' : 'xl'}>7-9 February, 2025</Text>
                    </Box>
                </div>

                <div className="venue-row">
                    <Box className="venue-box">
                        <Text color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">Important Dates</Text>
                        <Text fontSize={isMobile ? 'lg' : 'xl'}>
                            Paper submission opens on 10th July, 2024<br />
                            Rolling submission closes on 29th September, 2024<br />
                            Acceptance of selected papers: 13th December, 2024<br />
                            Final Paper Submission and Registration Deadline: 17th January 2025<br />
                            Conference Dates: 7-9 February, 2025
                        </Text>
                    </Box>
                </div>
            </Box>
        </>
    );
};

export default Venue;
