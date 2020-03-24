<?php

require_once __DIR__ . "./config.php";

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uifer Calhas</title>

    <link rel="shortcut icon" href="<?php echo PATH_IMG ?>favicon.svg" type="image/x-icon">

    <link rel="stylesheet" href="<?php echo PATH_CSS ?>default.css">
    <script src="<?php echo PATH_JS ?>utils.js"></script>
</head>

<body>

    <?php include_once "./view/pages/header.php";?>
    <?php include_once "./view/pages/home.php";?>

    <script src="https://kit.fontawesome.com/67895c6c28.js" crossorigin="anonymous"></script>
</body>

</html>
