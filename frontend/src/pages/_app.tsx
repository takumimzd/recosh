import type { AppProps } from 'next/app'
import { Box, Center, ChakraProvider, extendTheme, useMediaQuery } from "@chakra-ui/react"
import Header from 'components/layout/Header'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLargerThan1000] = useMediaQuery('(min-width: 980px)')
  const width = isLargerThan1000 ? "50%" : "100%"
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Center bg="orange.50" pt={30} pb={50}>
        <Box w={width}>
          <Component {...pageProps} />
        </Box>
      </Center>
    </ChakraProvider>
  ) 
}

export default MyApp

export const theme = extendTheme({
  components: {
      Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
      Input: { baseStyle: { _focus: { boxShadow: 'none' } } }
  }
})