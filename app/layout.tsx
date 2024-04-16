import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Head from 'next/head';
import theme from "../theme/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Jost:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Quick Chef</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
}
