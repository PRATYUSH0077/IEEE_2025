import React from "react";
import { Text, Link } from "@chakra-ui/react";
const Step_7 = () => (
    <div>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
            Final registration form
        </Text>
        <p>
            Fill out the final registration form here:{" "}
            <Link href="https://forms.gle/j9iRN8iNSqo9wJTM8" target="_blank" color="blue.500" textDecoration="underline">
                Google Form
            </Link>
            .
        </p>
    </div>
);

export default Step_7;
