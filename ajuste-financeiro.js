/**
 * UAP/Divgp - Ebserh HULW
 * Cálculo de Desconto Proporcional
 * Fórmula: ((Base1 + Base2) / Divisor * Dias)
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ajuste-form');
    const resultArea = document.getElementById('result-area');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            calcularDesconto();
        });
    }

    function calcularDesconto() {
        const s1 = parseNumber(document.getElementById('salario-base').value);
        const s2 = parseNumber(document.getElementById('adicionais').value);
        const divisor = parseNumber(document.getElementById('divisor').value);
        const dias = parseNumber(document.getElementById('dias-afastamento').value);

        const baseTotal = s1 + s2;
        const valorPorDia = baseTotal / divisor;
        const resultadoFinal = valorPorDia * dias;

        exibirResultados({
            s1,
            s2,
            baseTotal,
            divisor,
            dias,
            valorPorDia,
            resultadoFinal
        });
    }

    function exibirResultados(data) {
        resultArea.style.display = 'block';

        document.getElementById('final-result').textContent = formatCurrency(data.resultadoFinal);

        const details = document.getElementById('calculation-details');

        // Helper function for numbers without R$ but with pt-BR format
        const fmt = (n) => n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        details.innerHTML = `
            <p>1. Base de Cálculo (S1 + S2): ${formatCurrency(data.s1)} + ${formatCurrency(data.s2)} = <strong>${formatCurrency(data.baseTotal)}</strong></p>
            <p>2. Valor por Dia (${formatCurrency(data.baseTotal)} / ${data.divisor}): <strong>${formatCurrency(data.valorPorDia)}</strong></p>
            <p>3. Resultado Final (${formatCurrency(data.valorPorDia)} * ${data.dias}): <strong>${formatCurrency(data.resultadoFinal)}</strong></p>
            <hr style="border: 0; border-top: 1px dashed var(--gray-300); margin: 1rem 0;">
            <p style="font-size: 0.8rem; color: var(--gray-500);">Fórmula aplicada: ((${fmt(data.s1)} + ${fmt(data.s2)}) / ${data.divisor} * ${data.dias})</p>
        `;

        resultArea.scrollIntoView({ behavior: 'smooth' });
    }
});
