import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Real Este</title>
      </Head>

      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </Box>
    </Fragment>
  );
};
export default Layout;
