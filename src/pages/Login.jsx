// src/components/LoginPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import image from '../../public/img/left-side.png';

export default function Login() {
  const [button2Index, setButton2Index] = useState(0);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    alert('Login button clicked');
  };

  const handleRegister = () => {
    // Navigate to the register page
    navigate('/register');
  };

  const button2Info = [
    { text: 'GROWTH', textColor: 'white', bgColor: '#2d76c4' },
    { text: 'SUCCESS', textColor: 'white', bgColor: '#a1c42d' },
    { text: 'PROSPERITY', textColor: 'white', bgColor: 'rgba(27, 187, 132, 1)' },
    { text: 'FINANCIAL', textColor: 'white', bgColor: '#11D49D' },
  ];

  useEffect(() => {
    // Change text every 2 seconds
    const interval = setInterval(() => {
      setButton2Index((prevIndex) => (prevIndex + 1) % button2Info.length);
    }, 2000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [button2Info.length]);

  const currentButton2Info = button2Info[button2Index];

  const sampStyle = {
    fontFamily: 'Arial, sans-serif',
    borderRadius: '4px',
    fontSize: '40px',
    color: 'rgba(16, 2, 63, 1)',
  };

  const sampStyle2 = {
    fontFamily: 'Arial, sans-serif',
    borderRadius: '4px',
    fontSize: '40px',
    color: 'white',
  };

  const sampStyle3 = {
    fontFamily: 'Arial, sans-serif',
    borderRadius: '4px',
    color: 'white',
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      height="100vh"
      overflow="hidden"
    >
      {/* Left Quarter: Image with Buttons */}
      <Box
        flex={{ base: '1', md: '1.5' }}
        bg="white"
        color="white"
        p={8}
        display={{ base: 'none', md: 'block' }}
      >
        {/* Replace the URL with the actual path to your image */}
        <img
          src={image}
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '4px', // Add border-radius to the image
          }}
        />

        {/* Buttons */}
        <Flex direction={{ base: 'column', md: 'row' }} mt={{ base: 0, md: '-47%' }} ml={{ base: 0, md: '60%' }}>
          <Flex direction={{ base: 'column' }} mb={{ base: 2, md: 0 }}>
            <Button
              colorScheme="rgba(243, 205, 44, 1)"
              color="#F3CD2C"
              mb={{ base: 2, md: 2 }}
              mr={{ base: 0, md: 2 }}
              variant="outline"
              cursor="context-menu"
            >
              UNLOCK YOUR
            </Button>
            <Button
              colorScheme="rgba(243, 205, 44, 1)"
              color="#F3CD2C"
              variant="outline"
              cursor="context-menu"
            >
              POTENTIAL WITH
            </Button>
          </Flex>
          <Flex direction={{ base: 'column' }}>
            <Button
              colorScheme="custom"
              mb={{ base: 2, md: 2 }}
              color={currentButton2Info.textColor}
              bgColor={currentButton2Info.bgColor}
              cursor="context-menu"
            >
              {currentButton2Info.text}
            </Button>
            <Button
              colorScheme="rgba(243, 205, 44, 1)"
              color="#F3CD2C"
              variant="outline"
              ml={{ base: 2, md: 2 }}
              cursor="context-menu"
            >
              SOULINCOME
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* Right Three-Quarters: Login Form */}
      <Box flex="1" p={{ base: 4, md: 8 }} bg="rgba(27, 187, 132, 1)">
        <Box
          width="100%"
          mx="auto"
          textAlign="center"
          mt={{ base: '25%', md: '37%' }}
        >
          <Text fontSize={{ base: '2xl', md: '4xl' }} mb={6} color="rgba(16, 2, 63, 1)">
            sou
            <samp style={sampStyle}>l</samp>
            <samp style={sampStyle2}>i</samp>
            <samp style={sampStyle3}>ncome</samp>
          </Text>
          <Flex justify="center">
            <Button
              size={{ base: 'md', md: 'lg' }}
              colorScheme="custom"
              color="white"
              bgColor="rgba(17, 212, 157, 1)"
              cursor="pointer"
              mr={2}
              onClick={handleLogin}
            >
              LOG IN
            </Button>
            <Button
              size={{ base: 'md', md: 'lg' }}
              colorScheme="custom"
              color="rgba(17, 212, 157, 1)"
              variant="outline"
              cursor="pointer"
              onClick={handleRegister}
            >
              REGISTER
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
