
"use client";

export default function ContactForm() {
    const whatsappNumber = ""; // Inserimos o número profissional mais tarde.

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const name = String(data.get("name") || "");
        const phone = String(data.get("phone") || "");
        const service = String(data.get("service") || "");
        const message = String(data.get("message") || "");

        const text = [
            "Olá! Gostaria de pedir um orçamento.",
            `Nome: ${name}`,
            `Telefone: ${phone}`,
            `Serviço: ${service}`,
            `Detalhes: ${message}`,
        ].join("\n");

        if (!whatsappNumber) {
            alert("Ainda precisamos de configurar o número de WhatsApp da empresa.");
            return;
        }

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener,noreferrer"
        );
    }

    return (
        <form
            className="grid gap-4 rounded-2xl bg-white p-6 text-[#203C30] md:p-8"
            onSubmit={handleSubmit}
        >
            <h3 className="font-serif text-2xl">Peça o seu orçamento</h3>

            <label className="grid gap-1 text-sm">
                Nome
                <input
                    name="name"
                    required
                    placeholder="O seu nome"
                    className="rounded-lg border border-[#D6D0C3] px-4 py-3 outline-none focus:border-[#203C30]"
                />
            </label>

            <label className="grid gap-1 text-sm">
                Telefone
                <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="O seu contacto"
                    className="rounded-lg border border-[#D6D0C3] px-4 py-3 outline-none focus:border-[#203C30]"
                />
            </label>

            <label className="grid gap-1 text-sm">
                Serviço pretendido
                <select
                    name="service"
                    required
                    defaultValue=""
                    className="rounded-lg border border-[#D6D0C3] bg-white px-4 py-3 outline-none focus:border-[#203C30]"
                >
                    <option value="" disabled>Escolha um serviço</option>
                    <option>Limpeza regular</option>
                    <option>Limpeza profunda</option>
                    <option>Limpeza pós-obras</option>
                    <option>Escritórios</option>
                    <option>Janelas, varandas ou outro</option>
                </select>
            </label>

            <label className="grid gap-1 text-sm">
                Mais detalhes (opcional)
                <textarea
                    name="message"
                    rows={3}
                    placeholder="Zona, dimensão do espaço ou outras informações"
                    className="resize-y rounded-lg border border-[#D6D0C3] px-4 py-3 outline-none focus:border-[#203C30]"
                />
            </label>

            <button
                type="submit"
                className="rounded-full bg-[#203C30] px-6 py-4 font-medium text-white transition hover:bg-[#315744]"
            >
                Continuar para WhatsApp ↗
            </button>

            <p className="text-xs leading-5 text-[#647066]">
                O formulário prepara uma mensagem no WhatsApp. Não envia dados para um servidor.
            </p>
        </form>
    );
}
