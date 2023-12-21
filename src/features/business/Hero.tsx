import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";

import { MainContainer } from "../../layout";

import Family from "../../assets/images/family.png";
import CircleEmbellishment3 from "../../assets/images/circleEmbellishment3.png";

export const Hero = () => {
  const calculatedHeight = `calc(100vh - 90px)`;
  const calculatedHeight2 = `calc(100vh - 90px - 32px)`;

  return (
    <Box>
      <MainContainer bg="brand.black.400">
        <Flex
          justify={"center"}
          h={{ base: calculatedHeight2, lg: calculatedHeight }}
        >
          <Box pos="relative" zIndex={2}>
            <Flex
              align="center"
              flexDir={"column"}
              pt="10%"
              px={{ base: "5%", lg: "15%" }}
            >
              <Text
                fontSize={{ base: "32px", md: "46px" }}
                fontWeight={600}
                color="white"
                textAlign={"center"}
                lineHeight={{ base: "3rem", lg: "4rem" }}
              >
                Manage payroll, compliance & HR in real time
              </Text>

              <Text
                color="white"
                mt="20px"
                mb="32px"
                px="10%"
                textAlign={"center"}
                fontSize={{ base: 16, md: 18 }}
              >
                Make income tax remittances to the state internal revenue
                service for your employees.
              </Text>

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
              >
                Create free account
              </Button>
            </Flex>

            <Image
              src={Family}
              objectFit={"contain"}
              // h={"574px"}
              mt="56px"
              pos="absolute"
            />
          </Box>

          <Image
            src={CircleEmbellishment3}
            objectFit={"contain"}
            h={"496px"}
            pos="absolute"
            bottom="0"
            right={"0"}
            display={{ base: "none", xl: "block" }}
          />
        </Flex>
      </MainContainer>
    </Box>
  );
};
