import Image from "next/image";

export function AboutUs() {
    return (
        <div className="w-full flex-1 flex flex-col items-center">
            <Image
                src="/assets/image-app-mobile.png"
                alt="Demonstrativo do aplicativo para celular do MindHelping"
                width={1920}
                height={0}
                className="w-96 md:w-[36rem] h-auto"
            />
            <div className="space-y-1">
                <h2 className="text-2xl md:text-4xl font-medium">Sobre nós</h2>
                <p className="font-light md:text-2xl">
                    Nosso aplicativo leva a saúde mental para todos os cantos do Brasil, deve ser acessível a todos. Buscamos profissionais comprometidos com a missão de tornar o cuidado emocional acessível a todos.
                    Junte-se a nós e faça
                    parte de uma comunidade que transforma vidas através da
                    saúde mental.
                </p>
            </div>
        </div>
    )
}