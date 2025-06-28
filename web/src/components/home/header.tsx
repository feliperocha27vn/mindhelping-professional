import Image from "next/image";

export function Header() {
    return (
        <div className="">
            <Image
                src="/assets/logo-mind-helping-profissional.png"
                alt="Logo do MindHelping Profissionais"
                width={500}
                height={0}
                className="p-2 w-72 h-auto md:w-[29rem]"
            />
        </div>
    )
}