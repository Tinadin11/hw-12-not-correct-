import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const KEY = '47181465-58855b534a7ed572abb95719a';

export async function getPictures(query, page) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15, // по 15 картинок на кожній сторінці
      },
    });

    if (response.status !== 200 || !response.data) {
  throw new Error('Error receiving data from API');
}

    return response.data; // Повертаємо дані для подальшої обробки
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry! Connection problems. Please try later!',
      position: 'bottomRight',
    });
    console.error(error.message);
  }
}
