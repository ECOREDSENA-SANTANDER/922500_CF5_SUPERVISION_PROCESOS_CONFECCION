<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Normas de seguridad industrial

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t7/img01.png' alt="") 
      .col-lg-8(data-aos="fade-left")
        p Los reglamentos internos de seguridad industrial en la Colombia son de carácter obligatorio, construirlos e implementarlos, y para eso se conforma al interior de las empresas los COPASO (Comité Paritario de Salud Ocupacional), ellos son los encargados de promocionar y ejecutar actividades que tengan como fin la salud del trabajador.
        p Planear acciones que eviten o minimicen los factores de riesgo derivados de actividades laborales es uno de los objetivos de la seguridad y salud en el trabajo, entendiendo factores de riesgo como la posibilidad de perturbación en la salud o en la integridad física del trabajador a causa de la relación con un objeto, sustancia o fenómeno, así como materiales y equipos. En el área de corte se pueden definir los siguientes factores de riesgo:
        
    .row.justify-content-center.align-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tit-t7.p-4
          h2.text-white.text-center.mb-0 Normas de seguridad industrial

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t7/img02.svg', alt='')
      .tarjeta.color-acento-botones.p-3(x="35.3%" y="31.8%")
        h5.mb-2 1- Pasillos
        p Los pasillos y las áreas de distribución deben de estar libres de materiales o herramientas que puedan generar dificultad en la movilidad dentro de las instalaciones. 
      .tarjeta.color-acento-botones.p-3(x="2%" y="36%")
        h5.mb-2 2- Pisos
        p Los pisos de toda el área deben estar secos y limpios para evitar caídas o resbalones. Recordando señalizar las áreas húmedas por actividades de aseo, riesgo accidental de aceites y otros líquidos. En caso de encontrar alguno de estos de manera inmediata efectuar el secado y limpieza.
      .tarjeta.color-acento-botones.p-3(x="11.4%" y="69.5%")
        h5.mb-2 3- Concentración
        p Debido a los materiales y herramientas que se manejan, el nivel de concentración en estas áreas debe ser alto para realizar las funciones. Por descuido y desconcentración, se pueden cometer errores.
      .tarjeta.color-acento-botones.p-3(x="9.4%" y="54%")
        h5.mb-2 4- Uso de accesorios
        p No utilizar accesorios como manillas, aretes, relojes, anillos. El cabello debe estar recogido. De esta manera se evita el atrapamiento de máquinas o herramientas, y causar un accidente de trabajo.
      .tarjeta.color-acento-botones.p-3(x="38.6%" y="42.8%")
        h5.mb-2 5- Máquinas y equipos eléctricos
        p Se evitan muchos contratiempos vigilando que las máquinas y equipos eléctricos, estén en función de apagado cuando no se estén utilizando. 
        p Las máquinas que posean elementos corto punzantes, deben estar provistas de guardas que las tapen para cuando no se estén usando.
        p Mientras sea posible, utilice herramientas que se ofrezcan en el mercado con diseño ergonómico, es decir, que ayuden a la relación cuerpo-actividad.
      .tarjeta.color-acento-botones.p-3(x="46%" y="98%")
        h5.mb-2 6- Transporte de elementos pesados
        p Es un área donde se deben mover elementos muy pesados, el cuidar posturas corporales y esfuerzos es muy importante, debido al movimiento de estos elementos ya que son pesados y un esfuerzo mal hecho podría causar una lesión lumbar, o desviaciones de la columna vertebral.
      .tarjeta.color-acento-botones.p-3(x="68.8%" y="21.5%")
        h5.mb-2 7- Señalización
        p Debe existir un sitio definido para las máquinas y herramientas, además de los elementos de primeros auxilios, la señalización de estos es importante.
      .tarjeta.color-acento-botones.p-3(x="89.5%" y="35%")
        h5.mb-2 8- Equipos
        p Se recomienda utilizar los equipos destinados para levantar y transportar las diferentes telas o materias primas. En caso de que deban ser levantados por el empleado, es necesario dosificar el peso.
      .tarjeta.color-acento-botones.p-3(x="27.5%" y="11%")
        h5.mb-2 9- Pausas activas
        p Realizar pausas activas que incluyan estiramientos de las partes del cuerpo que más utiliza.
      .tarjeta.color-acento-botones.p-3(x="84%" y="45%")
        h5.mb-2 10- Infraestructura física
        p Revisar la infraestructura física y condiciones ambientales esto puede evitar dificultades, una buena ventilación e iluminación, además de la revisión del estado del sistema eléctrico, siempre facilitará un espacio seguro de trabajo. 
      .tarjeta.color-acento-botones.p-3(x="63%" y="54%")
        h5.mb-2 11- Mantenimiento
        p Las labores de mantenimiento sólo las pueden realizar personal autorizado, siga las instrucciones de su jefe inmediato en estas situaciones


    p.mb-4(data-aos="fade") Para conocer a profundidad la normatividad aplicable actualmente en Colombia sobre seguridad y salud en el trabajo se invita a estudiar el siguiente material: 

    .bg-12.p-4.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-8
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.w-60.m-auto(src="@/assets/curso/temas/t2/icono01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Programa de elementos de protección personal.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo3_Elementos_de_protección_Personal.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      
    .bg-13(data-aos="fade-down")
      .row.justify-content-center.mb-5
        .col-lg-1.col-md-2.col-4
          img.mt-neg3(src="@/assets/curso/temas/t7/ico.svg")
        .col-lg-11
          .p-4
            p A continuación, se presentan dos vídeos tutoriales para el ensamble de camisa, en relación a la confección de camisa Slim fit para hombre, y la confección de una camisa artesanalmente.
            .row.justify-content-center.align-items-center
              .col-lg-6
                a.anexo.mb-4(href="https://www.mintrabajo.gov.co/documents/20147/45099/Resolucion06045_Mintrabajo_2.pdf/2135dd03-f30f-caa7-111f-e9f21f898f61" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.mb-0 #[b PDF.] Resolución 060 del 2014. Por el cual se adopta el Plan nacional de seguridad y salud en el trabajo 2013-2021 y anexos.               
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/Ley1562de2012.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.mb-0 #[b PDF.] Ley 1562 del 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud.
              .col-lg-6
                .anexo.mb-4(href="https://www.youtube.com/embed/mbJvti9qHOU" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.mb-0 #[b Enlace web.] Video seguridad e higiene en el trabajo.

</template>

<script>
export default {
  name: 'Tema7',
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
