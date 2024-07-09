import React, { useState } from 'react';
import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'; // Importing icons
import venue_background from '../../assets/venue_background.jpg';
import temp from '../../assets/temp.gif';
import './Tracks.css';

function Tracks() {
    const isMobile = useBreakpointValue({ base: true, md: false });

    // State to manage open tracks
    const [openTracks, setOpenTracks] = useState(new Set());

    // Function to toggle track collapse
    const toggleTrack = (trackNumber) => {
        const updatedTracks = new Set(openTracks);
        if (updatedTracks.has(trackNumber)) {
            updatedTracks.delete(trackNumber);
        } else {
            updatedTracks.add(trackNumber);
        }
        setOpenTracks(updatedTracks);
    };

    // Function to check if a track is open
    const isTrackOpen = (trackNumber) => {
        return openTracks.has(trackNumber);
    };

    return (
        <>
            <Box className="venue-top-image">
                <Image src={temp} alt="Venue Top Part" />
            </Box>
            <Box
                className="venue-page"
                style={{ backgroundImage: `url(${venue_background})` }}
            >
                <Box className="venue-box">
                    <Text color='#e72f0e' fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold">Tracks</Text>
                    <Text textAlign='left' fontSize={isMobile ? 'lg' : 'xl'}>
                        <ol className="list-unstyled">
                            <li>
                                <button
                                    className="text-decoration-underline font-weight-bold"
                                    type="button"
                                    onClick={() => toggleTrack(1)}
                                >
                                    Track 1: Wireless Networks, Communication Systems and IoT
                                    {isTrackOpen(1) ? <BsChevronUp /> : <BsChevronDown />}
                                </button>
                                {isTrackOpen(1) && (
                                    <ul className="list-unstyled">
                                        <li>Chairs:</li>
                                        <li>o Prof Sumit Gautam, EE, IIT Indore</li>
                                        <li>o Dr. Vinod Kumar Jain, IIITDM Jabalpur</li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    className="text-decoration-underline font-weight-bold"
                                    type="button"
                                    onClick={() => toggleTrack(2)}
                                >
                                    Track 2: Computer Vision and Signal Processing
                                    {isTrackOpen(2) ? <BsChevronUp /> : <BsChevronDown />}
                                </button>
                                {isTrackOpen(2) && (
                                    <ul className="list-unstyled">
                                        <li>Chairs:</li>
                                        <li>o Dr. Varun Bajaj, Associate Professor, ECED MANIT Bhopal</li>
                                        <li>o Dr. Ayan Seal, Assistant Professor, IIITDM Jabalpur</li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    className="text-decoration-underline font-weight-bold"
                                    type="button"
                                    onClick={() => toggleTrack(3)}
                                >
                                    Track 3: Robotics, UAV Technology, AI and ML
                                    {isTrackOpen(3) ? <BsChevronUp /> : <BsChevronDown />}
                                </button>
                                {isTrackOpen(3) && (
                                    <ul className="list-unstyled">
                                        <li>Chairs:</li>
                                        <li>o Dr. Avinash Chand Pandey, Assistant Professor, IIITDM Jabalpur</li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    className="text-decoration-underline font-weight-bold"
                                    type="button"
                                    onClick={() => toggleTrack(4)}
                                >
                                    Track 4: Smart Computing for Sustainable Development
                                    {isTrackOpen(4) ? <BsChevronUp /> : <BsChevronDown />}
                                </button>
                                {isTrackOpen(4) && (
                                    <ul className="list-unstyled">
                                        <li>No specific chairs listed</li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    className="text-decoration-underline font-weight-bold"
                                    type="button"
                                    onClick={() => toggleTrack(5)}
                                >
                                    Track 5: Cyber-Security
                                    {isTrackOpen(5) ? <BsChevronUp /> : <BsChevronDown />}
                                </button>
                                {isTrackOpen(5) && (
                                    <ul className="list-unstyled">
                                        <li>No specific chairs listed</li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    className="text-decoration-underline font-weight-bold"
                                    type="button"
                                    onClick={() => toggleTrack(6)}
                                >
                                    Track 6: Cloud Computing and Big Data
                                    {isTrackOpen(6) ? <BsChevronUp /> : <BsChevronDown />}
                                </button>
                                {isTrackOpen(6) && (
                                    <ul className="list-unstyled">
                                        <li>Chairs:</li>
                                        <li>o Dr. Munesh Singh, Assistant Professor, IIITDM Jabalpur</li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    className="text-decoration-underline font-weight-bold"
                                    type="button"
                                    onClick={() => toggleTrack(7)}
                                >
                                    Track 7: Electronic Devices, Sensors, and Systems
                                    {isTrackOpen(7) ? <BsChevronUp /> : <BsChevronDown />}
                                </button>
                                {isTrackOpen(7) && (
                                    <ul className="list-unstyled">
                                        <li>No specific chairs listed</li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    className="text-decoration-underline font-weight-bold"
                                    type="button"
                                    onClick={() => toggleTrack(8)}
                                >
                                    Track 8: Photonics and CPS
                                    {isTrackOpen(8) ? <BsChevronUp /> : <BsChevronDown />}
                                </button>
                                {isTrackOpen(8) && (
                                    <ul className="list-unstyled">
                                        <li>Chairs:</li>
                                        <li>o Dr. Gaurav Kumar Bharti, IISER Bhopal</li>
                                    </ul>
                                )}
                            </li>
                        </ol>
                    </Text>
                </Box>
            </Box>
        </>
    );
}

export default Tracks;
