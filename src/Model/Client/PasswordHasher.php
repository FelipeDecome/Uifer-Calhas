<?php

namespace Uifer\System\Model\Client;

class PasswordHasher
{

    private $hash;

    public function __construct(string $pass)
    {
        $this->hashPass($pass);
    }

    public function hashPass(string $pass): void
    {
        $result = password_hash($pass, PASSWORD_DEFAULT, HASH_OPTIONS);

        $this->hash = $result;
    }

    public static function verifyPass(string $pass, string $hashToCompare): bool
    {
        if (password_verify($pass, $hashToCompare)) {

            if (password_needs_rehash($pass, PASSWORD_DEFAULT, HASH_OPTIONS)) {
                /**
                 * * chama a função responsável por atualizar a senha
                 */
            }

            return true;
        } else {
            return false;
        }
    }

    public function getHash(): string
    {
        return $this->hash;
    }
}