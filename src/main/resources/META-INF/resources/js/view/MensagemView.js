

class MensagemView 
{
	constructor (mensagem)
	{
		this._mensagem = mensagem;
	}

	template()
	{
		return `<div class="card col-md-12 item-mensagem">
		<div class="card-body">
		  <p class="card-text">${this._mensagem}</p>
		  <span class="btn btn-copy badge badge-secondary" data-clipboard-text="${this._mensagem}">copiar</span>
		</div>
	  </div>`;
	}
	
}