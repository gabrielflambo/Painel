<nav>
  <button class="bar" onclick="menuController.fade()">
    <span class="fa fa-exchange-alt"></span>
  </button>
  <div class="menu">
    <div class="user">
      <figure title="Foto de perfil">
        <img src="images/logo.jpg" alt="Nome do Usuario">
        <figcaption>Nome do Usuario</figcaption>
      </figure>
      <h1>Jessica Barros</h1>
      <h2>@jessica.barros</h2>
    </div>
    <div class="links">
      <ul class="collapsible" data-collapsible="accordion">
        <li>
          <a href="painel.php" title="Acesse a página inicial">
            <div class="collapsible-header">
              <p><span class="fa fa-home"></span> Home</p>
            </div>
          </a>
        </li>
        <li>
          <div class="collapsible-header" title="Visualize suas categorias">
            <p><span class="fa fa-paste"></span> Categorias</p>
          </div>
          <div class="collapsible-body">
            <a href="categorias.php" title="Criar novas categorias">
              <p><span class="fa fa-edit"></span> Criar</p>
            </a>
            <a href="busca-categorias.php" title="Buscar categorias existentes">
              <p><span class="fa fa-search"></span> Buscar</p>
            </a>
          </div>
        </li>
        <li>
          <div class="collapsible-header" title="Visualize suas matérias">
            <p><span class="fa fa-newspaper"></span> Matérias</p>
          </div>
          <div class="collapsible-body">
            <a href="materias.php" title="Criar novas matérias">
              <p><span class="fa fa-edit"></span> Criar</p>
            </a>
            <a href="busca-materias.php" title="Buscar matérias existentes">
              <p><span class="fa fa-search"></span> Buscar</p>
            </a>
          </div>
        </li>
        <li>
          <a href="busca-clientes.php" title="Buscar clientes cadastrados">
            <div class="collapsible-header">
              <p><span class="fa fa-users"></span> Clientes</p>
            </div>
          </a>
        </li>
        <li>
          <div class="collapsible-header" title="Visualize seus editores">
            <p><span class="fa fa-lock"></span> Editores</p>
          </div>
          <div class="collapsible-body">
            <a href="usuarios.php" title="Criar novos editores">
              <p><span class="fa fa-edit"></span> Criar</p>
            </a>
            <a href="busca-editores.php" title="Buscar editores existentes">
              <p><span class="fa fa-search"></span> Buscar</p>
            </a>
          </div>
        </li>
        <li>
          <a href="logout.php" title="Sair do painel">
            <div class="collapsible-header">
              <p><span class="fa fa-sign-out-alt"></span> Sair</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer">
      <h2>LibertyMark</h2>
    </div>
  </div>
</nav>