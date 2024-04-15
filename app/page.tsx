import * as React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import MobileNavigationBar from '../components/MobileNavigationBar/MobileNavigationBar';
import Hero from '../components/Hero/Hero';
import ProblemSolution from '../components/ProblemSolution/ProblemSolution';
import Footer from '@/components/Footer/Footer';
import DownloadApp from '@/components/DownloadApp/DownloadApp';
import { Divider } from '@mui/material';

export default function Home() {
  return (
    <>
      <NavigationBar  />
      <MobileNavigationBar />
      <Hero />
      <ProblemSolution />
      <Divider />
      <DownloadApp />
      <Divider />
      <Footer />
    </>
  );
}
