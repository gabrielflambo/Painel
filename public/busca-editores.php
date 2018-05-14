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
	<title>Buscar Editores</title>
	<meta name="description" content="Onde buscamos editores cadastrados no nosso blog a partir de uma referencia ou não"/>
	<meta name="keywords" content="Busca Editores"/>

</head>
<body>

	<?php require 'menu.php'; ?>

	<main>

		<section>
			<div class="row busca">
				<div class="col l8 s12">
					<h2>Buscar Editores <span class="fa fa-search"></h2>
						<p>Espaço dedicado a busca de editores cadastrados, caso faça uma busca vazia irá puxar todas os editores com o nome, quando foi cadastrada e quantas publicações. Assim disponibilizando o botão para alteração ou exclusão do mesmo.</p>
						<article>
							<fieldset>
								<form method="POST" action="#">
									<cite>
										<span class="fa fa-lightbulb"></span> Insira a referência abaixo para ser buscada.
									</cite>
									<div class="clearfix"></div>
									<input type="text" name="busca" required placeholder="Digite aqui...">
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
							<a href="usuarios.php" class="btn waves-effect right" title="Ver mais detalhes">
								<span class="fa fa-edit"></span>
							</a>
							<h2><strong>Editor:</strong> Gabriel Flambo</h2>
							<h3><strong>Criado:</strong> 18 de Abril de 2018</h3>
							<h3><strong>Quantidade de Posts:</strong> 27</h3>
						</article>
						<article>
							<a href="usuarios.php" class="btn waves-effect right" title="Ver mais detalhes">
								<span class="fa fa-edit"></span>
							</a>
							<h2><strong>Editor:</strong> Gabriel Flambo</h2>
							<h3><strong>Criado:</strong> 18 de Abril de 2018</h3>
							<h3><strong>Quantidade de Posts:</strong> 27</h3>
						</article>
					</div>
				</div>
			</section>

		</main>


		<?php require("links.php"); ?>
		<?php require("scripts.php"); ?>

	</body>
	</html>