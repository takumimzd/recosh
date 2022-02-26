import { memo, VFC } from "react"
import NextLink from 'next/link'
import { Heading, Flex, Link, Box } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"

const Header: VFC  = memo(() => {
  return (
    <Flex as="nav" bg="orange.50" color="gray.700" border="1px" borderColor="gray.500" align="center" justify="space-between">
      <NextLink href="/recipes">
        <Heading as="h1" fontSize={{base: "2xl"}} p="2" mr={8} cursor="pointer">Recosh</Heading>
      </NextLink>
      <Flex align="center" flexGrow={2}>
        <Box>
        <NextLink href="/recipes/new">
          <Link pr="7"><EditIcon w={5} h={5} /></Link>
        </NextLink>
        </Box>
      </Flex>
    </Flex>
  )
});

export default Header;