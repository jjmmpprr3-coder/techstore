# IA_UTILIZADA.md

Para el desarrollo del proyecto se utilizó inteligencia artificial (Gemini y GitHub Copilot) como herramienta de apoyo.

| Herramienta | Uso |
| :--- | :--- |
| Gemini | Explicación de componentes React, corrección de rutas, lógica de buscador y formato de archivos. |
| GitHub Copilot | Sugerencias de código para la estructura de tarjetas de producto y estilos CSS. |

### Prompts más relevantes utilizados:

**Prompt 1:** "Crea un componente React que muestre una tarjeta de producto con imagen, nombre, precio y botón Agregar al carrito."
*Uso:* Generación de la estructura base del componente `ProductCard`. Modificado para incluir `toLocaleString` y renderizado de estrellas.

**Prompt 2:** "Explícame cómo funciona useState con un ejemplo simple para un carrito de compras."
*Uso:* Implementación de la lógica de contador de productos en el `App.jsx`.

**Prompt 3:** "Genera un filtro funcional usando el buscador y el método filter() de JavaScript."
*Uso:* Implementación de la funcionalidad de búsqueda en tiempo real sobre los productos cargados del JSON.