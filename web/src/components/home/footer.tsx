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
        <Card className="bg-transparent text-white">
            <CardHeader>
                <CardTitle className="text-xl">MindHeling Profissionais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className="font-light">Login</p>
                <p className="font-light">Criar conta</p>
                <div className="mt-6  space-y-2">
                    <p className="font-bold text-lg">Links</p>
                    <p className="font-light">Termos e condições</p>
                    <p className="font-light">Conheça nosso aplicativo</p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2.5">
                <p className="font-bold text-lg">Contate - nos</p>
                <div className="flex items-center space-x-2">
                    <Mail size={20} />
                    <p className="font-light">suporte.mindhelping@gmail.com</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Phone size={20} />
                    <p className="font-light">+55 18 99999-0000</p>
                </div>
            </CardFooter>
        </Card>
    )
}
