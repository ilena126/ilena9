// Стоимость по умолчанию для разных параметров
const basePrices = {
    style: {
      'Современный стиль': 100000,
      'Кухни Лофт': 120000,
      'Классический стиль': 150000,
      'Другое': 8000,
    },
    form: {
      'Прямая кухня': 50000,
      'Угловая кухня': 70000,
      'П-образная кухня': 90000,
      'Параллельная кухня': 80000,
      'Кухня с островом': 120000,
      'Другие формы': 6000,
    },
    area: {
      'До 5 м²': 30000,
      'До 8 м²': 50000,
      'До 15 м²': 80000,
      'Другое': 10000,
    }
  };
  
  let selectedStyle = '';
  let selectedForm = '';
  let selectedArea = '';
  let phoneNumber = '';
  
  // Выбор стиля
  document.querySelectorAll('.style-option').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.style-option').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      selectedStyle = item.querySelector('p').textContent;
    });
  });
  
  // Выбор формы
  document.querySelectorAll('.form-option').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.form-option').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      selectedForm = item.querySelector('p').textContent;
    });
  });
  
  // Выбор площади
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedArea = btn.textContent;
    });
  });
  
  // Обработка кнопки телефона
  document.querySelector('.phone-btn').addEventListener('click', () => {
    document.getElementById('phone-modal').classList.remove('hidden');
  });
  
  // Подтверждение телефона
  document.querySelector('.confirm-btn').addEventListener('click', () => {
    phoneNumber = document.querySelector('.phone-input').value.trim();
    if (!phoneNumber) {
      alert('Пожалуйста, введите номер телефона');
      return;
    }
    document.querySelector('.phone-btn').textContent = phoneNumber;
    document.getElementById('phone-modal').classList.add('hidden');
  });
  
  // Отмена ввода телефона
  document.querySelector('.cancel-btn').addEventListener('click', () => {
    document.getElementById('phone-modal').classList.add('hidden');
  });
  
  // Обработка клика на "Рассчитать"
  document.querySelector('.submit-btn').addEventListener('click', () => {
    if (!phoneNumber) {
      alert('Пожалуйста, укажите номер телефона');
      return;
    }
  
    if (!selectedStyle || !selectedForm || !selectedArea) {
      alert('Выберите все параметры перед расчетом');
      return;
    }
  
    // Расчет общей стоимости
    const totalCost = (
      basePrices.style[selectedStyle] +
      basePrices.form[selectedForm] +
      basePrices.area[selectedArea]
    );
  
    // Отображение результата в модальном окне
    const resultModal = document.getElementById('result-modal');
    const totalCostElement = document.getElementById('total-cost');
  
    totalCostElement.textContent = `${totalCost.toLocaleString()} ₽`;
    resultModal.classList.remove('hidden');
  
    // Закрытие модального окна
    document.querySelector('.close-btn').addEventListener('click', () => {
      resultModal.classList.add('hidden');
    });
  });
  