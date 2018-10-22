
class MensagensController
{
    constructor()
    {
        this._listaMensagens = $("#mensagens");
        this._campoTexto = $("#text");
        
        this._poll();
    }

    _adicionarMensagemNaLista(mensagem)
    {
        this._listaMensagens.append(new MensagemView(mensagem).template());
    }

    _poll() 
    {
		$.ajax({ 
			type: "GET",
			cache: false,
			url: "polling",
			success: (mensagem) => {
                if(mensagem.text != null)
                {
                    this._adicionarMensagemNaLista(mensagem.text);
                }
				this._poll();
			},
			error: (err) => { 
				this._poll();
			}
		});
    }
    
    enviar() {
    	let mensagem = this._campoTexto.val();
    	$("#text").val("");
		$.ajax({ 
			type: "POST",
			cache: false,
			contentType: "application/json",
			url: "polling",
			data: JSON.stringify({ "text" : mensagem })
		});
	}
}