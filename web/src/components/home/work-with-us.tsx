import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function WorkWithUs() {
    return (
        <div className="space-y-2.5 md:space-y-4 md:flex md:flex-col md:items-center xl:flex-row xl:justify-between">
            <div className="flex flex-col items-center gap-y-2.5 xl:self-start xl:w-5/12 xl:space-y-10 xl:mt-16">
                <div className="flex flex-col items-center space-y-2.5 xl:space-y-10">
                    <div className="w-full">
                        <h2 className="text-2xl md:text-4xl font-medium xl:text-5xl">
                            Trabalhe conosco
                        </h2>
                    </div>
                    <Image
                        src="/assets/psicologa-persona.png"
                        alt="Profissional de psicologia"
                        width={1920}
                        height={0}
                        className="md:w-[36rem] xl:hidden"
                    />
                    <div className="md:space-y-1">
                        <p className="font-light md:text-2xl">
                            Nosso aplicativo leva a saúde mental para todos os cantos do Brasil,
                            deve ser acessível a todos. Buscamos profissionais comprometidos
                            com a missão de tornar o cuidado emocional acessível a todos.
                        </p>
                        <p className="font-semibold md:text-2xl">
                            Junte-se a nós e faça
                            parte de uma comunidade que transforma vidas através da
                            saúde mental.
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <Link href="/register">
                        <Button className="cursor-pointer text-2xl py-6 px-9 rounded-4xl md:text-4xl md:py-8 md:px-16 xl:py-9 xl:px-20">
                            Junte-se a nós
                        </Button>
                    </Link>
                </div>
            </div>
            <Image
                src="/assets/psicologa-persona.png"
                alt="Profissional de psicologia"
                width={1920}
                height={0}
                className="hidden xl:block xl:w-[36rem]"
            />
        </div>
    )
}