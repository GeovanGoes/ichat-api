
class MensagensController
{
    constructor()
    {
        this._listaMensagens = $("#mensagens");
        this._campoTexto = $("#text");
        
        this._poll();
    }

    _limpaFormulario()
    {
        this._campoTexto.val("");
        console.log(this._campoTexto);
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
                    console.log(mensagem);
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
    
    copyClipboard(element)
    {
    	console.log(element);
    	
    	var elm = document.getElementById("divClipboard");
  
    	if(document.body.createTextRange) 
    	{
    		var range = document.body.createTextRange();
    		range.moveToElementText(elm);
    		range.select();
    		document.execCommand("Copy");
    		alert("Copied div content to clipboard");
    	}
    	else if(window.getSelection) 
    	{
			var selection = window.getSelection();
			var range = document.createRange();
			range.selectNodeContents(elm);
			selection.removeAllRanges();
			selection.addRange(range);
			document.execCommand("Copy");
			alert("Copied div content to clipboard");
    	}
    }
}