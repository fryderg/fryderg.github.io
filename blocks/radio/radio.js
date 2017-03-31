for (i = 0; i < $(".radio__hidden-label").length; i++) {
	
	//обработчики событий при клике на переключатель
	$(".radio__hidden-label")[i].onclick = function() {
		return function() {
			switchToggle( this );
		}
	}(i)
	
	//обработчики событий при клике на label
	$(".radio__text-label")[i].onclick = function(x) {
		return function() {
			switchToggle( $(".radio__hidden-label")[x] );
		}
	}(i)
}

//функция переключения
function switchToggle(object) {
	var radioOff = select(object, ".radio__input[value=off]"),
		radioOn = select(object, ".radio__input[value=on]"),
		radioBtn = select(object, ".radio__button"),
		radioTumbler = select(object, ".radio__tumbler");
	
	//проверяем в каком состоянии находится переключатель
	if (radioOff.checked) {
		
		//если переключатель выключен, то изменяем положение на On
		radioOn.checked = true;
		addClass(radioBtn, "radio__button_on");
		addClass(radioTumbler, "radio__tumbler_on");
	} else {
		
		//иначе переводим в состояние Off
		radioOff.checked = true;
		removeClass(radioBtn, "radio__button_on");
		removeClass(radioTumbler, "radio__tumbler_on");
	}
}