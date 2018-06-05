class IncludeController {

	constructor(){

		this._tags = document.getElementsByTagName("*");
		for (let i = 0; i < this._tags.length; i++) {

		    this._elem = this._tags[i];
		    this._file = this._elem.getAttribute("include");
		    this._ajax = new Request(this._elem, this._file);
		}
	}
}