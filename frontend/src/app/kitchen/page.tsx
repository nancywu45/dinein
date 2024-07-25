import Image from "next/image"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search } from "lucide-react"
import apple from "../../../public/backend-store/apple.png"

export default function Kitchen() {
  return (
    <main className="flex min-h-screen flex-col p-12">
      <MaxWidthWrapper>
      <h1 className="font-bold text-4xl">My Kitchen</h1>

      <div className="py-6 relative w-full">
        <Input type="text" placeholder="I have ..." className="placeholder-primary rounded-xl pl-10 text-s bg-zinc-200" />
        <Search className="absolute left-2.5 top-8 w-5 h-5 text-primary" />
      </div>

      <div>
        {/* map items here */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-white flex flex-col h-auto">
              <Image src={apple.src} alt="apple" width={24} height={24} />
              <p><span className="font-bold text-xl">2 </span> Apple</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Apple</DialogTitle>
              {/* <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription> */}
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  defaultValue="2"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  defaultValue="Some apples"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="text-white">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <h3 className="font-semibold text-xl py-8">Recently used</h3>

      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="text-white flex flex-col h-auto">
              <Image src={apple.src} alt="apple" width={24} height={24} />
              <p>Apple</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Apple</DialogTitle>
              {/* <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription> */}
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  defaultValue="2"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  defaultValue="Some apples"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="text-white">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      </MaxWidthWrapper>
    </main>
  )
} 