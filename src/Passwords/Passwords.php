<?php

namespace Uifer\System\Passwords;

class Passwords
{

    public $pass;

    private $salt;

    public function generateSalt(): string
    {}

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

    public function getPass(): string
    {
        return $this->pass;
    }

    public function setPass($pass): Passwords
    {
        $this->pass = $pass;

        return $this;
    }

    public function getSalt(): string
    {
        return $this->salt;
    }

    public function setSalt($salt): Passwords
    {
        $this->salt = $salt;

        return $this;
    }
}
