import React from 'react';
import { Box, Flex, Text, Link, VStack, Divider, Grid } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py={10} bg="gray.900" color="white">
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" px={{ base: 4, md: 16 }} align="flex-start">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={10} w="full">
          <VStack align="flex-start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Customer Service</Text>
            <Link href="#help" _hover={{ color: 'gray.400' }}>Help & FAQs</Link>
            <Link href="#track-order" _hover={{ color: 'gray.400' }}>Track Order</Link>
            <Link href="#returns" _hover={{ color: 'gray.400' }}>Returns</Link>
            <Link href="#shipping" _hover={{ color: 'gray.400' }}>Shipping</Link>
            <Link href="#contact" _hover={{ color: 'gray.400' }}>Contact Us</Link>
          </VStack>
          <VStack align="flex-start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">About Us</Text>
            <Link href="#our-story" _hover={{ color: 'gray.400' }}>Our Story</Link>
            <Link href="#careers" _hover={{ color: 'gray.400' }}>Careers</Link>
            <Link href="#newsroom" _hover={{ color: 'gray.400' }}>Newsroom</Link>
            <Link href="#sustainability" _hover={{ color: 'gray.400' }}>Sustainability</Link>
          </VStack>
          <VStack align="flex-start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">Follow Us</Text>
            <Link href="#facebook" _hover={{ color: 'gray.400' }}>Facebook</Link>
            <Link href="#instagram" _hover={{ color: 'gray.400' }}>Instagram</Link>
            <Link href="#twitter" _hover={{ color: 'gray.400' }}>Twitter</Link>
            <Link href="#pinterest" _hover={{ color: 'gray.400' }}>Pinterest</Link>
            <Link href="#youtube" _hover={{ color: 'gray.400' }}>YouTube</Link>
          </VStack>
          <VStack align="flex-start" spacing={4}>
            <Text fontSize="lg" fontWeight="bold">More Ways to Shop</Text>
            <Link href="#mobile-app" _hover={{ color: 'gray.400' }}>Mobile App</Link>
            <Link href="#store-locations" _hover={{ color: 'gray.400' }}>Store Locations</Link>
            <Link href="#catalogs" _hover={{ color: 'gray.400' }}>Catalogs</Link>
            <Link href="#gift-cards" _hover={{ color: 'gray.400' }}>Gift Cards</Link>
            <Link href="#affiliate-program" _hover={{ color: 'gray.400' }}>Affiliate Program</Link>
          </VStack>
        </Grid>
      </Flex>
      <Divider my={6} borderColor="gray.700" />
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" px={{ base: 4, md: 16 }}>
        <Text>© 2024 Your Company. All rights reserved.</Text>
        <Flex mt={{ base: 4, md: 0 }}>
          <Link href="#privacy" mx={2} _hover={{ color: 'gray.400' }}>Privacy Policy</Link>
          <Link href="#terms" mx={2} _hover={{ color: 'gray.400' }}>Terms of Use</Link>
          <Link href="#accessibility" mx={2} _hover={{ color: 'gray.400' }}>Accessibility</Link>
          <Link href="#site-map" mx={2} _hover={{ color: 'gray.400' }}>Site Map</Link>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Footer;
