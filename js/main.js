/**
 * UAP/Divgp - Ebserh HULW
 * Sistema de Ferramentas Administrativas
 * Main JavaScript Module
 */

// Navigation Configuration
const navigationItems = [
    {
        title: 'Início',
        icon: '🏠',
        href: 'index.html',
        description: 'Dashboard Principal'
    },
    {
        title: 'Calculadora de Mesa',
        icon: '🧮',
        href: 'CalculadoraMesa.html',
        description: 'Cálculos rápidos'
    },
    {
        title: 'Cálculo de Reposição',
        icon: '💰',
        href: 'CalculoReposicao.html',
        description: 'Reposição ao erário'
    },
    {
        title: 'Parcelamento',
        icon: '💵',
        href: 'ParcelamentoReposicao.html',
        description: 'Parcelamento de reposição'
    },
    {
        title: 'Licença Maternidade',
        icon: '👶',
        href: 'CalculadoraLicencaMaternidade.html',
        description: 'Cálculo de Salário Maternidade'
    },
    {
        title: 'Controle de Tempo',
        icon: '⏱️',
        href: 'ControleTempo.html',
        description: 'Cronômetro e timer'
    },
    {
        title: 'Juntar PDFs',
        icon: '📎',
        href: 'JuntarPdf.html',
        description: 'Unir arquivos PDF'
    },
    {
        title: 'Calculadora IRPF',
        icon: '📊',
        href: 'CalculadoraIRPF.html',
        description: 'Imposto de Renda'
    },
    {
        title: 'Calculadora FGTS',
        icon: '🏦',
        href: 'CalculadoraFGTS.html',
        description: 'Saldo e multa FGTS'
    },
    {
        title: 'Hora Extra + DSR',
        icon: '⏱️',
        href: 'CalculadoraHE_DSR.html',
        description: 'HE 50%, 100% e DSR'
    },
    {
        title: 'Calculadora INSS',
        icon: '🏦',
        href: 'CalculaINSS.html',
        description: 'Previdência Social'
    },
    {
        title: '13º e Férias',
        icon: '💼',
        href: 'Calcular13eFerias.html',
        description: 'Cálculo de benefícios'
    },
    {
        title: 'Média de Férias',
        icon: '📈',
        href: 'CalculadoraMediaFerias.html',
        description: 'Média de variáveis'
    },
    {
        title: 'Adicional Noturno',
        icon: '🌙',
        href: 'CalculadoraAdicionalNoturno.html',
        description: 'Cálculo de adicional noturno'
    },
    {
        title: 'DSR',
        icon: '📅',
        href: 'dsr.htm',
        description: 'Descanso Semanal Remunerado'
    },

    {
        title: 'Orações',
        icon: '🙏',
        href: 'Oracoes.html',
        description: 'Reflexões e orações'
    },

    {
        title: 'Calculadora Profissional',
        icon: '⌨️',
        href: 'NovaCalculadora.html',
        description: 'Calculadora de mesa avançada'
    },
    {
        title: 'Horas (Soma/Sub)',
        icon: '⏱️',
        href: 'CalcularHoras.html',
        description: 'Cálculo de horas'
    },
    {
        title: 'INSS (Exportar)',
        icon: '💰',
        href: 'CalcularINSS.html',
        description: 'INSS com exportação'
    },
    {
        title: 'Parcelamento (Débito)',
        icon: '📊',
        href: 'CalcularParcelamento.html',
        description: 'Cálculo de parcelas'
    },
    {
        title: 'Terço de Férias',
        icon: '🏖️',
        href: 'CalcularTercoFerias.html',
        description: '1/3 de férias + INSS'
    },
    {
        title: 'Horas Feriado',
        icon: '🕒',
        href: 'CalcularHorasFeriado.html',
        description: 'Remuneração ACT Cláusula 15ª'
    },
    {
        title: 'Horas Extras 50%',
        icon: '⚡',
        href: 'CalculoHorasExtras50.html',
        description: 'Serviço Extraordinário CLT'
    },
    {
        title: 'Horas Extras 100%',
        icon: '🔥',
        href: 'CalculoHorasExtras100.html',
        description: 'HE Domingos e Feriados'
    },
    {
        title: 'Desconto de Faltas',
        icon: '📉',
        href: 'CalculadoraDescontoFaltas.html',
        description: 'Cálculo Valor da Hora (Base 00211)'
    },
    {
        title: 'Desconto Proporcional',
        icon: '📉',
        href: 'AjusteFinanceiroRetroativo.html',
        description: 'Cálculo (S1+S2)/Divisor*Dias'
    },
];

/**
 * Initialize the application
 */
function initApp() {
    renderNavigation();
    setActiveNavItem();
    setupMobileMenu();
}

/**
 * Render the sidebar navigation
 */
function renderNavigation() {
    const navContainer = document.getElementById('navbar-container');
    if (!navContainer) return;

    const currentPage = getCurrentPage();

    const sidebarHTML = `
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="sidebar-logo">UAP/Divgp</div>
                <div class="sidebar-subtitle">Ferramentas Administrativas</div>
                <div class="sidebar-institution">Ebserh - HULW</div>
            </div>
            
            <nav>
                <ul class="nav-menu">
                    ${navigationItems.map(item => `
                        <li class="nav-item">
                            <a href="${item.href}" 
                               class="nav-link ${currentPage === item.href ? 'active' : ''}"
                               title="${item.description}">
                                <span class="nav-icon">${item.icon}</span>
                                <span class="nav-text">${item.title}</span>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </nav>
        </aside>
    `;

    navContainer.innerHTML = sidebarHTML;
}

/**
 * Get the current page filename
 */
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
}

/**
 * Set active state for current navigation item
 */
function setActiveNavItem() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
    // Create mobile menu button if it doesn't exist
    if (window.innerWidth <= 768 && !document.getElementById('mobile-menu-btn')) {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            const menuBtn = document.createElement('button');
            menuBtn.id = 'mobile-menu-btn';
            menuBtn.className = 'btn btn-primary';
            menuBtn.style.cssText = 'position: fixed; top: 1rem; left: 1rem; z-index: 1001;';
            menuBtn.innerHTML = '☰ Menu';
            menuBtn.onclick = toggleMobileMenu;
            document.body.insertBefore(menuBtn, mainContent);
        }
    }
}

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

/**
 * Format currency value (BRL)
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

/**
 * Format percentage value
 */
function formatPercentage(value, decimals = 2) {
    return `${value.toFixed(decimals)}%`;
}

/**
 * Format date (Brazilian format)
 */
function formatDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    return date.toLocaleDateString('pt-BR');
}

/**
 * Show notification/toast message
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--error)' : 'var(--info)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Validate required form fields
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--error)';
            isValid = false;
        } else {
            field.style.borderColor = 'var(--gray-300)';
        }
    });

    return isValid;
}

/**
 * Parse number from Brazilian format
 */
function parseNumber(value) {
    if (typeof value === 'number') return value;
    if (!value) return 0;

    const str = String(value).trim();

    // Se contém vírgula, assumimos formato brasileiro (1.234,56)
    if (str.includes(',')) {
        return parseFloat(str.replace(/\./g, '').replace(',', '.')) || 0;
    }

    // Se não contém vírgula, tratamos como float padrão (1234.56)
    // Isso evita que o ponto decimal do HTML5 number input seja removido incorretamente
    return parseFloat(str) || 0;
}

/**
 * Add CSS animations
 */
function addAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Add animations
addAnimations();

// Handle window resize for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('open');
        }
    }
});
