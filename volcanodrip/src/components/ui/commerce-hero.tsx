"use client";

import { ArrowUpRight, Menu, Search, ShoppingBasket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const coffees = [
  {
    title: "Guatemala Fuego",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    title: "Costa Rica Arenal",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    title: "Colombia Nevado",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    title: "Indonesia Bromo",
    image:
      "https://images.unsplash.com/photo-1477764227684-8c4e5bca6f0d?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    title: "Ethiopia Rift",
    image:
      "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
];

const navigation = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Subscription", href: "#" },
  { name: "Brew Guides", href: "#" },
];

export function CommerceHero() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mt-4 rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100/80 p-1 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
        <header className="flex items-center">
          <div className="flex w-full items-center gap-3 rounded-3xl bg-background/80 p-3 pr-4 backdrop-blur-sm md:w-2/3 lg:w-1/2">
            <a
              href="#"
              className="text-lg font-semibold tracking-[0.3em] text-amber-900"
            >
              VOLCANODRIP
            </a>

            <nav className="ml-4 hidden w-full items-center justify-between text-sm text-muted-foreground lg:flex">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="link"
                  className="relative cursor-pointer text-muted-foreground transition-colors hover:text-amber-900"
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer text-muted-foreground transition-colors hover:text-amber-900"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer text-muted-foreground transition-colors hover:text-amber-900"
              >
                <ShoppingBasket className="h-5 w-5" />
              </Button>
            </nav>

            <Sheet>
              <SheetTrigger asChild className="ml-auto lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer text-muted-foreground transition-colors hover:text-amber-900"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] border-r border-border/60 bg-background/95 p-0 backdrop-blur-md sm:w-[360px]"
              >
                <SheetHeader className="border-b border-border/60 p-6 text-left">
                  <SheetTitle className="text-lg tracking-[0.3em] text-amber-900">
                    VOLCANODRIP
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-1 p-6">
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="h-11 justify-start px-2 text-base font-medium text-muted-foreground transition-colors hover:bg-amber-50 hover:text-amber-900"
                    >
                      {item.name}
                    </Button>
                  ))}
                </nav>
                <Separator className="mx-6" />
                <div className="flex flex-col gap-3 p-6">
                  <Button
                    variant="outline"
                    className="h-11 justify-start gap-2 border-amber-100/70 text-muted-foreground hover:bg-amber-50 hover:text-amber-900"
                  >
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                  <Button
                    variant="outline"
                    className="relative h-11 justify-start gap-2 border-amber-100/70 text-muted-foreground hover:bg-amber-50 hover:text-amber-900"
                  >
                    <ShoppingBasket className="h-4 w-4" />
                    Cart
                    <span className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-amber-900 text-xs font-medium text-amber-50">
                      3
                    </span>
                  </Button>
                </div>
                <Separator className="mx-6" />
                <div className="p-6">
                  <Button className="flex h-11 w-full items-center justify-center bg-amber-900 text-amber-50 shadow-md transition-all duration-300 hover:shadow-lg">
                    Log In
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="ml-auto hidden w-1/2 items-center justify-end gap-4 pr-4 md:flex">
            <Button
              variant="secondary"
              className="group flex items-center rounded-full bg-amber-100 px-1 py-1 text-sm font-medium text-amber-900 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <span className="px-4 py-1.5">Log In</span>
              <div className="m-auto flex h-9 w-9 items-center justify-center rounded-full bg-background text-amber-900 transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </Button>
          </div>
        </header>

        <motion.section
          className="w-full px-4 py-14 sm:py-20"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto text-center">
            <motion.h1
              className="mb-5 text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Coffee from{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                volcanic soil
              </span>{" "}
              around the world.
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            >
              Five single-origin coffees grown on the slopes of volcanoes,
              roasted to keep their sweetness, altitude and lava-bright
              character intact.
            </motion.p>
          </div>
        </motion.section>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {coffees.map((coffee, index) => (
          <motion.div
            key={coffee.title}
            className="group relative min-h-[220px] overflow-hidden rounded-3xl bg-background/80 p-4 shadow-sm ring-1 ring-amber-100/70 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
          >
            <a href={coffee.href} className="absolute inset-0 z-10">
              <h2 className="relative z-10 my-2 text-center text-xl font-semibold tracking-tight text-amber-900">
                {coffee.title}
              </h2>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-3">
                <img
                  src={coffee.image}
                  alt={coffee.title}
                  className="h-auto w-full max-w-[160px] object-contain opacity-95 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                />
              </div>
              <div className="absolute bottom-0 right-0 z-20 flex h-16 w-16 items-center justify-center rounded-tl-2xl bg-background/95 shadow-[0_-8px_30px_rgba(15,23,42,0.18)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-900 text-amber-50 transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

