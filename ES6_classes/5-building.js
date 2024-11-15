export default class Building {
	constructor(sqft) {
		this._sqft = sqft;
	}

	// Getter pour 'sqft'
	get sqft() {
		return this._sqft;
	}

	// Méthode d'avertissement d'évacuation (à implémenter par les sous-classes)
	evacuationWarningMessage() {
		throw new Error('Class extending Building must override evacuationWarningMessage');
	}
}
