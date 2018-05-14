<section>  
    <div class="row seo">
		<div class="col l8 s12">
			<h2>SEO <span class="fa fa-sitemap"></span></h2>
			<cite>
				<span class="fa fa-lightbulb"></span> Abaixo temos uma plataforma onde poderemos melhorar dinamicamente como irá aparecer sua página no Google, transformando assim a sua página melhor rankeada. Siga as instruções para melhor aproveitamento da ferramenta e melhora dos resultados.
			</cite>
			<h3><span class="fa fa-eye"></span> Pré-visualização</h3>
			<div class="google">
				<h4 id="titlegoogle">Titulo do SEO</h4>
				<cite>
					https://<span class="dominio">dominio</span>.com.br/<strong>
					<span id="urlgoogle">insira-uma-url</span></strong>/
				</cite>
				<div class="clearfix"></div>
				<p>
					<time><?php echo date('M d Y'); ?> - </time>
					<span id="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</span>
				</p>
			</div>
			<cite>
				<span class="fa fa-lightbulb"></span> Acima temos o exemplo de como vai aparecer sua página no Google.
			</cite>
			<h3>SEO Title</h3>
			<div>
				<input type="text" name="h1seo" id="h1seo" required 
				onfocusout="seoController.dados(this)" 
				oninput="seoController.key(this, 50)">
				<div class="progress">
					<div class="determinate"></div>
				</div>
			</div>
			<cite>
				<span class="fa fa-lightbulb"></span> Títulos com mais de 50 caracteres aparecem truncados no Google.
			</cite>
			<h3>Slug</h3>
			<input type="text" name="slug" id="slug" required 
			onfocusout="seoController.dados(this)">
			<cite>
				<span class="fa fa-lightbulb"></span> Palavras-chaves na URL destaqua melhor seus artigos.
			</cite>
			<h3>Meta Description</h3>
			<div>
				<textarea name="meta" id="meta" required rows="3" 
				onfocusout="seoController.dados(this)" 
				oninput="seoController.key(this, 150)"></textarea>
				<div class="progress">
					<div class="determinate"></div>
				</div>
			</div>
			<cite>
				<span class="fa fa-lightbulb"></span> Descrições com mais de 150 caracteres aparecem truncados no Google.
			</cite>
		</div>
	</div>
</section>