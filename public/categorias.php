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
	<title>Adicionar ou Editar Categorias</title>
	<meta name="description" content="Onde criamos e editamos novas categorias para o nosso blog."/>
	<meta name="keywords" content="Categorias"/>

</head>
<body>

	<?php require 'menu.php'; ?>

	<main>

		<fieldset>
			<form method="POST" action="#">
				<section>
					<div class="row post">
						<div class="col l4 s12 push-l8">
							<button type="button" class="btn waves-effect right" title="Excluir categoria">
								<span class="fa fa-trash"></span>
							</button>
						</div>
						<div class="col l8 s12 pull-l4">
							<h2>Adicionar Categoria <span class="fa fa-edit"></span></h2>
							<!-- Titulo principal da Categoria -->
							<cite>
								<span class="fa fa-lightbulb"></span> Títulos bem elaborados aumentam o número de visitas nas Páginas.
							</cite>
							<input type="text" name="h1" id="h1" required 							
							onfocusout="insertController.dados(this)"
							placeholder="Escreva um Titulo">
							<!-- Url amigavel para a categoria -->
							<cite>
								<span class="fa fa-lightbulb"></span> Palavras-chaves na URL destaqua melhor seus artigos.
							</cite>
							<p>
								<strong>LINK:</strong> www.<span class="dominio">dominio</span>.com.br/
								<input type="text" name="url" id="url" required 
								onfocusout="insertController.dados(this)"
								onclick="insertController.url()"
								value="escreva-um-titulo">
								<button type="button" id="editar" 
								onclick="insertController.url()" 
								class="btn waves-effect"
								title="Editar o endereço da categoria">Editar</button>
							</p>
							<div class="clearfix"></div>	
							<!-- Editor de texto da categoria -->
							<cite>
								<span class="fa fa-lightbulb"></span> Escrevendo uma descrição ilustrativa para sua categoria deixa seus usúarios mais curiosos e mais interessados.
							</cite>
							<textarea name="descricao"></textarea>
						</div>
					</div>
				</section>

				<!-- Caso o cliente contratar o SEO -->
				<?php require 'seo.php'; ?>

				<section>
					<div class="row action center">
						<article>
							<div class="col l8 s12">
								<button type="submit" 
								class="btn waves-effect"
								title="Salvar dados">Gravar</button>
							</div>
						</article>
					</div>
				</section>

			</form>
		</fieldset>

	</main>


	<?php require("links.php"); ?>
	<?php require("scripts.php"); ?>
	<script src="js/app/controllers/InsertController.js"></script>
	<script src="js/app/controllers/SEOController.js"></script>
	<script src="js/app/models/SEO.js"></script>
	<script src="js/app/helpers/Filtro.js"></script>
	<script src="js/app/services/Limite.js"></script>
	<script src="js/app/services/Barra.js"></script>
	<script src="js/app/views/SEOView.js"></script>
	<script>
		let insertController = new InsertController();
		let seoController = new SEOController();
	</script>

</body>
</html>