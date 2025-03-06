import { Box, Heading, Text, Image, VStack, Link, Button, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="center">
        <Image 
          src="http://stock.calucid.com/fetch/calucid/poke-kai/restaurant-exterior" 
          alt="Poke Kai Exterior" 
          width="100%" 
          height="300px" 
          objectFit="cover" 
          borderRadius="md"
        />

        <Heading as="h1" size="2xl" textAlign="center" color="orange.500">
          About Poke Kai
        </Heading>

        <Text fontSize="lg" textAlign="center" px={4}>
          Welcome to Poke Kai, a Japanese-inspired haven for fresh, delicious poke bowls. 
          Located in the heart of Allentown, PA, we bring you an authentic taste of the sea 
          with high-quality ingredients and a passion for flavor.
        </Text>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/poke-kai/fresh-poke-bowl" 
          alt="Fresh Poke Bowl" 
          width="100%" 
          height="250px" 
          objectFit="cover" 
          borderRadius="md"
        />

        <Heading as="h2" size="xl" textAlign="center" color="orange.500">
          Our Story
        </Heading>

        <Text fontSize="lg" textAlign="center" px={4}>
          At Poke Kai, our journey began with a love for Japanese cuisine and a mission to 
          bring fresh, vibrant flavors to our community. Every bowl is crafted with precision, 
          ensuring a perfect balance of taste and texture.
        </Text>

        <Image 
          src="http://stock.calucid.com/fetch/calucid/poke-kai/japanese-aesthetic-interior" 
          alt="Japanese Aesthetic Interior" 
          width="100%" 
          height="250px" 
          objectFit="cover" 
          borderRadius="md"
        />

        <Heading as="h2" size="xl" textAlign="center" color="orange.500">
          Visit Us
        </Heading>

        <Text fontSize="lg" textAlign="center" px={4}>
          Stop by and experience the best poke in town! We are located at:
        </Text>

        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          3337 Hamilton Blvd, Allentown, PA 18103, USA
        </Text>

        <Text fontSize="lg" textAlign="center">
          Have questions? Call us at <Link href="tel:+16103512222" color="orange.500">(610) 351-2222</Link>
        </Text>

        <Button as={RouterLink} to="/visit" colorScheme="orange" size="lg">
          Plan Your Visit
        </Button>

        <Button as={RouterLink} to="/menu" variant="outline" colorScheme="orange" size="lg">
          View Our Menu
        </Button>
      </VStack>
    </Container>
  );
};

export default About;