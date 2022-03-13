import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"
import { StoryContext } from "@storybook/react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals

  return (
    <ChakraProvider theme={extendTheme({ direction })}>
      <div dir={direction} id="story-wrapper" style={{ minHeight: "100vh" }}>
        <StoryFn />
      </div>
    </ChakraProvider>
  )
}

export const decorators = [withChakra]