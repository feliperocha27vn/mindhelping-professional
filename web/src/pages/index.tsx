import { AboutUs } from "@/components/home/about-us";
import AccordionFaq from "@/components/home/accordion-faq";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { WorkWithUs } from "@/components/home/work-with-us";

export default function Home() {
	return (
		<div className="min-h-screen flex-1 flex flex-col items-center bg-[url(/assets/full-shot-young-woman-undergoing-therapy.png)] bg-cover bg-no-repeat font-sans text-white">
			<div className="max-w-[95rem] w-full"> 
				<Header />
				<div className="px-8 mb-5 space-y-8 md:space-y-16">
					<AboutUs />
					<WorkWithUs />
					<AccordionFaq />
					<Footer />
				</div>
			</div>
		</div>
	);
}
