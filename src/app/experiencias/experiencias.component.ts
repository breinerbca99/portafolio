import { Component, OnInit, Input } from '@angular/core';
import { Experiencia } from '../models/experencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  @Input() entrada: boolean = false;

  educaciones: any[] = []; // Definición de la propiedad educaciones
  experiencias: Experiencia[] = [{
    centroTrabajo: 'BBVA PERU - LIMA - PERU',
    proyecto: 'Realability Adquirencia - Medios de Pagos',
    puesto: 'Software Associate Solutions',
    descripcion: [
      '• Encargado de garantizar la integridad y continuidad de la producción Adquirencia', 
      '• Promocionar la mejora de los servicios distribuidos Java',
      '• Promocionar la mejora de los procesos ETL',
      '• Desarrollo de apk para POS de Adquirencia',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2023
  },{
    centroTrabajo: 'BBVA PERU - LIMA - PERU',
    proyecto: 'Mercurio Loyalty',
    puesto: 'Software Associate Solutions',
    descripcion: [
      '• Generación de servicios web basados en Java con Spring', 
      '• Generacion de transaccion de consulta,canje y anulacion de puntos',
      '• Generacion de 3 transacciones entre BBVA, Eglobal y Everilion',
      '• Test Unitarios con Mockito y Junit 5',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2023
  },{
    centroTrabajo: 'BBVA PERU - LIMA - PERU',
    proyecto: 'Proyecto Single Sign On hacia Openpay desde Netcash Web BBVA',
    puesto: 'Software Associate Solutions',
    descripcion: [
      '• Gestión de despliegue de APIs liberadas productivas', 
      '• Revisión de intercambio de certificado MTLS entre BBVA y OpenPay',
      '• Despliegue de 5 transacciones productivas entre BBVA y OpenPay',
      '• Gestión técnica entre Net cash BBVA y OpenPay',
      '• Despliegue de proceso desvinculación Net cash y OpenPay online basado en eventos',
      '• Despliegue de proceso batch para desvinculación Net cash y OpenPay',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2023
  },{
    centroTrabajo: 'STEFANINI - LIMA - PERU',
    proyecto: 'Proyecto Single Sign On hacia Openpay desde Netcash Web BBVA',
    puesto: 'Analista Programador',
    descripcion: [
      '• Generación de servicios web basados en Java con Spring', 
      '• Integracion con servicios Api Rest y Autenticacion de OpenPay',
      '• Generacion de 5 transacciones entre BBVA y OpenPay',
      '• Test Unitarios con Mockito y Junit 5',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2022
  }, {
    centroTrabajo: 'STEFANINI - LIMA - PERU',
    proyecto: 'Proyecto Onboarding Adquirencia BBVA Y EGLOBAL',
    puesto: 'Analista Programador',
    descripcion: [
      '• Generación de servicios web basados en Java con Spring', 
      '• Generación de transacion para la validacion de una persona adquiriente',
      '• Generacion de proceso batch etl de Oracle a Host', 
      '• Creacion de programa de automatizacion de pruebas para backend y front',
      '• Test Unitarios con Mockito y Junit 5',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2022
  }, {
    centroTrabajo: 'Inveritas Global Holdings Perú S.A. - LIMA - PERU',
    proyecto: 'Seguros Rimac BBVA Y RIMAC',
    puesto: 'Analista Programador',
    descripcion: [
      '• Generación de servicios web basados en Java con Spring', 
      '• Integracion con servicios Api Rest y Autenticacion de Rimac',
      '• Generacion de 3 transacciones entre BBVA y Rimac', 
      '• Test Unitarios con Mockito y Junit 5',
      '• Manejo de reintentos con MongoDb y Java',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',
    ],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2021
  }, {
    centroTrabajo: 'Inveritas Global Holdings Perú S.A. - LIMA - PERU',
    proyecto: 'Canjes de puntos BBVA Y DESPEGAR',
    puesto: 'Analista Programador',
    descripcion: [
      '• Generación de servicios web basados en Java con Spring',
      '• Generación de Api Rest Proxy para consumir servicios BBVA (DESPEGAR -> PROXY -> ASO -> APX) para la comunicación entre BBVA y Despegar', 
      '• Consumo de servicios SSL y generación de certificados en Java',
      '• Migracion de Sql Server a Oracle', '• Consumo de servicios SSL y generacion de certificados en Java',
      '• Implementación y despliegue en Jboss hasta producción',
      '• Manejo de integración continua BitBucket,Jenkins, Sonarqube',
    ],
    tecnologia: `Java 11, Spring, RxJava, Retrofit 2.0, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Servicios Aso (Servicios BBVA),Jenkins, Docker, Jboss, Tomcat.`,
    anio: 2021
  }, {
    centroTrabajo: 'EJERCITO DEL PERU ',
    proyecto: 'PROYECTO PMTD – LIMA - PERU ',
    puesto: 'Analista Programador Full Stack',
    descripcion: ['• Participacion en el modelamiento relacional de base de datos del negocio', '• Generacion de servicios Rest basados en Java y Spring Boot',
      '• Generacion de Authenticacion de usuarios basado en roles con Spring Security y jwt.', '• Generacion de documentacion de los servicios basado en Swagger',
      '• Generacion de componentes en Angular y servicios para el lado del front', '• Coordinaciones de los requisites funcionales y requerimientos del Cliente'],
    tecnologia: 'Java 11 (Servicios Rest, microservicios), Oracle, Angular 11 (Angular Material, Bootstrap), Tomcat (9), JavaScript, Css3 y HTML.',
    anio: 2021
  }, {
    centroTrabajo: 'INTEGRO S.A.C – LIMA - PERU',
    proyecto: 'PROYECTO NOVOFONG – LIMA - PERU ',
    puesto: 'Analista Programador',
    descripcion: ['• Generacion de componentes en Angular y servicios para el lado del front', '• Maquetacion de vistas front y estilos',
      '• Mantenimiento de sistemas front-end y mejoras a los estilos de angular Material',
      '• Mantenimiento a los servicios front', '• Ajustes en servicios de back'],
    tecnologia: 'Java 8 (Servicios Rest, microservicios), Oracle, Angular 5,8 (Angular Material, Bootstrap), Tomcat (8,9), JavaScript, Css3 y HTML.',
    anio: 2020
  }, {
    centroTrabajo: 'Open TI S.A.C – LIMA - PERU',
    proyecto: 'PROYECTO CLINICA BRALLIN – LIMA - PERU ',
    puesto: 'Analista Programador Full Stack',
    descripcion: ['• Realizacion de aplicación desde angular desde cero', '• Generacion de components y modulos y routers para angular',
      '• Generacion de estilos y maquetacion de vistas html', '• Consumo de servicios backend en spring', '• Modificacion de servicios en spring'],
    tecnologia: 'Java 8 (Servicios Rest, microservicios), Oracle, Angular 5,8 (Angular Material, Bootstrap), Tomcat (8,9), JavaScript, Css3 y HTML.',
    anio: 2020
  }];

  constructor() { }

  ngOnInit(): void {
  }

}


