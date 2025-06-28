import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function WorkWithUs() {
    return (
        <div className="space-y-2.5 md:space-y-4 md:flex md:flex-col md:items-center">
            <div className="w-full">
                <h2 className="text-2xl md:text-4xl font-medium">
                    Trablhe conosco
                </h2>
            </div>
            <Image
                src="/assets/psicologa-persona.png"
                alt="Profissional de psicologia"
                width={1920}
                height={0}
                className="md:w-[36rem]"
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
            <Link href="/register">
                <Button className="rounded-3xl w-xl max-w-xl pt-3 pb-11 text-2xl md:text-3xl bg-[#333333] text-white after:flex-1 hover:bg-[#333333]/90">
                    Junte-se a nós
                </Button>
            </Link>
        </div>
    )
}