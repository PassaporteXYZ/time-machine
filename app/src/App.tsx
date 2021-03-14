import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import CallToActionWithAnnotation from "./homeHeader"
import splitbee from '@splitbee/web';

splitbee.init({
  // To use Splitbee on another subdomain.
  // Token can be found in project settings
  token: 'ZNNTOOIKBJWB',

  // Enable cookie-less mode. Defaults to `false`
  disableCookie: false,

  // Set custom urls when using proxying
  scriptUrl: "https://cdn.splitbee.io/sb.js",
  apiUrl: "https://hive.splitbee.io",
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <CallToActionWithAnnotation />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
