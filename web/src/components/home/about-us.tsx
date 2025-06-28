import Image from "next/image";

export function AboutUs() {
    return (
        <div className="w-full flex-1 flex flex-col items-center xl:flex-row xl:justify-between xl:items-start">
            <Image
                src="/assets/image-app-mobile.png"
                alt="Demonstrativo do aplicativo para celular do MindHelping"
                width={1920}
                height={0}
                className="w-96 md:w-[36rem] h-auto xl:w-[40rem]"
            />
            <div className="space-y-1 md:space-y-4 xl:w-5/12 xl:space-y-10 xl:mt-24">
                <h2 className="text-2xl md:text-4xl font-medium xl:text-5xl">Sobre nós</h2>
                <p className="font-light md:text-2xl">
                    MindHelping é um app de apoio à saúde mental, com ferramentas como diário emocional, gráficos de humor e acesso ao CVV. Foi criado para oferecer um espaço seguro, incentivar o autoconhecimento e promover o bem-estar no dia a dia. Cuidar da mente é um
                    ato de amor.
                </p>
            </div>
        </div>
    )
}