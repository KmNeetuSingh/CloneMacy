import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Input, Link as ChakraLink, Text } from '@chakra-ui/react';

const externalLink = "https://www.macys.com/";

const links = [
    { to: "/", label: "Women" },
    { to: "/login", label: "Login" },
    { to: "/Men", label: "Men" },
    { to: "/Baby", label: "Baby" }
];

export default function Navbar() {
    return (
        <Flex flexDirection="column" alignItems="center" bg="white" p="4" boxShadow="sm" width="100%">
            <Flex flexDirection="row" justifyContent="space-between" width="100%" mb="2">
                <Text fontSize="md" color="black">We now ship to 200 locations worldwide</Text>
                <Text fontSize="sm" color="black">Order Tracking | Stores | Gift Registry | Shipping to India</Text>
            </Flex>
            <Flex flex="1" alignItems="center" justifyContent="space-between" width="100%" mt="2">
                <Text fontSize="2xl" color="black">
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Macy's</Link>
                </Text>
                <Input 
                    type="text" 
                    placeholder="Search..." 
                    size="md" 
                    borderRadius="md" 
                    flex="1" 
                    ml="4"
                    bg="white" 
                    color="black"
                />
            </Flex>
            <Flex flex="1" justifyContent="center" mt="2" width="100%">
                {links.map((link, index) => (
                    <React.Fragment key={link.to}>
                        <Link to={link.to} style={{ textDecoration: 'none', margin: '0 15px', color: 'black' }}>
                            <ChakraLink fontSize="lg" color="black">
                                {link.label}
                            </ChakraLink>
                        </Link>
                        {index !== links.length - 1 && <Box width="80px" />}
                  </React.Fragment>
                ))}
            </Flex>
        </Flex>
    );
}
