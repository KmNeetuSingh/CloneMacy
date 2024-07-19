// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  useToast,
  Box,
  Button,
  Center,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Text,
} from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store token in local storage
        setUser({ email });
        setEmail('');
        setPassword('');
        setError('');
        toast({
          title: "Login successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        window.location.href = '/women'; // Redirect to Women page after successful login
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Failed to login:', err);
      setError('An error occurred. Please try again later.');
      toast({
        title: "Login failed",
        description: "An error occurred. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Center h="100vh">
      <Box w={{ base: '80%', sm: '60%', md: '40%' }} p="6" boxShadow="lg" borderRadius="md">
        <Heading as="h2" size="lg" mb="4" textAlign="center">
          Login
        </Heading>
        {error && (
          <Box mb="4" textAlign="center" color="red.500">
            {error}
          </Box>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mt="4" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button mt="6" colorScheme="blue" width="100%" type="submit">
            Login
          </Button>
        </form>
        {user && (
          <Flex mt="4" justifyContent="center" alignItems="center" flexDirection="column">
            <Text fontSize="lg" color="green.500">
              Welcome, {user.email}!
            </Text>
            <Button mt="4" colorScheme="blue" onClick={() => window.location.href = '/women'}>
              Go to Women Page
            </Button>
          </Flex>
        )}
      </Box>
    </Center>
  );
}

export default Login;
