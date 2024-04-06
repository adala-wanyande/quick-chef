import * as React from "react";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";

export default function Home() {
  return (
    <>
        <NavigationBar />
        <Hero />
        <ProblemSolution />
    </>
  );
}
