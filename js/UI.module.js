export class UI {
  constructor() {
    this.gamesData = document.getElementById('gamesData');
    this.detailsData = document.getElementById('detailsData');
  }

  displayGames(games) {
    let wrapper = '';
    for (let i = 0; i < games.length; i++) {
      wrapper += `
          <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card bg-transparent">
              <img class="card-img-top" src="${games[i].thumbnail}" alt="${games[i].title}" />
              <div class="card-body">
                <div class="hstack justify-content-between">
                  <h4 class="card-title">${games[i].title}</h4>
                  <span class="badge text-bg-primary p-3">Free</span>
                </div>
                <p class="card-text text-white text-center opacity-75 small py-3">${games[i].short_description}</p>
              </div>
              <div class="card-footer small hstack justify-content-between">
                <span class="badge badge-color">${games[i].genre}</span>
                <span class="badge badge-color">${games[i].platform}</span>
              </div>
            </div>
          </div>
        `;
    }

    this.gamesData.insertAdjacentHTML("afterbegin", wrapper);
  }

  showDetails(details) {
    let container = `
        <div class="col-md-4">
          <img src="${details.thumbnail}" class="w-100" alt="${details.title}">
        </div>
        <div class="col-md-8">
          <h3>Title: ${details.title}</h3>
          <p>Category: <span class="badge text-bg-secondary text-uppercase">${details.genre}</span></p>
          <p>Platform: <span class="badge text-bg-secondary">${details.platform}</span></p>
          <p>Status: <span class="badge text-bg-secondary">${details.status}</span></p>
          <p class="small">${details.description}</p>
          <a class="btn btn-secondary btn-outline-dark" target="_blank" href="${details.game_url}">Show Game</a>
        </div>
      `;
    this.detailsData.innerHTML = container;
  }

}