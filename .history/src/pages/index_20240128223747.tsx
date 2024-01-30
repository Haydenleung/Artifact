import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/components/CaseStudy";

export default function Home() {
  return (
    <main className={"page"}>
      <Navbar />
      <div className={"caseStudy"}>
        <CaseStudy />
      </div>
    </main>
  )
}
