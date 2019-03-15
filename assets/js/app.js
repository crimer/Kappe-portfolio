window.onload = function () {

	document.querySelector('#btn_info').addEventListener('click',function  () {
			document.querySelector('#btn_info').classList.toggle('open');
	});

	let slides = document.querySelectorAll('li.slide'),
		dots = document.querySelectorAll('.square'),
		currentSlide = 0;

    $('.square').on('click', function () {
        $(".act").removeClass("act");
        $(this).addClass("act");
        goToSlides($(this).index());
    });


    setInterval(() => {
        goToSlides(currentSlide + 1);
    }, 3000);

    function goToSlides (n) {
        slides[currentSlide].className = 'slide';//переназначаем класс
        dots[currentSlide].className = 'square';//переназначаем класс
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'slide showing';//переназначаем класс
        dots[currentSlide].className = 'square act';//переназначаем класс
    }


    $('.progress__bar').each(function (){
        let w = $(this).data('skill');
        $(this).css('width', w + '%');
    });
}