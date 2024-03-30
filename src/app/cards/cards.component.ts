import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  /* Aca se maneja el tipo de clases para filtrar */
  // clases:any [] = ['frontend','backend','proyectoPersonal','frontend','backen','proyectoPersonal'];
  clases:any [] = ['f-mockup','f-graphic','f-icons','f-mockup','f-graphic','f-icons'];

  proyectos: Proyecto[] = [
    {
      tipo: 'frontend',
      link: 'https://github.com/breinerbca99/webserver-hbs-express',
      lengua: 'Java',
      nombre: 'Proyecto Adidas',
      descripcion: 'Sitio web en que un cliente puede comprar, registrarse y loguearse,existe un administrador que puede ver los clientes y las facturas.',
      imagen: 'assets/imagenes/works/adidas/principal.png',
      tecnologias:
        [
          'Spring Boot',
          'Angular (html5, css3, js)',
          'MySql',
          'Bootstrap'
        ],
      vistas:
        [
          {
            nombre: 'Vista del administrador',
            descripcion: 'Este podrá observar a todos los clientes que existen y sus compras y facturas que tiene',
            img: 'assets/imagenes/works/adidas/adidas2.png'
          },
          {
            nombre: 'Vista de los productos/mujer',
            descripcion: 'Se podrá buscar por los productos por categoría mujer, hombre, niño y deportivas',
            img: 'assets/imagenes/works/adidas/adidas3.png'
          },
          {
            nombre: 'Detalles del producto',
            descripcion: 'Aquí podremos ver características del producto como tallas, descripción, valoración, detalles y una galería de fotos',
            img: 'assets/imagenes/works/adidas/adidas4.png'
          },
          {
            nombre: 'Comprar Producto',
            descripcion: 'Al momento de comprar se activar un modal en el cual nos almacenar el producto al carrito y el valor total a pagar y el número de productos llevados',
            img: 'assets/imagenes/works/adidas/adidas5.png'
          },
        ]
    },
    {
      tipo: 'frontend',
      link: 'https://github.com/breinerbca99/webserver-hbs-express',
      lengua: 'Java',
      nombre: 'Carrito de compra',
      descripcion: 'Este proyecto cuanto con un stock de productos en los cuales distintas personas podrán comprar sus productos y pagarlos con tarjeta o PayPal',
      imagen: 'assets/imagenes/works/carrito/principal.png',
      tecnologias:
        [
          'JavaEE ',
          'Jsp',
          'MySql',
          'Bootstrap'
        ],
      vistas:
        [
          {
            nombre: 'Vista Principal',
            descripcion: 'Aquí pondrá encontrar todos nuestros productos de la tienda para comprarlos y cuando se termine el stock ya no se podrá comprarlos Y vemos nuestro carrito con los productos ',
            img: 'assets/imagenes/works/carrito/2.png'
          },
          {
            nombre: 'Vista detalles',
            descripcion: 'Aquí podemos ver los detalles del producto como son algunas características o cuantos productos de este queremos llevar y sus evaluaciones',
            img: 'assets/imagenes/works/carrito/3.png'
          },
          {
            nombre: 'Carrito de compras',
            descripcion: 'Aquí podremos encontrar todos los productos que tenemos en el carrito además de su precio unitario y el precio total por producto y el total, además de 2 formas de pago',
            img: 'assets/imagenes/works/carrito/4.png'
          },
          {
            nombre: 'Pago Tarjeta',
            descripcion: 'Aquí podremos pagar todos los productos llevados por tarjeta solo llenando el formulario con nuestros datos',
            img: 'assets/imagenes/works/carrito/5.png'
          },
        ]
    },
    {
      tipo: 'frontend',
      link: 'https://github.com/breinerbca99/webserver-hbs-express',
      lengua: 'JavaScript',
      nombre: 'Proyecto Ingresos vs Egresos',
      descripcion: 'Este proyecto nos permitira manejar el control del total de dinero que gastamos o recibimos y en qué cosa lo gastamos o recibimos.',
      imagen: 'assets/imagenes/works/ingreso/principal.png',
      tecnologias:
        [
          'Angular (html5,css3,js) ',
          'BootStrap',
          'Firebase',
        ],
      vistas:
        [
          {
            nombre: 'Vista Principal',
            descripcion: 'Esta vista la veremos después de que nos loguemos donde podremos ver el total de ingresos vs los gastos que tuvimos.',
            img: 'assets/imagenes/works/ingreso/ingreso2.png'
          },
          {
            nombre: 'Añadir ingreso o egreso',
            descripcion: 'Acá podremos decir en que gastamos o recibimos un dinero y el monto de este ',
            img: 'assets/imagenes/works/ingreso/ingreso3.png'
          },
          {
            nombre: 'Reporte ingreso o egreso',
            descripcion: 'Acá podremos ver una lista de todos los ingresos o egresos que tuvimos y si queremos eliminarlo por si ya no lo necesitamos',
            img: 'assets/imagenes/works/ingreso/ingreso4.png'
          },
          {
            nombre: 'Grafico Redux',
            descripcion: 'Acá podremos ver todos los estados que hubo en la aplicación estos estados son traídos de Firebase, además de ser en tiempo real por sockets',
            img: 'assets/imagenes/works/ingreso/ingreso5.png'
          },
        ]
    },
    {
      tipo: 'frontend',
      link: 'https://github.com/breinerbca99/webserver-hbs-express',
      lengua: 'JavaScript',
      nombre: 'Proyecto Hospital',
      descripcion: 'Este proyecto podrá mantener un crud completo de usuarios, doctores, hospitales y pacientes además de poder asignar y manejar Roles del sistema',
      imagen: 'assets/imagenes/works/hospital/principal.png',
      tecnologias:
        [
          'Angular (html5,css3,js) ',
          'Node js',
          'Mongo db',
          'BootStrap',
          'Google Sign in',
        ],
      vistas:
        [
          {
            nombre: 'Login',
            descripcion: 'Acá podremos ingresar a la página principal con nuestros permisos de usuarios además también podremos loguearnos con la api de google para agilizar las cosas',
            img: 'assets/imagenes/works/hospital/hospital2.png'
          },
          {
            nombre: 'Mantener Usuarios',
            descripcion: 'Acá el administrados podrá ver todos los usuarios que tenemos así como asignar nuevos roles o editarlos o editar al mismo usuario así como poder eliminarlo',
            img: 'assets/imagenes/works/hospital/hospital3.png'
          },
          {
            nombre: 'Mantener Hospital',
            descripcion: 'Acá el administrador podrá ver todos los hospitales que existen así como poder editarlos o eliminarlos si se requiera o crear uno nuevo',
            img: 'assets/imagenes/works/hospital/hospital4.png'
          },
          {
            nombre: 'Perfil de Usuario ',
            descripcion: 'El usuario podrá mantener su perfil de modo que pueda editar su nombre, su email o desee una foto nueva',
            img: 'assets/imagenes/works/hospital/hospital5.png'
          },
        ]
    },
    {
      tipo: 'frontend',
      link: 'https://github.com/breinerbca99/webserver-hbs-express',
      lengua: 'Java',
      nombre: 'Proyecto Aula virtual',
      descripcion: 'Este proyecto podrá manejar un crud completo de un alumno, curso, examen, además de poder asignar respuestas, alumnos, cursos a un alumno',
      imagen: 'assets/imagenes/works/examen/principal.png',
      tecnologias:
        [
          'Spring (Microservicios, Feign, Zuul, Ribbon)',
          'Angular (html5, css3, js)',
          'MySql',
          'Mongo db',
          'PostgreSQL',
          'BootStrap',
        ],
      vistas:
        [
          {
            nombre: 'Mantener cursos',
            descripcion: 'Acá podremos ver todos los cursos que existen en el sistema y en el cual podremos ver opciones para matricular alumnos o asignar exámenes, así como eliminarlos o editarlos',
            img: 'assets/imagenes/works/examen/examen2.png'
          },
          {
            nombre: 'Asignar Alumno',
            descripcion: 'Acá podremos ver todos los alumnos que asignamos en el curso y así como podremos removerlo o también poder añadirlos',
            img: 'assets/imagenes/works/examen/examen3.png'
          },
          {
            nombre: 'Asignar Exámenes',
            descripcion: 'Acá podremos ver todos los exámenes asignados en el curso y así como podremos removerlos o también añadirlos',
            img: 'assets/imagenes/works/examen/examen4.png'
          },
          {
            nombre: 'Mantener Exámenes ',
            descripcion: 'Acá podremos ver el listado de exámenes y a los cursos y asignaturas a los que pertenece además de poder editarlos y eliminarlos o crear un nuevo examen',
            img: 'assets/imagenes/works/examen/examen5.png'
          },
        ]
    },
    {
      tipo: 'frontend',
      link: 'https://github.com/breinerbca99/webserver-hbs-express',
      lengua: 'JavaScript',
      nombre: 'Proyecto Spotify',
      descripcion: 'Gestion de usuarios, artistas, albúmenes, canciones donde podrá guardar a sus artistas favoritos y albúmenes y las canciones que más le gusta',
      imagen: 'assets/imagenes/works/spotify/principal.png',
      tecnologias:
        [
          'Angular (html5, css3, js)',
          'Node js',
          'Mongo db',
          'BootStrap',
        ],
      vistas:
        [
          {
            nombre: 'Home de la página',
            descripcion: 'Acá podremos ver al usuario logueado que podrá tener las opciones de buscar a su artista o álbum favoritos mientras puede escuchar una canción',
            img: 'assets/imagenes/works/spotify/spotify2.png'
          },
          {
            nombre: 'Canciones del Álbum',
            descripcion: 'Acá podremos ver que el administrador podrá editar la canción del álbum o eliminarlo así se requiera mientras que un usuario normal solo podrá escuchar esa canción',
            img: 'assets/imagenes/works/spotify/spotify3.png'
          },
          {
            nombre: 'Reproductor ',
            descripcion: 'Este reproductor se podrá observar en toda la página mientras realiza sus acciones normales excepto antes de loguearse',
            img: 'assets/imagenes/works/spotify/spotify4.png'
          },
          {
            nombre: 'Registro / Login',
            descripcion: 'Acá un usuario podrá loguearse correctamente o si no podrá registrarse para comenzar con la experiencia de escuchar música y sus artistas favoritos ',
            img: 'assets/imagenes/works/spotify/spotify1.png'
          },
        ]
    },
  ];

  ngOnInit(): void {
  }

}
