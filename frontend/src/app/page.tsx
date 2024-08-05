import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import dineInLogo from "../../public/dinein-logo.png"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="bg-background-landing flex min-h-screen flex-col items-center justify-center">
      {/* <MaxWidthWrapper> */}
        <div className="flex flex-col">
          <Image
            className=""
            src={dineInLogo.src}
            alt="DineIn Logo"
            width={180}
            height={37}
            priority
          />
          {/* <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button> */}
        </div>

      {/* </MaxWidthWrapper> */}
    </main>
  );
}
