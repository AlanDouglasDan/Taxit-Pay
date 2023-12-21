import { Flex, Image } from "@chakra-ui/react";

import IconImage from "../../src/assets/images/logo.png";

export type LogoProps = {
  onPress?: () => void;
};

export const Logo: React.FC<LogoProps> = ({ onPress }) => {
  return (
    <Flex align="center" onClick={onPress} cursor="pointer">
      <Image
        src={IconImage}
        w={{ base: "80px", md: "163px" }}
        objectFit={"contain"}
      />
    </Flex>
  );
};
