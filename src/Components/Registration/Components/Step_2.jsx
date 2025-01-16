import React, { useState } from "react";
import { Link, Box, Text, Button, List, ListItem, useBreakpointValue } from "@chakra-ui/react";

const Step_2 = () => {
    const [activeTab, setActiveTab] = useState("indian");
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box>

            {/* Tabs for Indian and Foreign Authors */}
            <Box display="flex" mb={6}>
                <Button
                    onClick={() => setActiveTab("indian")}
                    flex="1"
                    variant={activeTab === "indian" ? "solid" : "outline"}
                    colorScheme="blue"
                    fontWeight="bold"
                    _hover={{ bg: activeTab === "indian" ? "blue.600" : "blue.100" }}
                >
                    For Indian Authors
                </Button>
                <Button
                    onClick={() => setActiveTab("foreign")}
                    flex="1"
                    variant={activeTab === "foreign" ? "solid" : "outline"}
                    colorScheme="blue"
                    fontWeight="bold"
                    _hover={{ bg: activeTab === "foreign" ? "blue.600" : "blue.100" }}
                >
                    For Foreign Authors
                </Button>
            </Box>

            {/* Content for selected tab */}
            <Box width="100%" fontFamily="'Roboto', sans-serif">
                {activeTab === "indian" && (
                    <Box>
                        {/* <Text fontSize={isMobile ? 'lg' : 'xl'} fontWeight="bold" mb={4}>For Indian Authors</Text> */}
                        <List spacing={3} styleType="disc" pl={6}>
                            <ListItem>
                                Go to <Link href="https://www.onlinesbi.sbi/sbicollect/" target="_blank" color="blue.500" textDecoration="underline">SBI Collect</Link>
                            </ListItem>
                            <ListItem>Select <Text as="span" fontWeight="bold">"Educational Institutes"</Text> as the category.</ListItem>

                            <ListItem>In the search bar, type <Text as="span" fontWeight="bold">“ABV-IIITM Gwalior”</Text>.</ListItem>
                            <ListItem>Ensure that the dropdown shows <Text as="span" fontWeight="bold">“IEEE MPSec ICETA 2025”</Text>.</ListItem>
                            <ListItem>Fill in all details and make the payment until a receipt is generated.</ListItem>
                            <ListItem>Download and save the receipt (you will need it for the steps later).</ListItem>
                        </List>
                    </Box>
                )}

                {activeTab === "foreign" && (
                    <Box>
                        {/* <Text fontSize={isMobile ? 'lg' : 'xl'} fontWeight="bold" mb={4}>For Foreign Authors</Text> */}
                        <List spacing={3} styleType="disc" pl={6}>
                            <ListItem>
                                Check the registration fee at <Link href="https://icet2025.com/registration" target="_blank" color="blue.500" textDecoration="underline">https://icet2025.com/registration</Link>.
                            </ListItem>
                            <ListItem>Visit your bank to pay the registration fee using the following details:</ListItem>
                            <List fontWeight="bold" spacing={2} styleType="circle" pl={6}>
                                <ListItem>Account Number: 946210210000023</ListItem>
                                <ListItem>Account Name: ABVIIITM GWALIOR IEEE ICETA</ListItem>
                                <ListItem>Indian IFSC Code: BKID0009462</ListItem>
                                <ListItem>SWIFT Code: BKIDINBBGWA</ListItem>
                                <ListItem>Bank Name: Bank of India</ListItem>
                                <ListItem>Bank Address: IIITM Campus, Near Chaar Shahar Ka Naka, Morena Link Road, Gwalior, Madhya Pradesh - 474015, INDIA</ListItem>
                                <ListItem>Bank City: Gwalior</ListItem>
                                <ListItem>Bank Country: INDIA</ListItem>
                            </List>
                            <ListItem>Collect the payment verification confirmation (you will need it for the steps later).</ListItem>
                        </List>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Step_2;
