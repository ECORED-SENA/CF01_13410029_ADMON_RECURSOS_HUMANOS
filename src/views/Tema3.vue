<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Funciones del área de talento humano
    p.mb-5(data-aos='fade-right') Como se ha podido observar, el área de talento humano es de suma importancia. El rol que cumple dentro de la organización, es la puerta de entrada de los colaboradores o clientes internos.
      br
      br
      |#[span.color-morado Lo invitamos a consultar el siguiente video, donde conocerá las funciones del área de talento humano.]
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ooLj28AGnOo" title="Funciones del área de talento humano" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Funciones del área de talento humano. 
    .tarjeta.d-none.d-lg-block(style="background-color: #f4eefe ").mb-5
      .row.justify-content-center.align-items-center.m-4
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-2.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/40.svg', alt='')
            .col-lg-10
              p.mb-0 Podemos concluir así, que la gestión de la administración del talento humano es considerada de las más importantes dentro de la organización, en la aplicación de los procesos y procedimientos que se desarrollen, así como de las políticas propias (misión, visión) y se verá reflejada en la satisfacción del cliente interno. 
        .col-lg-5.col-7: img(src='@/assets/curso/temas/41.svg', alt='')
    p.mb-5(data-aos='fade-right') Por otro lado, el administrador del talento humano debe ser el que promueva y facilite la creatividad, innovación, trabajo en equipo, efectividad y sobre todo, apoyo a la capacitación de su personal en forma permanente.
    .tarjeta.d-block.d-lg-none.p-4.mb-5(style="background-color:  #f4eefe")
      .col-7.m-auto
        img(src='@/assets/curso/temas/t3.svg', alt='').mb-4
      p.mb-0 Podemos concluir así, que la gestión de la administración del talento humano es considerada de las más importantes dentro de la organización, en la aplicación de los procesos y procedimientos que se desarrollen, así como de las políticas propias (misión, visión) y se verá reflejada en la satisfacción del cliente interno. 
    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
