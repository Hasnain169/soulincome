import React from 'react';
import { Grid, GridItem, Box, Image, Text, SimpleGrid } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import dashboardImage1 from '../../public/img/dashboardImage1.png';
import dashboardImage2 from '../../public/img/dashboardImage2.png';
import dashboardCardImage1 from '../../public/img/dashboardCardImage1.png';
import dashboardCardImage2 from '../../public/img/dashboardCardImage2.png';
import dashboardCardImage3 from '../../public/img/dashboardCardImage3.png';
import dashboardCardImage4 from '../../public/img/dashboardCardImage4.png';

const Dashboard = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" templateRows="auto 1fr" bg="gray.50" minHeight="100vh" overflow="hidden">
      <GridItem colSpan={6}>
        <Navbar />
      </GridItem>

      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="rgba(253, 253, 253, 1)"
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>

      <GridItem colSpan={{ base: 6, lg: 4, xl: 5 }} p={{ base: '20px', lg: '40px' }} bg="#E8EFF0" overflow="hidden">
        <Box>
          <Image src={dashboardImage1} alt="Dashboard Image" mb={0} boxSize={{ base: '100%', lg: '80%' }} />

          <Image
            src={dashboardImage2}
            alt="Dashboard Image"
            boxSize={{ base: '100%', lg: '55%' }}
            mt={{ base: '-5%', lg: '-7%' }}
            ml={{ base: '0', lg: '4.5%' }}
          />

          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Stats
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
            <Box borderRadius="lg" overflow="hidden">
              <Image src={dashboardCardImage1} alt="Card Image" />
            </Box>
            <Box borderRadius="lg" overflow="hidden">
              <Image src={dashboardCardImage2} alt="Card Image" />
            </Box>
            <Box borderRadius="lg" overflow="hidden">
              <Image src={dashboardCardImage3} alt="Card Image" />
            </Box>
            <Box borderRadius="lg" overflow="hidden">
              <Image src={dashboardCardImage4} alt="Card Image" />
            </Box>
          </SimpleGrid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
