import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function Footer() {
    return (
        <Card className="bg-transparent text-white flex-1 w-full">
            <CardHeader>
                <CardTitle className="text-xl md:text-4xl">MindHeling Profissionais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className="font-light md:text-xl">Login</p>
                <p className="font-light md:text-xl">Criar conta</p>
                <div className="mt-6  space-y-2">
                    <p className="font-bold text-lg md:text-3xl">Links</p>
                    <p className="font-light md:text-xl">Termos e condições</p>
                    <p className="font-light md:text-xl">Conheça nosso aplicativo</p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2.5">
                <p className="font-bold text-lg md:text-3xl">Contate - nos</p>
                <div className="flex items-center space-x-2 md:space-x-4">
                    <Mail size={20} className="md:hidden"/>
                    <Mail size={30} className="hidden md:block"/>
                    <p className="font-light md:text-xl">suporte.mindhelping@gmail.com</p>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4">
                    <Phone size={20} className="md:hidden"/>
                    <Phone size={30} className="hidden md:block"/>
                    <p className="font-light md:text-xl">+55 18 99999-0000</p>
                </div>
            </CardFooter>
        </Card>
    )
}
