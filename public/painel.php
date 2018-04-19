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
	<title>Dashboard</title>
	<meta name="description" content="Pagina Inicial do Painel com Dados Administrativos ainda não pensei muito bem nela"/>
	<meta name="keywords" content="Dashboard"/>

</head>
<body>

	<?php require 'menu.php'; ?>

	<main>

		<section>
			<div class="row painel">
				<div class="col l3 m6 s12">
					<div class="info-box bg-orange">
						<div class="icon">
							<span class="fa fa-user"></span>
						</div>
						<div class="content">
							<h2>Visitantes</h2>
							<p>1552</p>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
				<div class="card col m6 s12">
					<h3>Usúarios</h3>
					<canvas id="line_chart" height="100"></canvas>
				</div>
			</div>
		</section>
		
	</main>


	<?php require("links.php") ?>
	<?php require("scripts.php") ?>

</body>
</html>