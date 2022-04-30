import { memo, ReactNode, VFC } from 'react'
import { Button, Text } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  onClick?: any
  styles?: { mt?: string; mb?: string; mr?: string }
  type?: 'submit' | 'reset' | 'button'
}

export const DangerButton: VFC<Props> = memo((props) => {
  const { children, onClick, styles = { mt: '0', mb: '0', mr: '0' }, type = 'button' } = props
  return (
    <Button
      type={type}
      color='gray.50'
      bg='red.400'
      mt={styles.mt}
      mb={styles.mb}
      mr={styles.mr}
      _hover={{ bg: 'red.500' }}
      onClick={onClick}
    >
      <Text fontSize='sm'>{children}</Text>
    </Button>
  )
})
