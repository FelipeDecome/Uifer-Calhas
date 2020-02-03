<?php

$hash = crypt('96578396');
echo $hash;

echo '<br>';
echo '<br>';
echo '<br>';

echo '<pre>';
var_dump(hash_equals($hash, $hash));
echo '</pre>';
