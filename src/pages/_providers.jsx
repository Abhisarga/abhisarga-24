import { NextUIProvider } from '@nextui-org/react'
import { ChakraProvider } from '@chakra-ui/react'

/**
 * @param {any} param0 
 * @returns 
 */
export function Providers({ children }) {
    return (
        <NextUIProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </NextUIProvider>
    )
}