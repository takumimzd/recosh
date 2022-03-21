import { Box } from "@chakra-ui/react"

interface Props {
  text: string
  toast: any
}
const ErrorToast = ({text, toast}: Props) => {
  return (
    toast({
      title: text,
      position: 'top-right',
      isClosable: true,
      render: () => (
        <Box color='white' borderRadius={6} p={3} bg='red.400'>
          {text}
        </Box>
      ),
    })
  )
}

export default ErrorToast