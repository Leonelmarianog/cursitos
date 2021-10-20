import { ChakraProvider, Flex, Image, Heading } from '@chakra-ui/react';
import booksImg from '../../public/images/books.png';

const App = () => (
  <>
    <ChakraProvider>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Image src={booksImg} boxSize="200px" mb={5} alt="books" />
        <Heading as="h1" size="2xl" color="hotpink">
          Hello World
        </Heading>
      </Flex>
    </ChakraProvider>
  </>
);

export default App;
