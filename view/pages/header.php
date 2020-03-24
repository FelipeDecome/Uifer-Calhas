<link rel="stylesheet" href="<?php echo PATH_CSS ?>header2.css">

<header class="header">

    <div class="content flex __j-between __a-center">
        <?php include PATH_COMPONENTS . "logo/logo.php"?>

        <?php include PATH_COMPONENTS . "search-bar/search-bar.php"?>

        <?php include PATH_COMPONENTS . "navbar/navbar.php"?>

        <div class="collapse-icons-bar">
            <div class="collapse-search-bar-icon" data-target="#searchBar">
                <i class="fas fa-search"></i>

            </div>

            <link rel="stylesheet" href="<?php echo PATH_COMPONENTS ?>collapse-menu-icon/css/collapse-menu-icon.css">

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

<script src="<?php echo PATH_JS ?>scrolls.js"></script>
<script src="<?php echo PATH_JS ?>sizesSpacings.js"></script>
<script src="<?php echo PATH_JS ?>navbar.js"></script>
