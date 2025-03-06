import { Box, Button, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box w="100%" minH="100vh" bg="white">
      {/* Hero Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" p={10} bg="orange.100">
        <VStack spacing={6} align="start" maxW="600px">
          <Heading as="h1" size="2xl" color="orange.500">
            Welcome to Poke Kai
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Experience the finest Japanese-inspired poke bowls, crafted with the freshest ingredients.
          </Text>
          <Button as={Link} to="/menu" colorScheme="orange" size="lg">
            View Menu
          </Button>
        </VStack>
        <Image
          src="http://stock.calucid.com/fetch/calucid/poke-kai/japanese-poke-bowl"
          alt="Poke Bowl"
          w={{ base: "100%", md: "500px" }}
          h="350px"
          objectFit="cover"
          borderRadius="md"
          mt={{ base: 6, md: 0 }}
        />
      </Flex>

      {/* About Section */}
      <Flex direction={{ base: "column-reverse", md: "row" }} align="center" justify="center" p={10}>
        <Image
          src="http://stock.calucid.com/fetch/calucid/poke-kai/japanese-restaurant-interior"
          alt="Restaurant Interior"
          w={{ base: "100%", md: "500px" }}
          h="350px"
          objectFit="cover"
          borderRadius="md"
          mt={{ base: 6, md: 0 }}
        />
        <VStack spacing={6} align="start" maxW="600px">
          <Heading as="h2" size="xl" color="orange.500">
            About Us
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Located in Allentown, PA, Poke Kai brings a touch of Japan to your plate. Our handcrafted poke bowls are made with care and the finest ingredients.
          </Text>
          <Button as={Link} to="/about" colorScheme="orange" size="lg">
            Learn More
          </Button>
        </VStack>
      </Flex>

      {/* Visit Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" p={10} bg="orange.100">
        <VStack spacing={6} align="start" maxW="600px">
          <Heading as="h2" size="xl" color="orange.500">
            Visit Us
          </Heading>
          <Text fontSize="lg" color="gray.700">
            3337 Hamilton Blvd, Allentown, PA 18103, USA
          </Text>
          <Text fontSize="lg" color="gray.700">
            Call us: (610) 351-2222
          </Text>
          <Button as={Link} to="/visit" colorScheme="orange" size="lg">
            Get Directions
          </Button>
        </VStack>
        <Image
          src="http://stock.calucid.com/fetch/calucid/poke-kai/japanese-restaurant-exterior"
          alt="Restaurant Exterior"
          w={{ base: "100%", md: "500px" }}
          h="350px"
          objectFit="cover"
          borderRadius="md"
          mt={{ base: 6, md: 0 }}
        />
      </Flex>

      {/* Contact Section */}
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading as="h2" size="xl" color="orange.500" mb={4}>
          Get in Touch
        </Heading>
        <Text fontSize="lg" color="gray.700" textAlign="center" maxW="600px">
          Have questions or want to place an order? Reach out to us today!
        </Text>
        <Button as={Link} to="/contact" colorScheme="orange" size="lg" mt={4}>
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;