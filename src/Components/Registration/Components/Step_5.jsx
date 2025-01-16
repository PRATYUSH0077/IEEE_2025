import React from "react";
import { Text, Box, List, ListItem, Link } from "@chakra-ui/react";

const Step_5 = () => {
    return (
        <Box>
            <Box width="100%" fontFamily="'Roboto', sans-serif">
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Check your Camera Ready Copy (CRC) with PDFxpress
                </Text>
                <List spacing={3} styleType="disc" pl={6}>

                    <ListItem>
                        Before creating your PDF, proofread your source document thoroughly. Any changes made after the IEEE PDF eXpress conversion may invalidate Xplore compatibility.
                    </ListItem>
                    <ListItem>
                        Log in to the IEEE PDF eXpress site:{" "}
                        <Link href="https://ieee-pdf-express.org/" target="_blank" color="blue.500" textDecoration="underline">
                            IEEE PDF eXpress
                        </Link>.
                    </ListItem>
                    <ListItem>Enter Conference ID: <strong>64837X</strong> and your email address.</ListItem>
                    <ListItem>Follow the prompts to confirm your account and receive a verification email.</ListItem>
                    <ListItem>Previous users should use the same password from previous conferences.</ListItem>
                    <ListItem>Ensure your contact information is correct.</ListItem>
                    <ListItem>
                        Once validated, your document will be ready for submission.
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Step_5;
