var btnext = document.getElementById('bt-next')
var btsubmit = document.getElementById('bt-submit')

var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")

window.addEventListener('DOMContentLoaded', () => {
    two.classList.add('dsp-none')
    three.classList.add('dsp-none')

    btsubmit.classList.add('dsp-none')
})

let section = 1;

// Section 1 (one) -> Section 2 (two) -> Section 3 (three)

btnext.addEventListener('click', (event) => { 

    section++;

    function jumpTo2ndSection() {
        one.classList.add('dsp-none')
        two.classList.remove('dsp-none')
    }

    function jumpTo3ndSection() {
        two.classList.add('dsp-none')
        three.classList.remove('dsp-none')

        btsubmit.classList.remove('dsp-none')
        btnext.classList.add('dsp-none')
    }

    section === 2 ?  jumpTo2ndSection() : jumpTo3ndSection()
    
})

// Choose-a-bikee

// Temporary/Basic function to passing and choosing bikees

const color = $('.color');

color.each(function() {

    $(this).on("click", function () {

        const divSelectedColor = $('.static-selected-color');
        const carousel = document.getElementById('carousel');
        const radio = $('input[name=selected-bikee]');

        var rgbaSelectedColor = $(this).css('background-color');

        divSelectedColor.css('background-color', rgbaSelectedColor);

        var isChecked = radio.attr('checked');
        var idx = $(this).attr('data-idx');

        if (typeof isChecked !== typeof undefined && isChecked !== false) {
            radio.removeAttr('checked'); // Remove o atributo "checked" de quaisquer inputs que a contenham (lembrando, será atualizado)
        }

        $('input[data-idx=' + idx + ']').prop('checked', true); // Seleciona o radio-button de acordo com o span que foi clicado (variavel idx passada dentro do data-idx)

        carousel.style.transform = `translateX(` + (152 - (92 * idx)) + `%)`; // (Valor inicial) - (Espaço entre as bikees) * (Valor da bikee clicada)

    })
    
})