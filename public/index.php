<?php

use Uifer\System\Model\Client\PasswordHasher;

require_once __DIR__ . './../config.php';
require_once PATH_ROOT . 'vendor/autoload.php';

// Iniciamos o "contador"
list($usec, $sec) = explode(' ', microtime());
$script_start = (float) $sec + (float) $usec;

/* SEU CÓDIGO PHP */

$hashToCompare = '$2y$13$w29K4DClv2x0JO6gPdrNz.xbWx8SkLR5rgds8MOrvEDk19nkRY1.W';

$hash = new PasswordHasher('felipe');
// echo '<br>';
echo $hash->getHash();

var_dump(PasswordHasher::verifyPass('felipe', $hashToCompare));

// Terminamos o "contador" e exibimos
list($usec, $sec) = explode(' ', microtime());
$script_end = (float) $sec + (float) $usec;
$elapsed_time = round($script_end - $script_start, 5);

echo '<br><br>Elapsed time: ', $elapsed_time, ' secs. Memory usage: ', round(((memory_get_peak_usage(true) / 1024) / 1024), 2), 'Mb';