Este repositorio contiene una aplicación creada con Next.js (TypeScript) usada como ejercicio técnico/interview.

**ProductCard (Componente)**

- **Tipo:** Server Component. El componente principal de presentación `ProductCard` está implementado como componente de servidor para priorizar SEO y rendimiento. Al renderizar el HTML en el servidor se entrega markup estático a los clientes y motores de búsqueda, reduciendo la cantidad de JavaScript enviada al navegador y mejorando el ancho de banda y el Time To First Byte (TTFB).
- **Interactividad separada:** la lógica interactiva (añadir producto) está delegada a un componente cliente independiente (`AddProductButton`) para mantener `ProductCard` como componente servidor. Ver [features/products/components/AddProductButton.tsx](features/products/components/AddProductButton.tsx) para la parte cliente.
- **Reutilizabilidad:** `ProductCard` está diseñado para reutilizarse en distintos contextos:
  - Recibe props tipadas (`product`, `onAdd`, `toastConfig`, `currency`, `locale`, `className`) para ser configurable desde quien lo consuma.
  - Proporciona valores por defecto para `currency` y `locale`, y una `className` para extensión de estilos desde fuera.
  - Usa composición: incorpora `AddProductButton` para la interacción y permite que el padre controle la acción `onAdd`.
  - Mantiene la responsabilidad única: formatea precio con `Intl.NumberFormat`, usa `next/image` para imágenes y expone atributos accesibles (`aria-labelledby`) para mejor SEO y accesibilidad.

**Resumen**

- **Stack:** Next.js, React, TypeScript, Tailwind CSS (y utilidades relacionadas).
- **Objetivo:** ejemplo de tienda/listado de productos con componentes reutilizables y diseño responsivo.

**Requisitos**

- Node.js v18+ y `pnpm` (recomendado) para desarrollo local.
- Docker y Docker Compose (opcional) para ejecutar en contenedores.

**Desarrollo local**

1. Instala dependencias:

```bash
pnpm install
```

2. Levanta el servidor de desarrollo:

```bash
pnpm dev
```

Abre http://localhost:3000 en tu navegador.

**Usando Docker**

Se incluyen un `Dockerfile` multi-stage para producción y un `docker-compose.yml` con un servicio de desarrollo.

- Construir la imagen (producción):

```bash
docker build -t dribba-interview:latest .
```

- Ejecutar la imagen:

```bash
docker run --rm -p 3000:3000 dribba-interview:latest
```

- Levantar con `docker-compose` en desarrollo (monta el código y usa `pnpm dev`):

```bash
docker compose up web-dev
```

- Levantar la versión de producción con `docker-compose`:

```bash
docker compose up web
```

**Notas**

- El `Dockerfile` usa `pnpm` vía `corepack` y hace un build de Next.js para producir un contenedor optimizado.
- El servicio `web-dev` en `docker-compose.yml` monta el código fuente para permitir hot-reloading desde dentro del contenedor.
- Si cambias puertos, recuerda ajustar `PORT` y el mapeo en `docker-compose.yml`.
