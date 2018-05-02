<!DOCTYPE html>
<html lang="pt-br">
<head>
	
	<meta charset="utf-8">
	<meta http-equiv="content-language" content="pt-br">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta http-equiv="cache-control" content="public"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="noindex, nofollow">
	<meta name="author" content="Gabriel Flambo">

	<!-- Google -->
	<title>Adicionar ou Editar Usúarios</title>
	<meta name="description" content="Página para o administrador pode adicionar, editar e excluir um editor do site."/>
	<meta name="keywords" content="Usúarios"/>

</head>
<body>

	<?php require 'menu.php'; ?>

	<main>

		<section>
			<div class="row usuarios center">
				<a href="#" class="btn waves-effect right"><span class="fa fa-trash"></span></a>
				<div class="clearfix"></div>
				<h2>Área para administradores</h2>
				<p>Caro administrador essa área está dedicada para criação e edição de editores no seu site, lembre-se de preencher todos os dados corretamente, assim você estará evidenciando seus profissionais e qual o nivel de qualidade dos mesmos.</p>
				<div class="col offset-m3 m6 s12">
					<fieldset>
						<form method="POST" action="registrar_usuario.php">
							<div class="col s12 img">
								<input type="file" id="img_input" required />
								<span class="fa fa-camera"></span>
								<img id="img_preview" src="images/logo.jpg" alt="Usuario" />
							</div>
							<div class="col m6 s12">
								<input type="text" name="primeironome" id="primeironome" required placeholder="Primeiro Nome:">
							</div>
							<div class="col m6 s12">
								<input type="text" name="ultimonome" id="ultimonome" required placeholder="Ultimo Nome:">
							</div>
							<div class="col m6 s12">
								<input type="tel" name="telefone" id="telefone" required placeholder="Telefone:" minlength="10" maxlength="11">
							</div>
							<div class="col m6 s12">
								<input type="email" name="email" required placeholder="E-mail:">
							</div>
							<div class="col s12">
								<textarea name="conteudo" required rows="3" placeholder="Descrição como profissional:"></textarea>
							</div>
							<div class="col s12">
								<input type="text" name="twitter" required placeholder="Twitter:">
							</div>
							<div class="col m6 s12">
								<input type="text" name="usuario" id="usuario" required placeholder="Usúario:">
							</div>
							<div class="col m6 s12">
								<input type="password" name="senha" required placeholder="Senha:">
							</div>
							<div class="col s12">
								<button type="submit" class="btn waves-effect">Criar</button>
							</div>
						</form>
					</fieldset>
				</div>
			</div>
		</section>

	</main>


	<?php require("links.php") ?>
	<?php require("scripts.php") ?>

</body>
</html>