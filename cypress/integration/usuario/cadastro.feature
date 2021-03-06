Feature: Cadastro de Usuario

    Eu como consumidor desejo realizar cadastro no site para que eu possa realizar minhas compras e ter uma lista pessoal de itens que deseja comprar e receber promocoes

    Scenario: Cadastrar usuario valido
    Given Cliquei para realizar sign-in
    When informe meu email para cadastro de usuario
    And finalizo o cadastro de usuario preenchendo todos os dados
    Then o sistema realiza meu cadastro com sucesso me autenticando na pagina

    Scenario: Cadastrar usuario com email invalido
    Given Cliquei para realizar sign-in
    When tentei me inscrever com um email invalido
    Then o sistema notifica que o email utilizado é invalido

    Scenario: Cadastrar usuario com email existente
    Given Cliquei para realizar sign-in
    When tentei me inscrever com um email que ja esta em uso
    Then o sistema notifica que o email utilizado ja esta sendo usado por outro usuario