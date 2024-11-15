export default class Airport {
	constructor(name, code) {
		this._name = name;
		this._code = code;
	}

	// Méthode toString pour retourner le code de l'aéroport
	toString() {
		return `[object ${this._code}]`;
	}
}
