import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";

import { MainContainer } from "../../layout";
import BannerImg from "../../assets/images/banner.png";

export const Banner = () => {
  return (
    <Box mb={{ base: "75px", lg: "150px" }}>
      <MainContainer bg="transparent">
        <Flex
          borderRadius={"8px"}
          flexDir="column"
          h="522px"
          w="100%"
          pl={{ base: "24px", md: "52px" }}
          background="linear-gradient(166deg, rgba(92, 178, 58, 0.8) 30.42%, rgba(4, 128, 2, 0.8) 116.94%)"
          justifyContent={"center"}
          pos={"relative"}
        >
          <Box zIndex={2}>
            <Text
              fontSize={{ base: 26, md: 36 }}
              color={"#FFF"}
              fontWeight={600}
            >
              Send funds
            </Text>

            <Text fontSize={{ base: 26, md: 36 }} color={"#FFF"}>
              Remit taxes
            </Text>

            <Text fontSize={{ base: 26, md: 36 }} color={"#FFF"}>
              Buy utilities
            </Text>

            <Button
              //   background="linear-gradient(151deg, rgba(92, 178, 58, 0.8) 0%, rgba(4, 128, 2, 0.8) 100%)"
              bg="white"
              color="brand.green.400"
              fontWeight={400}
              px="24px"
              py="13px"
              w="190px"
              borderRadius={"10px"}
              lineHeight={0.5}
              mt="24px"
            >
              Get Started
            </Button>
          </Box>

          <Image
            src={BannerImg}
            objectFit={"cover"}
            h="100%"
            right={0}
            pos={"absolute"}
          />
        </Flex>
      </MainContainer>
    </Box>
  );
};
