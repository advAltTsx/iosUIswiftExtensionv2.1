"use client";

import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      SA-B?
    </h1></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-[70vh]">
          <DrawerHeader >
            <div className='h-auto w-full flex items-center justify-start'>
            <DrawerClose asChild>
              <Button variant="ghost"><h1 className=' text-blue-600'>Cancel</h1></Button>
            </DrawerClose>
            </div>
            <div className='flex flex-col items-center justify-center text-center h-full my-10'>
            <DrawerTitle>Still here</DrawerTitle>
            <DrawerDescription>How are you?</DrawerDescription>
            <br />
            <blockquote className="mt-6">{"Tbh, I fear talking to non-boys."}</blockquote>
            <blockquote className="mb-6">{"Also, I need your help."}</blockquote>
            <br />
            <DrawerTitle>{"I hope you understand"}</DrawerTitle>
            <DrawerDescription>{"Let's meet IRL"}</DrawerDescription>

            </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer> */}

      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs"
      >
        <CarouselContent className="-mt-1 h-[50vh]">
          <CarouselItem className="pt-1 md:basis-1/2">
            <div className="h-full w-full flex items-center justify-center text-center rounded-2xl">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={"link"}>
                    <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                      ADVNote
                    </h1>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className=" h-auto">
                    <DrawerHeader>
                      <div className="h-auto w-full flex items-center justify-start">
                        <DrawerClose asChild>
                          <Button variant="ghost">
                            <h1 className=" text-blue-600">Close</h1>
                          </Button>
                        </DrawerClose>
                      </div>
                      <div className="flex flex-col justify-center text-center h-full my-10">
                      <DrawerTitle>100 Users <Link href="https://advnote.vercel.app"><span className="text-blue-600 underline">@ADVNote</span></Link>  completed</DrawerTitle>
           <DrawerTitle> 372 notes created</DrawerTitle>
           <DrawerTitle>19, max sign-ups in a day</DrawerTitle>
           <DrawerTitle>57, max logins in a day</DrawerTitle>
           
                      </div>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </CarouselItem>


          <CarouselItem className="pt-1 md:basis-1/2">
            <div className="h-full w-full flex items-center justify-center text-center rounded-2xl">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={"link"}>
                    <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                      SA-B
                    </h1>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className=" h-auto">
                    <DrawerHeader>
                      <div className="h-auto w-full flex items-center justify-start">
                        <DrawerClose asChild>
                          <Button variant="ghost">
                            <h1 className=" text-blue-600">Thik hai samjh gaye</h1>
                          </Button>
                        </DrawerClose>
                      </div>
                      <div className="flex flex-col justify-center text-center h-full my-10 px-12">
                      <DrawerTitle>I could do some weird things while talking so pls bear that</DrawerTitle>
           
           
                      </div>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </CarouselItem>
          <CarouselItem>
          <div className="h-full w-full flex items-center justify-center text-center rounded-2xl">
          <Button
      variant="link"
      onClick={() =>
        toast("Let me live freely just like you, and make some friends IRL", {
          description: "I'm really not upset, angry or anything on you, ATB42MRW",
          action: {
            label: "Oke",
            onClick: () => console.log("Made SugarByte Toast"),
          },
        })
      }
    >
      <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                      SugarByte
                    </h1>
    </Button>
             </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
