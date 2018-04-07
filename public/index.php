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
	<title>Painel Administrativo</title>
	<meta name="description" content="Painel visando facilidade no dia a dia no ambiente Web"/>
	<meta name="keywords" content="Painel Administrativo"/>

</head>
<body>

	<main>

		<section>
			<div class="row login">
				<div class="middle">
					<div class="painel">
						<header>
							<h1>Painel Administrativo</h1>
							<p>Para acessar o painel insira seu usúario e senha abaixo:</p>
						</header>
						<article>
							<fieldset>
								<form method="POST" action="#">
									<div class="input-field">
										<label for="usuario">Usúario</label>
										<input type="text" name="usuario" required class="validate">
									</div>
									<div class="input-field">
										<label for="senha">Senha</label>
										<input type="password" name="senha" required class="validate">
									</div>
									<div class="input-field">
										<button type="submit" class="btn waves-effect">Entrar</button>
									</div>
								</form>
							</fieldset>
						</article>
					</div>
					<footer>
						<h2>Liberty<strong>Mark</strong></h2>
					</footer>
				</div>
			</div>
		</section>
		
	</main>


	<?php require("links.php") ?>
	<?php require("scripts.php") ?>

</body>
</html>