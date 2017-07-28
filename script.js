
$(function () {

	
	$('.active-form').click(function () {
		$('.feedback-form').trigger('reset').slideToggle();
		$('.feedback-form').toggleClass('feedback-OnOff');

	});

	$('.date-entry').datepicker({
		showAnim: 'slideDown',
		dateFormat: "dd-MM-yy",
		monthNames:["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		dayNamesMin:["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		minDate: '+2d',
		defaultDate: '+2d',
		onSelect: function (selectedDate) {
			$('.date-exit').datepicker('option', 'minDate', selectedDate);
		}
	});

	$('.date-exit').datepicker({
		showAnim: 'slideDown',
		dateFormat: "dd-MM-yy",
		monthNames:["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		dayNamesMin:["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		maxDate: '+3m',
		defaultDate: '+2d',
		onSelect: function (selectedDate) {
			$('.date-entry').datepicker('option', 'maxDate', selectedDate);
		}
	});

	var divs = $('.divs');

	divs.each(function () {
		
		let div 	= $(this);
		let count 	= 0;
		let num 	= div.find('.number');
		let minus 	= div.find('.minus');
		let	plus 	= div.find('.plus');

		minus.click(function (){
			if (!count){
				return
			} else {
				count--;
				num.val(count);
			}
		})

		plus.click(function (){
			if (count >= 20){
				return 
			} else {
				count++;
				num.val(count);
			}
		})

	})

	// slider range

	$( "#slider-range" ).slider({
	  step: 50,
      range: true,
      min: 0,
      max: 5000,
      values: [ 0, 3000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ]);
        $( "#amount-1" ).val( ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount-1" ).val( $( "#slider-range" ).slider( "values", 1 ));

    $(".nav-burger").click(function() {
    	$(".main-navigation li").slideToggle(250);
    });

    $(window).resize(function() {
    	if ($(window).width() > 768 ) {
    		$(".main-navigation li").removeAttr("style");
    }
    });

});