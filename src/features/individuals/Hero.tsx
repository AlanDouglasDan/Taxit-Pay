import {
  Box,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import { MainContainer } from "../../layout";

import Woman1 from "../../assets/images/woman1.png";
import Man1 from "../../assets/images/man1.png";
import Woman2 from "../../assets/images/woman2.png";
import GoldCircle from "../../assets/images/goldCircle.png";
import GreenCircle from "../../assets/images/greenCircle.png";
import CircleEmbellishment from "../../assets/images/circleEmbellishment.png";

export const Hero = () => {
  const calculatedHeight = `calc(100vh - 90px)`;
  const calculatedHeight2 = `calc(100vh - 90px - 32px)`;

  return (
    <Box>
      <MainContainer bg="brand.black.400">
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "4fr 6fr", xl: "4.5fr 6fr" }}
          alignItems="center"
          h={{ base: calculatedHeight2, lg: calculatedHeight }}
        >
          <GridItem>
            <Text
              fontSize={{ base: "32px", md: "46px" }}
              fontWeight={600}
              color="white"
              textAlign={{ base: "center", lg: "left" }}
              lineHeight={{ base: "3rem", lg: "3.5rem", xl: "4rem" }}
            >
              Secure & seamless online transactions
            </Text>

            <Text
              color="white"
              mt="20px"
              mb="32px"
              fontSize={{ base: 16, md: 18 }}
              textAlign={{ base: "center", lg: "left" }}
            >
              Providing you with the best online payment experience
            </Text>

            <Flex justify={{ base: "center", lg: "flex-start" }}>
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
          </GridItem>

          <GridItem>
            <Flex
              display={{ base: "none", lg: "flex" }}
              position={"relative"}
              align={"center"}
            >
              <Image
                src={Woman1}
                alt="phone"
                objectFit={"contain"}
                h={{ base: "244px", xl: "284px" }}
                position={"absolute"}
                bottom="0px"
                zIndex={1}
              />
              <Image
                src={GoldCircle}
                alt="phone"
                objectFit={"contain"}
                h={{ base: "95px", xl: "95px" }}
                position={"absolute"}
                bottom={{ base: "141px", xl: "181px" }}
                left={{ base: "170px", xl: "210px" }}
                zIndex={2}
              />
              <Image
                src={Woman2}
                alt="phone"
                objectFit={"contain"}
                h={{ base: "416px", xl: "456px" }}
                position={"absolute"}
                bottom="-170px"
                left={{ base: "160px", xl: "200px" }}
                zIndex={1}
              />
              <Image
                src={GreenCircle}
                alt="phone"
                objectFit={"contain"}
                h="144px"
                position={"absolute"}
                bottom="0px"
                left={"570px"}
                zIndex={2}
                display={{ base: "none", xl: "block" }}
              />
              <Image
                src={CircleEmbellishment}
                alt="phone"
                objectFit={"contain"}
                h={{ base: "214px", xl: "214px" }}
                position={"absolute"}
                bottom={{ base: "-150px", xl: "-130px" }}
                left={{ base: "40px", xl: "80px" }}
              />
              <Image
                src={Man1}
                alt="phone"
                objectFit={"contain"}
                h={{ base: "265px", xl: "285px" }}
                position={"absolute"}
                bottom="-280px"
                left={{ base: "240px", xl: "280px" }}
                zIndex={2}
              />
            </Flex>

            <SimpleGrid
              display={{ base: "grid", lg: "none" }}
              columns={3}
              alignItems={"center"}
            >
              <Image src={Woman2} alt="phone" objectFit={"contain"} w="100%" />

              <Image src={Man1} alt="phone" objectFit={"contain"} w="100%" />

              <Image src={Woman1} alt="phone" objectFit={"contain"} w="100%" />
            </SimpleGrid>
          </GridItem>
        </Grid>
      </MainContainer>
    </Box>
  );
};
