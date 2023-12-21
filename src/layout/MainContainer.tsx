import React from "react";
import { Box, Container } from "@chakra-ui/react";

interface MainContainerProps extends React.PropsWithChildren {
  bg?: string;
  px?: string;
}

export const MainContainer = ({
  bg,
  children,
  px = "90px",
}: MainContainerProps) => {
  return (
    <Box bg={bg || "transparent"} position="relative">
      <Container px={{ base: "16px", md: px }} maxW={["100%"]}>
        {children}
      </Container>
    </Box>
  );
};
