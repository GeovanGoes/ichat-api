

class MensagemView 
{
	constructor (mensagem)
	{
		this._mensagem = mensagem;
	}

	template()
	{
		let id = "elm_"+new Date().getTime();
		return `<div class="card col-md-12 item-mensagem">
		<div class="card-body">
		  <p class="card-text">${this._mensagem}</p>
		  
		  <span class="btn btn-copy badge badge-secondary" data-clipboard-target="#elm_${id}"><textarea rows="0" cols="0" class="esconde"  id="elm_${id}">${this._mensagem}</textarea> copiar</span>
		</div>
	  </div>`;
	}
	
}