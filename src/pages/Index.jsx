import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box bg="#fff1e5" color="white" py={4}>
        <Container maxW="container.xl">
          <HStack spacing={8}>
            <Heading size="md">Financial Times</Heading>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/">Home</Link>
              <Link as={RouterLink} to="/world">World</Link>
              <Link as={RouterLink} to="/business">Business</Link>
              <Link as={RouterLink} to="/tech">Tech</Link>
              <Link as={RouterLink} to="/markets">Markets</Link>
              <Link as={RouterLink} to="/opinion">Opinion</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.xl" mt={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Featured Article */}
          <Box gridColumn={{ md: "span 2" }} bg="#fff1e5" p={4} borderRadius="md">
            <Heading size="lg" mb={2}>Featured Article</Heading>
            <Text>Summary of the featured article goes here...</Text>
          </Box>

          {/* Sidebar */}
          <Box bg="#fff1e5" p={4} borderRadius="md">
            <Heading size="md" mb={2}>Trending</Heading>
            <VStack align="start" spacing={2}>
              <Link>Trending Article 1</Link>
              <Link>Trending Article 2</Link>
              <Link>Trending Article 3</Link>
              <Link>Trending Article 4</Link>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Grid of Smaller Articles */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
          <Box bg="#fff1e5" p={4} borderRadius="md">
            <Heading size="md" mb={2}>Article 1</Heading>
            <Text>Summary of article 1...</Text>
          </Box>
          <Box bg="#fff1e5" p={4} borderRadius="md">
            <Heading size="md" mb={2}>Article 2</Heading>
            <Text>Summary of article 2...</Text>
          </Box>
          <Box bg="#fff1e5" p={4} borderRadius="md">
            <Heading size="md" mb={2}>Article 3</Heading>
            <Text>Summary of article 3...</Text>
          </Box>
          <Box bg="#fff1e5" p={4} borderRadius="md">
            <Heading size="md" mb={2}>Article 4</Heading>
            <Text>Summary of article 4...</Text>
          </Box>
          <Box bg="#fff1e5" p={4} borderRadius="md">
            <Heading size="md" mb={2}>Article 5</Heading>
            <Text>Summary of article 5...</Text>
          </Box>
          <Box bg="#fff1e5" p={4} borderRadius="md">
            <Heading size="md" mb={2}>Article 6</Heading>
            <Text>Summary of article 6...</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="#fff1e5" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={4}>
              <Link>Contact</Link>
              <Link>Privacy Policy</Link>
              <Link>Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;