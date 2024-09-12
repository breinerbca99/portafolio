# Versiones del proyecto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

--------------------------------------------------------------------------------
## Portafolio
https://github.com/breinerbca99/portafolio


## Development server

* http://localhost:4200/
* https://breinerbca99.github.io/portafolio/
* https://mi-portafolio-breinerbca99.vercel.app/


## Dependencias
### Dependencias para el build github pages
* ng add angular-cli-ghpages

### Construir proyecto en local
ng build --prod --base-href=/[projectname]/
* ng deploy --base-href=https://breinerbca99.github.io/portafolio/

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
### Verificar tener la dependencia para hacer el build
npm install -g angular-cli-ghpages
### Construir proyecto compilado
ng build --output-path=dist --base-href https://breinerbca99.github.io/portafolio/
###  Despliega en github pages
ngh --dir=dist

## Guia de como desplegar
https://dev.to/danielcaballero88/how-to-deploy-angular-website-to-github-pages-jhb
COMO SUBIR UN PROYECTO ANGULAR A GITHUB PAGES EN MENOS DE 5 MINUTOS!: https://www.youtube.com/watch?v=VtNXgiLaw1E

## IMPORTANTE
Para github pages hay que tener el 
dist/[PROJECTNAME] → "outputPath": "dist/portafolio" (hay que quitarle el [PROJECTNAME])  ya que este genera error

dist/[PROJECTNAME] → "outputPath": "dist/portafolio" (Verificar el nombre coincida con el nombre del proyecto de github)

## Ejecutar el proyecto