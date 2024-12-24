import {
    UI
} from "./UI.module.js";


export class GameDetails {
    constructor(id) {
        this.ui = new UI();
        document.getElementById(`btnClose`).addEventListener(`click`, () => {
            document.querySelector(`.details`).classList.add(`d-none`)
            document.querySelector(`.allgamesdata`).classList.remove(`d-none`)
        })
        this.getDetails(id)
    }

    async getDetails(id) {
        document.querySelector('.details').classList.remove('d-none');
        document.querySelector('.allgamesdata').classList.add('d-none');

        loader.classList.remove('d-none');

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd68f1954b3msh80005ae23439a05p1e7328jsnd940373512f5',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
            .then(response => response.json())
            .then(api => {
                this.ui.showDetails(api)
                loader.classList.add(`d-none`);
            }).catch(error => {
                console.log(error);
            });

    }


}