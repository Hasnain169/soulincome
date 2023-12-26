import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Button,
  Text,
  Avatar,
  Switch,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { AiOutlineBell } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [isSwitchOn, setSwitchOn] = useState(true);
  const navigate = useNavigate();

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      bg={isSwitchOn ? 'rgba(253, 253, 253, 1)' : 'gray.700'}
      direction={{ base: 'column', md: 'row' }}
    >
      {/* Left Side */}
      <Flex align="center" mb={{ base: 4, md: 0 }} ml={{ base: 2, md: 10 }}>
  <Text fontSize={{ base: '2xl', md: '4xl' }} mb={6} color={isSwitchOn ? 'black' : 'white'}>
    soul
  </Text>
  <Text fontSize={{ base: '2xl', md: '4xl' }} mb={6} color={isSwitchOn ? 'rgba(4, 120, 87, 1)' : 'white'}>
    income
  </Text>
</Flex>


      {/* Right Side */}
      <Flex align="center" mr={{ base: 2, md: 8 }}>
        {/* Notification Icon */}
        <Button variant="link" mr={4}>
          <AiOutlineBell size={20} color={isSwitchOn ? 'black' : 'white'} />
        </Button>

        {/* Avatar with 'E' */}
        <Avatar size="sm" name="E" bg="blue.500" mr={4} />

        {/* Text 'Alex Wesey' */}
        <Text fontSize={{ base: 'sm', md: 'md' }} mr={4} color={isSwitchOn ? 'black' : 'white'}>
          Alex Wesey
        </Text>

        {/* Dropdown Icon */}
        <Menu>
          <MenuButton mr={4} color={isSwitchOn ? 'black' : 'white'}>
            &#9660;
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
            <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
            <MenuItem onClick={() => navigate('/logout')}>Logout</MenuItem>
          </MenuList>
        </Menu>

        {/* Switch Button with icons */}
        <Flex align="center">
          {isSwitchOn ? (
            <FaSun color={isSwitchOn ? 'yellow' : 'white'} size={20} />
          ) : (
            <FaMoon color={isSwitchOn ? 'gray' : 'white'} size={20} />
          )}
          <Switch
            colorScheme={isSwitchOn ? 'teal' : 'gray'}
            onChange={handleSwitchChange}
            size="lg"
            ml={2}
            style={{
              transition: 'background-color 1s',
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
