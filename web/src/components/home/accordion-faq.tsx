import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    id: "1",
    title: "Quem pode se cadastrar na plataforma?",
    content: "Nossa plataforma está aberta para todos os profissionais de saúde mental registrados e ativos, incluindo psicólogos, psiquiatras, terapeutas ocupacionais e outros profissionais da área. Se você possui um CRM válido e busca impactar positivamente a vida de pessoas em todo o Brasil, convidamos você a se juntar à nossa rede."
  },
  {
    id: "2",
    title: "Como funciona o processo de seleção?",
    content: "Nosso processo de seleção é simples e ágil. Solicitamos apenas a verificação do seu CRP para garantir a segurança e a confiança dos nossos pacientes. Após a verificação, você poderá criar seu perfil na plataforma e começar a atender pacientes de todo o Brasil."
  },
  {
    id: "3",
    title: "Existe algum custo para se cadastrar?",
    content: "Não, o cadastro na plataforma é totalmente gratuito para profissionais de saúde mental."
  },
  {
    id: "4",
    title: "Posso atuar como voluntário na plataforma?",
    content: "Sim! Acreditamos que a saúde mental deve ser acessível a todos. Se você deseja oferecer seus serviços de forma voluntária, nossa plataforma é o lugar certo."
  },
  {
    id: "5",
    title: "Como a plataforma garante a segurança dos dados dos pacientes?",
    content: "Priorizamos a segurança e a privacidade dos dados dos nossos pacientes. Nossa plataforma utiliza tecnologia de ponta para proteger as informações e garantir um ambiente seguro para o atendimento online."
  },
]

export default function Component() {
  return (
    <div className="space-y-4 mt-5">
      <h2 className="text-2xl md:text-4xl font-bold">Perguntas frequentes</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full -space-y-px"
        defaultValue="3"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border px-4 py-1 outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]"
          >
            <AccordionTrigger className="md:text-xl py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="pb-2 md:text-lg">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
