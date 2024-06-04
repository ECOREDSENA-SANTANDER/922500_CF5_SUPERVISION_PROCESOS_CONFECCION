<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zMj9VTyCKIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo y corte
    
    p.mb-1(data-aos="fade") La fabricación de ropa incluye numerosas actividades para hacer una prenda, incluyendo procesos como corte, costura y acabado. Aquí conocerá generalidades, tipos y herramientas de trazo y corte.
    p.mb-4(data-aos="fade") La cadena de trazo y corte es uno de los principales procesos de la manufactura textil. Un error implica poner en riesgo la producción generando pérdidas económicas.

    .row.align-items-center.justify-content-center
      .col-lg-7.mb-4(data-aos="fade-right")
        ul.lista-ul--color.color-primario.fa-ul
          li
            i.fas.fa-angle-right
            | El trazo es un dibujo de los moldes de la prenda que se va cortar, ayudando a determinar el consumo del material, fundamental para calcular con exactitud el costo de las prendas.
          li
            i.fas.fa-angle-right
            span.mb-0 Conocerá como se realiza este proceso, ya sea de manera manual o mediante un software; Algunos softwares son: #[em OptiTex], Audaces, #[em Gerber] y Lectra.
          li
            i.fas.fa-angle-right
            | Todo el proceso de fabricación se divide en una serie de suboperaciones necesarias para la confección de una prenda en particular.
          li
            i.fas.fa-angle-right
            | Estas operaciones varían según el tipo de equipo disponible, los métodos de trabajo  y  habilidades de los trabajadores, siendo los trazos y cortes dos procesos principales.        
      .col-lg-5.col-md-8.col-10.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/intro/intro.svg', alt='')
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-7.pe-lg-0.mb-4
        .bg-intro.p-4.h-100.d-flex.align-items-center
          img(src='@/assets/curso/temas/intro/img.png', alt='')
      .col-lg-5.ps-lg-0.mb-4
        .bg-22.p-4.h-100
          p Así mismo, se revisará la importancia de contar con un sistema de seguridad y salud en el trabajo en el área de trazo y corte.
          p Además que, los reglamentos internos de seguridad industrial en Colombia son obligatorios, ayudando a ejecutar actividades que tengan como fin proteger la salud del trabajador.
    
    


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
