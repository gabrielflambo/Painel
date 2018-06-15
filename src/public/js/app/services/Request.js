class Request {

	constructor(url) {

		if(url) {

			this._xhttp = new XMLHttpRequest();
	      	this._xhttp.onreadystatechange = () => {
	        if (this._xhttp.readyState == 4) {
	          	if (this._xhttp.status == 200) {
	          		alert('Deletado');
	          	}
	          	if (this._xhttp.status == 404) {
	          		alert('Erro');
	          	}
	        }
	      } 
	      this._xhttp.open("GET", url, true);
	      this._xhttp.send();
	      return;
		}
	}
}