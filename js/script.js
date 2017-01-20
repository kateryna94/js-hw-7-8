$(function() {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show(); //прячем все, кроме первого элем
    $('a:first').addClass('selected'); //присваиваем текущей вкладке клас селектед
// обрабатывается клик по вкладке
    $('div.tabs ul.tabNavigation a').click(function() {
        tabContainers.hide(); //прячем все табы
        tabContainers.filter(this.hash).show(); //показываем содержимое текущего
        $('div.tabs ul.tabNavigation a').removeClass('selected'); //убираем у всех класс селктед

        return false;
    }).filter('first').click();

});
