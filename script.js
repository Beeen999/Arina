const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const title = document.getElementById('questionTitle');

let noClickCount = 0;

// Отмазки для кнопки "Нет"
const noMessages = [
    "Нет", 
    "Почему я?", 
    "Я устала", 
    "Потом!", 
    "Сама помой", 
    "Не хочууу", 
    "Только не это", 
    "Сдавайся!",
    "Жми зеленую!"
];

// Уговоры для кнопки "Да"
const yesMessages = [
    "Да", 
    "Конечно!", 
    "Уже бегу", 
    "Будет блестеть", 
    "ЖМИ СЮДА", 
    "Я СОГЛАСНА", 
    "АААА, ЛАДНО", 
    "БЕЗ ВАРИАНТОВ"
];

noBtn.addEventListener('click', () => {
    noClickCount++;

    // 1. Увеличиваем "Да" (padding и шрифт)
    // С каждым кликом она становится всё шире и выше, толкая соседа
    const pY = 20 + (noClickCount * 15);
    const pX = 50 + (noClickCount * 30);
    const fSize = 1.5 + (noClickCount * 0.5);

    yesBtn.style.padding = `${pY}px ${pX}px`;
    yesBtn.style.fontSize = `${fSize}rem`;
    
    // 2. Уменьшаем "Нет"
    const noFSize = Math.max(0.5, 1.5 - (noClickCount * 0.15));
    const noP = Math.max(5, 20 - (noClickCount * 2));
    
    noBtn.style.fontSize = `${noFSize}rem`;
    noBtn.style.padding = `${noP}px ${noP * 2}px`;

    // 3. Меняем фразы
    noBtn.innerText = noMessages[noClickCount % noMessages.length];
    yesBtn.innerText = yesMessages[noClickCount % yesMessages.length];
});

yesBtn.addEventListener('click', () => {
    title.innerText = "Ура! Ты лучшая! ✨🧼";
    title.style.color = "#00ff87";
    noBtn.style.display = 'none';
    yesBtn.style.fontSize = "3rem";
    yesBtn.innerText = "ИДИ МОЙ! 😂";
});