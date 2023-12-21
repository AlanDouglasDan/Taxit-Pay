import { Box, Text, Image, SimpleGrid, Flex } from "@chakra-ui/react";

import { MainContainer } from "../../layout";
import Phone from "../../assets/images/phone.png";
import Security from "../../assets/images/security.png";
import Time from "../../assets/images/time.png";

const tools = [
  {
    id: 1,
    image: Phone,
    title: "User Friendly",
    body: "Highly responsive and easy to navigate",
  },
  {
    id: 2,
    image: Security,
    title: "Secure",
    body: "Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.",
  },
  {
    id: 3,
    image: Time,
    title: "Fast",
    body: "Transacting takes only a few seconds - it's convenient and safe.",
  },
];

export type PaymentToolsProps = {
  mt?: any;
};

export const PaymentTools: React.FC<PaymentToolsProps> = ({ mt = "100px" }) => {
  return (
    <Box mt={mt} mb={{ base: "75px", lg: "150px" }}>
      <MainContainer bg="transparent">
        <Flex flexDir={"column"} align={"center"}>
          <Text
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight={700}
            color="brand.grey.400"
            textAlign={{ base: "center", md: "left" }}
            // lineHeight={"28px"}
          >
            Payments tools designed for you
          </Text>

          <Text
            color="brand.grey.400"
            fontSize={{ base: 14, md: 18 }}
            textAlign={{ base: "center", md: "left" }}
            mt="8px"
          >
            Explore payment features that provides you with every possible
            solution
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"24px"} mt="40px">
          {tools.map((tool) => (
            <Box
              borderWidth={"1px"}
              borderColor={"rgba(92, 178, 58, 0.27)"}
              py="80px"
              px="40px"
              borderRadius={"10px"}
              key={tool.id}
            >
              <Image
                src={tool.image}
                objectFit={"contain"}
                w={"80px"}
                mb="20px"
              />

              <Text
                fontSize={"22px"}
                color={"brand.black.300"}
                fontWeight={600}
              >
                {tool.title}
              </Text>

              <Text
                fontSize={{ base: 14, md: 16, lg: 18 }}
                color={"brand.black.350"}
                mt="8px"
              >
                {tool.body}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </MainContainer>
    </Box>
  );
};
