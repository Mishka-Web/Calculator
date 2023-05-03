// Блок калькулятора
const calculator = document.getElementById('calculator');
// Поле ввода символов
const inputField = document['form-calc']['text-field'];

// Обработчик событий в теле калькулятора
calculator.addEventListener("click", (e) => {
    
    // Отключение отправки данных формы
    e.preventDefault();

    // Проверка нажатия на 'C' и "delChar"
    switch (e.target.dataset.text) {
        case "C":
            // Чистка поле ввода
            inputField.value = "";
            break;
        case "delChar":
            // Удаление символов по одному в поле ввода
            inputField.value = inputField.value.substring(0, inputField.value.length - 1);
            break;
    }

    // Проверка на существование кнопки с цифрами
    if (e.target.dataset.num) {

        inputField.value += e.target.dataset.num;

    // Проверка на существование кнопок управления
    }else if (e.target.dataset.control) {

        inputField.value += e.target.dataset.control;

    // Проверка на существование кнопки '='
    }else if (e.target.dataset.controlEqual) {

        // Проверка математического выражения на бесконечность
        if (eval(inputField.value) == Infinity) {
            alert("Делить на ноль нельзя!");
            inputField.value = "";
        }else {
            inputField.value = eval(inputField.value);
        }

    }
});