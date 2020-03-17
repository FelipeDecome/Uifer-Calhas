<link rel="stylesheet" href="<?php echo PATH_CSS ?>header2.css">

<header class="header">

    <div class="content flex __j-between __a-center">
        <?php include PATH_COMPONENTS . "logo/logo.php"?>

        <?php include PATH_COMPONENTS . "search-bar/search-bar.php"?>


        <nav class="navbar" id="navbar">
            <ul>
                <a href="#">
                    <li class="active">Home</li>
                </a>
                <a href="#">
                    <li>Sobre</li>
                </a>
                <a href="#">
                    <li>Portifólio</li>
                </a>
                <a href="#">
                    <li>Parceiros</li>
                </a>
                <a href="#">
                    <li>Contato</li>
                </a>
            </ul>
        </nav>

        <div class="collapse-icons-bar">
            <div class="collapse-search-bar-icon" data-target="#searchBar">
                <i class="fas fa-search"></i>

            </div>

            <div class="collapse-menu-icon" data-target="#navbar">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</header>