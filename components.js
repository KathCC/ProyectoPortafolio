$(document).ready(function(){
    


  //para hacer el LEER MAS EN EL ABOUT
  var btn = $('.section__btn');
  btn.text("Show More");
  var parr = $('.parrafito1');
  parr.hide();

  function Cambiar(){
    if(parr.hide()){
        btn.text("Show More");
    }
  }
 
  btn.click(function(){
    parr.toggle('fast',function(){//boton qe sirve para abrir y cerrar
        console.log("Prueba de callback en Efectos");     
    });
    parr.animate({marginLeft: '0px'}, 'fast');
    btn.text("Show Less");
});

$('.carousel').carousel();

var btn_skills= $('.section__btn--skills');
var btn_less= $('.section__btn--Less');
var front = $('.section__frontend');
var back = $('.section__backend');
var container = $('.section__containerskills');
var others = $('.section__others');


function cambio3(){
  if(container.show()){
    others.hide()
  }
  if(others.show()){
    container.hide()
  }
}
others.hide();

function cambio4(){
  container.css('Width', '90%');
}

  btn_skills.click(function(){
    container.toggle('fade', 300);
    cambio3();
    others.hide();
  })

 $(function()
        {
            $(".anim-slider").animateSlider();
        });


})

