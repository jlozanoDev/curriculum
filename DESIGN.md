# DESIGN.md - Curriculum Web

## Descripción

Currículum web interactivo desarrollado con Vue 3 (Composition API) y Tailwind CSS. Aplicación SPA que muestra el perfil profesional, experiencia, educación, stack tecnológico, certificaciones e información de contacto.

## Arquitectura

### Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | Vue 3.5+ (Composition API) |
| Build Tool | Vite 8+ |
| Estilos | Tailwind CSS 4 + PostCSS |
| Lenguaje | JavaScript (ES Modules) |

### Estructura de Directorios

```
src/
├── assets/              # Recursos estáticos (imágenes, iconos)
├── components/          # Componentes Vue
│   ├── Header.vue
│   ├── Profile.vue
│   ├── Experience.vue
│   ├── Education.vue
│   ├── TechStack.vue
│   ├── Certifications.vue
│   ├── Contact.vue
│   └── TypewriterText.vue
├── composables/         # Composables reutilizables
│   ├── useParallax.js
│   └── useTheme.js
├── App.vue              # Componente raíz
├── data.js              # Datos del perfil (JSON)
├── main.js              # Punto de entrada
└── style.css            # Estilos globales
```

## Componentes

### App.vue
Componente principal que orquesta todos los sub-componentes. Gestiona el tema (dark/light) y aplica transiciones de entrada/salida.

### Header.vue
Muestra nombre, rol y foto de perfil. Incluye botón para toggle de tema oscuro/claro.

### Profile.vue
Sección de perfil profesional con texto descriptivo.

### Experience.vue
Lista de experiencias laborales con empresa, posición, periodo y descripción.

### Education.vue
Lista de formación académica con institución, título y periodo.

### TechStack.vue
Grid de tecnologías organizadas por categoría (Frontend, Backend, Herramientas) con iconos.

### Certifications.vue
Lista de certificaciones y cursos completados.

### Contact.vue
Información de contacto con enlaces a email, teléfono, ubicación, LinkedIn y web personal.

### TypewriterText.vue
Efecto de texto con animación typewriter.

## Composables

### useTheme.js
Gestiona el tema oscuro/claro con persistencia en localStorage.

### useParallax.js
Implementa efectos parallax en el header.

## Flujo de Datos

```
data.js (JSON) ──► App.vue ──► Props ──► Componentes hijos
                      │
                 useTheme.js ──► Tema global
```

Los datos del perfil se centralizan en `data.js` para facilitar la edición. Se pasan como props a los componentes hijos.

## Diseño Visual

### Temas
- **Claro**: Fondo blanco, texto gris
- **Oscuro**: Estilo terminal - fondo `#0a0a0a` (negro) con acentos en verde terminal (`green-400/500`), tarjetas en gris oscuro `#111111` y `#1a1a1a`, degradados sutiles en verde

### Tipografía
- **General**: Sistema (sans-serif)
- **Terminal**: `Fira Code` (vía Google Fonts) aplicado en:
  - Headings con `$` (prompt de terminal): todas las secciones
  - Nombre y rol en el header
  - Líneas tipo comentario (`// `) en Experiencia y Educación

### CodeBackground
Componente `CodeBackground.vue` que muestra animación de escritura de código en el fondo de cada sección en modo oscuro:
- **Header**: PHP (`$user`, `$role`)
- **Profile**: PHP (`$profile` array)
- **Experience**: JavaScript/JSON (array de objetos)
- **Education**: PHP (`$education` array)
- **TechStack**: JavaScript (objeto con arrays)
- **Certifications**: JavaScript (array de strings)
- **Contact**: PHP (`$contact` array)
- Baja opacidad, cursor parpadeante, loop infinito de escritura/borrado

### Transiciones
- Fade-in con desplazamiento vertical al cargar secciones
- Duración: 0.6s para entrada, 0.4s para salida

### Responsividad
Diseño mobile-first con Tailwind CSS, adaptable a todos los tamaños de pantalla.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con Vite |
| `npm run build` | Compila para producción en `dist/` |
| `npm run preview` | Previsualiza build de producción |
