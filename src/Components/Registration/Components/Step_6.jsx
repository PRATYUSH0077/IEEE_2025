import React from "react";
import { Text, Link } from "@chakra-ui/react";

const Step_6 = () => (
    <div>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
            Upload the Camera Ready Copy (CRC) as verified by PDFxpress to Microsoft CMT
        </Text>
        <p>

            Login to your Microsoft CMT account at &nbsp;
            <Link href="https://cmt3.research.microsoft.com/ICETA2025/" target="_blank" color="blue.500" textDecoration="underline">
                https://cmt3.research.microsoft.com/ICETA2025/
            </Link>
            &nbsp;
            and follow the instructions to submit the e-copyright form.
        </p>
    </div>
);

export default Step_6;
