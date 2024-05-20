<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Corte
    
    .bg-9.mb-5
      .row.align-items-center
        .col-lg-3.col-md-8(data-aos="fade-right")
          img(src='@/assets/curso/temas/t5/imag01.png' alt="")
        .col-lg-9(data-aos="fade-left")
          .p-4
            p.mb-0 Esta actividad se refiere a deslizar una herramienta llamada cortadora (las hay de varios tipos) por las líneas dibujadas en el trazo y sobre las telas extendidas.
   
    .bg-19(data-aos="fade-down")
      SlyderA.align-items-start.t-5
        .row.justify-content-center.pb-lg-4.mb-5
          .col-12.col-md-10.mb-4
            .tit-t5.d-flex.justify-content-center.px-4
              img.w-270.d-none.d-lg-flex.pt-3(src='@/assets/curso/temas/t5/tit-img1.svg' alt="")
              h2.text-center.mb-0.p-2 Técnicas de corte
              img.w-270.d-none.d-lg-flex.pt-3.reverse(src='@/assets/curso/temas/t5/tit-img1.svg' alt="")
          .col-10
            p Existen muchas maneras de deslizar los útiles de corte por las líneas trazadas que corresponden a los trazos.
            p.mb-4 Para lograrlo hay técnicas manuales y técnicas sistematizadas, el valor que se invierte para adquirir cada una es proporcional a los resultados obtenidos.
          .row.justify-content-center
            .col-lg-5.mb-4.pe-0.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/img04.png' alt="")
            .col-lg-5.col-md-10.col-10.mb-4.ps-0
              .color-punteado.bg-acento-contenido.p-2.mb-2
                h4.text-center.text-white.mb-0 Convencional o manual
              .color-punteado.p-4
                p.mb-0 Se refiere a la manera como se viene cortando desde el inicio de la industrialización de la moda, utilizando máquinas y herramientas, con tracción manual, iguales o con muy pequeñas variaciones desde hace más de 60 años. 
                p.mb-0 Estas máquinas cortadoras son orientadas de manera manual.
          .row.justify-content-center
            .col-lg-5.mb-4.pe-0.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/img05.png' alt="")
            .col-lg-5.col-md-10.col-10.mb-4.ps-0
              .color-punteado.bg-secundario.p-2.mb-2
                h4.text-center.mb-0 Automatizado
              .color-punteado.p-4
                p.mb-0 Existen sistemas de extendido y corte automatizados en el mercado. 
                p.mb-0 Las órdenes de funcionamiento las emiten desde un #[em software] que abarca desde la elaboración de moldes, trazos y órdenes para extender, hasta finalizar con el proceso de cortar. 
                p.mb-0 El extendido y el corte se realizan en una mesa diseñada para que pueda funcionar articulada con el #[em software].
        
        .row.justify-content-center.pb-lg-4.mb-lg-5
          .col-12.col-md-10.mb-4
            .tit-t5.d-flex.justify-content-center.px-4
              img.w-180.d-none.d-lg-flex.pt-3(src='@/assets/curso/temas/t5/tit-img2.svg' alt="")
              h2.text-center.mb-0.p-3 Herramientas y equipos de corte
              img.w-180.d-none.d-lg-flex.pt-3.reverse(src='@/assets/curso/temas/t5/tit-img2.svg' alt="")
          .col-10
            p En el área de trazo y corte se utiliza una serie de máquinas y herramientas propias para ese fin, unas con más nivel de tecnología que otras, entre ellas, unas diseñadas para grandes volúmenes y otras para pequeños lotes de producción.
            p.mb-4 Las más frecuentemente utilizadas son las siguientes:
          .col-lg-10.col-md-10.col-10
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/t5/tarj-1.png' alt='')
              .tarjeta.tarj-punt1
                .ps-4
                  .bg-acento-contenido.tarj-punt1.mb-3.px-5.py-2
                    h2.text-white.mb-0 Cortadoras de cuchilla vertical
                  p Máquina eléctrica provista de una cuchilla ubicada verticalmente, que al activarse realiza un movimiento perpendicular, permitiendo avanzar al empujarla. Esta máquina corta las telas extendidas, dejando las piezas sueltas para clasificarlas y posteriormente ensamblarlas. Está equipada con cintas afiladoras intercambiables que, al activarlas, mantienen la capacidad de corte en óptimas condiciones.
                  p Este tipo de máquina es operada manualmente por el encargado de esta función. La cortadora se desplaza dentro del tendido, separando las piezas. El cambio de cuchillas es realizado por el mismo operario. Las cuchillas de estas máquinas vienen en longitudes de 4, 6, 8 y 10 pulgadas. El material sobrante de tela que no corresponde a piezas destinadas a la confección se llama retal, y forma parte del desperdicio.
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/t5/tarj-2.png' alt='')
              .tarjeta.tarj-punt2
                .ps-4
                  .bg-20.tarj-punt2.mb-3.px-5.py-2
                    h2.text-white.mb-0 Cortadora manual profesional
                  p.py-lg-4 La fuente de su energía son baterías, se acciona de manera manual, no tiene la misma potencia que la eléctrica, sirve para cortar lotes de pocas unidades.
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/t5/tarj-3.png' alt='')
              .tarjeta.tarj-punt3
                .ps-4
                  .bg-21.tarj-punt3.mb-3.px-5.py-2
                    h2.text-white.mb-0 Corte sin fin
                  p Al utilizar este tipo de máquina, es importante tener en cuenta que es fija, inmóvil y estática, siendo el tejido el que se mueve. Esta máquina se utiliza para cortes rectos, y al empujar el material, se le da la forma deseada siguiendo las líneas del trazo.
                  p El tiempo empleado es mínimo, permitiendo cortar grandes bloques de material con eficiencia. Además, se garantiza la seguridad en la relación entre la utilidad del corte y los materiales.
                  

    
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1  Control de calidad en el corte

    p.mb-4(data-aos="fade") Se puede definir calidad como el cumplimiento de especificaciones, teniendo en cuenta que estas o los requisitos del área de trazo y corte a cumplir son:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .bg-9
          .row.justify-content-center
            .col-lg-6.col-md-8
              img(src='@/assets/curso/temas/t5/imag02.png' alt="")
            .col-lg-6
              .p-3 
                ul.lista-ul.fa-ul.lista-ul--color.color-primario.mb-0
                  li.mb-0 
                    i.fas.fa-angle-right
                    | Mordería.
                  li.mb-0
                    i.fas.fa-angle-right
                    | Tejidos solicitados, principales y complementarios.
                  li.mb-0
                    i.fas.fa-angle-right
                    | Cantidades totales por talla y color.
                  li.mb-0 
                    i.fas.fa-angle-right
                    | Superficie de la tela.
                  li.mb-0 
                    i.fas.fa-angle-right
                    | Ancho del trazo.
                  li.mb-0
                    i.fas.fa-angle-right
                    | Numeración y alistamiento.
      
    p(data-aos="fade") Desde el proceso de calidad se planean actividades que tengan como fin lograr el cumplimiento y evitar no conformidades.   Para hacer seguimiento al cumplimiento de especificaciones en las actividades que se realizan en el área de trazo y corte se recomienda el siguiente cuadro, basado en la herramienta de control PHVA. 
    p.mb-4(data-aos="fade") A continuación, un ejemplo que presenta actividades asociadas al proceso que se debe controlar, qué tipo de control se debe hacer, la herramienta o instrumento a utilizar y cuál acción de mejora implementar.
    
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade")
      p.mb-0 #[b Tabla 2] Formato control de calidad
    .tabla-a.color-acento-contenido.mb-5.p-0(data-aos="fade-down")
      table
        thead
          tr.bg-12
            th(colspan="5")  Formato para control calidad en proceso
          tr.bg-17.borde-t5
            th
            th Colección: otoño
            th Ref.: 7000
            th Fecha:  abril 20/20
            th
          tr
            th Actividades
            th Control de calidad
            th Documento y/o herramienta
            th Hallazgos
            th Acciones de mejora
        tbody
          tr
            td Extender la tela
            td Cantidad de las capas de tela necesarias en la mesa de corte.
            td Ficha técnica que indique la cantidad de tela.
            td La tela estaba tensionada.
            td La tela debe dejarse reposar antes de proceder al corte.
          tr.bg-18
            td Poner los moldes
            td Colocar el trazo sobre la tela, teniendo presente que no quede por fuera ninguna pieza.
            td Moldería y revisión de la ficha técnica.
            td La moldería quedó del tamaño adecuado a la tela.
            td Se evidenció que las piezas de las prendas caben a la perfección en el tamaño de la tela.
          tr
            td Cortar
            td Se procede a cortar los moldes de forma manual o a máquina.
            td Patrones, moldes.
            td Coinciden moldes y piezas cortadas.
            td Mantener el proceso.
          tr.bg-18
            td Separar las piezas cortadas
            td Identificar la cantidad de piezas por prenda.
            td Muestra física.
            td La cantidad de piezas fue la indicada.
            td Continuar con este control. 
          tr
            td Empacar
            td Empacar cada paquete con su debido registro y código.
            td Ficha de registro.
            td La cantidad de paquetes fue la indicada.
            td El empaquetado de todo debe ser cuidadoso para que no falte ninguna pieza. 
          tr.bg-18.borde2-t5
            td Registro
            td Tener el registro de cuántas piezas por paquete hay y su respectivo código.
            td Ficha de registro.
            td Todas las piezas fueron hechas y registradas con éxito.
            td Corroborar que todas las piezas vayan completas.
    
    .subtitulo.mb-4(data-aos="fade")
      h3.text-white.mb-0 Explicación de la tabla 2:
    p.mb-4 El objetivo es hacer seguimiento a las actividades que se realizan en el área de trazo y corte para verificar que sí se están cumpliendo las especificaciones requeridas. A continuación, se explican las columnas de la tabla anterior: 

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .recuadro-t5.p-3.px-4
          .row.align
            .col-4.bg-10.p-4.bord-1
              h4 Columna actividades 
            .col-8.bg-9.p-4.bord-2
              p.mb-0 Se refiere a la actividad a la cual se le va a realizar el control de calidad.
          .row.borde-top-t4
            .col-4.bg-10.p-4
              h4 Columna control de calidad
            .col-8.bg-9.p-4
              p.mb-0 Indica qué aspecto de esa actividad se controlará, por ejemplo, si la actividad es la extendida se deben especificar todos los aspectos que componen la extendida (seleccionar telas, reposos, anchos, eliminar imperfectos, cantidad de tela, cantidad de tallas, etc.) y cuál de ellos se va a controlar.
          .row.borde-top-t4
            .col-4.bg-10.p-4
              h4 Columna documento/herramienta
            .col-8.bg-9.p-4
              p.mb-0 Se refiere al instrumento o herramienta que se utiliza y que sirve para poder validar el cumplimiento del requisito o especificación, pueden ser documentos como fichas técnicas, órdenes de producción o similares, también se puede hacer uso de muestras físicas.
          .row.borde-top-t4
            .col-4.bg-10.p-4
              h4 Columna hallazgos
            .col-8.bg-9.p-4
              p.mb-0 Aquí se consignan los hallazgos que se encontraron en la revisión o verificación, siempre dentro de los procesos productivos es importante realizar procesos de revisión, los cuales permiten encontrar si lo que se está haciendo está bien o no. En esta columna se registran los hallazgos.
          .row.borde-top-t4
            .col-4.bg-10.p-4.bord-4
              h4 Columna acciones de mejora
            .col-8.bg-9.p-4.bord-3
              p.mb-0 De acuerdo con los hallazgos se toman decisiones sobre las acciones de mejora que se deben tomar.
    
    
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2  Recomendaciones para el área de trazo y corte
    
    p.mb-4(data-aos="fade") A continuación, se definen algunas recomendaciones para garantizar la calidad en las secciones que realizan actividades de corte:

    .row.fondo-t5.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center(data-aos="fade-down")

          .row
            .col-lg-5.mb-4.mb-lg-0.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/imag03.png' alt="")
            .col-lg-7.mb-4.mb-lg-0
              .row.align-items-center.px-2.px-md-0
                .col-2.mb-3.num-t5-borde
                  span.num-t5 01
                .col-10
                  p.mb-3 Al recibir las telas asegurarse de tener claro:  el nombre de la tela, la cantidad, para qué lotes está destinada, dónde y cómo se va a almacenar, etc.
                .col-2.mb-3.num-t5-borde
                  span.num-t5 02
                .col-10 
                  p.mb-3 Si las telas necesitan reposo previo, ejecutarlo.
                .col-2.mb-3.num-t5-borde
                  span.num-t5 03
                .col-10
                  p.mb-4 Al extender identificar las posibles irregularidades de la tela, proceder a marcarlas para luego reponer la pieza o cortar y sacar ese daño.
                .col-2.mb-3.num-t5-borde
                  span.num-t5 04
                .col-10
                  p.mb-4 Cuando se está cortando poner mucho cuidado con los “vencimientos de las telas”, con la posición y profundidad de los piquetes.
                .col-2.mb-3.num-t5-borde
                  span.num-t5 05
                .col-10
                  p.mb-2 Al momento de tiquetear debe tener en cuenta no colocar el tiquete donde van a ir costuras o piezas como tapas, bolsillos traseros, charreteras o pretinas, se recomienda etiquetar por el derecho de la tela para que cuando se vaya construyendo la prenda no quede escondida.
                .col-2.mb-3.num-t5-borde
                  span.num-t5 06
                .col-10
                  p.mb-2 Al amarrar las piezas se recomienda juntar las piezas iguales, por ejemplo, todas las aletillas juntas, todas las relojeras juntas, todos los bolsillos juntos, etc; ya que la primera operación que se hace en las plantas es precisamente juntar las piezas iguales para cargarlas a las máquinas con lo que se gana tiempo.
                .col-2.mb-3.num-t5-borde
                  span.num-t5 07
                .col-10 
                  p.mb-2 Al ingresar los lotes a las plantas hacer entrega de toda la información y elementos que se tengan, adicional hacer una remisión en la que se especifique: corte, referencia, cantidades por talla, etc.
                .col-2.mb-3.num-t5-borde
                  span.num-t5 08
                .col-10
                  p.mb-4 Los pasadores deben venir cortados a la medida que el cliente los necesita, no de otra, ya que esto lleva a afinarlos, en lo posible enviar un retazo para posibles reposiciones.


</template>

<script>
export default {
  name: 'Tema5',
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
