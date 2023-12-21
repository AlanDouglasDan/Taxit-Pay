import { Fragment, PropsWithChildren } from "react";

import { Footer, Header } from "../components";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};
