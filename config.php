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

define('PATH_ROOT', "./");
define('PATH_PUBLIC', PATH_ROOT . 'public/');
define('PATH_VIEW', PATH_ROOT . 'view/');
define('PATH_COMPONENTS', PATH_VIEW . 'components/');
define('PATH_COMPONENTS_CSS', PATH_COMPONENTS . 'css/');
define('PATH_CSS', PATH_VIEW . 'css/');
define('PATH_JS', PATH_VIEW . 'js/');
define('PATH_IMG', PATH_VIEW . 'images/');

/**
 *
 * * HASH SETTINGS
 *
 */

define('HASH_OPTIONS', ['cost' => 10]);

/**
 *
 * * DEBUG SETTINGS
 *
 */

define('DEBUG_MODE', true);