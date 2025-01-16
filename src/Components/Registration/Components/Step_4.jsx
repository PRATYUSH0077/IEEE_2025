import React from "react";
import { Box, Text, UnorderedList, ListItem, Code } from "@chakra-ui/react";

const Step_4 = () => (
    <Box p={4} borderRadius="md" fontFamily="'Roboto', sans-serif">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
            Final Paper Preparation
        </Text>

        <UnorderedList fontSize="md" spacing={3} pl={6}>
            <ListItem >
                Ensure that you follow the IEEE Paper format for the complete manuscript, including references.
                Papers not in the proper format shall not be sent to IEEE for publication.
            </ListItem>
            <ListItem>
                Ensure that you have incorporated the reviewer suggestions mentioned in the reviews available at
                the Microsoft CMT portal. The reviews for your paper are available at the author console of Microsoft CMT.
            </ListItem>
            <ListItem>
                Ensure that the paper is within the 6-page limit. Papers with excess pages shall not be sent to IEEE for publication.
            </ListItem>
            <ListItem>
                Plagiarism in any form, at any level, is unacceptable. Papers found to be plagiarized will not be sent to IEEE for publication.
            </ListItem>
            <ListItem>
                Your paper should not include any header or footer information (e.g., page numbers) in the top/bottom margins. If your paper has been prepared using Microsoft Word, please ensure that you have used the most current version, which will help reduce word-to-pdf conversion issues such as embedded fonts, bookmarks, etc.
            </ListItem>
            <ListItem>
                Include the appropriate copyright clearance code notice on the bottom of the first page of your paper:
                <UnorderedList spacing={2} pl={6}>
                    <ListItem>
                        For papers in which all authors are employed by the US government, the copyright notice is:{" "}
                        <Code>U.S. Government work not protected by U.S. copyright.</Code>
                    </ListItem>
                    <ListItem>
                        For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is:{" "}
                        <Code>979-8-3315-2131-8/25/$31.00 ©2024 Crown</Code>
                    </ListItem>
                    <ListItem>
                        For papers in which all authors are employed by the European Union, the copyright notice is:{" "}
                        <Code>979-8-3315-2131-8/25/$31.00 ©2025 European Union</Code>
                    </ListItem>
                    <ListItem>
                        For all other papers, the copyright notice is:{" "}
                        <Code>979-8-3315-2131-8/25/$31.00 ©2025 IEEE</Code>
                    </ListItem>
                    <ListItem>
                        LATEX users for the "all other" category can directly add the following lines just before{" "}
                        <Code>{"\\begin{document}"}</Code> for the copyright notice to show up:
                        <Box
                            dangerouslySetInnerHTML={{
                                __html: `
                                  <pre>\\IEEEoverridecommandlockouts \\IEEEpubid{\\makebox[\\columnwidth]{979-8-3315-2131-8/25/$31.                         00~\\copyright~2025~IEEE \\hfill} \\hspace{\\columnsep}\\makebox[\\columnwidth]{ }} </pre>
                                `,
                            }}
                            style={{ overflowX: "hidden", whiteSpace: "pre-wrap" }}
                        />
                    </ListItem>
                    <ListItem>
                        MSWord users can use: Insert Text box, insert the appropriate copyright notice in the textbox, and place the box (without border) at the bottom left on the first page.

                    </ListItem>
                </UnorderedList>
            </ListItem>
        </UnorderedList>


    </Box>
);

export default Step_4;
