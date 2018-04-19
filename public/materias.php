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
							<a href="#" class="btn waves-effect right"><span class="fa fa-trash"></span></a>
						</div>
						<div class="col l8 s12 pull-l4">
							<h2>Adicionar Post <span class="fa fa-edit"></span></h2>
							<div class="clearfix"></div>
							<cite><span class="fa fa-lightbulb"></span> Escolha uma das categorias abaixo para lincar sua matéria</cite>
							<div class="clearfix"></div>
							<input type="radio" name="categorias" id="marketing" />
							<label for="marketing">Marketing Digital</label>
							<input type="radio" name="categorias" id="seo" />
							<label for="seo">SEO</label>
							<input type="radio" name="categorias" id="google" />
							<label for="google">Google Adwords</label>
							<div class="clearfix"></div>
							<!-- Titulo principal da Máteria -->
							<cite><span class="fa fa-lightbulb"></span> Títulos bem elaborados aumentam o número de visitas nos seus Posts.</cite>
							<input type="text" name="h1" id="h1" required placeholder="Escreva um Titulo">
							<!-- Url amigavel para o post -->
							<cite><span class="fa fa-lightbulb"></span> Palavras-chaves na URL destaqua melhor seus artigos.</cite>
							<p><strong>LINK:</strong> www.<span class="dominio">dominio</span>.com.br/<input type="text" name="url" id="url" required value="escreva-um-titulo"><button type="button" id="editar" class="btn waves-effect">Editar</button></p>
							<!-- Imagem ilustrativa para colocar de capa -->	
							<cite><span class="fa fa-lightbulb"></span> Usúarios tendem a ser mais visuais, imagens são a jogada certa.</cite>	
							<div class="clearfix"></div>			
							<button type="button" id="arquivo" class="btn waves-effect"><input type="file" name="file" id="file"><span class="fa fa-images"></span> Mídia</button>
							<div class="clearfix"></div>	
							<!-- Editor de texto da materia -->
							<cite><span class="fa fa-lightbulb"></span> Matérias bem organizadas, sem erros ortográficos, de fácil leituras, mantem o cliente preso ao seu contéudo.</cite>
							<textarea name="descricao"></textarea>
						</div>
					</div>
				</section>

				<!-- Caso o cliente contratar o SEO -->
				<section>
					<div class="row seo">
						<div class="col l8 s12">
							<h2>SEO <span class="fa fa-sitemap"></span></h2>
							<cite><span class="fa fa-lightbulb"></span> Abaixo temos uma plataforma onde poderemos melhorar dinamicamente como irá aparecer sua página no Google, transformando assim a sua página melhor rankeada. Siga as instruções para melhor aproveitamento da ferramenta e melhora dos resultados.</cite>
							<h3><span class="fa fa-eye"></span> Pré-visualização</h3>
							<div class="google">
								<h4 id="titlegoogle">Titulo do SEO</h4>
								<cite>https://<span class="dominio">dominio</span>.com.br/<strong><span id="urlgoogle">insira-uma-url</span></strong>/</cite>
								<div class="clearfix"></div>
								<p><time><?php echo date('M d Y'); ?> - </time><span id="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</span></p>
							</div>
							<cite><span class="fa fa-lightbulb"></span> Acima temos o exemplo de como vai aparecer sua página no Google.</cite>
							<h3>SEO Title</h3>
							<div>
								<input type="text" name="h1seo" id="h1seo" required>
								<div class="progress">
									<div class="determinate"></div>
								</div>
							</div>
							<cite><span class="fa fa-lightbulb"></span> Títulos com mais de 50 caracteres aparecem truncados no Google.</cite>
							<h3>Slug</h3>
							<input type="text" name="slug" id="slug" required>
							<cite><span class="fa fa-lightbulb"></span> Palavras-chaves na URL destaqua melhor seus artigos.</cite>
							<h3>Meta Description</h3>
							<div>
								<textarea name="meta" id="meta" required rows="3"></textarea>
								<div class="progress">
									<div class="determinate"></div>
								</div>
							</div>
							<cite><span class="fa fa-lightbulb"></span> Descrições com mais de 150 caracteres aparecem truncados no Google.</cite>
						</div>
					</div>
				</section>

				<section>
					<div class="row action center">
						<article>
							<div class="col l8 s12">
								<button type="submit" class="btn waves-effect">Gravar</button>
							</div>
						</article>
					</div>
				</section>
				
			</form>
		</fieldset>
		
	</main>


	<?php require("links.php") ?>
	<?php require("scripts.php") ?>

</body>
</html>