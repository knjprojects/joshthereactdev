import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { classNames } from "@/utility/classNames";
import Navigation from "@/layout/Navbar/Navigation";
import { routes } from "@/data/navigationRoutes";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Footer = dynamic(() => import("@/layout/Footer"), { ssr: true });

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navigation routes={routes} />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
