import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Women() {
  // Seasonal image URL
  const seasonalImageUrl =
    "https://slimages.macysassets.com/is/image/MacysInc/C2400184_102_v2?resMode=sharp2&fmt=webp&wid=1440&hei=605";

  // Additional image URL
  const additionalImageUrl =
    "https://slimages.macysassets.com/is/image/MacysInc/C2301736_HP_group?resMode=sharp2&fmt=webp&wid=1440&hei=508";

  // Third image URL
  const thirdImageUrl =
    "https://slimages.macysassets.com/is/image/MacysInc/061021INTLHOMEPAGETEAMPLATEBANNER10301_1433052-1?resMode=sharp2&fmt=webp&wid=1600&hei=400";

  // Set isLoggedIn based on your authentication logic
  const isLoggedIn = true;

  return (
    <Box p={4}>
      {isLoggedIn ? (
        <>
          <Image src={seasonalImageUrl} alt="Season Sale" w="100%" h="auto" mb={4} />

          <Box textAlign="center" mb={4}>
            <Image src={additionalImageUrl} alt="Additional Image" w="100%" h="auto" />
          </Box>

          <Box p={4} bg="gray.100" borderRadius="md" textAlign="center">
            <Text fontSize="lg">
              "Fashion is not something that exists in dresses only. Fashion is in
              the sky, in the street, fashion has to do with ideas, the way we live,
              what is happening."
            </Text>
          </Box>

          <Box textAlign="center" mt={4}>
            <Image src={thirdImageUrl} alt="Third Image" w="100%" h="auto" />
          </Box>
        </>
      ) : (
        <Text textAlign="center" fontSize="xl">
          Please log in to view this page.
        </Text>
      )}
    </Box>
  );
}
