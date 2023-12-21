import { Banner, GetStarted, Hero, PaymentTools, Transact } from "../features/individuals";
import { MainLayout } from "../layout";

export const Individuals = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <PaymentTools />
        <GetStarted type="individual" />
        <Transact />
        <Banner />
      </MainLayout>
    </div>
  );
};
