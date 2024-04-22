import * as React from "react";
import NavigationBar from "@/components/home/NavigationBar/NavigationBar";
import MobileNavigationBar from "@/components/home/MobileNavigationBar/MobileNavigationBar";
import Hero from "@/components/home/Hero/Hero";
import ProblemSolution from "@/components/home/ProblemSolution/ProblemSolution";
import Footer from "@/components/home/Footer/Footer";
import DownloadApp from "@/components/home/DownloadApp/DownloadApp";
import { Divider } from "@mui/material";
import MobileHero from "@/components/home/MobileHero/MobileHero";
import MobileProblemSolution from "@/components/home/MobileProblemSolution/MobileProblemSolution";
import MobileDownloadApp from "@/components/home/MobileDownloadApp/MobileDownloadApp";

export default function Home() {
  return (
    <>
      <NavigationBar isSignInPage={false} isSignUpPage={false}/>
      <MobileNavigationBar isSignInPage={false} isSignUpPage={false}/>
      <Hero />
      <MobileHero />
      <ProblemSolution />
      <MobileProblemSolution />
      <Divider />
      <DownloadApp />
      <MobileDownloadApp />
      <Divider />
      <Footer />
    </>
  );
}
