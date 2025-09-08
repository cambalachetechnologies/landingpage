const industriesData = {
  "Consumer Goods": [
    "Unir B2B y B2C en un solo lugar",
    "Maximizar la ejecución en el punto de venta",
    "Tomar decisiones basadas en datos",
    "Optimizar la productividad del equipo"
  ],
  "High Tech": [
    "Mejorar la gestión de proyectos tecnológicos",
    "Automatizar procesos de innovación",
    "Controlar ciclos de desarrollo de software",
    "Optimizar soporte técnico y postventa"
  ],
  "Agriculture": [
    "Monitorear cultivos y producción",
    "Optimizar logística y distribución",
    "Gestionar contratos y clientes",
    "Mejorar trazabilidad de productos"
  ],
  "Manufacturing": [
    "Optimizar la cadena de suministro",
    "Controlar inventarios y producción",
    "Mejorar planificación de órdenes",
    "Aumentar eficiencia del equipo"
  ],
  "Fintech": [
    "Gestionar clientes y productos financieros",
    "Automatizar procesos de aprobación",
    "Analizar datos en tiempo real",
    "Mejorar experiencia del usuario"
  ],
  "Travel & Leisure": [
    "Optimizar reservas y disponibilidad",
    "Mejorar comunicación con clientes",
    "Gestionar promociones y ofertas",
    "Analizar desempeño de servicios"
  ]
};

const industryItems = document.querySelectorAll('.industry-selector li');
const industryTitle = document.getElementById('industry-title');
const industryDesc = document.getElementById('industry-desc');
const industryList = document.getElementById('industry-list');

industryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Quitar active a todos
    industryItems.forEach(i => i.classList.remove('active'));
    // Marcar el que fue clickeado
    item.classList.add('active');

    const key = item.getAttribute('data-industry');

    // Actualizar contenido del cuadro izquierdo
    industryTitle.textContent = key;
    industryDesc.textContent = `Las empresas de la industria necesitan más que un CRM tradicional:`;
    
    // Limpiar lista anterior
    industryList.innerHTML = '';
    industriesData[key].forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      industryList.appendChild(li);
    });
  });
});
