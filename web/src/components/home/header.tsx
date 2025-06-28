import Image from "next/image";
import { Button } from "../ui/button";

export function Header() {
    return (
        <div className="w-full flex justify-center items-center xl:justify-between">
            <Image
                src="/assets/logo-mind-helping-profissional.png"
                alt="Logo do MindHelping Profissionais"
                width={500}
                height={0}
                className="p-2 w-72 h-auto md:w-[29rem] xl:w-80"
            />
            <div className="hidden xl:flex gap-x-4 pr-2">
                <Button className="group text-xl font-light bg-zinc-500 rounded-3xl p-5 cursor-pointer" variant="default">
                    Trabalhe conosco
                </Button>
                <Button className="group text-xl font-light bg-zinc-500 rounded-3xl p-5 cursor-pointer" variant="default">
                    FAQ
                </Button>
                <Button className="group text-xl font-light bg-zinc-500 rounded-3xl p-5 cursor-pointer" variant="default">
                    Contato
                </Button>
            </div>
        </div>
    )
}