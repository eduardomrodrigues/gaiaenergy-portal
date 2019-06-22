'use strict';


var currentSliceForm;
var tlAnimacaoProximo = new TimelineMax({
    delay: 0.5,
    repeatDelay: 0.2
});



$(document).ready(() => {
    $('.one-form-container').hide();


    currentSliceForm = getFirstRegistry();

    writeOnCarrossel(currentSliceForm)
    markCurrentStep(currentSliceForm);

    $('.one-form-label').click(nextElement);
});


function isFirstItem() {


}



function isLast() {

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

    return newComponent;
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



    removeCurrentElement(tlAnimacaoProximo);

    var nextComponent = writeOnCarrosselAnimate(currentSliceForm);
    tlAnimacaoProximo.to(nextComponent, 1, {
        left: 0,
        ease: Back.easeOut
    });

    markCurrentStep(currentSliceForm);

    $('.one-form-label').click(nextElement);







}

function removeCurrentElement(tlAnimacaoProximo) {

    var currentElement = $('.one-form-fieldset > div');

    tlAnimacaoProximo.to(currentElement, 1, {
        left: '105%',
        onComplete: function (e) {
            currentElement.remove();
        },
        ease: Back.easeOut
    });




}