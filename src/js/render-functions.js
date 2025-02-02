export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" />
          </a>
          <ul class="info-list">
            <li class="info-item">
              <h2 class="subtitle">Likes</h2>
              <p class="info">${likes}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Views</h2>
              <p class="info">${views}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Comments</h2>
              <p class="info">${comments}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Downloads</h2>
              <p class="info">${downloads}</p>
            </li>
          </ul>
        </li>`
    )
    .join('');
}

export function updateLoadMoreButton(isVisible) {
  const button = document.querySelector('.button-load');
  button.style.display = isVisible ? 'block' : 'none';
}

export function updateLoadingMessage(isVisible) {
  const loadingMessage = document.querySelector('#loading-message');
  loadingMessage.style.display = isVisible ? 'block' : 'none';
}

export function displayEndMessage() {
  const message = "We're sorry, but you've reached the end of search results.";
  iziToast.info({
    title: 'End of results',
    message: message,
    position: 'bottomRight',
  });
  updateLoadMoreButton(false); // Сховуємо кнопку "Load more"
}
