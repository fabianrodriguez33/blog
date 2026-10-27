# PROMPT / INSTRUCCIONES PARA CLAUDE CODE: BLOG "INSIDE A DESIGNER'S WORLD" (DESPLIEGUE EN NETLIFY)

Eres un desarrollador full-stack y diseñador de interfaz de nivel senior. Tu objetivo es crear un blog editorial, ultra-minimalista, elegante y humano titulado **"Inside a Designer's World"**, optimizado para ser desplegado sin errores en **Netlify**.

Este proyecto corresponde a una evaluación académica de inglés con una **rúbrica de 20 puntos** (Inglés: 6 pts, Contenido: 4 pts, Multimedia: 3 pts, Páginas: 2 pts, Diseño: 2 pts, Interacción: 3 pts). Debe cumplir el 100% de los criterios sin excepción.

---

## 🎯 FILOSOFÍA DE DISEÑO & ESTÉTICA (CRÍTICO: EVITAR ESTILO "IA GENÉRICO")

- **Estilo**: Editorial, limpio, cercano y profesional (inspirado en publicaciones de diseño moderno como *Notes from Spain*).
- **PROHIBIDO**: Efectos neón exagerados, degradados estridentes, tarjetas con sombras pesadas, íconos o ilustraciones robóticas/de IA, o plantillas oscuras futuristas estilo ciencia ficción.
- **Paleta de Colores Oficial**:
  - **Tinta (`#17191A`)**: Texto principal, encabezados, fondos oscuros de acento.
  - **Marfil (`#FAFAF6`)**: Fondo principal cálido y limpio.
  - **Verde Lima (`#CBF36D`)**: Color de acento para botones de acción principal, badges y resaltados.
  - **Gris Muted (`#5B605F`)**: Texto secundario, metadatos, bordes sutiles y captions.
- **Tipografía**: Fuentes sans-serif limpias (`Inter` o `Manrope`). Titulares grandes, interlineado amplio y cómodo, ancho máximo de columna de lectura de **720px** para los artículos.
- **Layout y Espaciado**: Mucho aire/espacio en blanco, cuadrícula estructurada, bordes finos de 1px (`#E5E7EB` o `#5B605F/20`). Máximo 2–3 colores visibles por sección. Totalmente adaptativo (responsive) para teléfono y escritorio.

---

## 🏛️ ARQUITECTURA Y RUTAS (3 PÁGINAS INDEPENDIENTES)

Usa un framework moderno (ej. **Vite + React + React Router** o **Astro** o **Next.js (SSG/Netlify Export)**) asegurando rutas reales (no scroll con anclas en una sola página):

1. **` / ` (Home)**:
   - **Header Fijo/Visible**: Logo / Título a la izquierda ("A DESIGNER'S WORLD"), navegación a la derecha (`Home`, `My Process`, `Design Tips`) con indicador de página activa.
   - **Hero Section**:
     - Titular principal: *"It looks simple. It never starts that way."*
     - Subtítulo: *"Ideas, revisions and everything behind a design."*
     - Botón principal: *"READ MY STORY"* (redirige a `/my-process`).
     - Texto de bienvenida: Saludo de autor (`Hi, I'm [YOUR NAME]...`).
   - **Grid de Entradas Destacadas**: Tarjetas hacia `/my-process` y `/design-tips` con botón *"Read the story"* / *"See the tips"*.
   - Imagen de espacio de trabajo / escritorio de diseñador con pie de foto.

2. **` /my-process ` (Página de Proceso)**:
   - Artículo: *"What People Don’t See Behind a Design"*
   - Metadatos: Categoría (`My Process`), Autor (`By: [YOUR NAME]`), Tiempo de lectura (`about 2 min`).
   - Texto completo de 5 párrafos en inglés sobre el proceso de bocetado, errores y claridad.
   - Imagen descriptiva de bocetos/pantalla de edición con pie de foto: *"A design usually changes many times before it is finished."*
   - Pregunta de cierre: *"What part of the design process would you like to try?"*
   - **Sistema interactivo de Likes y Comentarios** (Persistentes).

3. **` /design-tips ` (Página de Consejos)**:
   - Artículo: *"Five Small Things That Make a Design Better"*
   - Metadatos: Categoría (`Design Tips`), Autor (`By: [YOUR NAME]`), Tiempo de lectura (`about 2 min`).
   - Párrafo introductorio + 5 consejos numerados (Start with the message, Use fewer fonts, Give your text space, Check your colors, Ask for another opinion).
   - **Video Integrado**: Reproductor de video (ej. iframe de YouTube o video HTML5 responsive) con pie de texto: *"Here is a short video showing how small design decisions can improve a simple visual."*
   - Pregunta de cierre: *"Which tip do you think is the most useful? Leave your answer in the comments."*
   - **Sistema interactivo de Likes y Comentarios** (Persistentes).

---

## ⚡ SISTEMA DE INTERACCIÓN PERSISTENTE (LIKES Y COMENTARIOS PARA NETLIFY)

Para cumplir los 3 puntos obligatorios de Interacción (mínimo 5 likes y 2 comentarios reales que se mantengan al recargar la página):
- **Opción para Netlify**:
  - Integración con **Supabase** (gratuito) o **Upstash Redis** o **Netlify Blobs / Functions** o **LocalStorage con sincronización backend de fallback**.
  - **Botón de Like**: Contador dinámico visible ("Like this post · X likes"). Al hacer clic, incrementa y guarda el estado de forma persistente.
  - **Sección de Comentarios**: Formulario con campos `Your name` y `Your comment`, botón `Post comment`.
  - Validación de campos con mensajes: *"Thanks! Your comment has been posted."* / *"Please fill in both fields."*
  - Muestra públicamente la lista de comentarios enviados en tiempo real y los conserva en recargas.

---

## 📜 TEXTOS OFICIALES A UTILIZAR (EXCLUSIVAMENTE EN INGLÉS)

### Home Welcome Text:
> Hi, I'm [YOUR NAME]. Welcome to Inside a Designer's World, a place to talk about the work that happens before a design is finished. Here, I share small lessons from making posters, editing photos, and creating content for digital platforms. Sometimes an idea works on the first try. Other times, I change the colors or move the text ten times. That's normal, and that's what makes the process interesting. If you like design, or you're curious about how it works, you're in the right place. Take a look at my posts and tell me what you think!

### Article 1 (My Process) - "What People Don’t See Behind a Design":
> People usually see the final design: a poster, a social media post, or a photograph. What they don't see is everything that happens before that moment. For me, designing means testing ideas, making mistakes, and trying again.
> 
> I often begin with a simple question: What do I want people to feel or understand? After that, I look for references, choose a few colors, and decide which information is most important. Sometimes I like my first idea. Sometimes I realize it doesn't work at all.
> 
> One of the hardest parts is knowing when to stop. I can spend a lot of time moving a title a little to the left or changing a font. Small details matter, but a design also needs to be clear. If people can't understand the message, the decoration won't help.
> 
> I've learned that good design isn't only about using Photoshop or having an expensive computer. It's also about paying attention, listening to feedback, and being patient. Every new project teaches me something different.
> 
> So, the next time you see a poster you like, think about the decisions behind it. There is probably more work there than you imagine.
> 
> *What part of the design process would you like to try?*

### Article 2 (Design Tips) - "Five Small Things That Make a Design Better":
> When I started paying more attention to graphic design, I thought a good design needed many effects. Now I prefer to keep things simple. Here are five small habits that help me create clearer work.
> 
> 1. Start with the message. Before choosing colors or photos, decide what people need to know.
> 2. Use fewer fonts. Two typefaces are usually enough. Too many styles can make a poster confusing.
> 3. Give your text some space. Not every corner needs an image or a decoration. White space makes important information easier to see.
> 4. Check your colors. Choose a simple palette and make sure the text is easy to read. A beautiful background doesn't help if the words disappear.
> 5. Ask for another opinion. After looking at the same design for hours, it's easy to miss something. A friend can notice details that you didn't see.
> 
> For my projects, I use digital tools to edit photographs and organize visual ideas, but no app can replace practice. I still make mistakes, and that's fine. The important thing is to keep learning.
> 
> *Which tip do you think is the most useful? Leave your answer in the comments.*

### Footer Copy:
`Inside a Designer’s World — Created for my English project.`

---

## 🛠️ CONFIGURACIÓN DE DESPLIEGUE EN NETLIFY

1. Incluir el archivo `_redirects` en la carpeta `public/` con la regla:
   ```
   /*  /index.html  200
   ```
   (o el archivo `netlify.toml` adecuado) para asegurar que el enrutamiento del lado del cliente (Client-side Routing) funcione perfectamente en Netlify al recargar en `/my-process` o `/design-tips`.
2. Asegurar que el comando `npm run build` pase limpiamente sin errores de compilación, de TypeScript ni de linter.
3. Proveer instrucciones sencillas para desplegar arrastrando la carpeta `dist/` / `out/` a Netlify Drop, o mediante conexión con repositorio de GitHub / Netlify CLI.

---

## 📋 TABLA DE VERIFICACIÓN DE RÚBRICA DE EVALUACIÓN (20/20 PTS)

| Criterio | Puntos | Requisito Demostrado |
| :--- | :---: | :--- |
| **English language** | 6 | 100% en inglés con vocabulario y gramática correcta B1-B2. |
| **Content & organization** | 4 | Entradas con +150 palabras organizadas lógicamente. |
| **Video & pictures** | 3 | Al menos 1 video reproducible y 4 imágenes de diseño pertinentes. |
| **Pages** | 2 | 3 páginas/rutas independientes navegables (`/`, `/my-process`, `/design-tips`). |
| **Design & creativity** | 2 | Diseño minimalista, elegante, responsive y sin aspecto de "IA genérica". |
| **Interaction** | 3 | Sistema de Likes y Comentarios reales y persistentes (+5 likes, +2 comentarios). |
