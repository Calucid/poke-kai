import { Box, Heading, Text, Image, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="xl" textAlign="center">
          Visit Poke Kai
        </Heading>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/poke-kai/restaurant-exterior" 
          alt="Poke Kai Exterior" 
          width="100%" 
          maxW="800px" 
          height="auto" 
          borderRadius="md" 
        />

        <Box textAlign="center">
          <Heading as="h2" size="lg">Location</Heading>
          <Text fontSize="lg">3337 Hamilton Blvd, Allentown, PA 18103, USA</Text>
          <Text fontSize="lg">Phone: <Link href="tel:+16103512222">(610) 351-2222</Link></Text>
        </Box>

        <Box width="100%" maxW="800px">
          <iframe
            title="Poke Kai Location"
            width="100%"
            height="400px"
            style={{ border: 0, borderRadius: "8px" }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=3337+Hamilton+Blvd,+Allentown,+PA+18103`}
          ></iframe>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg">Hours</Heading>
          <VStack spacing={2}>
            <Text fontSize="lg">Monday - Friday: 11:00 AM - 9:00 PM</Text>
            <Text fontSize="lg">Saturday - Sunday: 12:00 PM - 10:00 PM</Text>
          </VStack>
        </Box>

        <Divider />

        <Box textAlign="center">
          <Heading as="h2" size="lg">Experience Our Space</Heading>
          <HStack spacing={4} wrap="wrap" justify="center">
            <Image 
              src="http://stock.calucid.com/fetch/calucid/poke-kai/restaurant-interior" 
              alt="Restaurant Interior" 
              width="300px" 
              height="200px" 
              borderRadius="md" 
            />
            <Image 
              src="http://stock.calucid.com/fetch/calucid/poke-kai/seating-area" 
              alt="Seating Area" 
              width="300px" 
              height="200px" 
              borderRadius="md" 
            />
            <Image 
              src="http://stock.calucid.com/fetch/calucid/poke-kai/dining-experience" 
              alt="Dining Experience" 
              width="300px" 
              height="200px" 
              borderRadius="md" 
            />
          </HStack>
        </Box>

        <Divider />

        <Box textAlign="center">
          <Heading as="h2" size="lg">Explore More</Heading>
          <HStack spacing={4} wrap="wrap" justify="center">
            <Link as={RouterLink} to="/" fontSize="lg" color="orange.500">
              Home
            </Link>
            <Link as={RouterLink} to="/menu" fontSize="lg" color="orange.500">
              Menu
            </Link>
            <Link as={RouterLink} to="/about" fontSize="lg" color="orange.500">
              About Us
            </Link>
            <Link as={RouterLink} to="/contact" fontSize="lg" color="orange.500">
              Contact
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Visit;