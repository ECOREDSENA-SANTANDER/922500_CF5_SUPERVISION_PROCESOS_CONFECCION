<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.justify-content-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La fabricación de ropa incluye numerosas actividades para hacer una prenda, incluye procesos como corte, costura y acabado. Todo el proceso de fabricación se divide en una serie de suboperaciones necesarias para la confección de una prenda en particular; algunas de estas operaciones varían según el tipo de equipo disponible, los métodos de trabajo utilizados y las habilidades de los trabajadores, siendo los trazos y cortes dos procesos principales de producción de prendas.
        .bg-intro.p-4.px-5
          img.mb-1(src='@/assets/curso/temas/intro/img.png', alt='')
          p.text-small LÍNEA DE TIEMPO:  CORTE, COSTURA Y ACABADO
      .col-lg-5.col-md-8.col-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/intro/intro.png', alt='')
    


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
