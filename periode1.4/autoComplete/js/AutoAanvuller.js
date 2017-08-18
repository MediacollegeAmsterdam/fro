// een class
class AutomatischAanvuller {
    constructor() {
        this.minimAantalKar = 2;
        this.veld = 0;
        this.hulp = document.createElement('div');
        this.hulp.id = 'helper';
        this.bron = 0; //de array  waar we de invoer mee vergleijken
        document.body.appendChild(this.hulp);
    }
    volgInvoer(inv) {
        if (inv.length >= this.minimAantalKar) {
            this.hulp.style.display = 'block';
            this.vergelijk(inv);
        } else {
            // verberg de helper als er te weinig letters zijn
            console.log('verbergen');
            this.verbergHelper();
        }
    }
    vergelijk(inv) {
        console.log(inv);
        let lijst = [];
        this.hulp.innerHTML = ''; // eventuele aanwezige inhoud wissen
        for (let i = 0; i < this.bron.length; i++) {
          if(inv.toLowerCase() == this.bron[i].substr(0, inv.length).toLowerCase()) {
            lijst.push(this.bron[i]);
          }
        }
        if( lijst.length >= 1) {
          this.toon(lijst);
        }
    }
    toon(arr) {
      console.log(arr);
      // eerdere exemplaren van de helper eerst verwijderen
      this.hulp.innerHTML = '';
      for( let i=0; i<arr.length; i++) {
        let linkje = document.createElement('span');
        linkje.innerHTML = arr[i];
        this.hulp.appendChild(linkje);
        linkje.addEventListener('click', () => {
          this.voerWaardeIn(arr[i]);
        });
      }
      this.positioneerHelper(this.hulp);
    }
    positioneerHelper(el) {
      let elem = this.veld;
      el.style.width = elem.offsetWidth - 42 + 'px'; // iets smaller dan invoer
      el.style.left  = elem.offsetLeft + 21 + 'px'; // iets verder naar links
      el.style.top   = elem.offsetTop + elem.offsetHeight + 'px'; // er net onder
    }
    voerWaardeIn(land) {
      this.veld.value = land;
      this.verbergHelper();
    }
    verbergHelper() {
        this.hulp.style.display = 'none';
    }
    init(idVanHetVeld, bron) {
        this.bron = bron; // de array waar we de inover mee vergelijken
        this.veld = document.getElementById(idVanHetVeld);
        this.veld.onkeyup = () => {
            this.volgInvoer(this.veld.value);
        };
        this.veld.addEventListener('blur', () => {
          setTimeout( () => this.verbergHelper(), 1000);
        });
    }
} // einde van de class AutomatischAanvuller
