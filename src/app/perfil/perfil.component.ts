import { Component, OnInit } from '@angular/core';
import { Servicio } from '../models/servicio';
import { Perfil } from '../models/perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: Perfil = new Perfil();
  servicios: Servicio[] = [{
    nombre: 'Backend',
    descripcion: 'Experiencia con requerimientos en el sector bancario, medico y publico',
    puntos: ['Exportar casos de uso en aplicaciones funcionales.','Diseñar, construir y mantener el código de Java.','Mantener la organización y la automatización.'
        ,'Pruebas unitarias (Mockito y Junit)'],
    img:'assets/imagenes/lenguajes/backend.png',
    // icono:'../assets/imagenes/skills/java-brands.svg',
    icono:'fab fa-java fa-2x text-white',
    estilo:'width: 30px !important; height: 40px;margin-top: -5px;'
  }, {
    nombre: 'Frontend',
    descripcion: 'Experiencia con requerimientos en el sector medico y publico',
    puntos: ['Maquetacion de sitios web','Adaptacion de estilos web (Cc3,Bootstrap,Angular Material)','Conocimiento solido de Javascript y Typescript'
          ,'Experiencia con Angular, routes,proteger rutas, auth'],
    img:'assets/imagenes/lenguajes/frontend.png',
    // icono:'../assets/imagenes/skills/js-brands.svg',
    icono:'fab fa-node-js fa-2x text-white',
    estilo:'width: 30px !important; height: 30px;'
  }, {
    nombre: 'Cloud',
    descripcion: 'Despliegue de aplicaciones dockerizadas y uso eficiente de la nube',
    puntos: ['Conceptos de configuracion en arquitecturas Cloud','Conceptos de gestion en el acceso y la seguridad',
          'Conocimientos en Arquitectura de Aws','Integracion Aws Spring Angular Docker Kubernetes'],
    img:'assets/imagenes/lenguajes/cloud.png',
    // icono:'../assets/imagenes/skills/cloud.svg',
    icono:'fa-solid fa-cloud fa-2x text-white',
    estilo:'width: 45px !important; height: 30px;margin-top: -4px;'
  }, {
    nombre: 'Mobil',
    descripcion: 'Integracion de proyectos con base de datos Sql y NoSql',
    puntos: ['Consumo de servicios con retrofit 2.0',
        'Almacenar datos en room','Creacion de vistas con XML',
        'Patron MVVM'],
    img:'assets/imagenes/lenguajes/mobil.png',
    // icono:'../assets/imagenes/skills/mobile.svg',
    icono:'fas fa-mobile-alt fa-2x text-white',
    estilo:'width: 30px !important; height: 30px;margin-top: -4px;'
  },{
    nombre: 'Base de datos',
    descripcion: 'Integracion de proyectos con base de datos Sql y NoSql',
    puntos: ['Control de acceso, basado en roles','Desnormalizacion del negocio en entidades de negocio','Experiencia en base de datos Sql (Oracle)',
        'Experiencia en base de datos noSql (MongoDb)'],
    img:'assets/imagenes/lenguajes/base.png',
    // icono:'../assets/imagenes/skills/database.png',
    icono:'fas fa-database fa-2x text-white',
    estilo:'width: 30px !important; height: 30px;margin-top: -4px;'
  },{
    nombre: 'Devops',
    descripcion: 'Integracion de proyectos con base de datos Sql y NoSql',
    puntos: ['Dockerizacion de imagenes de jars de java','comunicacion entre una imagen front y una imagen back','Conocimiento de Kubernetes full Stack',
        'Experiencia en uso de Sonarquebe'],
    img:'assets/imagenes/lenguajes/devops.png',
    icono:'fab fa-jenkins fa-2x text-white',
    // icono:'../assets/imagenes/skills/database.png',
    estilo:'width: 30px !important; height: 30px;margin-top: -4px;'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
