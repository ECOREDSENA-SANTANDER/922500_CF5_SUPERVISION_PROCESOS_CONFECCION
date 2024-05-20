<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planeación del área de trazo y corte

    p.mb-4(data-aos="fade") Saber aprovechar de manera adecuada los recursos disponibles en el área de trazo y corte es importante para poder cumplir cabalmente con los propósitos y proyectos. Se hace referencia a un área en metros cuadrados (m²), a las dimensiones de las mesas, al número de personas, a los horarios de trabajo, a las máquinas, a las herramientas y a las materias primas e insumos, como se presenta a continuación. 

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      p.mb-0 Corte industrial
    
    .row.align-items-center.mb-4
      .col-lg-3.col-md-7.col-10.pe-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/imag01t3.png', alt='')
      .col-lg-9.ps-lg-0(data-aos="fade-left")
        .bg-22.bg-9.p-4.mb-4
          p.mb-0 Es importante que el supervisor conozca todas las órdenes de corte con sus características: referencia, cantidad, tipo de tela, prioridades, cliente y fechas presupuestadas. Esto le permite dimensionar los recursos necesarios para cumplir con los propósitos y determinar si necesita conseguir más recursos o si, después de realizar los cálculos necesarios, encuentra capacidad ociosa. En ese caso, podría ofrecer el servicio a terceros.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.mb-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(:style="{'background-image':`url(${require('@/assets/curso/temas/t3/imag02t3.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Programar la sección de trazo y corte significa dimensionar las tareas a realizar y relacionarlas con los recursos disponibles, de esa manera podrá establecer fechas de entrega y necesidades de recursos, si así fuere necesario. #[br]#[br]
            p Determinar los estándares de fabricación para cada proceso es una actividad compleja, debido a que es diferente a la acción de determinar estándares de operaciones de ensamble, las cuales permiten calcular de manera unitaria los tiempos de fabricación, utilizando formatos diseñados para ese fin.
 
    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        .subtitulo.mb-4
          h3.text-white.mb-0 Determinar la capacidad instalada
        p La capacidad instalada en una organización, unidad productiva o sección se refiere al potencial o volumen máximo de productos y/o servicios que se pueden elaborar o fabricar en un período de tiempo determinado. Esto se logra con un número de personas disponibles y con recursos complementarios coherentes con esa línea de producción, como insumos, máquinas y herramientas. Esta información puede definirse de la siguiente manera.
      .col-lg-4.col-md-7.col-10.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/imag03t3.png', alt='')
    
    
    h3.text-red(data-aos="fade-right") Capacidad instalada de área
    p(data-aos="fade") Uno de los elementos a tener en cuenta para calcular la capacidad de unidades que se pueden cortar es conocer el área que se dispone para realizar las actividades de trazo y corte. Dimensionar esa área ayuda a distribuir los puestos de trabajo.
    p.mb-4(data-aos="fade") Para establecer esta capacidad de producción por m² es importante:

    .tarjeta.bg-slydeA-1.tema3.mb-4(data-aos="fade-down")
      SlyderA.tema3.p-3
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            h3.mb-4 El tipo de prenda a producir y el tamaño de los moldes.
          .col-md-9
            img(src='@/assets/curso/temas/t3/imag05t3.png' alt="")
        .row.justify-content-evenly.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Las actividades que se realizan
            p.mb-4 La capacidad de producción se mide definiendo el rango de actividades que se van a ejecutar, desde el trazo hasta entregar lotes organizados y listos para confeccionar, determinando las actividades que se van a realizar.
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/imag04t3.png' alt="")
        .row.justify-content-evenly.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Materiales e insumos a intervenir e inventarios necesarios
            p.mb-4 De acuerdo con la cantidad de unidades de los lotes a producir y las materias primas que se necesitan se puede establecer la capacidad de producción.
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/imag06t3.png' alt="")
        .row.justify-content-evenly.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3 Cantidad de unidades por lote a producir
            p.mb-4 Se puede tener un solo lote programado, con un gran pedido de unidades o tener una programación de varios requerimientos, lo que implica realizar una programación estricta para poder realizar los diferentes trazos, extendidas y cortes.
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t3/imag07t3.png' alt="")

    p.mb-5(data-aos="fade") Con la información presentada se puede empezar a deducir realmente cuántos metros cuadrados se necesitan o cuántas unidades se pueden cortar con el área existente. Hacer esa relación sobre el área que tiene y compararla con lo que se necesita para producir lo esperado ayuda a tomar decisiones en la etapa del plan.

    h3.text-red Capacidad instalada de mesas
    p.mb-4(data-aos="fade") Esta capacidad se calcula teniendo cuenta referencias, tallas, trazos y clases de tela, así:

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/imag08t3.png' alt='')
          .tarjeta.bg-1 
            .p-4.pt-5
              h4 Cantidades por referencia
              p Esto determina la longitud de las mesas necesarias o, viceversa, las dimensiones de las mesas disponibles en el sitio de trabajo determinarán cuántas unidades se pueden extender y cortar.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/imag09t3.png' alt='')
          .tarjeta.bg-1 
            .p-4.pt-5
              h4 Cantidades por talla
              p Se puede contar con una alta programación de lotes para el proceso, pero muy pocas tallas de estos. En ese caso, el largo de la mesa no será necesario que sea de gran tamaño. Esa información es muy importante para determinar la capacidad de producción.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/imag10t3.png' alt='')
          .tarjeta.bg-1
            .p-4.pt-5
              h4 Intervención de materiales e Insumos y gestión de Inventarios necesarios
              p De acuerdo con la cantidad de unidades de los lotes a producir y las materias primas que se necesitan se puede establecer la capacidad de producción.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/imag11t3.png' alt='')
          .tarjeta.bg-1
            .p-4.pt-5
              h4 Al largo de los trazos
              p Por políticas o necesidades de la empresa en ocasiones se programan varias referencias que van con el mismo tejido para extenderlas y cortarlas al mismo tiempo, esa condición hace que se tenga muy presente la relación del trazo con el largo de la mesa.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/imag12t3.png' alt='')
          .tarjeta.bg-1
            .p-4.pt-5
              h4 Cantidad de clases de telas a utilizar 
              p Hay prendas que no llevan una sola tela, llevan tela principal y otras telas complementarias, en ese caso hay que hacer varios tendidos y varios cortes, eso requiere más tiempo y afecta la capacidad de producción.
    
    h3.text-red Capacidad instalada de mano de obra directa
    p(data-aos="fade") Definitivamente este cálculo de la disponibilidad de mano de obra directa se tasa en unidad de medida de tiempo, su valoración se realiza en minutos invertidos por cada trabajador, se calcula que 480 minutos (8 horas) es el tiempo que se puede disponer de un empleado para las diferentes funciones, conociendo esta condición y los estándares de las actividades se puede establecer la capacidad de producción.
    p(data-aos="fade") Un estándar es la cantidad de tiempo que se utiliza realizando una actividad en condiciones normales, para cada actividad es importante determinar lo que se emplea para extender, cortar y tiquetear. 
    p.mb-4(data-aos="fade") Sumando los tiempos estándar de cada actividad da como resultado el tiempo que se requiere para que cada unidad pueda ser procesada, luego se multiplica por el número de operarios x 480 minutos, y el resultado se divide en el estándar de las operaciones, así se obtienen las unidades que la planta de corte puede producir en un día.

    .tarjeta.bg-8.p-3.mb-4(data-aos="fade-down")
      .row.justify-content-center
        .col-lg-10.col-md-11
          .row.align-items-center
            .col-md-2.col-3.mb-4.mb-md-0
              img.px-lg-3(src='@/assets/curso/temas/t3/icono01.svg' alt="")
            .col-md-5.col-9.mb-4.mb-md-0
              p La fórmula a aplicar para calcular la capacidad instalada de una planta de producción es la siguiente:
            .col-md-1.col-1
              p.fst-italic.text-right CI=
            .col-md-4.col-11
              p.fst-italic.text-decoration-underline.text-center.mb-0 N° de operaciones*horas de trabajo
              p.fst-italic.text-center.mb-0 Estándar de trabajo
    
    p.mb-4(data-aos="fade") A continuación, un ejemplo de una sección que tiene 5 operarios que trabajan 8 horas diarias y, la sumatoria de estándar de las operaciones a realizar suma 4 minutos.
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-6
        .tarjeta.bg-8.p-4
          .row.align-items-center.justify-content-around 
            .col-md-7.mb-4.mb-md-0
              p.mb-0 #[b No. de operarios =] 5
              p.mb-0 #[b Horario de trabajo diario =] 480 minutos
              p.mb-0 #[b Duración de la actividad =] 4 minutos
            .col-md-4.col-7.mb-4.mb-md-0
              img(src='@/assets/curso/temas/t3/formula.svg' alt="")
    

    p.mb-4(data-aos="fade") También, como se puede apreciar a continuación.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          p.mb-0 #[b Tabla 1] Cálculo de capacidad instalada diaria
        .tabla-b.color-acento-contenido
          table.text-center
            thead.bg-acento-contenido
              tr
                th.text-white.h4 No. de operarios
                th.text-white.h4 Jornada diaria de trabajo en minutos
                th.text-white.h4 Total minutos instalados
            tbody
              tr.bg-11
                td 5
                td.borde-tabla-left 480
                td.borde-tabla-left 2400
              tr.bg-white
                td(colspan='2').fw-bold Estándar de las operaciones =
                td.borde-tabla-left.fw-bold 4
              tr.bg-11
                td(colspan='2').fw-bold Producción diaria =
                td.borde-tabla-left 600
    
    .subtitulo.mb-4(data-aos="fade")
      h3.text-white.mb-0 Explicación de la tabla 1:            
    p.mb-4(data-aos="fade") Para calcular la capacidad de producción de una sección dedicada a la manufactura, se depende de:
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/icono03.svg' alt="")
          .tarjeta.bg-8.p-4
            h4.text-center.mt-3 El número de personas
            p Mientras más o menos personas participen de una actividad se ejecutará más o menos rápido.
      .col-lg-4.col-md-6.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/icono04.svg' alt="")
          .tarjeta.bg-8.p-4
            h4.text-center.mt-3 El horario de trabajo
            p Si se le dedica muchos o menos minutos a una labor, de esa manera la ejecutará, en más o menos tiempo.
            
    p.mb-5(data-aos="fade-right") De acuerdo con lo anterior, según el número de personas y el horario de trabajo se obtiene la cantidad de tiempo (minutos) que se tiene disponible en esa sección de trabajo. Esta cantidad de tiempo se divide o se reparte entre el tiempo que se demora la actividad a realizar (estándar). 
    
    
    h3 Primera columna: 
    p.mb-5(data-aos="fade") El n.° de operarios #[b se multiplica por la segunda columna:] horario de trabajo, ahí se obtienen los minutos disponibles (tercera columna), se dividen entre 4 minutos (estándar de la actividad), y el resultado son las unidades que se pueden producir en un día.

    h3 De zona de alistamiento
    p.mb-4(data-aos="fade") Existen dos actividades después del corte y antes de que salgan las piezas a los siguientes procesos, se llaman tiqueteado y alistamiento.
  
    .bg-10.p-4.mb-4
      .row.justify-content-center
        .col-lg-9.mb-4.mb-md-0(data-aos="fade-right")
          h4 Tiqueteado
          p Consiste en colocar adhesivos en las piezas ya cortadas. Estos adhesivos contienen información importante como el número de corte, talla, consecutivo, entre otros. Ayudan a identificar operaciones y la ubicación de lotes, lo que es fundamental para el seguimiento de la producción en la planta. Igualmente, facilitan el ensamblaje de las piezas para asegurar que las prendas de vestir no presenten diferencias de tonalidad. De esta manera, se evita en las plantas de producción que se mezclen los diferentes lotes de producción, destacando la importancia de este proceso en la cadena de producción. 
        .col-lg-3.col-md-8.mb-4.mb-lg-0(data-aos="fade-left")
          img(src='@/assets/curso/temas/t3/imag13t3.png' alt="")
    
    .bg-9.p-4
      .row.justify-content-center.align-items-end
        .col-lg-3.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido
            p.mb-0 Paquetes para proceso 
          img(src='@/assets/curso/temas/t3/imag14t3.png' alt="")
        .col-lg-9.mb-4.mb-md-0(data-aos="fade-left")
          h4 Alistamiento 
          p Realizados los procesos de trazado, extensión, corte y etiqueta.
          p Se procede a organizar las prendas para el siguiente proceso, habitualmente sigue ensamble o confección, pero en ocasiones después de cortar y antes de confeccionar pueden existir procesos como el estampado o bordado, de acuerdo con el destinatario se deben empacar las piezas cortadas, acompañadas de documentos que permitan continuar con los procesos.
          p Los paquetes amarrados deben de ir bien sujetos o embalados para evitar pérdidas de piezas y marcados para facilitar su identificación. En algunas ocasiones se les debe anexar insumos, plantillas, moldes, entre otros.



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
