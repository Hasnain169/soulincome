// Sidebar.js

import React from 'react';
import { List, Flex, Icon, Box } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  DragHandleIcon,
  TimeIcon,
  CopyIcon,
  BellIcon,
  SettingsIcon,
  ArrowForwardIcon,
  ViewIcon,
} from '@chakra-ui/icons';

export default function Sidebar() {
  const location = useLocation();

  return (
    <List color="black" fontSize="1.2em">
      <NavLink to="/dashboard">
        <Box
          bg={location.pathname === '/dashboard' ? 'rgba(231, 234, 238, 1)' : 'transparent'}
          w="100%"
          justifyContent="flex-start"
          mb={5}
          p={2} // Add padding to ensure the entire box is clickable
        >
          <Flex align="center">
            <Icon as={DragHandleIcon} mr={2} />
            Dashboard
          </Flex>
        </Box>
      </NavLink>

      <NavLink to="/invite">
        <Box w="100%" justifyContent="flex-start" mb={2} p={2}
        bg={location.pathname === '/invite' ? 'rgba(231, 234, 238, 1)' : 'transparent'}
        >
          <Flex align="center">
            <Icon as={TimeIcon} mr={2} />
            Invite
          </Flex>
        </Box>
      </NavLink>

      <NavLink to="/form">
        <Box w="100%" justifyContent="flex-start" mb={2} p={2}
        bg={location.pathname === '/form' ? 'rgba(231, 234, 238, 1)' : 'transparent'}
        >
          <Flex align="center">
            <Icon as={CopyIcon} mr={2} />
            Form
          </Flex>
        </Box>
      </NavLink>

      <NavLink to="/docs">
        <Box w="100%" justifyContent="flex-start" mb={2} p={2}
        bg={location.pathname === '/docs' ? 'rgba(231, 234, 238, 1)' : 'transparent'}
        >
          <Flex align="center">
            <Icon as={ViewIcon} mr={2} />
            Docs
          </Flex>
        </Box>
      </NavLink>

      <NavLink to="/notifications">
        <Box w="100%" justifyContent="flex-start" mb={"89%"} p={2}
        bg={location.pathname === '/notifications' ? 'rgba(231, 234, 238, 1)' : 'transparent'}
        >
          <Flex align="center">
            <Icon as={BellIcon} mr={2} />
            Notifications
          </Flex>
        </Box>
      </NavLink>

      <NavLink to="/settings">
        <Box w="100%" justifyContent="flex-start" mb={2} p={2}
        bg={location.pathname === '/settings' ? 'rgba(231, 234, 238, 1)' : 'transparent'}
        >
          <Flex align="center">
            <Icon as={SettingsIcon} mr={2} />
            Settings
          </Flex>
        </Box>
      </NavLink>

      <Box mb={5} borderBottom="3px solid #E2E8F0" />

      <NavLink to="/logout">
        <Box w="100%" justifyContent="flex-start" p={2}
        bg={location.pathname === '/logout' ? 'rgba(231, 234, 238, 1)' : 'transparent'}>
          <Flex align="center">
            <Icon as={ArrowForwardIcon} mr={2} />
            Logout
          </Flex>
        </Box>
      </NavLink>
    </List>
  );
}
