export default {
  global: {
    componenteFormativo: 'Trazo y corte',
    descripcionCurso:
      'En toda la cadena de confección de prendas de vestir, la actividad de trazo y corte posee un valor fundamental. Los conocimientos básicos de este proceso y el buen manejo de los materiales y recursos permitirán que los proyectos se desarrollen de manera excelente. Por ello, en este componente se llevará a cabo un recorrido por las generalidades, tipos, planeación y herramientas de trazo y corte. Además, se abordarán aspectos relacionados con la salud ocupacional y las normas de seguridad industrial',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de trazo y corte',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Trazo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas para elaborar trazos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos y equipos para trazar',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Área de la sección de trazo y corte',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Ingreso, recepción, almacenamiento y reposo de telas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Planeación del área de trazo y corte',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Almacenamiento',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Reposo de telas',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planeación del área de trazo y corte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Extendida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de extendida',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de extendidos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Corte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Control de calidad en el corte',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Recomendaciones para el área de trazo y corte',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguridad y salud en el trabajo - área de trazo y corte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Normas de seguridad industrial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Almacenamiento de telas',
      referencia:
        'SENA. (s.f.). <em>Almacenamiento de telas</em>. Centro en Manufactura Textil y Cuero - Regional Distrito Capital.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo2_Almacenamiento_de_telas_y_sus_cuidados.pdf',
    },
    {
      tema: 'Control de calidad',
      referencia:
        'SENA. (s.f.). <em>Confecciones Industriales. Aspectos generales del departamento de control de calidad</em>. Subdirección técnico-pedagógica.',
      tipo: 'Libro',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4251/3816_aspectos_generales_del_control_de_calidad.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Curso de Corte y confección: seguridad e higiene en el trabajo',
      referencia:
        'Rivero, E. (2017). <em>Curso de Corte y confección: seguridad e higiene en el trabajo</em> [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=mbJvti9qHOU&ab_channel=ErnestoRivero',
    },
    {
      tema:
        'Ejemplo de tipos de tendido con diferentes características del material',
      referencia:
        'SENA Red Producción de Contenidos Grupo. (2021). <em>Ejemplo de tipos de tendido con diferentes características del material</em> [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=AQuKp0yivEw&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      tema: 'Extendido y corte automático',
      referencia: 'Audaces. (2015). <em>Sala de corte</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/tJyb68g_H0M',
    },
    {
      tema: 'Instructivo extendedora de tela',
      referencia:
        'Ceb Metalmecánica SAS. (2018). <em>Instructivo extendedora de tela</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/NYypQR3FceU',
    },
    {
      tema: 'Ley 1562 de 2012',
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012.',
      tipo: 'Ley',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=48365',
    },
    {
      tema: 'Resolución 06045 de 2014',
      referencia:
        'Resolución 6045 de 2014. [El Ministro del Trabajo]. Por la cual se adopta el Plan Nacional de Seguridad y Salud en el Trabajo 2013-2021. Diciembre 30 de 2014.',
      tipo: 'Resolución',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/45099/Resolucion06045_Mintrabajo_2.pdf/2135dd03-f30f-caa7-111f-e9f21f898f61',
    },
    {
      tema: 'Seguridad',
      referencia:
        'MinSalud. (2017). <em>Programa de elementos de protección personal, uso y mantenimiento</em>. MinSalud.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo3_Elementos_de_protección_Personal.pdf',
    },
    {
      tema: 'Sistemas para elaborar trazos',
      referencia:
        'PIZANTEX. (2014). <em>Procesos de trazo y corte</em>. PIZANTEX.',
      tipo: 'PDF',
      link: '/downloads/Anexo1_pisantex_trazo_y_corte.pdf',
    },
    {
      tema: 'Tendedora de tela automática',
      referencia:
        'FKlatinoamérica. (2017). <em>Tendedora de tela automática</em> [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=J0Zq8rHcPeQ&ab_channel=FKlatinoamerica',
    },
    {
      tema: 'Trazo y corte',
      referencia:
        'SENA Red Producción de Contenidos Grupo Gestión Curricular. (2021). <em>Características del material desde trazo y corte</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Ul-AmX5ioxQ',
    },
  ],
  glosario: [
    {
      termino: 'Mipymes',
      significado:
        'Es el acrónimo o sigla que se utiliza para nombrar o referirse a las micro, pequeñas y/o medianas empresas.',
    },
    {
      termino: 'Piquete',
      significado:
        'Perforación en los costados de los moldes o patrones, que sirven como guías para ensamblar piezas o puntos de referencia para posicionar sobrepuestos.',
    },
    {
      termino: 'Prendas de segunda',
      significado:
        'Se les denomina así a esas prendas que no cumplen con el 100% de especificaciones esperadas por el cliente.',
    },
    {
      termino: 'Simetría',
      significado:
        'Relación de relación, forma, tamaño, líneas o figuras, con puntos de referencia nombrados como patrones.',
    },
    {
      termino: 'Software',
      significado:
        'Parte intangible de un sistema o sistemas, que mediante rutinas permite realizar tareas.',
    },
    {
      termino: 'TIC',
      significado: ' Tecnologías de la Información y la Comunicación.',
    },
    {
      termino: 'Tiempo estándar',
      significado:
        'Cantidad de tiempo que se utiliza realizando una actividad en condiciones de ejecución normales.',
    },
    {
      termino: 'Tolerancia',
      significado:
        'Cantidad de unidad de medida permisible para exceder la especificación o norma, por exceso o por defecto.',
    },
    {
      termino: 'Urdimbre',
      significado:
        'Conjunto de hilos que se colocan en el telar paralelamente unos a otros para formar una tela.',
    },
  ],
  referencias: [
    {
      referencia: 'Audaces. (2015). Sala de corte [video]. YouTube.',
      link: 'https://youtu.be/tJyb68g_H0M',
    },
    {
      referencia:
        'Cámara de Comercio de Medellín para Antioquia. (2017). Clúster Textil / Confección, Diseño y Moda.  Manual de uso. Primera edición.',
    },
    {
      referencia:
        'Ceb Metalmecánica SAS. (2018). Instructivo extendedora de tela [video]. YouTube.',
      link: 'https://youtu.be/NYypQR3FceU',
    },
    {
      referencia:
        'FKlatinoamérica. (2017). Tendedora de tela automática [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=J0Zq8rHcPeQ&ab_channel=FKlatinoamerica',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=48365',
    },
    {
      referencia:
        'MinSalud. (2017). Programa de elementos de protección personal, uso y mantenimiento. MinSalud.',
    },
    {
      referencia: 'PIZANTEX. (2014). Procesos de trazo y corte. PIZANTEX.',
    },
    {
      referencia:
        'Resolución 6045 de 2014. [El Ministro del Trabajo]. Por la cual se adopta el Plan Nacional de Seguridad y Salud en el Trabajo 2013-2021. Diciembre 30 de 2014.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/45099/Resolucion06045_Mintrabajo_2.pdf/2135dd03-f30f-caa7-111f-e9f21f898f61',
    },
    {
      referencia:
        'Rivero, E. (2017). Curso de Corte y confección: seguridad e higiene en el trabajo [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=mbJvti9qHOU&ab_channel=ErnestoRivero',
    },
    {
      referencia:
        'SENA. (s.f.). Almacenamiento de telas. Centro en Manufactura Textil y Cuero - Regional Distrito Capital.',
    },
    {
      referencia:
        'SENA. (s.f.).  Confecciones Industriales. Aspectos generales del departamento de control de calidad. Subdirección técnico-pedagógica.',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4251/3816_aspectos_generales_del_control_de_calidad.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'SENA Red Producción de Contenidos Grupo Gestión Curricular. (2021). Características del material desde trazo y corte [video]. YouTube.',
      link: 'https://youtu.be/Ul-AmX5ioxQ',
    },
    {
      referencia:
        'SENA Red Producción de Contenidos Grupo. (2021).  Ejemplo de tipos de tendido con diferentes características del material [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=AQuKp0yivEw&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Pedro Luis Sossa Ramírez',
          cargo: 'Experto temático',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Diseño y desarrollo curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Erika Blanco',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Catherine Bedoya',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Liliana Morales',
          cargo: 'Revisión pedagógica y metodológica',
          centro: 'Centro de Gestión industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Vilma Lucia Perilla',
          cargo: 'Revisión pedagógica y metodológica',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro: 'Centro Industrial del Diseño y la Manufactura.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carla Liliana Sequera Vargas',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
