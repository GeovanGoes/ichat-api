<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">


<style>
	
	
	.item-mensagem
	{
		margin-bottom: 1px;
	}
	
	.esconde
	{
		height: 0px;
		width: 0px;
	}
	textarea 
	{
  		resize: none;
	}
</style>

<title>iChat</title>
</head>
<body>

<div class="container">
	
	<h4 class="text-center">Mensagens</h4>
	
	<div class="row" id="mensagens">
	</div>

	<div class="row" id="formulario">
		<div class="input-group mb-3">
		  <input type="text" class="form-control" id="text" placeholder="Mensagem..." aria-label="Mensagem..." aria-describedby="button-addon2">
		  <div class="input-group-append">
		    <button class="btn btn-outline-success" type="button" id="enviar" onclick="controller.enviar()">Enviar</button>
		  </div>
		</div>
	</div>

</div>


<script src="js/jquery-3.0.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="../../js/view/MensagemView.js"></script>
<script src="../../js/controller/MensagensController.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"></script>

<script>
	let controller = new MensagensController();
	new ClipboardJS('.btn-copy');
</script>
</body>
</html>