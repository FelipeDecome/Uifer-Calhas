<?php

namespace Uifer\System\Model\Client;

class UserRetriever
{

    private $id;
    private $name;
    private $pass;
    private $create_date;
    private $last_login;

    public function __construct(int $id)
    {
        $this->id = $id;
    }

}