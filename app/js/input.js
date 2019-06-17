    'use strict';


var currentSliceForm;


$(document).ready(() => {
    $('.one-form-container').hide();

    
    currentSliceForm = getFirstRegistry();

    writeOnCarrossel(currentSliceForm)
    markCurrentStep(currentSliceForm);

    $('.one-form-label').click(nextElement);
});


function isFirstItem(){


}



function isLast(){

}


function getFirstRegistry() {

    return $('.one-form-container li:first-child div');
}


function writeOnCarrossel(content) {
    
    var newComponent = content.clone();

    $('.one-form-fieldset').append(newComponent);
    
}

function writeOnCarrosselAnimate(content) {
    
    var newComponent = content.clone();

    $('.one-form-fieldset').append(newComponent);
    newComponent.css('left', '-110%');
    TweenMax.to(newComponent, 1, {left: 0, ease:Back.easeOut});
    
}

function markCurrentStep(element) {
    removeMarks();
    $(element).addClass('one-form-current-show');
}

function removeMarks() {

    $('.one-form-container').children().each((i, v) => {
        $(v).children('div').removeClass('one-form-current-show');
    });

}

function nextElement() {

    currentSliceForm = $('.one-form-current-show').parent().next().children('div');
    
    removeCurrentElement();
    

    writeOnCarrosselAnimate(currentSliceForm);
    markCurrentStep(currentSliceForm);
    
    $('.one-form-label').click(nextElement);
    

    
    
}

function removeCurrentElement() {

    
    TweenMax.to('.one-form-fieldset > div', 1, {left:'110%',
        onComplete: (e)=>{
            $(e).remove();
        }, ease:Back.easeOut});
    
    
    

}