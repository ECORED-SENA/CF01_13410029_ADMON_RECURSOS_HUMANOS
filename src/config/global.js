export default {
  global: {
    componenteFormativo: 'Administración del recurso humano',
    descripcionCurso:
      'El presente componente formativo, detalla la importancia de la administración del talento humano en la organización moderna, abordando conceptos, definiciones, y procesos esenciales como reclutamiento, selección, contratación, capacitación, y evaluación de desempeño. Destaca la necesidad de ver a los empleados como colaboradores proactivos y líderes potenciales, esenciales para el éxito y competitividad empresarial en un entorno globalizado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
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
        titulo:
          'Conceptos y definiciones de la administración del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Definición de la administración del talento humano',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procesos de la administración del talento humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Funciones del área de talento humano',
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
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
      tema: 'Funciones del área de talento humano',
      referencia:
        'Economía Desde Casa. (2021). <em>Funciones del Departamento de Recursos Humanos</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AcSI9FsUW4A',
    },
  ],
  glosario: [
    {
      termino: 'Administración del talento humano',
      significado:
        'conjunto de políticas y prácticas necesarias para dirigir los aspectos gerenciales relacionados con las personas o recursos dentro de una organización, incluido el reclutamiento, selección, capacitación, recompensas y evaluación de desempeño.',
    },
    {
      termino: 'Capacitación',
      significado:
        'actividades y programas diseñados para mejorar las habilidades y conocimientos de los empleados, permitiéndoles desempeñar sus funciones de manera más eficiente.',
    },
    {
      termino: 'Contratación',
      significado:
        'proceso formal de empleo mediante el cual una empresa y un candidato acuerdan las condiciones de trabajo.',
    },
    {
      termino: 'Evaluación de desempeño',
      significado:
        'proceso sistemático para medir y evaluar el rendimiento de los empleados en relación con los objetivos y estándares establecidos por la organización.',
    },
    {
      termino: 'Inducción',
      significado:
        'proceso de orientación e integración de nuevos empleados en una organización, ayudándolos a familiarizarse con su entorno laboral y sus funciones.',
    },
    {
      termino: 'Reclutamiento',
      significado:
        'proceso de atraer a candidatos potenciales para cubrir vacantes dentro de una organización.',
    },
    {
      termino: 'Selección',
      significado:
        'proceso de evaluar y elegir a los candidatos más adecuados para ocupar puestos específicos dentro de una empresa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, F. (2004). <em>Administración de recursos humanos: para el alto desempeño</em>. Trillas.',
    },
    {
      referencia:
        'Blasco, R. (s. f.). <em>Modelos de selección de personal generados en la historia de la psicología</em>.',
      link: 'https://paginaspersonales.deusto.es/mpoblete2/modelos.htm',
    },
    {
      referencia:
        'Chávez, E. (s. f.). <em>Manejo de los recursos humanos</em>.',
    },
    {
      referencia:
        'Chiavenato, I. (2009). <em>Administración de recursos humanos</em>. Mc Graw Hill.',
    },
    {
      referencia:
        'Serrano, L. (2008). <em>El contrato, definición y tipos</em>.',
      link:
        'https://www.am-abogados.com/blog/el-contrato-definicion-y-tipos/110/',
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
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Orlando Vidal Perdomo',
          cargo: 'Experto Temático',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Didier Andrés Ospina Osorio',
          cargo: 'Experto Temático',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López ',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
