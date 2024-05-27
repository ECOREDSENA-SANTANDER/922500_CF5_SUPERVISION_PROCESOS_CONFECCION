<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y salud en el trabajo - área de trazo y corte

    .bg-9.mb-4
      .row.align-items-center
        .col-lg-4.col-md-8(data-aos="fade-right")
          img(src='@/assets/curso/temas/t6/img01.png' alt="")
        .col-lg-8(data-aos="fade-left")
          .p-4
            p.mb-0 Actualmente en nuestro país existe un Plan Nacional de Seguridad y Salud en el Trabajo (PNSST) visionado como la carta de navegación para la salubridad laboral, que es el resultado de la concertación en la formulación de todos los entes encargados de este tema como son las administradoras de riesgo laboral, EPS, agremiaciones, academia, entidades gubernamentales, instituciones prestadoras de servicios de seguridad y salud en el trabajo, sindicatos y trabajadores; el cual fue adoptado a través de la Resolución 6045 del 2014 que define la implantación de dicho plan con vigencia 2013-2021. Igualmente, sigue vigente la Ley 1562 de 2012 que trae consigo la transformación de un Sistema de Riesgos Laborales más eficiente, justo y equitativo.

    p.mb-4(data-aos="fade") Planear acciones que eviten o minimicen los factores de riesgo derivados de actividades laborales es uno de los objetivos de la seguridad y salud en el trabajo, entendiendo factores de riesgo como la posibilidad de perturbación en la salud o en la integridad física del trabajador a causa de la relación con un objeto, sustancia o fenómeno, así como materiales y equipos. En el área de corte se pueden definir los siguientes factores de riesgo:

    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      h5 Tabla 3.
      span Clasificación factores de riesgo

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9  
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Factor de riesgo
                th Definición
            tbody
              tr
                td.h4.text-center Físicos
                  img.mt-3.w-60.m-auto(src='@/assets/curso/temas/t6/tab-ico1.svg' alt="")
                td Son todos aquellos factores ambientales que provocan efectos adversos para la salud por la intensidad, exposición y concentración, como son: humedad, polvo, microfibras, ruido, calor, frío, radiaciones.
              tr.bg-18
                td.h4.text-center Químicos 
                  img.mt-3.w-60.m-auto(src='@/assets/curso/temas/t6/tab-ico2.svg' alt="")
                td Generalmente son sustancias o elementos orgánicos e inorgánicos que por inhalación, absorción o ingestión generan lesiones o quemaduras al organismo como son tinturas, líquidos, aceites, gases.
              tr
                td.h4.text-center Ergonómicas
                  img.mt-3.w-60.m-auto(src='@/assets/curso/temas/t6/tab-ico3.svg' alt="")
                td Tienen que ver con el puesto de trabajo, los equipos, herramientas y objetos que por su forma, diseño, tamaño o peso producen daño, fatiga o alteraciones musculoesqueléticas por esfuerzos realizados por el trabajador, como son movimientos repetitivos, posiciones de trabajo o malas posturas.
              tr.bg-18
                td.h4.text-center Mecánicos 
                  img.mt-3.w-60.m-auto(src='@/assets/curso/temas/t6/tab-ico4.svg' alt="")
                td Hacen referencia a la relación del trabajador con equipos, herramientas y maquinarias, que por su diseño, ubicación, tamaño son potencialmente dañinas y generadoras de lesiones como montacargas, poleas, instalaciones eléctricas, máquinas de corte y otras herramientas de trabajo.
              tr
                td.h4.text-center Psicosociales 
                  img.mt-3.w-60.m-auto(src='@/assets/curso/temas/t6/tab-ico5.svg' alt="")
                td Se refiere a aspectos administrativos y organizacionales de interacción social y de relacionamiento con aspectos de las personas como la edad, las estructuras sociológicas inherentes a la empresa o el tipo de proceso productivo como son la organización, ambientes de trabajo y relaciones interpersonales.
              tr.bg-18
                td.h4.text-center Biológicos 
                  img.mt-3.w-60.m-auto(src='@/assets/curso/temas/t6/tab-ico6.svg' alt="")
                td Hacen relación a residuos físicos-químicos que generan micro y macroorganismos, patógenos y tóxicos que desencadenan enfermedades infectocontagiosas como las bacterias o virus.


    .subtitulo.mb-4(data-aos="fade")
      h3.text-white.mb-0 Implementos de seguridad Industrial

    p(data-aos="fade") En el departamento de trazo y corte se deben tener ciertas consideraciones que tienen que ver con la protección personal, teniendo en cuenta que se utilizan herramientas de naturaleza cortopunzante. El uso de estos elementos debe estar orientado por un reglamento interno de seguridad y salud en el trabajo.
    p.mb-4(data-aos="fade") Entre otros, se recomienda utilizar los siguientes elementos de protección:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/GHWSIQi04d4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Trazo y corte - Implementos Seguridad Industrial


</template>

<script>
export default {
  name: 'Tema6',
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
