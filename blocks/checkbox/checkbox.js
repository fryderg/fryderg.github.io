for (i = 0; i < $(".checkbox__input").length; i++) {
	
	//обработчики событий, реагирующий на изменение состояния i-ого checkbox'а
	$(".checkbox__input")[i].onchange = function() {
		return function() {
			
			//находим checkbox__label из одного блока с checkbox__input
			var checkboxLabel = select(this, ".checkbox__label");
			
			if (this.checked) {
				addClass(checkboxLabel, "checkbox__label_checked");
			} else {
				removeClass(checkboxLabel, "checkbox__label_checked");
			}
		}
	}(i)
}