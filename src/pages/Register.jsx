// src/components/LoginPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Select from 'react-select';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {
  Box,
  Flex,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import image from '../../public/img/left-side.png';

// List of countries
// const countries = [
//   { code: 'US', label: 'United States' },
//   { code: 'GB', label: 'United Kingdom' },
//   // Add more countries as needed
// ];

export default function Login() {
  const [button2Index, setButton2Index] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  const handleRegister = () => {
    // Implement your login logic here
    alert('Register button clicked');
  };

  const handleCardRegister = () => {
    // Implement your registration logic here
    alert('Register button clicked');
  };

  const handleCardClose = () => {
    // Implement logic to close the registration card
    alert('Close button clicked');
  }

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
          width={{ base: '100%', md: '300px' }}
          mx="auto"
          textAlign="center"
          mt="10%" // Adjusted margin-top for centering
        >
          <Text fontSize="4xl" mb={6} color="rgba(16, 2, 63, 1)">
            sou
            <samp style={sampStyle}>l</samp>
            <samp style={sampStyle2}>i</samp>
            <samp style={sampStyle3}>ncome</samp>
          </Text>
          <Flex justify="center">
            <Button
              colorScheme="custom"
              color="rgba(17, 212, 157, 1)"
              variant="outline"
              cursor="pointer"
              mr={2}
              onClick={handleLogin}
            >
              LOG IN
            </Button>
            <Button
              colorScheme="custom"
              color="white"
              bgColor="rgba(17, 212, 157, 1)"
              cursor="pointer"
              onClick={handleRegister}
            >
              REGISTER
            </Button>
          </Flex>
          <Box mt={8} bg="white" p={4} borderRadius={10}>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter Name" required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter Email" required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Contact Number</FormLabel>
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="US"
                international
                style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '0.375rem 0.75rem' }}
                value={selectedCountry}
                onChange={setSelectedCountry}/>
            </FormControl>

            {/* Register and Close buttons within the card */}
            <Flex direction="column" mt={4}>
              <Button
                colorScheme="custom"
                color="white"
                bgColor="rgba(4, 120, 87, 1)"
                cursor="pointer"
                onClick={handleCardRegister}
              >
                Register
              </Button>
              <Button
                colorScheme="custom"
                color="gray"
                // variant="outline"
                cursor="pointer"
                mt={2}
                onClick={handleCardClose}
              >
                Close
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
