<?php

namespace Uifer\System\Controller\Passwords;

use Uifer\System\Controller\PageController;

class HomeController implements PageController
{
    public function processRequisition(): void
    {
        require PATH_VIEW . 'home.html';
    }
}