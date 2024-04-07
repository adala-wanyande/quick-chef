import * as React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Hero from "../components/Hero/Hero";
import ProblemSolution from "../components/ProblemSolution/ProblemSolution";

export default function Home() {
  return (
    <>
        <NavigationBar />
        <Hero />
        <ProblemSolution />
    </>
  );
}
