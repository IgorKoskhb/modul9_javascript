const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
alert('Служит для вывода информации в консоль')
})


const alert2 = document.querySelector('#alert2');

alert2.addEventListener('click', () => {
alert('Выводит окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК»')
})


const prompt2 = document.querySelector('#prompt2');

prompt2.addEventListener('click', () => {
var years = prompt('Как сильно вам нравится JS? Оцени от 1 до 10!', 10);
alert('Вы оценили JS на ' + years + ' баллов!')
})
