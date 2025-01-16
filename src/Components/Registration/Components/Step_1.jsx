import React from "react";
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, List, ListItem, useBreakpointValue } from "@chakra-ui/react";

const registrationData = [
    { type: "IEEE Student", fee: "₹ 6,500", uploads: 1, kit: 1 },
    { type: "Student", fee: "₹ 7,000", uploads: 1, kit: 1 },
    { type: "IEEE Faculty", fee: "₹ 8,000", uploads: 2, kit: 1 },
    { type: "Faculty", fee: "₹ 9,000", uploads: 2, kit: 1 },
    { type: "IEEE Industry Participant", fee: "₹ 11,000", uploads: 2, kit: 1 },
    { type: "Industry Participant", fee: "₹ 12,000", uploads: 2, kit: 1 },
    { type: "IEEE Foreign Participant", fee: "USD $200", uploads: 2, kit: 1 },
    { type: "Foreign Participant", fee: "USD $250", uploads: 2, kit: 1 },
];

const Step_1 = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box>
            {/* Registration Fees Table */}
            {/* <Text fontSize={isMobile ? 'xl' : '2xl'} fontWeight="bold" mb={4}>Registration Fees</Text> */}
            <Table variant="striped" size="lg" mb={6}>
                <Thead>
                    <Tr>
                        <Th>Registration Type</Th>
                        <Th>Registration Fee</Th>
                        <Th>Maximum Number of Paper Uploads</Th>
                        <Th>Registration Kit, Tea, Banquet Tickets</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {registrationData.map((registration, index) => (
                        <Tr key={index}>
                            <Td>{registration.type}</Td>
                            <Td>{registration.fee}</Td>
                            <Td>{registration.uploads}</Td>
                            <Td>{registration.kit}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            {/* Additional Notes */}
            <Box borderWidth="1px" borderRadius="lg" p={4} bg="gray.50">
                <Text fontSize="lg" fontWeight="bold" color="red.600" mb={2}>Note:</Text>
                <List spacing={2}>
                    <ListItem>
                        While authors can present their papers online, they will have to pay a full registration fee as per the above rates. The kits, tea, and banquet will not be covered. Authors are therefore encouraged to participate in person.
                    </ListItem>
                    <ListItem>Non-Indian participants must pay the IEEE or Non-IEEE foreign fee.</ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Step_1;
