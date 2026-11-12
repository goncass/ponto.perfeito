"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";

const whatsappNumber = "351923541868";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

interface Servico {
  id: string;
  numero: string;
  titulo: string;
  descricao: string;
  icone: ReactNode;
  beneficios: readonly string[];
}

interface ProcessoStep {
  numero: string;
  titulo: string;
  descricao: string;
}

interface FAQ {
  pergunta: string;
  resposta: string;
}

const servicos: readonly Servico[] = [
  {
    id: "domestica",
    numero: "01",
    titulo: "Limpeza Doméstica",
    descricao: "Manutenção regular da sua casa, com atenção ao detalhe e ao conforto de toda a família.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    beneficios: ["Quarto e sala", "Cozinha e WC", "Roupa e passar a ferro"],
  },
  {
    id: "profunda",
    numero: "02",
    titulo: "Limpeza Profunda",
    descricao: "Uma limpeza mais completa para deixar cada divisão cuidada e renovada, incluindo áreas de difícil acesso.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    beneficios: ["Eletrodomésticos por dentro", "Armários por fora e por dentro", "Rodapés e portas", "Janelas acessíveis"],
  },
  {
    id: "pos-obras",
    numero: "03",
    titulo: "Limpeza Pós-Obras",
    descricao: "Remoção de pó e sujidade após obras ou remodelações, para preparar o espaço para ser habitado.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    beneficios: ["Remoção de resíduos", "Limpeza de vidros", "Aspiração profunda", "Pronto a habitar"],
  },
  {
    id: "escritorios",
    numero: "04",
    titulo: "Limpeza de Escritórios",
    descricao: "Espaços profissionais limpos, organizados e prontos para receber a sua equipa e clientes.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    beneficios: ["Postos de trabalho", "Salas de reunião", "Zonas comuns", "Horário flexível"],
  },
  {
    id: "vidros",
    numero: "05",
    titulo: "Vidros e Varandas",
    descricao: "Atenção especial aos vidros, janelas e varandas, para um acabamento cuidado e transparente.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M12 3v14" />
        <path d="M2 10h20" />
      </svg>
    ),
    beneficios: ["Vidros interior/exterior", "Varandas e marquises", "Molduras e caixilharias", "Sem riscos nem marcas"],
  },
  {
    id: "especiais",
    numero: "06",
    titulo: "Limpezas Especiais",
    descricao: "Soluções adaptadas às necessidades específicas de cada casa ou espaço, sob consulta.",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    beneficios: ["Mudança de casa", "Limpeza sazonal", "Eventos", "Personalizado"],
  },
];

const faqs: readonly FAQ[] = [
  {
    pergunta: "Como funciona o pedido de orçamento?",
    resposta: "Preenche o formulário com os teus dados e o serviço pretendido. Nós analisamos e entraremos em contacto via WhatsApp ou telefone para confirmar detalhes e agendar, sem qualquer compromisso.",
  },
  {
    pergunta: "Quais as zonas que servem?",
    resposta: "A nossa área principal é Loures e Odivelas, incluindo freguesias limítrofes. Se estiver perto, contacte-nos na mesma — avaliamos a disponibilidade caso a caso.",
  },
  {
    pergunta: "Trazem os vossos próprios produtos e equipamentos?",
    resposta: "Sim, trazemos tudo o que é necessário: produtos de limpeza profissionais, aspiradores, panos de microfibra, baldes, etc. Se preferires os teus próprios produtos (ex: ecológicos, hipoalergénicos), basta avisar.",
  },
  {
    pergunta: "Como é feito o pagamento?",
    resposta: "Aceitamos dinheiro, MB Way ou transferência bancária. O pagamento é feito no final do serviço, após verificação. Para limpezas recorrentes, combinamos a periodicidade (semanal, quinzenal, mensal).",
  },
  {
    pergunta: "E se não ficar satisfeito com o serviço?",
    resposta: "A tua satisfação é a nossa prioridade. Se algo não estiver bem, diz-nos no próprio dia ou no dia seguinte e voltamos para corrigir sem custo adicional. Queremos que confies em nós a longo prazo.",
  },
  {
    pergunta: "Preciso estar em casa durante a limpeza?",
    resposta: "Não é obrigatório. Muitos clientes deixam a chave num local combinado ou usam fechadura inteligente. Combinamos sempre o acesso antecipadamente e enviamos confirmação quando chegamos e quando saímos.",
  },
];

const processo: readonly ProcessoStep[] = [
  {
    numero: "1",
    titulo: "Contactas-nos",
    descricao: "Preenches o formulário ou envias WhatsApp. Respondemos em menos de 2 horas úteis.",
  },
  {
    numero: "2",
    titulo: "Avaliamos juntos",
    descricao: "Falamos sobre o teu espaço, necessidades e frequência. Definimos o serviço à medida.",
  },
  {
    numero: "3",
    titulo: "Agendamos",
    descricao: "Marcamos o dia e hora que te dá mais jeito. Confirmamos tudo por WhatsApp no dia anterior.",
  },
  {
    numero: "4",
    titulo: "Cuidamos do teu espaço",
    descricao: "A nossa equipa chega a horas, trabalha com detalhe e deixa tudo impecável. No fim, confirmamos contigo se está tudo bem.",
  },
] as const;

function Logo({ className = "h-10 md:h-12 w-auto", ariaLabel = "Ponto Perfeito — Limpezas Domésticas e Profissionais" }: { className?: string; ariaLabel?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-label={ariaLabel}
      role="img"
      style={{ display: "block" }}
    >
      <circle cx="50" cy="50" r="48" fill="#1B3A2E" />
      <path
        d="M50 18 C30 18 15 30 15 45 C15 55 25 65 35 72 C40 76 48 78 50 82 C52 78 60 76 65 72 C75 65 85 55 85 45 C85 30 70 18 50 18 Z"
        fill="#FDFBF6"
      />
      <path
        d="M50 18 C50 18 55 35 50 45 C45 55 40 65 38 70"
        stroke="#1B3A2E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 18 C50 18 45 35 50 45 C55 55 60 65 62 70"
        stroke="#1B3A2E"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <polygon
        points="75,25 77,32 84,33 78,38 79,45 75,41 71,45 72,38 66,33 73,32"
        fill="#8F9B7A"
      />
      <circle cx="30" cy="30" r="2" fill="#8F9B7A" opacity="0.6" />
      <circle cx="70" cy="30" r="1.5" fill="#8F9B7A" opacity="0.4" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.57 0 .25 5.31.25 11.85c0 2.09.55 4.13 1.6 5.93L.15 24l6.37-1.67a11.9 11.9 0 0 0 5.57 1.42h.01c6.53 0 11.85-5.32 11.85-11.85 0-3.17-1.23-6.15-3.43-8.42ZM12.1 21.73h-.01a9.87 9.87 0 0 1-5.03-1.37l-.36-.21-3.78.99 1.01-3.69-.23-.38a9.83 9.83 0 0 1-1.51-5.22c0-5.46 4.45-9.9 9.91-9.9a9.83 9.83 0 0 1 7.01 2.91 9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.44 9.9-9.91 9.9Zm5.43-7.42c-.3-.15-1.77-.73-2.04-.81-.23-.09-.39-.13-.55.13-.17.25-.64.81-.78.97-.14.17-.28.19-.53.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.14-.25-.02-.39.1-.51.11-.11.25-.28.37-.42.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.24.9 2.43 1.03 2.59.12.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.16.16 1.59.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function StarIcon({ className = "h-5 w-5", filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function QuoteIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.017 21v-7.391c0-5.314 3.746-7.948 5.983-8.605v2.037c-1.493.417-2.493 1.898-2.493 3.791 0 2.277 1.47 3.76 3.373 3.76.703 0 1.689-.133 2.215-.357l.959 1.014c-.783.425-1.767.68-2.676.68-3.872 0-5.983-3.057-5.983-5.84V3h-2v4.691C5.332 8.454 2 11.582 2 15.488c0 4.483 3.183 7.653 7.217 8.118v3.394h2.8Zm6.966 0v-7.391c0-5.314 3.746-7.948 5.983-8.605v2.037c-1.493.417-2.493 1.898-2.493 3.791 0 2.277 1.47 3.76 3.373 3.76.703 0 1.689-.133 2.215-.357l.959 1.014c-.783.425-1.767.68-2.676.68-3.872 0-5.983-3.057-5.983-5.84V3h-2v4.691C12.299 8.454 8.966 11.582 8.966 15.488c0 4.483 3.183 7.653 7.217 8.118v3.394h2.8Z" />
    </svg>
  );
}

function MapPinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function SparklesIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 3v2m0 14v2m9-9h-2M4 12H2m15.364-5.364l-1.414 1.414M7.05 19.95l-1.414 1.414M19.95 19.95l-1.414-1.414M7.05 4.05l-1.414-1.414" />
    </svg>
  );
}

function UsersIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ServiceCard({ servico, index }: { servico: typeof servicos[0]; index: number }) {
  return (
    <article className="card group p-6 md:p-8 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex items-start justify-between gap-4 mb-6">
        <span className="font-display text-4xl text-salsa/40">{servico.numero}</span>
        <div className="icon-wrapper group-hover:bg-verde-escuro group-hover:text-branco transition-all duration-300">
          {servico.icone}
        </div>
      </div>
      <h3 className="font-display text-2xl mb-3">{servico.titulo}</h3>
      <p className="text-texto-suave leading-relaxed mb-6 flex-1">{servico.descricao}</p>
      <ul className="space-y-2 mb-6" role="list" aria-label={`Benefícios de ${servico.titulo}`}>
        {servico.beneficios.map((beneficio, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-texto-suave">
            <CheckIcon className="h-4 w-4 text-verde-claro flex-shrink-0" />
            {beneficio}
          </li>
        ))}
      </ul>
      <a
        href="#orcamento"
        className="btn btn-secondary w-full text-center group relative overflow-hidden"
        aria-label={`Pedir orçamento para ${servico.titulo}`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Pedir orçamento
          <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
        </span>
      </a>
    </article>
  );
}

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <details className="group border-b border-creme-escuro" open={open}>
      <summary
        className="flex items-start justify-between gap-4 p-5 md:py-6 cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-claro focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="font-display text-lg md:text-xl text-verde-escuro pr-10">{faq.pergunta}</h3>
        <svg
          className={`h-5 w-5 text-salsa flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div id={`faq-answer-${index}`} className="px-5 pb-6 text-texto-suave leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        {faq.resposta}
      </div>
    </details>
  );
}

function ProcessStep({ step, index }: { step: typeof processo[0]; index: number }) {
  return (
    <div className="relative flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-verde-escuro flex items-center justify-center text-branco font-display text-2xl md:text-3xl font-bold">
          {step.numero}
        </div>
        {index < processo.length - 1 && (
          <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-salsa/30 to-transparent -z-10" />
        )}
      </div>
      <h3 className="font-display text-xl md:text-2xl mb-2">{step.titulo}</h3>
      <p className="text-texto-suave max-w-xs">{step.descricao}</p>
    </div>
  );
}

function TestimonialCard({ nome, localizacao, servico, texto, avatar }: { nome: string; localizacao: string; servico: string; texto: string; avatar: string }) {
  return (
    <article className="card p-6 md:p-8 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4" aria-label="Avaliação 5 estrelas">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-whatsapp" filled />
        ))}
      </div>
      <blockquote className="text-texto leading-relaxed mb-6 flex-1">"{texto}"</blockquote>
      <footer>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-creme-escuro flex items-center justify-center overflow-hidden">
            <Image
              src={avatar}
              alt=""
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-verde-escuro">{nome}</p>
            <p className="text-sm text-texto-suave flex items-center gap-1">
              <MapPinIcon className="h-3.5 w-3.5" />
              {localizacao}
            </p>
            <p className="text-xs text-salsa mt-0.5">{servico}</p>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default function Home() {
  const [mensagem, setMensagem] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const servicoOptions = [...servicos.map((s) => s.titulo), "Ainda não sei / Outro"];

  function validateForm(dados: FormData): boolean {
    const errors: Record<string, string> = {};
    const nome = dados.get("nome")?.toString().trim();
    const telefone = dados.get("telefone")?.toString().trim();
    const servico = dados.get("servico")?.toString();
    const zona = dados.get("zona")?.toString().trim();

    if (!nome) errors.nome = "O nome é obrigatório";
    else if (nome.length < 2) errors.nome = "Nome demasiado curto";

    if (!telefone) errors.telefone = "O telefone é obrigatório";
    else if (!/^[\d\s\+\-]{9,}$/.test(telefone)) errors.telefone = "Telefone inválido";

    if (!servico) errors.servico = "Selecione um serviço";
    if (!zona) errors.zona = "A localidade é obrigatória";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function enviarPedido(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dados = new FormData(event.currentTarget);

    if (!validateForm(dados)) return;

    const texto = `Olá! Gostaria de pedir um orçamento de limpeza.

Nome: ${dados.get("nome")}
Telefone: ${dados.get("telefone")}
Serviço pretendido: ${dados.get("servico")}
Localidade: ${dados.get("zona")}
Detalhes: ${dados.get("detalhes") || "Não indicado"}

Aguardo o vosso contacto. Obrigado!`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setMensagem("O pedido foi preparado. Se o WhatsApp não abrir automaticamente, verifica se o navegador bloqueou a nova janela.");
    event.currentTarget.reset();
    setFormErrors({});
  }

  const whatsappCTAText = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Ponto Perfeito.");
  const whatsappCTALink = `https://wa.me/${whatsappNumber}?text=${whatsappCTAText}`;

  return (
    <main id="main-content" className="min-h-screen bg-creme text-texto flex flex-col">
      {/* Top Bar */}
      <div className="bg-verde-escuro px-4 py-1.5 text-center text-xs tracking-wider text-branco/80 font-medium">
        LIMPEZAS DOMÉSTICAS E PROFISSIONAIS · LOURES · ODIVELAS · ZONAS PRÓXIMAS
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-creme-escuro bg-creme/95 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" aria-label="Ponto Perfeito — início" className="flex-shrink-0">
            <Logo className="h-10 md:h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-10" aria-label="Navegação principal">
            <a href="#servicos" className="text-sm font-medium text-texto-suave hover:text-verde-escuro transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium text-texto-suave hover:text-verde-escuro transition-colors">Sobre Nós</a>
            <a href="#processo" className="text-sm font-medium text-texto-suave hover:text-verde-escuro transition-colors">Como Funciona</a>
            <a href="#faq" className="text-sm font-medium text-texto-suave hover:text-verde-escuro transition-colors">Perguntas</a>
            <a href="#contactos" className="text-sm font-medium text-texto-suave hover:text-verde-escuro transition-colors">Contactos</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#orcamento" className="hidden sm:flex btn btn-primary">
              Pedir orçamento
              <ArrowRightIcon />
            </a>
            <a href={whatsappCTALink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp hidden lg:flex" aria-label="Contactar por WhatsApp">
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative section overflow-hidden" aria-labelledby="hero-title">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p className="badge badge-sage mb-5 inline-flex">
                <SparklesIcon className="h-3.5 w-3.5" />
                Orçamento gratuito e sem compromisso
              </p>
              <h1 id="hero-title" className="font-display font-bold leading-[1.05] tracking-tight text-verde-escuro mb-6">
                A sua casa limpa.
                <br />
                <span className="font-normal italic text-salsa">O seu tempo de volta.</span>
              </h1>
              <p className="text-lg md:text-xl text-texto-suave leading-relaxed mb-8 max-w-lg">
                Cuidamos da limpeza da sua casa ou escritório com atenção ao detalhe e uma abordagem próxima, adaptada às suas necessidades. Equipa de confiança, produtos profissionais, zero stress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#orcamento" className="btn btn-primary w-full sm:w-auto" aria-label="Pedir orçamento gratuito">
                  Pedir orçamento gratuito
                  <ArrowRightIcon />
                </a>
                <a href={whatsappCTALink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full sm:w-auto" aria-label="Falar no WhatsApp">
                  <WhatsAppIcon />
                  Falar no WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-texto-suave">
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-verde-claro" />
                  Atenção ao detalhe
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-verde-claro" />
                  Serviço personalizado
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-verde-claro" />
                  Orçamento sem compromisso
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 rounded-full border border-salsa/30" aria-hidden="true" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 rounded-tl-[4rem] bg-creme-escuro" aria-hidden="true" />
              <div className="relative rounded-t-[11rem] rounded-b-2xl bg-creme-escuro p-2 md:p-3 overflow-hidden">
                <Image
                  src="/equipa_teste.png"
                  alt="Equipa da Ponto Perfeito a realizar uma limpeza doméstica com cuidado e profissionalismo"
                  width={1000}
                  height={1200}
                  priority
                  className="h-[380px] md:h-[520px] w-full rounded-t-[10.5rem] rounded-b-xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-6 left-0 md:-left-8 w-full md:w-80">
                <div className="card p-5 md:p-6 shadow-xl border-verde-escuro/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-salsa mb-1">Ponto Perfeito</p>
                  <p className="font-display text-xl md:text-2xl text-verde-escuro">Cada detalhe conta.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-creme to-transparent" aria-hidden="true" />
      </section>

      {/* Stats Bar */}
      <section className="border-y border-creme-escuro bg-creme-escuro py-10" aria-label="Estatísticas">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p className="font-display text-4xl md:text-5xl font-bold text-verde-escuro">50+</p>
              <p className="text-texto-suave mt-1">Clientes satisfeitos</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="font-display text-4xl md:text-5xl font-bold text-verde-escuro">5</p>
              <p className="text-texto-suave mt-1">Anos de experiência</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="font-display text-4xl md:text-5xl font-bold text-verde-escuro">100%</p>
              <p className="text-texto-suave mt-1">Satisfação garantida</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="font-display text-4xl md:text-5xl font-bold text-verde-escuro">2h</p>
              <p className="text-texto-suave mt-1">Tempo de resposta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section" aria-labelledby="servicos-title">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-fade-in-up">
            <p className="badge badge-green mb-4 inline-flex">
              <SparklesIcon className="h-3.5 w-3.5" />
              Os nossos serviços
            </p>
            <h2 id="servicos-title" className="font-display font-semibold tracking-tight text-verde-escuro">
              Soluções de limpeza para <span className="italic text-salsa">cada necessidade.</span>
            </h2>
            <p className="mt-5 text-lg text-texto-suave leading-relaxed">
              Seja para a manutenção habitual ou para uma limpeza mais exigente, procuramos a solução certa para si. Todos os serviços incluem produtos e equipamentos profissionais.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Lista de serviços">
            {servicos.map((servico, index) => (
              <ServiceCard key={servico.id} servico={servico} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section bg-verde-escuro text-branco relative overflow-hidden" aria-labelledby="sobre-title">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]" aria-hidden="true" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <p className="badge badge-sage mb-5 inline-flex" style={{ backgroundColor: "rgba(143,155,122,0.2)", color: "var(--salsa)" }}>
                <UsersIcon className="h-3.5 w-3.5" />
                A nossa forma de cuidar
              </p>
              <h2 id="sobre-title" className="font-display font-semibold leading-tight tracking-tight text-branco mb-6">
                Um espaço limpo muda a forma como <span className="italic text-salsa">se sente.</span>
              </h2>
              <div className="space-y-5 text-branco/75 leading-relaxed">
                <p className="text-lg">
                  Na Ponto Perfeito acreditamos que cuidar de um espaço é também cuidar de quem o utiliza. Somos uma equipa próxima — duas pessoas dedicadas — e procuramos adaptar cada serviço às necessidades de cada cliente.
                </p>
                <p className="text-lg">
                  Seja para a sua casa, para um escritório ou para uma limpeza mais específica, começamos por ouvir o que precisa e esclarecer consigo os detalhes do serviço. Sem surpresas, sem pressas.
                </p>
              </div>
              <a href="#orcamento" className="mt-8 inline-flex btn btn-secondary" style={{ backgroundColor: "var(--creme)", color: "var(--verde-escuro)", borderColor: "var(--salsa)" }}>
                Vamos conversar
                <ArrowRightIcon />
              </a>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-[4/3] rounded-2xl bg-creme-escuro/30 overflow-hidden">
                <Image
                  src="/equipa_teste.png"
                  alt="A equipa da Ponto Perfeito a trabalhar em equipa"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-branco p-5 md:p-6 rounded-xl shadow-xl max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-verde-escuro flex items-center justify-center text-branco">
                    <ShieldIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-verde-escuro">Garantia de satisfação</p>
                    <p className="text-sm text-texto-suave">Se não ficar bem, voltamos para corrigir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="section bg-creme-escuro" aria-labelledby="processo-title">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20 animate-fade-in-up">
            <p className="badge badge-green mb-4 inline-flex">
              <ClockIcon className="h-3.5 w-3.5" />
              Como funciona
            </p>
            <h2 id="processo-title" className="font-display font-semibold tracking-tight text-verde-escuro">
              Do pedido à limpeza em <span className="italic text-salsa">4 passos simples.</span>
            </h2>
            <p className="mt-5 text-lg text-texto-suave leading-relaxed">
              Sem burocracia, sem complicações. Tratamos de tudo para que só tenha de aproveitar o resultado.
            </p>
          </div>
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0" role="list" aria-label="Passos do processo">
              {processo.map((step, index) => (
                <ProcessStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="section" aria-labelledby="depoimentos-title">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-fade-in-up">
            <p className="badge badge-green mb-4 inline-flex">
              <StarIcon className="h-3.5 w-3.5" filled />
              O que dizem os nossos clientes
            </p>
            <h2 id="depoimentos-title" className="font-display font-semibold tracking-tight text-verde-escuro">
              Confiança que se <span className="italic text-salsa">constrói no dia a dia.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6" role="list" aria-label="Depoimentos de clientes">
            <TestimonialCard
              nome="Maria Silva"
              localizacao="Loures"
              servico="Limpeza doméstica quinzenal"
              texto="A melhor decisão que tomei este ano. A equipa é pontual, cuidadosa e deixa a casa com um cheiro incrível. Já não passo sem eles."
              avatar="/logo.png"
            />
            <TestimonialCard
              nome="João Santos"
              localizacao="Odivelas"
              servico="Limpeza pós-obras"
              texto="Depois da remodelação da cozinha, estava tudo cheio de pó. Vieram no dia combinado, deixaram tudo impecável. Profissionais a sério."
              avatar="/logo.png"
            />
            <TestimonialCard
              nome="Ana Costa"
              localizacao="Santo Antão do Tojal"
              servico="Limpeza de escritório"
              texto="Contratámos para o nosso escritório de 12 pessoas. Flexíveis no horário, discreto, e o espaço está sempre pronto para receber clientes."
              avatar="/logo.png"
            />
          </div>
          <div className="text-center mt-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href={whatsappCTALink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp inline-flex">
              <WhatsAppIcon />
              Quero ser o próximo cliente satisfeito
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-creme-escuro" aria-labelledby="faq-title">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 animate-fade-in-up">
            <p className="badge badge-green mb-4 inline-flex">
              <QuoteIcon className="h-3.5 w-3.5" />
              Perguntas frequentes
            </p>
            <h2 id="faq-title" className="font-display font-semibold tracking-tight text-verde-escuro">
              Tudo o que precisa de <span className="italic text-salsa">saber antes de começar.</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-0" role="list" aria-label="Perguntas frequentes">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contactos" className="section" aria-labelledby="contactos-title">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="animate-fade-in-up">
              <p className="badge badge-green mb-4 inline-flex">
                <MapPinIcon className="h-3.5 w-3.5" />
                Vamos falar?
              </p>
              <h2 id="contactos-title" className="font-display font-semibold tracking-tight text-verde-escuro mb-6">
                Damos o próximo passo <span className="italic text-salsa">juntos.</span>
              </h2>
              <p className="text-lg text-texto-suave leading-relaxed mb-8 max-w-lg">
                Explique-nos o que precisa. Vamos analisar o seu pedido e conversar consigo sobre os detalhes. Sem compromisso, sem pressão.
              </p>
              <div className="card p-6 md:p-8 border-verde-escuro/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-salsa mb-2">Zona de atendimento</p>
                <p className="font-display text-2xl md:text-3xl text-verde-escuro mb-2">Loures, Odivelas e zonas próximas</p>
                <p className="text-texto-suave">Indique a sua localidade no formulário para podermos avaliar a disponibilidade.</p>
              </div>
              <div className="mt-8 space-y-4">
                <a href={whatsappCTALink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 btn btn-whatsapp w-full sm:w-auto justify-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp/10">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>Fale connosco pelo WhatsApp</span>
                  <ArrowRightIcon />
                </a>
                <a href="tel:+351923541868" className="inline-flex items-center gap-3 btn btn-secondary w-full sm:w-auto justify-center">
                  <PhoneIcon className="h-5 w-5" />
                  <span>Ligar agora: +351 923 541 868</span>
                </a>
              </div>
            </div>
            <div id="orcamento" className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="card p-6 md:p-8 lg:p-10 shadow-lg border-verde-escuro/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-salsa mb-3">Pedido de orçamento</p>
                <h3 className="font-display text-3xl md:text-4xl text-verde-escuro mb-3">Conte-nos o que precisa.</h3>
                <p className="text-texto-suave mb-6">Os campos com * são obrigatórios. O pedido será preparado no WhatsApp — não guardamos dados no site.</p>
                <form onSubmit={enviarPedido} className="space-y-5" noValidate aria-label="Formulário de pedido de orçamento">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nome" className="label">Nome *</label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="O seu nome"
                        className={`input ${formErrors.nome ? "input-error" : ""}`}
                        aria-invalid={formErrors.nome ? "true" : "false"}
                        aria-describedby={formErrors.nome ? "nome-error" : undefined}
                      />
                      {formErrors.nome && (
                        <p id="nome-error" className="mt-1.5 text-sm text-erro" role="alert">{formErrors.nome}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="telefone" className="label">Telefone *</label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        autoComplete="tel"
                        required
                        placeholder="O seu contacto"
                        className={`input ${formErrors.telefone ? "input-error" : ""}`}
                        aria-invalid={formErrors.telefone ? "true" : "false"}
                        aria-describedby={formErrors.telefone ? "telefone-error" : undefined}
                      />
                      {formErrors.telefone && (
                        <p id="telefone-error" className="mt-1.5 text-sm text-erro" role="alert">{formErrors.telefone}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="servico" className="label">Serviço pretendido *</label>
                      <select
                        id="servico"
                        name="servico"
                        required
                        defaultValue=""
                        className={`input ${formErrors.servico ? "input-error" : ""}`}
                        aria-invalid={formErrors.servico ? "true" : "false"}
                        aria-describedby={formErrors.servico ? "servico-error" : undefined}
                      >
                        <option value="" disabled>Escolha um serviço</option>
                        {servicos.map((s) => (
                          <option key={s.id} value={s.titulo}>{s.titulo}</option>
                        ))}
                        <option value="Ainda não sei / Outro">Ainda não sei / Outro</option>
                      </select>
                      {formErrors.servico && (
                        <p id="servico-error" className="mt-1.5 text-sm text-erro" role="alert">{formErrors.servico}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="zona" className="label">Localidade *</label>
                      <input
                        id="zona"
                        name="zona"
                        type="text"
                        required
                        placeholder="Ex.: Loures, Odivelas..."
                        className={`input ${formErrors.zona ? "input-error" : ""}`}
                        aria-invalid={formErrors.zona ? "true" : "false"}
                        aria-describedby={formErrors.zona ? "zona-error" : undefined}
                      />
                      {formErrors.zona && (
                        <p id="zona-error" className="mt-1.5 text-sm text-erro" role="alert">{formErrors.zona}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="detalhes" className="label">Mais detalhes (opcional)</label>
                    <textarea
                      id="detalhes"
                      name="detalhes"
                      rows={4}
                      placeholder="Tipo de espaço, frequência, área aproximada, tarefas específicas..."
                      className="input resize-y"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-full min-h-[56px] text-lg">
                    <WhatsAppIcon className="h-5 w-5" />
                    Preparar pedido no WhatsApp
                  </button>
                  {mensagem && (
                    <p role="status" className="rounded-xl bg-creme-escuro p-4 text-sm leading-6 text-verde-escuro text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                      {mensagem}
                    </p>
                  )}
                  <p className="text-center text-xs leading-5 text-texto-suave">
                    Será aberta uma conversa no WhatsApp com os dados do pedido. Não enviamos dados para servidores.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-creme-escuro bg-creme-escuro" role="contentinfo">
        <div className="container py-10 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <a href="#inicio" aria-label="Ponto Perfeito — início" className="inline-block mb-6">
                <Logo className="h-12 w-auto" ariaLabel="Ponto Perfeito" />
              </a>
              <p className="font-display text-lg text-verde-escuro mb-1">Ponto Perfeito</p>
              <p className="text-texto-suave text-sm">Limpezas domésticas e profissionais com atenção ao detalhe.</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-texto-suave">
                <a href={whatsappCTALink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-whatsapp transition-colors" aria-label="WhatsApp">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href="tel:+351923541868" className="flex items-center gap-1.5 hover:text-whatsapp transition-colors" aria-label="Telefone">
                  <PhoneIcon className="h-4 w-4" />
                  +351 923 541 868
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPinIcon className="h-4 w-4" />
                  Loures, Lisboa
                </span>
              </div>
            </div>
            <nav aria-label="Navegação do rodapé">
              <h4 className="font-semibold text-verde-escuro mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-texto-suave">
                <li><a href="#inicio" className="hover:text-verde-escuro transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-verde-escuro transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-verde-escuro transition-colors">Sobre Nós</a></li>
                <li><a href="#processo" className="hover:text-verde-escuro transition-colors">Como Funciona</a></li>
                <li><a href="#faq" className="hover:text-verde-escuro transition-colors">Perguntas</a></li>
                <li><a href="#contactos" className="hover:text-verde-escuro transition-colors">Contactos</a></li>
              </ul>
            </nav>
            <nav aria-label="Serviços no rodapé">
              <h4 className="font-semibold text-verde-escuro mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-texto-suave">
                {servicos.map((s) => (
                  <li key={s.id}><a href="#orcamento" className="hover:text-verde-escuro transition-colors">{s.titulo}</a></li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-10 md:mt-16 pt-8 border-t border-creme/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-texto-suave">© {new Date().getFullYear()} Ponto Perfeito — Limpezas Domésticas e Profissionais. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6 text-xs text-texto-suave">
              <a href="/politica-privacidade" className="hover:text-verde-escuro transition-colors">Política de Privacidade</a>
              <a href="/termos" className="hover:text-verde-escuro transition-colors">Termos de Utilização</a>
              <a href="#inicio" className="font-medium text-verde-escuro hover:underline">Voltar ao início ↑</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href={whatsappCTALink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Ponto Perfeito por WhatsApp"
        className="whatsapp-float"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </main>
  );
}