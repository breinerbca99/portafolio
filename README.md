# Proyecto Portafolio

## Introducción
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) en las siguientes versiones:
- Angular CLI versión **14.2.13**
- Angular CLI versión **11.1.4**

---

## Portafolio
Puedes encontrar el portafolio en los siguientes enlaces:
- [Repositorio en GitHub](https://github.com/breinerbca99/portafolio)
- [Portafolio en GitHub Pages](https://breinerbca99.github.io/portafolio/)
- [Portafolio en Vercel](https://mi-portafolio-breinerbca99.vercel.app/)

---

## Dependencias
### Dependencias para GitHub Pages
- Instalar la dependencia:
  ```bash
  npm install -g angular-cli-ghpages
  ```
- Agregar al proyecto:
  ```bash
  ng add angular-cli-ghpages
  ```

---

## Construcción y Despliegue
### Construir proyecto en local
```bash
ng build --prod --base-href=/[projectname]/
```

### Construir proyecto compilado para despliegue
```bash
ng build --output-path=dist --base-href https://breinerbca99.github.io/portafolio/
```

### Desplegar en GitHub Pages
```bash
gh --dir=dist
```

### Subir cambios a producción
1. Realizar commit de los cambios:
   ```bash
   git commit -m "Mensaje del commit"
   ```
2. Construir el proyecto:
   ```bash
   ng build --output-path=dist --base-href https://breinerbca99.github.io/portafolio/
   ```
3. Desplegar en GitHub Pages:
   ```bash
   ngh --dir=dist
   ```

**Nota:** Verificar que `outputPath` en `angular.json` coincida con el nombre del proyecto:
```json
"outputPath": "dist/portafolio"
```

---

## Entorno de Desarrollo
### Servidor de Desarrollo
- Ejecutar el servidor:
  ```bash
  ng serve -o
  ```
- URLs disponibles:
  - [Localhost](http://localhost:4200/)
  - [GitHub Pages](https://breinerbca99.github.io/portafolio/)
  - [Vercel](https://mi-portafolio-breinerbca99.vercel.app/)

---

## Recursos Útiles
| **Descripción**                                         | **Enlace**                                                                                                                                          |
|---------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| How to: Deploy Angular Website to Github Pages          | [Guía en Dev.to](https://dev.to/danielcaballero88/how-to-deploy-angular-website-to-github-pages-jhb)                                                |
| Cómo subir un proyecto Angular a GitHub Pages en menos de 5 minutos! | [Tutorial en YouTube](https://www.youtube.com/watch?v=VtNXgiLaw1E)                                                                                   |

---

## Colores y Fuentes
### Colores
| **Color Original** | **Descripción** | **Color Sustituto** |
|---------------------|-----------------|----------------------|
| `#304fff`          | Azul            | `#2C594C`           |
| `#f8efef`          | Plomo           | `#F2F2F2`           |
| `#3eca3e`          | Verde           | `#417D73`           |

### Fuente
- **Original:** Source Sans Pro
