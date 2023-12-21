import { useState, useEffect } from "react";
import { Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";

import { MainContainer } from "../../layout";
import Bills from "../../assets/images/bills.png";
import Airtime from "../../assets/images/airtime.png";
import Transfer from "../../assets/images/transfer.png";
import CircleEmbellishment from "../../assets/images/circleEmbellishment2.png";

const activeTab = {
  w: "100%",
  h: "100%",
  bg: "brand.green.400",
};

const inactiveTab = {
  h: "100%",
  bg: "lightgrey",
};

export type GetStartedProps = {
  type: string;
};

export const GetStarted: React.FC<GetStartedProps> = ({ type }) => {
  const [active, setActive] = useState<string>(
    type === "individual" ? "bills" : "payment"
  );
  const [image, setImage] = useState<any>();

  useEffect(() => {
    if (active === "bills") setImage(Bills);
    else if (active === "vtu") setImage(Airtime);
    else if (
      active === "transfer" ||
      active === "payslip" ||
      active === "reports" ||
      active === "payroll" ||
      active === "payment"
    )
      setImage(Transfer);
    else if (active === "toll") setImage(Bills);
  }, [active]);

  const menus = [
    {
      id: 1,
      title: type === "individual" ? "Pay bills" : "Payment",
      body:
        type === "individual"
          ? "Paying your bills has never been so easy."
          : "No more checks, no more envelopes and stamps, you can pay your employees anytime, anywhere",
      state: type === "individual" ? "bills" : "payment",
      image: Bills,
    },
    {
      id: 2,
      title: type === "individual" ? "Buy Airtime & Data" : "Payroll",
      body:
        type === "individual"
          ? "Never get caught with low airtime and data again!"
          : "End-to-end automation of payroll management for organizations, complying with Nigerian tax law and tax optimizations for the user.",
      state: type === "individual" ? "vtu" : "payroll",
      image: Airtime,
    },
    {
      id: 3,
      title: type === "individual" ? "Money Transfer" : "Payslip",
      body:
        type === "individual"
          ? "Transferring money is now hassle-free."
          : "Generates automated TaxiTPaySlip email notifications for each employee/user.",
      state: type === "individual" ? "transfer" : "payslip",
      image: Transfer,
    },
    {
      id: 4,
      title: type === "individual" ? "Pay Toll Fee" : "Reports",
      body:
        type === "individual"
          ? "Never worry about getting a toll ticket again."
          : "Generates automated TaxiTPaySlip email notifications for each employee/user.",
      state: type === "individual" ? "toll" : "reports",
      image: Bills,
    },
  ];

  return (
    <Box mb={{ base: "75px", lg: "150px" }}>
      <MainContainer bg="transparent">
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "4.5fr 5.5fr" }}
          gap="24px"
          alignItems={"center"}
        >
          <Box>
            {menus.map((menu) => (
              <Grid
                key={menu.id}
                gridTemplateColumns={"5px 1fr"}
                gap="24px"
                cursor={"pointer"}
                onClick={() => setActive(menu.state)}
              >
                <GridItem>
                  <Box sx={active === menu.state ? activeTab : inactiveTab} />
                </GridItem>

                <GridItem>
                  <Box
                    pt={menu.id === 1 ? "0px" : "20px"}
                    pb={menu.id === 4 ? "0px" : "20px"}
                  >
                    <Text
                      color="brand.grey.400"
                      fontSize="28px"
                      fontWeight={600}
                      mb="8px"
                    >
                      {menu.title}
                    </Text>

                    <Text color="brand.grey.400" fontSize={18}>
                      {menu.body}
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            ))}
          </Box>

          <Image
            src={image}
            objectFit={"contain"}
            h={{ base: "auto", lg: "711px" }}
            justifySelf={"flex-end"}
            zIndex={2}
          />
        </Grid>

        <Image
          src={CircleEmbellishment}
          objectFit={"contain"}
          h="1085px"
          pos={"absolute"}
          top="165px"
          right={0}
          display={{ base: "none", lg: "block" }}
        />
      </MainContainer>
    </Box>
  );
};
