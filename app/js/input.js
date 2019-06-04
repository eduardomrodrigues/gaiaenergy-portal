'use strict';


$(document).ready(() => {
    $('.one-form-container').hide();



    var firstElement = getFirstRegistry();


    writeOnCarrossel(firstElement)
    markCurrentStep(firstElement);

    $('.one-form-label').click(nextElement);
});



function getFirstRegistry() {

    return $('.one-form-container li:first-child div');


}


function writeOnCarrossel(content) {
    $('.one-form-fieldset').append(content.clone());

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


    removeCurrentElement();

    var nextDiv = $('.one-form-current-show').parent().next().children('div');


    writeOnCarrossel(nextDiv);
    markCurrentStep(nextDiv);

    $('.one-form-label').click(nextElement);

}

function removeCurrentElement() {

    $('.one-form-label .one-form-input-text').animate({

        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 5000, function(){
        $('.one-form-fieldset').empty();

    });






}