import Image from "next/image";
import HeroImage from "@/assets/image/hero.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-full w-full bg-slate-950">
      <section className="hero h-screen w-screen">
        <div className="h-[70%] w-full">
          <Image src={HeroImage} alt="LoanLink" className="h-full w-full object-contain" />
        </div>
        <div className="h-[30%] w-full bg-slate-50 flex justify-center items-center">
          <div className="h-full w-[50%] flex flex-col gap-3 justify-center items-center">
            <h1 className="font-bold text-[50px]">Find A Lender Near You</h1>
            <p className="text-muted-foreground text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor facilis, distinctio impedit sit amet veniam labore consectetur consequuntur tempora quod dolores doloremque modi laborum possimus. Tempora minima quasi placeat harum.
            </p>
            <p className="p-4">
              <Link href="/auth/login">
                <Button className="max-w-max px-8 rounded-lg min-w-[220px] p-4 h-[45px] font-semibold">Get Started</Button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
