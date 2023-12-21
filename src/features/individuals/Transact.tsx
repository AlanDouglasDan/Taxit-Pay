import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";

import { MainContainer } from "../../layout";
import TransactImg from "../../assets/images/transact.png";
import AppStore from "../../assets/images/appStore.png";
import PlayStore from "../../assets/images/playStore.png";

export const Transact = () => {
  return (
    <Box mb={{ base: "75px", lg: "150px" }}>
      <MainContainer bg="transparent">
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "5.5fr 4.5fr" }}
          gap="56px"
          alignItems={"center"}
        >
          <GridItem>
            <Flex
              w="100%"
              justify={"center"}
              bg="brand.grey.200"
              borderRadius={"8px"}
              pt="89px"
            >
              <Image
                src={TransactImg}
                objectFit={"contain"}
                w={"407px"}
                h="100%"
              />
            </Flex>
          </GridItem>

          <GridItem>
            <Text fontSize={"2.25rem"} fontWeight={600} color="brand.grey.400">
              Transact on the go
            </Text>

            <Text fontSize={18} color="brand.grey.400" w="70%">
              Stay on top of your business with our easy-to-use app
            </Text>

            <Button
              _hover={{ transform: "scale(1.03)" }}
              transition="all 0.2s ease-in-out"
              background="linear-gradient(151deg, rgba(92, 178, 58, 0.8) 0%, rgba(4, 128, 2, 0.8) 100%)"
              color="white"
              fontWeight={700}
              px="24px"
              w="190px"
              py="13px"
              my="39px"
              borderRadius={"10px"}
              lineHeight={0.5}
            >
              Get Started
            </Button>

            <HStack gap={"24px"} flexDir={{ base: "column", sm: "row" }} align={"flex-start"}>
              <Image
                h={"42px"}
                src={AppStore}
                objectFit={"contain"}
                cursor={"pointer"}
              />

              <Image
                h={"42px"}
                src={PlayStore}
                objectFit={"contain"}
                cursor={"pointer"}
              />
            </HStack>
          </GridItem>
        </Grid>
      </MainContainer>
    </Box>
  );
};
