class Request {

	constructor(elem, file) {

		this._elem = elem;
		this._file = file;

		if(this._file) {

			this._xhttp = new XMLHttpRequest();
	      	this._xhttp.onreadystatechange = () => {
	        if (this._xhttp.readyState == 4) {
	          	if (this._xhttp.status == 200) {
	          		this._elem.innerHTML = this._xhttp.responseText;
	          	}
	          	if (this._xhttp.status == 404) {
	          		this._xhttp._elem.innerHTML = "Page not found.";
	          	}
	          this._elem.removeAttribute("include");
	          this._include = new IncludeController();
	        }
	      } 
	      this._xhttp.open("GET", this._file, true);
	      this._xhttp.send();
	      return;
		}
	}
}