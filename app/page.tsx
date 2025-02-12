import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Truck, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to TulipHypermarket
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Your one-stop destination for fresh groceries, household essentials, and more.
              Shop with confidence and enjoy fast delivery to your doorstep.
            </p>
            <div className="space-x-4">
              <Link href="/products">
                <Button size="lg" className="animate-fade-in">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 text-center">
              <ShoppingBag className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Wide Selection</h3>
              <p className="text-muted-foreground">
                Thousands of products from trusted brands
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Truck className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Same-day delivery available
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Secure Shopping</h3>
              <p className="text-muted-foreground">
                100% secure payment processing
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}