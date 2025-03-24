## Описание

Данный проект представляет собой прототип блока **Progress**, предназначенного для отображения прогресса (от 0 до 100) и управления его состояниями:

1. **Normal (Value)** – отрисовывает дугу на круге в зависимости от введённого значения.
2. **Animated** – включает анимацию вращения кольца по часовой стрелке.
3. **Hidden** – скрывает блок (кольцо) с интерфейса.

Также предусмотрена **адаптивная верстка**, при которой:

- В **портретной** ориентации блок имеет размер `320x568`.
- В **ландшафтной** ориентации – `568x320`, а элементы внутри перестраиваются.

Внешний вид элементов управления (Value, Animate, Hide):

- **Value** – овал с чёрной рамкой и текстом по центру.
- **Animate / Hide** – кастомные переключатели, которые меняют цвет и положение «ползунка» при переключении.

## Структура проекта

Проект состоит из трёх основных файлов:

1. **index.html**\
   Содержит базовую HTML-разметку:
   - Основной контейнер `.progress-block` с адаптивными размерами.
   - Штрихпунктирные вспомогательные линии `.layout-helper`.
   - Блоки `.progress-title`, `.progress-content` (кольцо), `.controls` (элементы управления).
2. **style.css**\
   Описывает внешний вид всех элементов:
   - Портрет/ландшафт стили.
   - Кастомные переключатели.
   - Овальный инпут для Value.
   - Анимации вращения, скрытие блока и т.д.
3. **progress.js**\
   Содержит логику управления прогрессом:
   - Расчёт длины дуги в зависимости от значения (0–100).
   - Функции для включения анимации и скрытия контента.
   - Глобальный объект `ProgressBlock` с методами для программного управления блоком.

## Глобальный API

Для программного управления блоком предусмотрен объект `ProgressBlock`, доступный в глобальной области видимости (window).

- **`ProgressBlock.setValue(number)`**\
  Устанавливает новое числовое значение прогресса от 0 до 100.
  ```js
  ProgressBlock.setValue(75); // отобразит 75% дуги
  ```
- **`ProgressBlock.setAnimate(boolean)`**\
  Включает/выключает анимацию вращения кольца.
  ```js
  ProgressBlock.setAnimate(true); // включает анимацию
  ```
- **`ProgressBlock.setHidden(boolean)`**\
  Скрывает/показывает кольцо.

  ```js
  ProgressBlock.setHidden(true); // скрывает блок (кольцо)
  ```

## Как запустить

1. **Склонировать или скачать** проект любым удобным способом.
2. Открыть файл **`index.html`** в любом современном браузере (Chrome, Safari и т.д.).

**Дополнительных зависимостей** или сборки (npm, webpack и т.д.) не требуется. Всё работает на нативном JavaScript, HTML и CSS.

### Пример сценария

1. Введите в овал (Value) число, например `75`.
   - Синяя дуга отобразит 75% окружности, а цифра в овальном инпуте станет `75`.
2. Включите переключатель Animate.
   - Кольцо начнёт плавно вращаться по часовой стрелке.
3. Включите переключатель Hide.
   - Кольцо и цифра исчезнут, а контролы останутся, позволяя вернуть видимость, если снять галочку с «Hide».