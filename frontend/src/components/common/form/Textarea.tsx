import { memo, VFC } from 'react'
import { Textarea as ChakraTextarea } from '@chakra-ui/react'

type Props = {
  id?: string
  styles?: { mt?: string; mb?: string; mr?: string; minHeight?: number }
}

export const Textarea: VFC<Props> = memo((props) => {
  const { id, styles = { mt: '0', mb: '0', mr: '0', minHeight: 100 } } = props
  return (
    <ChakraTextarea
      id={id}
      mb={styles.mb}
      minHeight={styles.minHeight}
      _hover={{ bg: 'gray.50' }}
    />
  )
})
