<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procesos de la administración del talento humano
    p.mb-5(data-aos='fade-right') El proceso de administración del talento humano, consta de seis pasos a saber, diseñados según las influencias ambientales externas y las influencias organizacionales internas. Estos son:
    .mn.p-5.fondo-slyder
      .tarjeta.bg-white.p-5(style="border: 4px solid #8746F8 ")
        SlyderA(tipo='b')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h4 Reclutamiento y selección
              p ¿Quiénes deben trabajar en las organizaciones? Procesos utilizados para incluir nuevas personas en la empresa. Pueden denominarse procesos de provisión o suministro de personas. Incluye reclutamiento y selección de personas, labor encomendada a profesionales que cuenten con alta experiencia (psicólogos, sociólogos, administradores).
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/35.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h4 División de cargos y salarios
              p ¿Qué funciones deben realizar los colaboradores? Procesos utilizados para diseñar las actividades que las personas realizarán en la empresa, orientar y acompañar su desempeño. Incluye diseño organizacional y diseño de cargos, análisis y descripción de cargos, orientación de las personas y evaluación del desempeño.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/36.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h4 Compensación y beneficios sociales
              p ¿Cómo incentivar a las personas? Procesos utilizados para satisfacer las necesidades individuales. Incluye recompensas remuneración servicios sociales.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/37.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h4 Capacitación
              p ¿Cómo contribuir al crecimiento personal? Son los procesos empleados para capacitar e incrementar el desarrollo profesional y personal. Incluye entrenamiento, desarrollo intelectual y profesional.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/38.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h4 Higiene y seguridad laboral
              p ¿Cómo mejorar el clima laboral? Procesos utilizados para crear condiciones ambientales y psicológicas satisfactorias para las actividades de las personas. Incluye administración de la disciplina, higiene, seguridad calidad de vida y mantenimiento de las relaciones sindicales.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/39.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema2',
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
