import { memo, VFC } from "react"
import { Input as ChakraInput } from "@chakra-ui/react"

type Props = {
  id?: string
  styles?: {mt?: string, mb?: string, mr?: string}
}

export const Input: VFC<Props>  = memo((props) => {
  const { id, styles = { mt: "0", mb: "0", mr: "0"} } = props
  return (
    <ChakraInput
      id={id}
      mb={styles.mb}
      _hover={{ bg: "orange.100" }}
      _focus={{ boxShadow: "none"}}
    />
  )
});