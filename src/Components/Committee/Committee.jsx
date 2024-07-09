import React from 'react';
import img1 from "../../assets/venue_background.jpg";
import {
  Container,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const CommitteePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const patron = {
    name: 'Prof. S. N. Singh',
    role: 'Director',
    institute: 'ABV-IIITM Gwalior',
  };

  const generalChair = [
    { name: 'Prof. Aditya Trivedi', institute: 'ABV-IIITM Gwalior' },
    { name: 'Dr. Rahul Kala', institute: 'ABV-IIITM Gwalior' },
  ];

  const generalCoChairs = [
    { name: 'Dr. Gaurav Kumar Bharti', institute: 'IISER Bhopal' },
    { name: 'Dr. Durgesh Singh', institute: 'IIITDM Jabalpur' },
  ];

  const publicationChair = { name: 'Dr. Mahendra Shukla', institute: 'ABV-IIITM Gwalior' };

  const publicityChair = { name: 'Dr. Veena Anand', institute: 'ABV-IIITM Gwalior' };

  const financeChair = [
    { name: 'Prof. K.K. Pattanaik', institute: 'ABV-IIITM Gwalior' },
    { name: 'Mr. Anil Garg', institute: 'ABV-IIITM Gwalior' },
  ];

  const industryChair = [
    { name: 'Prof. Mahua Bhattacharya', institute: 'ABV-IIITM Gwalior' },
    { name: 'Dr. Sunil Kumar', institute: 'ABV-IIITM Gwalior' },
  ];

  const websiteChairs = { name: 'Dr. Rahul Kala', institute: 'ABV-IIITM Gwalior' };

  const registrationChair = { name: 'Dr. Anjali', institute: 'ABV-IIITM Gwalior' };

  const advisoryCommittee = [
    { name: 'Prof. Dr. Angela Amphawan', institute: 'Sunway University, Malaysia' },
    { name: 'Prof. Monia Najjar Bounouh', institute: 'University of Tunis El Manar, Tunisia' },
    { name: 'Dr. Mayur Kumar Chhipa', institute: 'ISBAT University, Uganda' },
    { name: 'Dr. Kivilcim Yüksel', institute: 'Izmir Institute of Technology, Turkey' },
    { name: 'Prof. Peter Breda', institute: 'University of Zilina, Slovakia' },
    { name: 'Prof. Amit Kr. Mishra', institute: 'University of Aberswyth, UK' },
    { name: 'Prof. Sanjay Kumar Singh', institute: 'IIT BHU Varanasi' },
  ];

  const technicalCommittee = [
    { name: 'Dr. Mayank Swarnkar', institute: 'IIT BHU Varanasi' },
    { name: 'Dr. Chandresh Kumar Maurya', institute: 'IIT Indore' },
    { name: 'Dr. Santosh Kumar', institute: 'IIIT Naya Raipur' },
    { name: 'Dr. Ramesh Chand Pandey', institute: 'REC Ambedkar Nagar' },
    { name: 'Dr. Dharamveer Singh Rajpoot', institute: 'Jaypee Noida' },
    { name: 'Dr. Ayan Seal', institute: 'IIITDM Jabalpur' },
    { name: 'Dr. Avinash Chandra Pandey', institute: 'IIITDM Jabalpur' },
    { name: 'Dr. Vijaypal Singh Rathor', institute: 'IIITDM Jabalpur' },
  ];

  const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: 'spring',
      },
    },
  };

  return (
    <Box
      bgImage={`url(${img1})`}
      bgSize="cover"
      bgRepeat="repeat-x"
      minHeight="100vh"
      py={12}
      color="white"
    >
      <Container maxW="xl">
        <Box textAlign="center" mb={10}>
          <Heading as="h1" size="xl" mb={6}>
            Committees
          </Heading>
          <Divider borderColor="white" mb={6} />
        </Box>

        {/* Patron */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Patron
            </Heading>
            <Text fontSize="lg" mb={2}>
              {patron.name} ({patron.institute})
            </Text>
            <Text fontSize="md">{patron.role}</Text>
          </Box>
        </motion.div>

        {/* General Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              General Chair
            </Heading>
            {generalChair.map((chair, index) => (
              <Box key={index} mb={2}>
                <Text fontSize="lg">
                  {chair.name} ({chair.institute})
                </Text>
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* General Co-Chairs */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              General Co-Chairs
            </Heading>
            {generalCoChairs.map((chair, index) => (
              <Box key={index} mb={2}>
                <Text fontSize="lg">
                  {chair.name} ({chair.institute})
                </Text>
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* Publication Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Publication Chair
            </Heading>
            <Text fontSize="lg">
              {publicationChair.name} ({publicationChair.institute})
            </Text>
          </Box>
        </motion.div>

        {/* Publicity Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Publicity Chair
            </Heading>
            <Text fontSize="lg">
              {publicityChair.name} ({publicityChair.institute})
            </Text>
          </Box>
        </motion.div>

        {/* Finance Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Finance Chair
            </Heading>
            {financeChair.map((chair, index) => (
              <Box key={index} mb={2}>
                <Text fontSize="lg">
                  {chair.name} ({chair.institute})
                </Text>
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* Industry Relationship and Sponsorship Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Industry Relationship and Sponsorship Chair
            </Heading>
            {industryChair.map((chair, index) => (
              <Box key={index} mb={2}>
                <Text fontSize="lg">
                  {chair.name} ({chair.institute})
                </Text>
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* Website Chairs */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Website Chairs
            </Heading>
            <Text fontSize="lg">
              {websiteChairs.name} ({websiteChairs.institute})
            </Text>
          </Box>
        </motion.div>

        {/* Registration Chair */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Registration Chair
            </Heading>
            <Text fontSize="lg">
              {registrationChair.name} ({registrationChair.institute})
            </Text>
          </Box>
        </motion.div>

        {/* Advisory Committee */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Advisory Committee
            </Heading>
            <List spacing={3}>
              {advisoryCommittee.map((member, index) => (
                <motion.div key={index} variants={listVariants}>
                  <ListItem>
                    <Text fontSize="lg">
                      {member.name} ({member.institute})
                    </Text>
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Box>
        </motion.div>

        {/* Technical Program Committee */}
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <Box bg="rgba(0, 0, 0, 0.6)" p={4} borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={3}>
              Technical Program Committee
            </Heading>
            <List spacing={3}>
              {technicalCommittee.map((member, index) => (
                <motion.div key={index} variants={listVariants}>
                  <ListItem>
                    <Text fontSize="lg">
                      {member.name} ({member.institute})
                    </Text>
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CommitteePage;
