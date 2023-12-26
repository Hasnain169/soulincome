import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Settings() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" templateRows="auto 1fr" bg="gray.50" minHeight="100vh">
      {/* Navbar */}
      <GridItem colSpan={6} > {/* Adjusted padding */}
        <Navbar />
      </GridItem>

      {/* Sidebar */}
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="rgba(253, 253, 253, 1)"
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>

      {/* Main Content */}
      <GridItem colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px" bg="#E8EFF0">
        {/* Dashboard Content */}
        <div>settings</div>
      </GridItem>
    </Grid>
  );
}
