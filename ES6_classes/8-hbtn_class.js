export default class HolbertonClass {
	constructor(size, location) {
		this._size = size;
		this._location = location;
	}

	// Conversion en Number pour retourner la taille
	valueOf() {
		return this._size;
	}

	// Conversion en String pour retourner la localisation
	toString() {
		return this._location;
	}
}
