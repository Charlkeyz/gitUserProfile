import { ReactNode } from "react"
import {NextUIProvider} from "@nextui-org/react";



type NextUiWrapperProps = {
    children: ReactNode
}

export default function NextUiWrapper({children}: NextUiWrapperProps) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}
