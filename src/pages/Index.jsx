import React from "react";
import { Box, Container, Flex, Heading, Text, Button, Stack, Image, VStack, HStack, List, ListItem, ListIcon, Icon } from "@chakra-ui/react";
import { FaCheckCircle, FaBrain, FaUsers, FaChartLine, FaLightbulb, FaRegCalendarCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} as="section">
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={3}>
            Elden: Align, Analyze, Achieve
          </Heading>
          <Text fontSize="lg">The AI-Powered Business Alignment OS</Text>
          <Text fontSize="md" mt={3}>
            Achieve more, together, with the help of AI
          </Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZlJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDB8fHx8MTcwODk1OTAwOHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />

        <Box as="section">
          <Heading as="h2" size="lg" mb={3}>
            Executive Summary
          </Heading>
          <Text fontSize="md">Imagine: A future where goals ignite teams, agreements drive action, and insights reveal your path to success. Stop fighting siloed work, endless meetings, and unclear priorities. Welcome to Elden, the AI-powered business alignment OS that empowers you to achieve more, together.</Text>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} spacing={10}>
          <VStack spacing={5} flex="1">
            <Heading as="h3" size="md">
              Meeting Management
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaRegCalendarCheck} color="green.500" />
                Pre-meeting preparation to optimize agendas and preparation
              </ListItem>
              <ListItem>
                <ListIcon as={FaUsers} color="green.500" />
                In-meeting collaboration with brainstorming and polls
              </ListItem>
              <ListItem>
                <ListIcon as={FaChartLine} color="green.500" />
                Post-meeting summaries with action assignments and follow-up scheduling
              </ListItem>
            </List>
          </VStack>

          <VStack spacing={5} flex="1">
            <Heading as="h3" size="md">
              AI-Powered Assistance
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaBrain} color="blue.500" />
                Generative AI for productivity and collaboration enhancement
              </ListItem>
              <ListItem>
                <ListIcon as={FaLightbulb} color="blue.500" />
                Actionable insights and trend spotting for optimal tool use
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="blue.500" />
                Proactive assistance based on operational data analysis
              </ListItem>
            </List>
          </VStack>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={10} justifyContent="center">
          <Button leftIcon={<Icon as={FaUsers} />} colorScheme="teal" variant="solid">
            Start Aligning
          </Button>
          <Button leftIcon={<Icon as={FaChartLine} />} colorScheme="gray" variant="outline">
            View Analytics
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
