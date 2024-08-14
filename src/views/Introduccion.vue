<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-intro
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Hablar hoy en día de los nuevos enfoques de administrar, gerenciar y aún liderar una organización, empresa o industria, requiere de diversos conocimientos, prepararse académicamente y contar con experiencia, porque en la nueva Administración Gerencial, estos conceptos han sido replanteados, cambiando el paradigma de ver al ser humano como una máquina más de la organización, para considerarlo como colaborador capaz de transmitir conocimientos, convertirse en líder, ser proactivo y, aún algo más valioso dentro de la organización, ser el cliente interno.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta-linea.mb-4
          p.mb-0 “La gestión del talento humano como el conjunto de políticas y prácticas necesarias para dirigir los aspectos de los cargos gerenciales relacionados con las personas o recursos, incluido reclutamiento, selección, capacitación, recompensas y evaluación de desempeño”. (Chiavenato, 2009)
        p.color-morado.mt-5 #[strong Es así como la importancia de la administración del talento humano, radica en la diversidad de elementos que contiene, como son:]
      .col-lg-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.png', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Elementos que contiene la administración del talento humano.

    .tarjeta.bg-white.pt-5.pb-4
      .row.justify-content-center
        .col-lg-5.col-xl-4.col-12
          img.mb-5(src='@/assets/curso/temas/figura1.svg', alt='Imagen que presenta los elementos que contiene la administración del talento humano, como son: reclutamiento, selección, contratación, inducción, capacitación, evaluación y desempeño, motivación, remuneración (nómina), bienestar laboral y proceso de desvinculación.')
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
