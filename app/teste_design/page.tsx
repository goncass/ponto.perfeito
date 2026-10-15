"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const whatsappNumber = "351923541868";
const servicos = [
  ["01", "Limpeza doméstica", "Manutenção regular da casa, com cuidado nas divisões do dia a dia."],
  ["02", "Limpeza profunda", "Uma limpeza minuciosa para espaços que precisam de atenção extra."],
  ["03", "Limpeza pós-obras", "Preparação do espaço depois de obras ou remodelações."],
  ["04", "Escritórios", "Limpeza de espaços profissionais para um ambiente cuidado."],
  ["05", "Vidros e varandas", "Cuidado especial com janelas, vidros e varandas."],
  ["06", "Limpezas especiais", "Soluções ajustadas ao espaço e às tarefas pretendidas."],
] as const;

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.57 0 .25 5.31.25 11.85c0 2.09.55 4.13 1.6 5.93L.15 24l6.37-1.67a11.9 11.9 0 0 0 5.57 1.42h.01c6.53 0 11.85-5.32 11.85-11.85 0-3.17-1.23-6.15-3.43-8.42ZM12.1 21.73h-.01a9.87 9.87 0 0 1-5.03-1.37l-.36-.21-3.78.99 1.01-3.69-.23-.38a9.83 9.83 0 0 1-1.51-5.22c0-5.46 4.45-9.9 9.91-9.9a9.83 9.83 0 0 1 7.01 2.91 9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.44 9.9-9.91 9.9Zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.07-.8.38-.28.3-1.06 1.03-1.06 2.51s1.09 2.91 1.24 3.11c.15.2 2.14 3.27 5.19 4.58.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
  </svg>;
}

export default function Home() {
  const [mensagem, setMensagem] = useState("");
  const linkWhatsApp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de pedir informações sobre os serviços de limpeza da Ponto Perfeito.")}`;

  function enviarPedido(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dados = new FormData(event.currentTarget);
    const texto = `Olá! Gostaria de pedir um orçamento de limpeza.

Nome: ${dados.get("nome")}
Telefone: ${dados.get("telefone")}
Serviço pretendido: ${dados.get("servico")}
Localidade: ${dados.get("zona")}
Detalhes: ${dados.get("detalhes") || "Não indicado"}

Aguardo o vosso contacto. Obrigado!`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`, "_blank", "noopener,noreferrer");
    setMensagem("O pedido foi preparado. Se o WhatsApp não abrir, verifique se o navegador bloqueou a nova janela.");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F6F1] text-[#20392C]">
      <div className="bg-[#20392C] px-4 py-2 text-center text-[11px] tracking-[.18em] text-white">LIMPEZAS DOMÉSTICAS · LOURES · ODIVELAS</div>
      <header className="sticky top-0 z-40 border-b border-[#20392C]/10 bg-[#F7F6F1]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <a href="#inicio" aria-label="Ponto Perfeito — início"><Image src="/logo.png" alt="Ponto Perfeito" width={300} height={300} priority className="h-[68px] w-[68px] object-contain md:h-20 md:w-20" /></a>
          <nav className="hidden gap-8 text-sm md:flex"><a href="#servicos" className="hover:text-[#87936C]">Serviços</a><a href="#sobre" className="hover:text-[#87936C]">Sobre nós</a><a href="#contactos" className="hover:text-[#87936C]">Contactos</a></nav>
          <a href="#orcamento" className="rounded-full bg-[#294632] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#3B5B43] sm:text-sm">Pedir orçamento ↗</a>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[.92fr_1.08fr] md:px-8 md:py-24">
        <div className="relative z-10">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.24em] text-[#7C8B68]"><span className="h-px w-9 bg-[#9AA587]" />Cuidado que se sente</p>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,5.7rem)] leading-[.98] tracking-[-.055em]">Mais tempo para si.<span className="mt-3 block font-normal italic text-[#7C8B68]">Um espaço cuidado.</span></h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#667267] md:text-lg">Cuidamos da limpeza da sua casa ou do seu espaço profissional com atenção ao detalhe e uma abordagem próxima, adaptada ao que precisa.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#orcamento" className="rounded-full bg-[#294632] px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3B5B43]">Pedir orçamento ↗</a><a href="#servicos" className="rounded-full border border-[#C9D0C3] px-7 py-4 text-center text-sm font-semibold hover:bg-white">Explorar serviços</a></div>
          <div className="mt-9 flex flex-wrap gap-5 border-t border-[#DDE0D5] pt-5 text-sm text-[#667267]"><span>✳ Atenção ao detalhe</span><span>✳ Serviço personalizado</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-[#BFC8B4] md:-right-6 md:-top-6 md:h-36 md:w-36" />
          <div className="absolute -bottom-5 -left-4 h-32 w-32 rounded-tl-[4rem] bg-[#E6E7DB] md:-bottom-7 md:-left-7 md:h-44 md:w-44" />
          <div className="relative rounded-t-[11rem] rounded-b-2xl bg-[#E7E6DC] p-2 sm:rounded-t-[14rem] sm:p-3"><Image src="/equipa_teste.png" alt="Equipa da Ponto Perfeito" width={1000} height={1200} priority className="h-[400px] w-full rounded-t-[10.5rem] rounded-b-xl object-cover sm:h-[510px] sm:rounded-t-[13.5rem] md:h-[570px]" /></div>
          <div className="absolute bottom-7 left-0 rounded-2xl border border-white/70 bg-[#F7F6F1]/95 p-5 shadow-xl sm:-left-7"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#7C8B68]">Ponto Perfeito</p><p className="mt-2 font-serif text-2xl">Cada detalhe conta.</p></div>
        </div>
      </section>

      <section className="border-y border-[#DDE0D5] bg-[#EFEEE7]"><div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 md:px-8">{[["01", "Cuidado personalizado", "Adaptado ao seu espaço"], ["02", "Atenção ao detalhe", "Um trabalho cuidado"], ["03", "Orçamento sem compromisso", "Fale connosco"]].map(([n, t, d]) => <div key={n} className="flex items-center justify-center gap-3 sm:justify-start"><span className="font-serif text-3xl text-[#8A9877]">{n}</span><div><p className="text-sm font-semibold">{t}</p><p className="mt-1 text-xs text-[#6D776B]">{d}</p></div></div>)}</div></section>

      <section id="servicos" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-[#7C8B68]">O que fazemos</p><h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-[-.04em] sm:text-5xl md:text-6xl">O cuidado certo para <span className="italic text-[#7C8B68]">cada espaço.</span></h2></div><p className="max-w-md text-sm leading-7 text-[#667267] md:text-base">Cada espaço tem necessidades diferentes. Conte-nos o que pretende e ajudamos a encontrar a solução mais adequada.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{servicos.map(([n, t, d]) => <article key={n} className="group flex min-h-[265px] flex-col rounded-3xl border border-[#E1E3D9] bg-[#FBFAF6] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#BFC8B4] hover:bg-white hover:shadow-xl hover:shadow-[#20392C]/[.06]"><div className="flex justify-between"><span className="font-serif text-3xl text-[#A0AA91]">{n}</span><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE0D5] transition group-hover:bg-[#294632] group-hover:text-white">↗</span></div><div className="mt-auto pt-10"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-3 text-sm leading-6 text-[#697469]">{d}</p></div><a href="#orcamento" className="mt-6 text-sm font-semibold">Pedir informações →</a></article>)}</div>
      </section>

      <section id="sobre" className="bg-[#20392C] text-[#F7F6F1]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:items-center md:px-8 md:py-28"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-[#C0C9B4]">A nossa forma de cuidar</p><h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-.04em] sm:text-5xl md:text-6xl">Um espaço limpo muda a forma como <span className="italic text-[#C0C9B4]">se sente.</span></h2></div><div className="md:pl-12"><p className="text-base leading-8 text-white/75 md:text-lg">Na Ponto Perfeito acreditamos que cuidar de um espaço é também cuidar de quem o utiliza. Somos uma equipa próxima e procuramos adaptar cada serviço às necessidades de cada cliente.</p><p className="mt-5 text-base leading-8 text-white/75 md:text-lg">Seja para a sua casa, para um escritório ou para uma limpeza mais específica, começamos por ouvir o que precisa e esclarecer consigo os detalhes do serviço.</p><a href="#orcamento" className="mt-8 inline-block rounded-full bg-[#F0EEE4] px-7 py-4 text-sm font-semibold text-[#20392C] hover:bg-white">Vamos conversar ↗</a></div></div></section>

      <section id="contactos" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div><p className="text-xs font-semibold uppercase tracking-[.24em] text-[#7C8B68]">Vamos falar?</p><h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight tracking-[-.04em] sm:text-5xl md:text-6xl">Damos o próximo passo <span className="italic text-[#7C8B68]">juntos.</span></h2><p className="mt-6 text-base leading-8 text-[#667267]">Explique-nos o que precisa. Vamos analisar o seu pedido e conversar consigo sobre os detalhes.</p><div className="mt-9 border-y border-[#DDE0D5] py-5"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#87936C]">Zona de atendimento</p><p className="mt-2 font-serif text-2xl">Loures, Odivelas e zonas próximas</p><p className="mt-2 text-sm leading-6 text-[#667267]">Indique a sua localidade para podermos avaliar a disponibilidade.</p></div><a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E5E9DF]"><WhatsAppIcon /></span>Fale connosco pelo WhatsApp ↗</a></div>
        <div id="orcamento" className="rounded-[1.75rem] border border-[#E1E3D9] bg-[#FBFAF6] p-5 shadow-sm sm:p-8 md:p-10"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#87936C]">Pedido de orçamento</p><h3 className="mt-3 font-serif text-3xl sm:text-4xl">Conte-nos o que precisa.</h3><p className="mt-3 text-sm leading-6 text-[#667267]">Os campos com * são obrigatórios. O pedido será preparado no WhatsApp.</p>
          <form onSubmit={enviarPedido} className="mt-8 space-y-5"><div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="nome" className="mb-2 block text-xs font-semibold">Nome *</label><input id="nome" name="nome" autoComplete="name" required placeholder="O seu nome" className="w-full rounded-xl border border-[#DDE0D5] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#7C8B68] focus:ring-4 focus:ring-[#7C8B68]/10" /></div><div><label htmlFor="telefone" className="mb-2 block text-xs font-semibold">Telefone *</label><input id="telefone" name="telefone" type="tel" autoComplete="tel" required placeholder="O seu contacto" className="w-full rounded-xl border border-[#DDE0D5] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#7C8B68] focus:ring-4 focus:ring-[#7C8B68]/10" /></div></div>
            <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="servico" className="mb-2 block text-xs font-semibold">Serviço pretendido *</label><select id="servico" name="servico" required defaultValue="" className="w-full rounded-xl border border-[#DDE0D5] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#7C8B68]"><option value="" disabled>Escolha um serviço</option>{servicos.map(([n, t]) => <option key={n} value={t}>{t}</option>)}<option value="Ainda não sei">Ainda não sei</option></select></div><div><label htmlFor="zona" className="mb-2 block text-xs font-semibold">Localidade *</label><input id="zona" name="zona" required placeholder="Ex.: Loures" className="w-full rounded-xl border border-[#DDE0D5] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#7C8B68]" /></div></div>
            <div><label htmlFor="detalhes" className="mb-2 block text-xs font-semibold">Mais detalhes (opcional)</label><textarea id="detalhes" name="detalhes" rows={4} placeholder="Espaço, frequência ou tarefas pretendidas..." className="w-full resize-y rounded-xl border border-[#DDE0D5] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#7C8B68]" /></div><button type="submit" className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#294632] px-6 text-sm font-semibold text-white transition hover:bg-[#3B5B43]">Preparar pedido no WhatsApp <WhatsAppIcon /></button>{mensagem && <p role="status" className="rounded-xl bg-[#E5E9DF] p-4 text-sm leading-6 text-[#294632]">{mensagem}</p>}<p className="text-center text-[11px] leading-5 text-[#7A8378]">Será aberta uma conversa no WhatsApp com os dados do pedido.</p></form>
        </div></div></section>

      <footer className="border-t border-[#DDE0D5] bg-[#EFEEE7]"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8"><div className="flex items-center gap-3"><Image src="/logo.png" alt="" width={120} height={120} className="h-12 w-12 object-contain" /><div><p className="font-serif text-lg">Ponto Perfeito</p><p className="text-xs text-[#667267]">Limpezas domésticas e profissionais</p></div></div><p className="text-xs text-[#667267]">© {new Date().getFullYear()} Ponto Perfeito. Todos os direitos reservados.</p><a href="#inicio" className="text-sm font-semibold hover:text-[#7C8B68]">Voltar ao início ↑</a></div></footer>
      <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Ponto Perfeito por WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1 hover:scale-105"><WhatsAppIcon className="h-7 w-7" /></a>
    </main>
  );
}
