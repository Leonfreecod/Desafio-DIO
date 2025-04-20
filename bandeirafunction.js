function validarCartao(numeroCartao) {
    const bandeiras = [
        { nome: "Visa", regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
        { nome: "MasterCard", regex: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[0-1][0-9]{12}|720[0-9]{12}))$/ },
        { nome: "American Express", regex: /^3[47][0-9]{13}$/ },
        { nome: "Discover", regex: /^(6011|65|64[4-9])[0-9]*$/ },
        { nome: "Diners Club", regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { nome: "EnRoute", regex: /^(2014|2149)/ },
        { nome: "JCB", regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
        { nome: "Voyager", regex: /^8699[0-9]{11}$/ },
        { nome: "Hipercard", regex: /^606282|^3841(?:[0|4|6]{1})0/ },
        { nome: "Aura", regex: /^50[0-9]{14}$/ }
    ];

    for (const bandeira of bandeiras) {
        if (bandeira.regex.test(numeroCartao)) {
            return bandeira.nome;
        }
    }

    return "Bandeira não identificada";
}

// Exemplo de uso:
const numeroCartao = "5078418953009172"; // Substitua pelo número do cartão para teste
const bandeira = validarCartao(numeroCartao);
console.log(`Bandeira do cartão: ${bandeira}`);