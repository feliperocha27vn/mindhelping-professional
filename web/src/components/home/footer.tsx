import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function Footer() {
    return (
        <Card className="bg-transparent text-white flex-1 w-full">
            <CardHeader className="xl:hidden">
                <CardTitle className="text-xl md:text-4xl ">MindHeling Profissionais</CardTitle>
            </CardHeader>
            <div className="space-y-5 xl:flex xl:justify-between">
                <CardContent className="space-y-2 xl:flex xl:gap-x-10 xl:w-full">
                    <div className="xl:space-y-4">
                        <h1 className="font-bold text-lg md:text-3xl hidden xl:block">MindHelping Profissional</h1>
                        <p className="font-light md:text-xl">Login</p>
                        <Link href='/register'>
                            <p className="font-light md:text-xl">Criar conta</p>
                        </Link>
                    </div>
                    <div className="mt-6 space-y-2 xl:mt-0 xl:space-y-4">
                        <p className="font-bold text-lg md:text-3xl">Links</p>
                        <p className="font-light md:text-xl">Termos e condições</p>
                        <p className="font-light md:text-xl">Conheça nosso aplicativo</p>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-2.5">
                    <p className="font-bold text-lg md:text-3xl">Contate - nos</p>
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <Mail size={20} className="md:hidden" />
                        <Mail size={30} className="hidden md:block" />
                        <p className="font-light md:text-xl">suporte.mindhelping@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <Phone size={20} className="md:hidden" />
                        <Phone size={30} className="hidden md:block" />
                        <p className="font-light md:text-xl">+55 18 99999-0000</p>
                    </div>
                </CardFooter>
            </div>
        </Card>
    )
}
