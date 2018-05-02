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
	<title>Buscar Clientes</title>
	<meta name="description" content="Página criada para buscar clientes cadastrados na sessão de cadastro de newsletter"/>
	<meta name="keywords" content="Busca Clientes"/>

</head>
<body>

	<?php require 'menu.php'; ?>

	<main>

		<section>
			<div class="row busca">
				<div class="col l8 s12">
					<h2>Buscar Clientes <span class="fa fa-search"></h2>
						<p>Espaço dedicado a busca de clientes cadastrados, caso faça uma busca vazia irá puxar todos os clientes com o nome, quando foi cadastrada e assuntos de interesse. Assim disponibilizando o botão para visualização mais detalhada.</p>
						<article>
							<fieldset>
								<form method="POST" action="#">
									<cite><span class="fa fa-lightbulb"></span> Insira a referência abaixo para ser buscada ou selecione abaixo para fazer busca por assunto.</cite>
									<div class="clearfix"></div>
									<input type="text" name="busca" required placeholder="Digite aqui...">
									<div class="clearfix"></div>
									<label for="marketing">
										<input type="checkbox" class="filled-in" name="autores" id="marketing" />
										<span>Marketing Digital</span>
									</label>
									<label for="seo">
										<input type="checkbox" class="filled-in" name="autores" id="seo" />
										<span>SEO</span>
									</label>
									<button type="submit" class="btn waves-effect">Buscar</button>
								</form>
							</fieldset>
						</article>
					</div>
				</div>
			</section>

			<section>
				<div class="row resultado">
					<div class="col l8 s12">
						<article>
							<a href="clientes.php" class="btn waves-effect right"><span class="fa fa-plus"></span></a>
							<h2><strong>Cliente:</strong> Gabriel Flambo</h2>
							<h3><strong>Data de Cadastro:</strong> 18 de Abril de 2018</h3>
							<h3><strong>Assuntos de Interesse:</strong> Marketing Digital, SEO</h3>
						</article>
						<article>
							<a href="clientes.php" class="btn waves-effect right"><span class="fa fa-plus"></span></a>
							<h2><strong>Cliente:</strong> Gabriel Flambo</h2>
							<h3><strong>Data de Cadastro:</strong> 18 de Abril de 2018</h3>
							<h3><strong>Assuntos de Interesse:</strong> Marketing Digital, SEO</h3>
						</article>
					</div>
				</div>
			</section>

		</main>


		<?php require("links.php") ?>
		<?php require("scripts.php") ?>

	</body>
	</html>