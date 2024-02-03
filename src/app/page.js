import Image from "next/image";
import banner from "@/assets/banner.png"

export default function Home() {
  return (
    <main className="container mx-auto">
      <Image src={banner} alt="banner" title="Wood Items" width={700} height={400} />

    </main>);
}
