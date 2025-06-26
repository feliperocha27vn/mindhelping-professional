import Image from "next/image";

export function Header() {
    return (
        <div className="">
            <Image
                src="/assets/logo-mind-helping-profissional.png"
                alt="Logo do MindHelping Profissionais"
                width={400}
                height={0}
            />
        </div>
    )
}