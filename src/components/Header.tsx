import { Text, Flex, Button, HStack, Box } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

import { MainContainer } from "../layout";
import { Logo } from "./Logo";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const active = {
    borderBottomWidth: 2.5,
    borderBottomColor: "brand.green.400",
  };

  const inactive = {
    borderBottomWidth: 2.5,
    borderBottomColor: "transparent",
    textDecoration: "none",
  };

  return (
    <MainContainer bg="brand.black.400" px="40px">
      <Flex
        pos="sticky"
        align="center"
        justifyContent="space-between"
        zIndex={100}
        h="90px"
      >
        <HStack>
          <Logo onPress={() => navigate("/")} />

          <Text
            fontWeight="600"
            color="brand.white.100"
            sx={location.pathname === "/" ? active : inactive}
            ml="32px"
            mr="20px"
            cursor={"pointer"}
            onClick={() => navigate("/")}
            display={{ base: "none", lg: "block" }}
            _hover={active}
            px="10px"
            py="3px"
          >
            For Individuals
          </Text>

          <Text
            fontWeight="600"
            color="brand.white.100"
            sx={location.pathname === "/businesses" ? active : inactive}
            // mr="2rem"
            cursor={"pointer"}
            onClick={() => navigate("/businesses")}
            display={{ base: "none", lg: "block" }}
            _hover={active}
            px="10px"
            py="3px"
          >
            For Businesses
          </Text>
        </HStack>

        <HStack gap={"25px"}>
          <Button
            _hover={{ bg: "brand.black.400" }}
            bg="brand.black.400"
            color="brand.white.100"
            px="0"
          >
            About Us
          </Button>

          <Button
            _hover={{ bg: "brand.black.400" }}
            bg="brand.black.400"
            color="brand.white.100"
            px="0"
          >
            Contact
          </Button>

          <Box
            w="2px"
            h="27px"
            bg="white"
            display={{ base: "none", md: "block" }}
          />

          <Button
            _hover={{ bg: "brand.black.400" }}
            bg="brand.black.400"
            color="brand.white.100"
            px="0"
          >
            Login
          </Button>

          <Button
            _hover={{ transform: "scale(1.03)" }}
            transition="all 0.2s ease-in-out"
            background="linear-gradient(151deg, rgba(92, 178, 58, 0.8) 0%, rgba(4, 128, 2, 0.8) 100%)"
            color="white"
            fontWeight={700}
            px="24px"
            py="13px"
            borderRadius={"10px"}
            lineHeight={0.5}
            display={{ base: "none", xl: "block" }}
          >
            Create free account
          </Button>
        </HStack>
      </Flex>

      <Flex justify={"center"} display={{ base: "flex", lg: "none" }}>
        <Text
          fontWeight="600"
          color="brand.white.100"
          sx={location.pathname === "/" ? active : inactive}
          mr="20px"
          cursor={"pointer"}
          onClick={() => navigate("/")}
          _hover={active}
          px={{ base: "0px", sm: "10px" }}
          py="3px"
        >
          For Individuals
        </Text>

        <Text
          fontWeight="600"
          color="brand.white.100"
          sx={location.pathname === "/businesses" ? active : inactive}
          cursor={"pointer"}
          onClick={() => navigate("/businesses")}
          _hover={active}
          px={{ base: "0px", sm: "10px" }}
          py="3px"
        >
          For Businesses
        </Text>
      </Flex>
    </MainContainer>
  );
};
