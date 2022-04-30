import { memo, VFC } from 'react'
import NextLink from 'next/link'
import { Heading, Flex, Link, Box } from '@chakra-ui/react'

const Header: VFC = memo(() => {
  return (
    <Flex as='nav' color='gray.700' align='center' boxShadow='md' justify='space-between'>
      <NextLink href='/recipes' passHref>
        <Heading as='h1' fontSize={{ base: '2xl' }} p='2' mr={8} cursor='pointer'>
          Recosh
        </Heading>
      </NextLink>
      <Flex align='center' flexGrow={2}>
        <Box>
          <NextLink href='/recipes/new' passHref>
            <Link pr='7'>レシピを書く</Link>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  )
})

export default Header
