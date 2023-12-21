import { Hero } from "../features/business";
import { Banner, GetStarted, PaymentTools } from "../features/individuals";
import { MainLayout } from "../layout";

export const Business = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <PaymentTools mt={{ base: "17%", lg: "25%", '2xl': "17%" }} />
        <GetStarted type="business" />
        <Banner />
      </MainLayout>
    </div>
  );
};
