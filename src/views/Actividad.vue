<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ConocimientosBSicosDeLaAdministraciNDelRecursoHumano',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Administración del recurso humano.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué enfoque tiene la nueva administración gerencial respecto al ser humano en una organización?',
          imagen: require('@/assets/componentes/preguntas/p1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Ver al ser humano como una máquina más.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Considerar al ser humano como un cliente interno y colaborador proactivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar la participación del ser humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfocarse únicamente en la tecnología.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es uno de los elementos clave en la gestión del talento humano?',
          imagen: require('@/assets/componentes/preguntas/p2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducción de costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluación de desempeño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incremento de la producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Minimización del uso de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué se entiende por administración del talento humano según Chiavenato?',
          imagen: require('@/assets/componentes/preguntas/p3.png'),
          opciones: [
            {
              id: 'a',
              texto:
                'Un conjunto de políticas para aumentar las ganancias de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Técnicas para promover el desempeño eficiente de una organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estrategias de <em>marketing</em> y ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Métodos para reducir el número de empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué proceso NO es parte de la administración del talento humano?',
          imagen: require('@/assets/componentes/preguntas/p4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reclutamiento y selección.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Contratación y vinculación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Análisis y descripción de cargos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Gestión de inventarios.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una de las responsabilidades del área de talento humano en una organización?',
          imagen: require('@/assets/componentes/preguntas/p5.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Administrar las finanzas de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar la contratación de personal.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Supervisar la producción.', esCorrecta: false },
            { id: 'd', texto: 'Diseñar productos nuevos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un objetivo de los colaboradores dentro de una organización?',
          imagen: require('@/assets/componentes/preguntas/p1.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Alcanzar sus objetivos personales e individuales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir sus horas de trabajo.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Evitar la capacitación.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Minimizar su participación en actividades de equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué término se usa actualmente para referirse a las personas que trabajan en las organizaciones, según la administración gerencial?',
          imagen: require('@/assets/componentes/preguntas/p2.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Empleados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obreros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Talento humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clientes internos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una de las funciones del administrador del talento humano?',
          imagen: require('@/assets/componentes/preguntas/p3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planear, organizar, dirigir y controlar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar estrategias de <em>marketing</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Supervisar el mantenimiento de equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el inventario de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué es fundamental en el proceso de administración del talento humano?',
          imagen: require('@/assets/componentes/preguntas/p4.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la producción sin importar los empleados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Integrar las capacidades y metas de los colaboradores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mantener a los empleados en una posición fija.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de tecnologías modernas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es un proceso utilizado para crear condiciones laborales satisfactorias?',
          imagen: require('@/assets/componentes/preguntas/p5.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Diseño de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administración de la disciplina.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Gestión financiera.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Reclutamiento y selección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Has acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, tu respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
