import {
    GameDetails
} from "./details.module.js";
import {
    UI
} from "./UI.module.js";

export class Games {
    constructor() {
        this.displayGames(`mmorpg`)
        document.querySelectorAll(`.category .nav-link`).forEach((link) => {
            link.addEventListener(`click`, () => {
                document.querySelector(`.category .active`).classList.remove(`active`);
                link.classList.add(`active`);
                const specificCategory = link.dataset.category
                this.displayGames(specificCategory)
            })
        });
        this.ui = new UI();
    }

    async displayGames(category) {
        loader.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd68f1954b3msh80005ae23439a05p1e7328jsnd940373512f5',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=${category}&sort-by=release-date`, options)
            .then(response => response.json())
            .then(api => {
                this.ui.displayGames(api)
                this.openDetails();
                loader.classList.add(`d-none`);
            }).catch(error => {
                console.log(error);
            });
    };

    openDetails() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", (e) => {
                const url = e.target.src;
                const parts = url.split(`/`);
                const id = parts[4].slice(0);
                this.showDetails(id);
            });
        });
    }

    showDetails(id) {
        new GameDetails(id);
        document.querySelector(".allgamesdata").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
}