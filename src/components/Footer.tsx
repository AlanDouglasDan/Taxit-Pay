import { Box, Flex, HStack, Text, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

import { Logo } from "./Logo";
import { MainContainer } from "../layout";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <MainContainer bg="transparent">
      <Box pb="48px">
        <Flex
          alignItems={"center"}
          justifyContent="space-between"
          flexDir={{ base: "column", md: "row" }}
          gap="32px"
        >
          <Flex
            flexDir={"column"}
            align={{ base: "center", md: "flex-start" }}
            w="100%"
          >
            <Logo onPress={() => navigate("/")} />

            <HStack mt={{ base: "32px", md: "56px" }} gap="32px">
              <Icon
                as={FaInstagram}
                boxSize={"24px"}
                color="brand.grey.300"
                cursor={"pointer"}
              />
              <Icon
                as={FaFacebook}
                boxSize={"24px"}
                color="brand.grey.300"
                cursor={"pointer"}
              />
              <Icon
                as={FaTwitter}
                boxSize={"24px"}
                color="brand.grey.300"
                cursor={"pointer"}
              />
            </HStack>

            <Text
              color="brand.grey.300"
              mt="18px"
              display={{ base: "none", md: "block" }}
            >
              2015-2022 Taxaide Technologies Limited. All rights reserved
            </Text>
          </Flex>

          <HStack
            gap="84px"
            align={"flex-start"}
            justify={{ base: "center", md: "flex-start" }}
            w={{ base: "100%", md: "auto" }}
          >
            <Box>
              <Text
                color="brand.black.500"
                fontWeight={600}
                mb="20px"
                fontSize={"18px"}
              >
                About Us
              </Text>

              <Text
                color="brand.grey.300"
                fontWeight={500}
                mb="14px"
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                About
              </Text>

              <Text
                color="brand.grey.300"
                fontWeight={500}
                mb="14px"
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                Legal & privacy
              </Text>
            </Box>

            <Box>
              <Text
                color="brand.black.500"
                fontWeight={600}
                mb="20px"
                fontSize={"18px"}
              >
                Products
              </Text>

              <Text
                color="brand.grey.300"
                fontWeight={500}
                mb="14px"
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                TBook®
              </Text>

              <Text
                color="brand.grey.300"
                fontWeight={500}
                mb="14px"
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                TaxiTWithhold®
              </Text>

              <Text
                color="brand.grey.300"
                fontWeight={500}
                mb="14px"
                _hover={{ textDecoration: "underline" }}
                cursor={"pointer"}
              >
                TaxiTPayroll®
              </Text>
            </Box>
          </HStack>

          <Text
            color="brand.grey.300"
            mt="18px"
            display={{ base: "block", md: "none" }}
            textAlign={"center"}
          >
            2015-2022 Taxaide Technologies Limited. All rights reserved
          </Text>
        </Flex>
      </Box>
    </MainContainer>
  );
};
