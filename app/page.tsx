import * as React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MobileNavigationBar from "../components/MobileNavigationBar/MobileNavigationBar";
import Hero from "../components/Hero/Hero";
import ProblemSolution from "../components/ProblemSolution/ProblemSolution";
import Footer from "@/components/Footer/Footer";
import DownloadApp from "@/components/DownloadApp/DownloadApp";
import { Divider } from "@mui/material";
import MobileHero from "@/components/MobileHero/MobileHero";
import MobileProblemSolution from "@/components/MobileProblemSolution/MobileProblemSolution";
import MobileDownloadApp from "@/components/MobileDownloadApp/MobileDownloadApp";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <MobileNavigationBar />
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
