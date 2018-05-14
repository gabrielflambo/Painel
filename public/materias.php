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
	<title>Adicionar ou Editar Posts</title>
	<meta name="description" content="Onde criamos e editamos novas materias para o nosso blog."/>
	<meta name="keywords" content="Posts"/>

</head>
<body>

	<?php require 'menu.php'; ?>

	<main>

		<fieldset>
			<form method="POST" action="#">
				<section>
					<div class="row post">
						<div class="col l4 s12 push-l8">
							<a href="#" class="btn waves-effect right" title="Excluir matéria">
								<span class="fa fa-trash"></span>
							</a>
						</div>
						<div class="col l8 s12 pull-l4">
							<h2>Adicionar Post <span class="fa fa-edit"></span></h2>
							<div class="clearfix"></div>
							<cite>
								<span class="fa fa-lightbulb"></span> Escolha uma das categorias abaixo para lincar sua matéria
							</cite>
							<div class="col s12">
								<label for="marketing" title="Vincular a categoria de Marketing Digital">
									<input type="radio" name="categorias"
									onchange="insertController.categorias(this)"
									id="marketing"/>
									<span>Marketing Digital</span>
								</label>
								<label for="seo" title="Vincular a categoria de SEO">
									<input type="radio" name="categorias"
									onchange="insertController.categorias(this)"
									id="seo"/>
									<span>SEO</span>
								</label>
								<label for="google" title="Vincular a categoria de Google Adwords">
									<input type="radio" name="categorias"
									onchange="insertController.categorias(this)"
									id="google"/>
									<span>Google Adwords</span>
								</label>
								<button type="button" class="btn waves-effect" 
								onclick="insertController.reset()"
								id="resetar"
								title="Resetar a categoria selecionada">Reset</button>
							</div>
							<div class="clearfix"></div>
							<!-- Titulo principal da Máteria -->
							<cite>
								<span class="fa fa-lightbulb"></span> Títulos bem elaborados aumentam o número de visitas nos seus Posts.
							</cite>
							<input type="text" name="h1" id="h1" required 
							onfocusout="insertController.dados(this)"
							placeholder="Escreva um Titulo">
							<!-- Url amigavel para o post -->
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
								title="Editar o endereço da matéria">Editar</button>
							</p>
							<!-- Imagem ilustrativa para colocar de capa -->	
							<cite>
								<span class="fa fa-lightbulb"></span> Usúarios tendem a ser mais visuais, imagens são a jogada certa.
							</cite>	
							<div class="clearfix"></div>			
							<button type="button" id="arquivo" 
							class="btn waves-effect" title="Escolha a imagem principal">
								<input type="file" name="file" id="file">
								<span class="fa fa-images"></span> Mídia
							</button>
							<div class="clearfix"></div>	
							<!-- Editor de texto da materia -->
							<cite>
								<span class="fa fa-lightbulb"></span> Matérias bem organizadas, sem erros ortográficos, de fácil leituras, mantem o cliente preso ao seu contéudo.
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
								class="btn waves-effect" title="Salvar dados">Gravar</button>
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