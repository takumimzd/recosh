import { Box } from "@chakra-ui/react"

interface Props {
  text: string
  toast: any
}
const SuccessToast = ({text, toast}: Props) => {
  return (
    toast({
      title: text,
      position: 'top-right',
      isClosable: true,
      render: () => (
        <Box color='white' borderRadius={6} p={3} bg='orange.300'>
          {text}
        </Box>
      ),
    })
  )
}

export default SuccessToast