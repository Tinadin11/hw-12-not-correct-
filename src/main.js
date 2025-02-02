// main.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPictures } from "./js/pixabay-api";
import { createMarkup, updateLoadMoreButton, updateLoadingMessage, displayEndMessage } from "./js/render-functions";

let currentPage = 1;
let searchQuery = '';
const form = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');
const buttonLoad = document.querySelector('.button-load');
const input = document.querySelector('.input-search');

buttonLoad.style.display = 'none'; // Спочатку кнопка прихована

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  gallery.innerHTML = ''; // Очищаємо попередні результати
  buttonLoad.style.display = 'none'; // Приховуємо кнопку "Load more"
  updateLoadingMessage(true); // Показуємо повідомлення про завантаження
  searchQuery = input.value.trim();
  if (!searchQuery) {
    iziToast.warning({ title: 'Caution', message: 'Please complete the field!' });
    return;
  }
  currentPage = 1; // Скидаємо сторінку до 1 при новому пошуку
  await renderPictures(searchQuery, currentPage);
});

async function renderPictures(query, page) {
  try {
    const data = await getPictures(query, page);
    const totalPages = Math.ceil(data.totalHits / 15); // Обчислюємо загальну кількість сторінок

    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        message: `No results found for "${searchQuery}". Please try again.`,
      });
      updateLoadMoreButton(false); // Якщо немає результатів, кнопка не з'являється
      return;
    }

    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh(); // Оновлюємо екземпляр SimpleLightbox

    if (page >= totalPages) {
      displayEndMessage(); // Виводимо повідомлення, якщо досягли кінця результатів
    } else {
      updateLoadMoreButton(true); // Показуємо кнопку "Load more"
    }

    updateLoadingMessage(false); // Ховаємо повідомлення про завантаження

    window.scrollBy({
      top: document.querySelector('.gallery-item').getBoundingClientRect().height * 2,
      left: 0,
      behavior: 'smooth',
    });

  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, something went wrong!',
      position: 'bottomRight',
    });
    updateLoadingMessage(false); // Ховаємо повідомлення
  }
}

buttonLoad.addEventListener('click', async () => {
  currentPage += 1;
  updateLoadingMessage(true); // Показуємо повідомлення про завантаження
  await renderPictures(searchQuery, currentPage);
  updateLoadingMessage(false); // Ховаємо повідомлення після завантаження
});

// Функція для ініціалізації VANTA.BIRDS
function initVantaBackground() {
  const backgroundElement = document.querySelector("#vanta-bg"); // Вибір елемента для фону
  if (backgroundElement) {
    VANTA.BIRDS({
      el: backgroundElement, // вказуємо, що фон буде на цьому елементі
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x190d70,
      color1: 0x33a7,
      color2: 0xcfcbeb,
      colorMode: "lerp",
      birdSize: 2.20,
      wingSpan: 22.00,
      speedLimit: 5.00,
      separation: 54.00,
      alignment: 60.00,
      cohesion: 37.00,
      quantity: 4.00,
      backgroundAlpha: 0.64
    });
  }
}

// Виклик функції для ініціалізації фонового ефекту після завантаження сторінки
window.onload = initVantaBackground;

