# portafolio

 version 14.2.13.
* https://breinerbca99.github.io/portafolio/
* https://mi-portafolio-breinerbca99.vercel.app/

## Development server

* http://localhost:4200/

## Build
### DEPENDENCIAS PARA EL BUILD GITHUB PAGES
dist/[PROJECTNAME] → "outputPath": "dist/portafolio" (Verificar el nombre coincida con el nombre del proyecto de github)

###Instala la depedencia, para hacer el deploy a github pages
* ng add angular-cli-ghpages
* ng deploy --base-href=https://breinerbca99.github.io/portafolio/
ng build --prod --base-href=/[projectname]/
ng build --prod --base-href https://breinerbca99.github.io/portafolio/

git branch gh-pages
git checkout gh-pages
git push origin gh-pages
ng build --output-path docs --base-href /portafolio/

##GUIA de como desplegar

https://dev.to/danielcaballero88/how-to-deploy-angular-website-to-github-pages-jhb
COMO SUBIR UN PROYECTO ANGULAR A GITHUB PAGES EN MENOS DE 5 MINUTOS!: https://www.youtube.com/watch?v=VtNXgiLaw1E