# Gestor de Tareas (Angular 22 + Docker)

Aplicación creada para el reto "Gestor de Tareas Dockerizado" del curso "Desarrollo de Ssistemas WEB". 
Consiste que Todo el entorno (Node, Angular CLI, dependencias y servidor de desarrollo) vive dentro del
contenedor Docker, por lo que **no necesitas instalar Angular ni Node en tu
computadora**.

## Requisitos

- Docker y Docker Compose instalados.

## Cómo levantar la app

Desde la carpeta del proyecto:

```bash
docker-compose up
```

```bash
docker-compose logs
```
Terminar el servicio:
```bash
docker-compose down
```

(La primera vez tardará un poco más porque descarga la imagen de Node e
instala las dependencias con `npm install`.)

Cuando veas en la consola algo como:

```
➜  Local:   http://localhost:4200/
```

Abre tu navegador en **http://localhost:4200** y la aplicación estará lista.

Para apagarlo: `Ctrl + C` y luego `docker-compose down`.

## Qué incluye (Fase 2 del reto)

- **Interpolación**: el título `Gestor de Tareas` se muestra con `{{ }}`.
- **Pipe de fecha**: la fecha actual se muestra con `| date: 'fullDate'`.
- **Two-Way Data Binding**: el `<input>` usa `[(ngModel)]` (con `FormsModule`
  importado en el componente standalone).
- **Eventos**: el botón "Guardar" dispara `(click)` para agregar la tarea al
  arreglo.
- **Control de flujo moderno**: `@if` muestra un mensaje cuando la lista está
  vacía, y `@for` recorre e imprime cada tarea cuando hay elementos.

## Estructura relevante

```
gestor-tareas/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── angular.json
└── src/
    ├── main.ts
    └── app/
        ├── app.ts        # lógica: signal del título, fecha, arreglo de tareas, guardarTarea()
        ├── app.html       # template con interpolación, pipe, ngModel, click, @if/@for
        └── app.css
```
