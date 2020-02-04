<?php

/**
 *
 * * DATABASE SETTINGS
 *
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'uifercalhas');
define('DB_USER', 'uifer');
define('DB_PASS', null);
define('DB_CHARSET', 'utf8');

/**
 *
 * * PATHS SETTINGS
 *
 */

define('PATH_ROOT', __DIR__ . '/');
define('PATH_PUBLIC', PATH_ROOT . 'public/');
define('PATH_VIEW', PATH_ROOT . 'view/');
define('PATH_CSS', PATH_PUBLIC . 'css/');
define('PATH_JS', PATH_PUBLIC . 'js/');
define('PATH_IMG', PATH_PUBLIC . 'images/');

/**
 *
 * * HASH SETTINGS
 *
 */

define('HASH_SALT', '');

/**
 *
 * * DEBUG SETTINGS
 *
 */

define('DEBUG_MODE', true);