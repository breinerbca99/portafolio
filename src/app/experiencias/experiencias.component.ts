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
    proyecto: 'MERCURIO DCC - CONVERSIÓN DE MONEDA DINÁMICA',
    puesto: 'Software Associate Solutions',
    descripcion: [
      '• Creación de servicios para cotización y liquidación', 
      '• Manejo de integración continua BitBucket, Jenkins, Sonarqube',
      '• Modificar programas para ajuste por tipo de cambio y redondeo',
      '• Cruce de nueva tabla de indicadores con tabla de comercios y contratos',
      '• Poder permitir en los POS el pago con diferentes tipos de tarjetas extranjeras',],
    tecnologia: `Cobol, JCL, Java, Spring, APX (Framework Backend de BBVA).`,
    anio: 2023
  },{
    centroTrabajo: 'BBVA PERU - LIMA - PERU',
    proyecto: 'REALABILITY ADQUIRENCIA - MEDIOS DE PAGOS(ADQUIRENCIA)',
    puesto: 'Software Associate Solutions',
    descripcion: [
      '• Desarrollo de apk para POS de Adquirencia', 
      '• Promocionar la mejora de los procesos ETL',
      '• Promocionar la mejora de los servicios distribuidos Java',
      '• Manejo de integración continua BitBucket, Jenkins, Sonarqube',
      '• Garantizar la integridad y continuidad de la producción Adquirencia',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2023
  },{
    centroTrabajo: 'BBVA PERU - LIMA - PERU',
    proyecto: 'MERCURIO LOYALTY - CANJE Y CONSULTA DE PUNTOS',
    puesto: 'Software Associate Solutions',
    descripcion: [
      '• Test Unitarios con Mockito y Junit 5', 
      '• Generación de servicios web basados en Java con Spring',
      '• Manejo de integración continua BitBucket, Jenkins, Sonarqube',
      '• Generación de 3 transacciones entre BBVA, Eglobal y Everilion',
      '• Generación de transacción de consulta, canje y anulación de puntos',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2023
  },{
    centroTrabajo: 'BBVA PERU - LIMA - PERU',
    proyecto: 'SSO DESDE NETCASH PERÚ HACIA OPENPAY',
    puesto: 'Software Associate Solutions',
    descripcion: [
      '• Gestión técnica entre Net cash BBVA y OpenPay', 
      '• Gestión de despliegue de APIs liberadas productivas',
      '• Llevar proceso batch para desvinculación Net cash y OpenPay',
      '• Despliegue de 5 transacciones productivas entre BBVA y OpenPay',
      '• Revisión de intercambio de certificado MTLS entre BBVA y OpenPay ',   
      '• Llevar proceso desvinculación online y en eventos Net cash y OpenPay',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2023
  },{
    centroTrabajo: 'STEFANINI - LIMA - PERU',
    proyecto: 'SSO DESDE NETCASH PERÚ HACIA OPENPAY',
    puesto: 'Analista Programador',
    descripcion: [
      '• Test Unitarios con Mockito y Junit 5', 
      '• Generación de 5 transacciones entre BBVA y OpenPay',
      '• Generación de servicios web basados en Java con Spring',
      '• Manejo de integración continua BitBucket, Jenkins, Sonarqube',
      '• Integración con servicios API Rest y Autenticación de OpenPay',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2022
  }, {
    centroTrabajo: 'STEFANINI - LIMA - PERU',
    proyecto: 'ONBOARDING ADQUIRENCIA BBVA Y EGLOBAL',
    puesto: 'Analista Programador',
    descripcion: [
      '• Test Unitarios con Mockito y Junit 5', 
      '• Generación de proceso batch ETL de Oracle a Host',
      '• Generación de servicios web basados en Java con Spring', 
      '• Manejo de integración continua BitBucket, Jenkins, Sonarqube',
      '• Generación de transacción para la validación de una persona adquiriente',
      '• Creación de programa de automatización de pruebas para backend y front',],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Cucumber,  Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2022
  }, {
    centroTrabajo: 'Inveritas Global Holdings Perú S.A. - LIMA - PERU',
    proyecto: 'SEGUROS OFRECIDOS POR RÍMAC EN COLABORACIÓN CON BBVA',
    puesto: 'Analista Programador',
    descripcion: [
      '• Test Unitarios con Mockito y Junit 5', 
      '• Manejo de reintentos con MongoDb y Java',
      '• Generación de servicios web basados en Java con Spring', 
      '• Generación de 3 transacciones entre BBVA y Rimac',
      '• Integración con servicios API Rest y Autenticación de Rimac',
      '• Manejo de integración continua BitBucket, Jenkins, Sonarqube',
    ],
    tecnologia: `Java, Spring, APX (Framework Backend de BBVA), git, Bitbucket, Servicios Aso (Servicios BBVA), Jenkins, Docker.`,
    anio: 2021
  }, {
    centroTrabajo: 'Inveritas Global Holdings Perú S.A. - LIMA - PERU',
    proyecto: 'CONSULTA, CANJES Y REDENCIÓN DE PUNTOS BBVA Y DESPEGAR',
    puesto: 'Analista Programador',
    descripcion: [
      '• Migración de SQL Server a Oracle',
      '• Implementación y despliegue en Jboss hasta producción', 
      '• Generación de servicios web basados en Java con Spring',
      '• Manejo de integración continua BitBucket, Jenkins, Sonarqube',
      '• Consumo de servicios SSL y generación de certificados en Java',
      '• Generación de Api Rest Proxy para consumir servicios BBVA (DESPEGAR -> PROXY -> ASO -> APX) para la comunicación entre BBVA y Despegar',
    ],
    tecnologia: `Java 11, Spring, RxJava, Retrofit 2.0, APX (Framework Backend de BBVA), git, Bitbucket, Oracle, Servicios Aso (Servicios BBVA),Jenkins, Docker, Jboss, Tomcat.`,
    anio: 2021
  }, {
    centroTrabajo: 'EJERCITO DEL PERU ',
    proyecto: 'SISTEMA WEB PARA AUTOMATIZAR TOMA DE DECISIONES(EJERCITO PERÚ)',
    puesto: 'Analista Programador Full Stack',
    descripcion: [
      '• Generación de servicios Rest basados en Java y Spring Boot', 
      '• Generación de documentación de los servicios basado en Swagger',
      '• Generación de componentes en Angular y servicios para el lado del front',
      '• Coordinaciones de los requisitos funcionales y requerimientos del Cliente', 
      '• Participación en el modelamiento relacional de base de datos del negocio', 
      '• Generación authenticacion usuarios basado en roles con Spring Security y jwt.'
    ],
    tecnologia: 'Java 11 (Servicios Rest, microservicios), Oracle, Angular 11 (Angular Material, Bootstrap), Tomcat (9), JavaScript, Css3 y HTML.',
    anio: 2021
  }, {
    centroTrabajo: 'INTEGRO S.A.C – LIMA - PERU',
    proyecto: 'PROYECTO NOVOFONG – SISTEMA WEB DE RESERVA, PAGOS Y SELECCIÓN DE MÉDICOS',
    puesto: 'Analista Programador',
    descripcion: [
      '• Ajustes en servicios de back', 
      '• Mantenimiento a los servicios front',
      '• Maquetación de vistas front y estilos',
      '• Generación de componentes en Angular y servicios para el lado del front',
      '• Mantenimiento de sistemas front-end y mejoras a los estilos de Angular Material '
    ],
    tecnologia: 'Java 8 (Servicios Rest, microservicios), Oracle, Angular 5,8 (Angular Material, Bootstrap), Tomcat (8,9), JavaScript, Css3 y HTML.',
    anio: 2020
  }, {
    centroTrabajo: 'Open TI S.A.C – LIMA - PERU',
    proyecto: 'PROYECTO CLINICA BRALLIN – SISTEMA WEB DE RESERVA, PAGOS Y SELECCIÓN DE MÉDICOS',
    puesto: 'Analista Programador Full Stack',
    descripcion: [
      '• Modificación de servicios en Spring', 
      '• Consumo de servicios backend en Spring ',
      '• Generación de estilos y maquetación de vistas HTML', 
      '• Realización de aplicación desde Angular desde cero', 
      '• Generación de componentes y módulos y routers para Angular'
    ],
    tecnologia: 'Java 8 (Servicios Rest, microservicios), Oracle, Angular 5,8 (Angular Material, Bootstrap), Tomcat (8,9), JavaScript, Css3 y HTML.',
    anio: 2020
  }];

  constructor() { }

  ngOnInit(): void {
  }

}


