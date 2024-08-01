import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export default function MaxWidthWrapper({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn("h-screen mx-auto w-full max-w-screen-md px-2.5 md:px-20", className)}>{children}</div>
}
