(function () {
  // Основные элементы
  const progressBlock = document.getElementById("progressBlock");
  const progressContent = document.getElementById("progressContent");
  const progressBar = document.querySelector(".progress-bar");
  const valueInput = document.getElementById("valueInput");
  const animateToggle = document.getElementById("animateToggle");
  const hideToggle = document.getElementById("hideToggle");

  // Радиус окружности (r=45), длина окружности ~ 283
  const RADIUS = 45;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  /**
   * Обновляет прогресс дуги от 0 до 100
   * @param {number} value
   */
  function updateProgress(value) {
    const clamped = Math.max(0, Math.min(100, value));
    const offset = (clamped / 100) * CIRCUMFERENCE;
    progressBar.setAttribute("stroke-dasharray", `${offset} ${CIRCUMFERENCE}`);
  }

  /**
   * Включает/выключает анимацию
   * @param {boolean} isAnimate
   */
  function setAnimate(isAnimate) {
    if (isAnimate) {
      progressBlock.classList.add("animated");
    } else {
      progressBlock.classList.remove("animated");
    }
  }

  /**
   * Скрывает/показывает контент
   * @param {boolean} isHidden
   */
  function setHidden(isHidden) {
    if (isHidden) {
      progressContent.classList.add("hidden");
    } else {
      progressContent.classList.remove("hidden");
    }
  }

  // Глобальный API
  window.ProgressBlock = {
    setValue(value) {
      // Сразу зажимаем значение в диапазоне 0..100
      let num = parseInt(value, 10) || 0;
      num = Math.max(0, Math.min(100, num));
      valueInput.value = num;
      updateProgress(num);
    },
    setAnimate(isAnimate) {
      animateToggle.checked = isAnimate;
      setAnimate(isAnimate);
    },
    setHidden(isHidden) {
      hideToggle.checked = isHidden;
      setHidden(isHidden);
    },
  };

  // События на UI
  valueInput.addEventListener("input", () => {
    // При вводе вручную зажимаем значение в диапазоне 0..100
    let val = parseInt(valueInput.value, 10) || 0;
    val = Math.max(0, Math.min(100, val));
    // Обновляем поле, если пользователь ввёл что-то вне диапазона
    valueInput.value = val;
    updateProgress(val);
  });

  animateToggle.addEventListener("change", () => {
    setAnimate(animateToggle.checked);
  });

  hideToggle.addEventListener("change", () => {
    setHidden(hideToggle.checked);
  });
})();
