"use client";
import Image from "next/image";
import { useState, type FormEvent } from "react";
export default function Home() {
    const [mensagem, setMensagem] = useState("");
    // WhatsApp profissional da Ponto Perfeito
    // Indicativo de Portugal: 351
    const whatsappNumber = "351923541868";
    function enviarPedido(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const dados = new FormData(event.currentTarget);
        const nome = dados.get("nome");
        const telefone = dados.get("telefone");
        const servico = dados.get("servico");
        const zona = dados.get("zona");
        const detalhes = dados.get("detalhes");
        const texto = `Olá! Gostaria de pedir um orçamento de limpeza.
Nome: ${nome}
Telefone: ${telefone}
Serviço pretendido: ${servico}
Localidade: ${zona}
Detalhes: ${detalhes || "Não indicado"}
Aguardo o vosso contacto. Obrigado!`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank", "noopener,noreferrer");
        setMensagem(
            "O pedido foi preparado. Se o WhatsApp não abrir automaticamente, verifica se o navegador bloqueou a nova janela."
        );
    }
    const servicos = [
        {
            numero: "01",
            titulo: "Limpezas domésticas",
            descricao:
                "Limpeza regular da sua casa, com atenção ao detalhe e ao conforto de toda a família.",
        },
        {
            numero: "02",
            titulo: "Limpezas profundas",
            descricao:
                "Uma limpeza mais completa para deixar cada divisão cuidada e renovada.",
        },
        {
            numero: "03",
            titulo: "Limpezas pós-obras",
            descricao:
                "Remoção de pó e sujidade após obras ou remodelações, para preparar o espaço.",
        },
        {
            numero: "04",
            titulo: "Limpeza de escritórios",
            descricao:
                "Espaços profissionais limpos, organizados e prontos para receber a sua equipa.",
        },
        {
            numero: "05",
            titulo: "Vidros e varandas",
            descricao:
                "Atenção especial aos vidros, janelas e varandas, para um acabamento cuidado.",
        },
        {
            numero: "06",
            titulo: "Limpezas especiais",
            descricao:
                "Soluções adaptadas às necessidades específicas de cada casa ou espaço.",
        },
    ];
    return (
        <main className="min-h-screen bg-[#F8F7F5] text-[#263b2d]">
            {/* CABEÇALHO */}
            <header className="sticky top-0 z-50 border-b border-[#e7e2d5] bg-[#F8F7F5]/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
                    <a href="#inicio" aria-label="Ponto Perfeito - início">
                        <Image
                            src="/logo.png"
                            alt="Ponto Perfeito — Limpezas Domésticas"
                            width={300}
                            height={300}
                            priority
                            className="h-24 w-24 object-contain md:h-32 md:w-32"
                        />
                    </a>
                    <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
                        <a href="#servicos" className="transition hover:text-[#87936c]">
                            Serviços
                        </a>
                        <a href="#sobre" className="transition hover:text-[#87936c]">
                            Sobre nós
                        </a>
                        <a href="#contactos" className="transition hover:text-[#87936c]">
                            Contactos
                        </a>
                    </nav>
                    <a
                        href="#orcamento"
                        className="rounded-full bg-[#294632] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3c6045]"
                    >
                        Pedir orçamento
                    </a>
                </div>
            </header>
            {/* SECÇÃO PRINCIPAL */}
            <section
                id="inicio"
                className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24"
            >
                <div>
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#87936c]">
                        Cuidado · Confiança · Perfeição
                    </p>
                    <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                        A sua casa limpa.
                        <br />
                        O seu tempo de volta.
                    </h1>
                    <p className="mt-6 max-w-lg text-lg leading-8 text-[#667064]">
                        Na Ponto Perfeito, cuidamos da limpeza para que possa desfrutar
                        de um espaço mais confortável, fresco e acolhedor.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#orcamento"
                            className="rounded-full bg-[#294632] px-7 py-4 font-semibold text-white transition hover:bg-[#3c6045]"
                        >
                            Pedir orçamento gratuito
                        </a>
                        <a
                            href="#servicos"
                            className="rounded-full border border-[#c9cebd] px-7 py-4 font-semibold transition hover:bg-white"
                        >
                            Conhecer serviços
                        </a>
                    </div>
                    <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#667064]">
                        <span>✓ Atenção ao detalhe</span>
                        <span>✓ Serviço personalizado</span>
                        <span>✓ Orçamento sem compromisso</span>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 rounded-[2rem] bg-[#e9e6d9]" />
                    {/* Imagem externa: usa img para evitar configuração de domínio */}
                    <img
                        src="/equipa_teste.png"
                        alt="Profissional a realizar uma limpeza doméstica"
                        className="relative h-[360px] w-full rounded-[1.5rem] object-cover shadow-lg md:h-[520px]"
                    />
                    <div className="absolute -bottom-5 left-5 rounded-2xl bg-white p-5 shadow-lg md:left-[-2rem]">
                        <p className="text-sm text-[#667064]">O nosso compromisso</p>
                        <p className="mt-1 text-lg font-semibold">Cada detalhe conta.</p>
                    </div>
                </div>
            </section>
            {/* VANTAGENS */}
            <section className="border-y border-[#e7e2d5] bg-[#eeece2]">
                <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 text-center md:grid-cols-3 md:px-8">
                    <div>
                        <p className="text-lg font-semibold">Cuidado personalizado</p>
                        <p className="mt-1 text-sm text-[#667064]">
                            Adaptado às necessidades do seu espaço.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Atenção ao detalhe</p>
                        <p className="mt-1 text-sm text-[#667064]">
                            Trabalhamos para um resultado cuidado.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">
                            Orçamento sem compromisso
                        </p>
                        <p className="mt-1 text-sm text-[#667064]">
                            Fale connosco e explique o que precisa.
                        </p>
                    </div>
                </div>
            </section>
            {/* SERVIÇOS */}
            <section
                id="servicos"
                className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
            >
                <div className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#87936c]">
                        Os nossos serviços
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                        Soluções de limpeza para cada necessidade.
                    </h2>
                    <p className="mt-5 leading-7 text-[#667064]">
                        Seja para a manutenção habitual ou para uma limpeza mais exigente,
                        procuramos a solução certa para si.
                    </p>
                </div>
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {servicos.map((servico) => (
                        <article
                            key={servico.numero}
                            className="rounded-3xl border border-[#e7e2d5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <p className="text-sm font-semibold tracking-widest text-[#87936c]">
                                {servico.numero}
                            </p>
                            <h3 className="mt-5 text-xl font-semibold">
                                {servico.titulo}
                            </h3>
                            <p className="mt-3 leading-7 text-[#667064]">
                                {servico.descricao}
                            </p>
                            <a
                                href="#orcamento"
                                className="mt-6 inline-block text-sm font-semibold text-[#294632] underline decoration-[#c6cdb9] underline-offset-4 hover:text-[#87936c]"
                            >
                                Pedir orçamento →
                            </a>
                        </article>
                    ))}
                </div>
            </section>
            {/* SOBRE NÓS */}
            <section id="sobre" className="bg-[#294632] text-white">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d0d8b9]">
                            Sobre a Ponto Perfeito
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                            Mais do que limpar, queremos cuidar do seu espaço.
                        </h2>
                    </div>
                    <div className="space-y-5 leading-8 text-[#e3e8dc]">
                        <p>
                            Somos uma equipa de duas pessoas, dedicada a prestar serviços de
                            limpeza com cuidado, organização e atenção às necessidades de
                            cada cliente.
                        </p>
                        <p>
                            Acreditamos que um espaço limpo faz a diferença no dia a dia.
                            Por isso, cada pedido começa por ouvir o que precisa e perceber
                            como podemos ajudar.
                        </p>
                        <a
                            href="#orcamento"
                            className="inline-block rounded-full bg-[#f0eddf] px-7 py-4 font-semibold text-[#294632] transition hover:bg-white"
                        >
                            Vamos falar?
                        </a>
                    </div>
                </div>
            </section>
            {/* CONTACTOS E FORMULÁRIO */}
            <section
                id="contactos"
                className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
            >
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#87936c]">
                            Contactos
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                            Vamos dar mais brilho ao seu espaço?
                        </h2>
                        <p className="mt-5 max-w-lg leading-8 text-[#667064]">
                            Conte-nos o que precisa. Envie o seu pedido de orçamento e
                            entraremos em contacto assim que possível.
                        </p>
                        <div className="mt-8 rounded-3xl bg-[#eeece2] p-6">
                            <p className="font-semibold">Zona de atendimento</p>
                            <p className="mt-2 leading-7 text-[#667064]">
                                Loures, Odivelas e zonas próximas.
                            </p>
                            <p className="mt-5 text-sm text-[#667064]">
                                Para confirmar a disponibilidade, indique a sua localidade no
                                formulário.
                            </p>
                        </div>
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de pedir informações sobre os serviços de limpeza da Ponto Perfeito.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#294632] px-6 py-3 font-semibold text-[#294632] transition hover:bg-[#294632] hover:text-white"
                        >
                            <span aria-hidden="true">✆</span>
                            Contactar por WhatsApp
                        </a>
                    </div>
                    <div
                        id="orcamento"
                        className="rounded-3xl border border-[#e7e2d5] bg-white p-6 shadow-sm md:p-8"
                    >
                        <h3 className="text-2xl font-semibold">Pedir orçamento</h3>
                        <p className="mt-2 text-sm leading-6 text-[#667064]">
                            Preencha os dados abaixo para preparar o seu pedido.
                        </p>
                        <form onSubmit={enviarPedido} className="mt-7 space-y-5">
                            <div>
                                <label
                                    htmlFor="nome"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Nome *
                                </label>
                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    placeholder="O seu nome"
                                    className="w-full rounded-xl border border-[#dcded4] bg-[#fcfbf8] px-4 py-3 outline-none focus:border-[#87936c]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="telefone"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Telefone *
                                </label>
                                <input
                                    id="telefone"
                                    name="telefone"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    placeholder="O seu contacto"
                                    className="w-full rounded-xl border border-[#dcded4] bg-[#fcfbf8] px-4 py-3 outline-none focus:border-[#87936c]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="servico"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Serviço pretendido *
                                </label>
                                <select
                                    id="servico"
                                    name="servico"
                                    required
                                    defaultValue=""
                                    className="w-full rounded-xl border border-[#dcded4] bg-[#fcfbf8] px-4 py-3 outline-none focus:border-[#87936c]"
                                >
                                    <option value="" disabled>
                                        Selecione um serviço
                                    </option>
                                    <option>Limpeza doméstica</option>
                                    <option>Limpeza profunda</option>
                                    <option>Limpeza pós-obras</option>
                                    <option>Limpeza de escritório</option>
                                    <option>Vidros e varandas</option>
                                    <option>Outro serviço</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="zona"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Localidade *
                                </label>
                                <input
                                    id="zona"
                                    name="zona"
                                    type="text"
                                    required
                                    placeholder="Ex.: Loures, Odivelas..."
                                    className="w-full rounded-xl border border-[#dcded4] bg-[#fcfbf8] px-4 py-3 outline-none focus:border-[#87936c]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="detalhes"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Mais informações
                                </label>
                                <textarea
                                    id="detalhes"
                                    name="detalhes"
                                    rows={4}
                                    placeholder="Tipo de espaço, frequência, área aproximada..."
                                    className="w-full resize-y rounded-xl border border-[#dcded4] bg-[#fcfbf8] px-4 py-3 outline-none focus:border-[#87936c]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-full bg-[#294632] px-6 py-4 font-semibold text-white transition hover:bg-[#3c6045]"
                            >
                                Enviar pedido de orçamento
                            </button>
                            {mensagem && (
                                <p
                                    role="status"
                                    className="rounded-xl bg-[#eeece2] p-4 text-sm leading-6"
                                >
                                    {mensagem}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
            {/* RODAPÉ */}
            <footer className="border-t border-[#e7e2d5] bg-[#F8F7F5]">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-[#667064] md:flex-row md:items-center md:justify-between md:px-8">
                    <p>© 2026 Ponto Perfeito — Limpezas Domésticas.</p>
                    <a
                        href="#inicio"
                        className="font-medium text-[#294632] hover:underline"
                    >
                        Voltar ao início ↑
                    </a>
                </div>
            </footer>
            {/* BOTÃO FLUTUANTE DE WHATSAPP */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Ponto Perfeito.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a Ponto Perfeito por WhatsApp"
                className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition hover:scale-105"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                    aria-hidden="true"
                >
                    <path d="M12.04 2a9.85 9.85 0 0 0-8.48 14.86L2.25 22l5.28-1.38A9.95 9.95 0 0 0 12.04 22 10 10 0 0 0 12.04 2Zm0 18.2a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.17 8.17 0 1 1 6.95 3.86Zm4.49-6.12c-.25-.13-1.47-.73-1.7-.81-.23-.09-.39-.13-.55.13-.17.25-.64.81-.78.97-.14.17-.28.19-.53.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.14-.25-.02-.39.1-.51.11-.11.25-.28.37-.42.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.24.9 2.43 1.03 2.59.12.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.16.16 1.59.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z" />
                </svg>
            </a>
        </main>
    );
}