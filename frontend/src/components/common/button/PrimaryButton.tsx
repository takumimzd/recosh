import { memo, ReactNode, VFC } from "react"
import { Button, Text } from "@chakra-ui/react"

type Props = {
  children: ReactNode;
  onClick?: any
  styles?: {mt?: string, mb?: string, mr?: string}
  type?: "submit" | "reset" | "button"
}

export const PrimaryButton: VFC<Props>  = memo((props) => {
  const { children, onClick, styles = { mt: "0", mb: "0", mr: "0"}, type = "button" } = props
  return (
    <Button type={type} color="gray.700" border="1px" borderColor="gray.500" bg="orange.50" mt={styles.mt} mb={styles.mb} mr={styles.mr} _hover={{ bg: "orange.100" }} onClick={onClick}>
      <Text fontSize='sm'>{children}</Text>
    </Button>
  )
});