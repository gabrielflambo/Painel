class Image {

	constructor(campo, alvo) {

		this._input = campo;
		this._image = alvo;
		this._file = new FileReader();

		this._hide_empty_image = false;
		this._set_blank_to_empty_image = false;
		this._set_image_border = true;

		((this._hide_empty_image) ? this._image.style.visibility = 'hidden' : '');

		((this._set_blank_to_empty_image) ? this._image.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=") : '');

		if (this._input.files && this._input.files[0]) {
 
			this._file.onload = (e) => {
				this._image.style.visibility = 'visibility';
				this._image.setAttribute("src", e.target.result);
			}
			this._file.readAsDataURL(this._input.files[0]);
		}
	}
}