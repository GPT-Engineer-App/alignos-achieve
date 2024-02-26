import React from "react";
import { Link, Flex, Box } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="teal.500" color="white">
      <Box>
        <Link href="/" p="2" ml="4">
          Home
        </Link>
        <Link href="/tasks" p="2" ml="4">
          Tasks
        </Link>
        <Link href="/meetings" p="2" ml="4">
          Meetings
        </Link>
        <Link href="/analytics" p="2" ml="4">
          Analytics
        </Link>
        <Link href="/ai-assistant" p="2" ml="4">
          AI Assistant
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
