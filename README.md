# Web Responsivo

## 📸 Capturas de Pantalla

A continuación se muestran capturas del diseño en las tres vistas principales:

### Vista Móvil (≤ 767px)
![Captura móvil](./screenshots/mobile.png)

### Vista Tableta (768px - 991px)
![Captura tableta](./screenshots/tablet.png)

### Vista Escritorio (≥ 992px)
![Captura escritorio](./screenshots/desktop.png)

---

## 🖥️ Tecnologías Utilizadas

El desarrollo de esta aplicación se realizó empleando las siguientes tecnologías y herramientas principales:

- **[Vite](https://vitejs.dev/):** Bundler moderno y ultrarrápido para desarrollo y build de la aplicación.
- **[React](https://react.dev/):** Librería principal para la construcción de la interfaz de usuario basada en componentes.
- **[TypeScript](https://www.typescriptlang.org/):** Superset de JavaScript que añade tipado estático para mayor robustez y mantenibilidad.
- **[Bootstrap 5](https://getbootstrap.com/):** Framework CSS utilizado para el sistema de grid responsivo, utilidades, y componentes como la navbar y las tarjetas.
- **CSS personalizado (App.css):** Para la personalización de colores, transparencias y ajustes finos de responsividad mediante media queries.

---

## 🧭 Enfoque de Diseño Responsivo

El enfoque responsivo se basa en la combinación del sistema de grid de **Bootstrap 5** y media queries personalizadas en el archivo `App.css`.  
Esto garantiza una experiencia óptima en cualquier dispositivo, cumpliendo los siguientes objetivos:

- **Grid responsivo con Bootstrap:**  
  - En móviles (≤767px): las tarjetas se apilan en una sola columna.
  - En tabletas (768px-991px): las tarjetas se muestran en dos columnas.
  - En escritorio (≥992px): las tarjetas aparecen en tres columnas.

- **Menú de navegación adaptable:**  
  El navbar utiliza las clases de Bootstrap para convertirse en menú hamburguesa en dispositivos móviles automáticamente.

- **Media queries personalizadas:**  
  Ajustes de tipografía, márgenes, paddings y otros detalles visuales se realizan en `App.css` para afinar la experiencia en cada breakpoint.

- **Estilos modernos y coherentes:**  
  Se personalizaron colores de fondo, navbar y botones para lograr una estética moderna y consistente en todos los dispositivos.

---

## 🚀 Enlace de la Aplicación Desplegada

Puedes ver la aplicación funcionando en el siguiente enlace:

[https://tu-app-ejemplo.vercel.app/](https://web-responsiva.vercel.app/)

> _Nota: Reemplaza el enlace con tu URL real de despliegue en Vercel, Netlify o GitHub Pages._

---

## 📂 Estructura de Capturas

Para asegurar la visualización de las imágenes, coloca las capturas de pantalla en la carpeta `/screenshots` junto a este archivo, con los siguientes nombres:
- `mobile.png`
- `tablet.png`
- `desktop.png`

---

## 💡 Observaciones

- El proyecto está optimizado para cumplir con los estándares modernos de usabilidad y accesibilidad.
- Puedes personalizar el diseño responsivo modificando tanto las utilidades de Bootstrap en los componentes, como las media queries y estilos en `App.css`.

---

**Desarrollado por:**  
Wayner G.T.