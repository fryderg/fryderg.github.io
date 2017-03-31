include("blocks/input/input.js");
include("blocks/checkbox/checkbox.js");
include("blocks/radio/radio.js");

//функция вставляет js-файлы на текущую HTML-страницу
function include(url) {
	var script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('body')[0].appendChild(script);
}

//функция возвращает массив элементов, соответствующих CSS-селектору selector
function $(selector) {
	return document.querySelectorAll(selector);
}

//функция добавляет элементу object класс с именем className
function addClass(object, className) {
	object.classList.add(className);
}

//функция удаляет у элемента object класс с именем className
function removeClass(object, className) {
	object.classList.remove(className);
}

//функция возвращает первый элемент с классом childClass,
//являющегося дочерним для объекта parentObject
function select(parentObject, childClass) {
	return parentObject.parentElement.querySelector(childClass);
}

