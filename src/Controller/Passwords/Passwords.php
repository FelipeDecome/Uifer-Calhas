<?php

namespace Uifer\System\Controller\Passwords;

class Passwords
{

    public $pass;

    private $salt;

    final public function combinePassSalt(): string
    {
        $pass = $this->pass;
        $salt = $this->salt;
        for ($i = 0; $i < strlen($this->pass); $i++) {
            if (!empty($result)) {
                $result = $result . ((isset($pass[$i])) ? $pass[$i] : '') . ((isset($salt[$i])) ? $salt[$i] : '');
            } else {
                $result = ((isset($pass[$i])) ? $pass[$i] : '') . ((isset($salt[$i])) ? $salt[$i] : '');
            }
        }
        return $result;
    }

    public function hashPass(string $passSalt): string
    {}

    final public function generateSalt(): Passwords
    {
        $date = date("d-m-Y H:i");
        $result = \md5($date);

        $this->salt = $result;

        return $this;
    }

    public function getSalt(): string
    {
        return $this->salt;
    }

    public function setPass($pass): Passwords
    {
        $this->pass = $pass;

        return $this;
    }

    public function getPass(): string
    {
        return $this->pass;
    }

}
