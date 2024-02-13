import { NextUIProvider } from '@nextui-org/react'


/**
 * @param {any} param0 
 * @returns 
 */
export function Providers({ children }) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}