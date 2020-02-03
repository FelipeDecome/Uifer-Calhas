<?php

require_once './vendor/autoload.php';

use Uifer\System\Passwords\Passwords;

$teste = new Passwords();

$sla = $teste
    ->setPass('96578396')
    ->setSalt('abcdefg')
    ->combinePassSalt();

var_dump($sla);
