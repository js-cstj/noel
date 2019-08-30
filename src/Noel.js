/*jslint esnext:true, browser: true*/
export default class Noel {
	/**
	 * Méthode qui 
	 */
	static main() {
		this.cycle = 20000;	//
		//
		this.flocons = ["epines", "sapins", "coeurs", 
			"treillis", "classique"];
		//
		this.app = document.getElementById("app");
		//
		for (let x = 0; x < 500; x += 1) {
			//
			window.setTimeout(() => {
				//
				this.ajouterFlocon();
			}, Math.random() * this.cycle * 1.5);
		}
	}
	
	
	/**
	 * Méthode qui 
	 */
	static ajouterFlocon() {
		//
		var flocon = this.app.appendChild(this.flocon());
		//
		var ratio = Math.pow(Math.random(), 2);
		//
		var ratioTaille = ratio * 0.75 + 0.25;
		//
		flocon.style.fontSize = (128 * ratioTaille) + "px";
		//
		flocon.style.top = -(Math.random() * 3 + 1) + "em";
		//
		flocon.style.left = Math.random() * 100 + "%";
		//
		window.setTimeout(() => {
			//
			flocon.style.transition = (this.cycle / ratio) + "ms";
			//
			flocon.style.top = "110%";
		}, 100);
		//
		flocon.addEventListener("transitionend", (e) => {
			//
			var flocon = e.currentTarget;
			flocon.parentNode.removeChild(flocon);
			//
			this.ajouterFlocon();
		});
	}
	
	
	/**
	 * Méthode qui 
	 * @returns {        } 
	 */
	static flocon() {
		//
		var noFlocon = Math.floor(Math.random() * this.flocons.length);
		//
		var variante = this.flocons[noFlocon];
		//
		var resultat = document.createElement("div");
		resultat.classList.add("flocon");
		//
		resultat.innerHTML = '<svg>' + 
			'<use href="images/flocons.svg#'+variante+'"></use>' + 
			'</svg>';
		return resultat;
	}
}