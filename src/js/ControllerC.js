import AppC from './AppC';

export default class ControlC {
  constructor(item) {
    this.Ob = item;
    this.nGame = document.getElementById('btn');
    this.nGame.addEventListener('click', this.nextGame.bind(this));
    this.result = document.getElementById('res');
  }

  nextGame() {
    this.Ob.hit.innerHTML = 0;
    this.Ob.miss.innerHTML = 0;
    this.result.innerHTML = 'Новая игра';
    this.interval = setInterval(() => {
      const hits = Number(this.Ob.hit.innerHTML);
      const miss1 = Number(this.Ob.miss.innerHTML);
      if (Math.abs(hits - miss1) < 6) {
        this.Ob.showGoblin();
      } else {
        clearInterval(this.interval);
        if (hits > miss1) {
          this.result.innerHTML = 'Ура! Победа!!';
        } else {
          this.result.innerHTML = 'Увы... Вы проиграли..';
        }
      }
    }, 1000);
  }
}

const appG = new AppC();
const contr = new ControlC(appG);
