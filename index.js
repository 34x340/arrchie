document.addEventListener("DOMContentLoaded", function () {
    // Получаем все чекбоксы
    const checkboxes = document.querySelectorAll('.calculate__list input[type="checkbox"]');
    const totalSumElement = document.getElementById('totalSum');

    // Функция для обновления суммы
    function updateSum() {
        let totalSum = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                totalSum += parseInt(checkbox.value); // Суммируем значения чекбоксов
            }
        });

        totalSumElement.textContent = totalSum; // Обновляем отображаемую сумму
    }

    // Добавляем обработчик события для каждого чекбокса
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSum);
    });
});
