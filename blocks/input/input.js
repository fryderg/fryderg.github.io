for (i = 0; i < $(".input__field").length; i++) {
	
	//обработчики событий при фокусировке на input'ах
	$(".input__field")[i].onfocus = function() {
		return function() {
			
			//находим input__placeholder из одного блока с input__field
			var placeholder = select(this, ".input__placeholder");
			
			addClass(this, "input__field_focused");
			addClass(placeholder, "input__placeholder_focused");
		}
	}(i)

	//обработчики событий при расфокусировке input'ов
	$(".input__field")[i].onblur = function() {
		return function() {
			if (this.value == "") { //если input пустой
				var placeholder = select(this, ".input__placeholder");
				
				removeClass(this, "input__field_focused");
				removeClass(placeholder, "input__placeholder_focused");
			}
		}
	}(i)
}

//обработчик события при вводе символов в поле Email
$(".input__field[type=email]")[0].oninput = function() {
	return function() {
		var placeholder = select(this, ".input__placeholder"),
			value = this.value;
			
		if (value.length > 0) {
			//проверка email на корректность
			if (!checkEmail(value)) {
				removeClass(placeholder, "input__placeholder_correct");
				addClass(placeholder, "input__placeholder_error");
			} else {
				removeClass(placeholder, "input__placeholder_error");
				addClass(placeholder, "input__placeholder_correct");
			}
		} else {
			removeClass(placeholder, "input__placeholder_error");
			removeClass(placeholder, "input__placeholder_correct");
		}
		
	}
}(0)

//функция проверки email на корректность ввода
function checkEmail(email) {
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
	
	//если строка соответствует регулярному выражению pattern
	if (pattern.test(email)) {
		return true;
	}
	return false;
}