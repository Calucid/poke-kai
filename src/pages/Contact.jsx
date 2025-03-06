import { Box, Heading, Text, Link, VStack, HStack, Input, Textarea, Button, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Contact Poke Kai
        </Heading>

        <Box textAlign="center">
          <Text fontSize="lg">3337 Hamilton Blvd, Allentown, PA 18103, USA</Text>
          <Text fontSize="lg">(610) 351-2222</Text>
          <Text fontSize="lg">
            Email:{" "}
            <Link href="mailto:contact@pokekai.com" color="orange.500">
              contact@pokekai.com
            </Link>
          </Text>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md">
            Follow Us
          </Heading>
          <HStack justify="center" spacing={4} mt={2}>
            <IconButton as="a" href="https://facebook.com/pokekai" icon={<FaFacebook />} aria-label="Facebook" size="lg" />
            <IconButton as="a" href="https://instagram.com/pokekai" icon={<FaInstagram />} aria-label="Instagram" size="lg" />
            <IconButton as="a" href="https://twitter.com/pokekai" icon={<FaTwitter />} aria-label="Twitter" size="lg" />
          </HStack>
        </Box>

        <Box>
          <Heading as="h2" size="md" textAlign="center">
            Contact Form
          </Heading>
          <VStack spacing={4} mt={4}>
            <Input placeholder="Your Name" size="md" />
            <Input placeholder="Your Email" type="email" size="md" />
            <Textarea placeholder="Your Message" size="md" />
            <Button colorScheme="orange" width="full">
              Send Message
            </Button>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md">
            Location
          </Heading>
          <Box mt={4}>
            <img
              src="http://stock.calucid.com/fetch/calucid/poke-kai/map"
              alt="Poke Kai Location"
              width="100%"
              height="300px"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md">
            Explore More
          </Heading>
          <HStack justify="center" spacing={6} mt={2}>
            <Link as={NavLink} to="/" color="orange.500">
              Home
            </Link>
            <Link as={NavLink} to="/about" color="orange.500">
              About
            </Link>
            <Link as={NavLink} to="/menu" color="orange.500">
              Menu
            </Link>
            <Link as={NavLink} to="/visit" color="orange.500">
              Visit
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Contact;