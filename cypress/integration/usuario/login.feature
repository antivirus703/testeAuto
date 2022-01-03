Feature: Login

    Eu como consumidor que ja possuo cadastro gostaria de fazer login para realizar mais compras ou continuar alguma que deixei pendente.
    Eu como consumidor quero fazer login para verificar meu historico de pedidos.
    Eu como consumidor quero fazer login para pedir ajuda pois tive problema em uma encomenda.

    Scenario: Login com usuario valido
    Given Cliquei para realizar sign-in
    When preencho os dados de login com um usuario valido
    And clico para realizar login
    Then o sistema realiza meu login com sucesso me autenticando na pagina

    Scenario: Login com usuario valido, pressionando enter
    Given Cliquei para realizar sign-in
    When preencho os dados de login com um usuario valido, pressionando enter apos
    Then o sistema realiza meu login com sucesso me autenticando na pagina

    Scenario: Login com usuario valido, informando uma senha errada
    Given Cliquei para realizar sign-in
    When preencho os dados de login com um usuario valido e senha incorreta
    And clico para realizar login
    Then o sistema notifica o usuario que houve um problema com a autenticaçao

    Scenario: Login com email nao cadastrado
    Given Cliquei para realizar sign-in
    When preencho os dados de login com um usuario nao cadastrado

    Scenario: Login sem informar email
    Given Cliquei para realizar sign-in
    When preencho os dados de login sem informar email
    And clico para realizar login
    Then o sistema notifica que e necessario informar um email

    Scenario: Login sem informar senha
    Given Cliquei para realizar sign-in
    When preencho os dados de login sem informar senha
    And clico para realizar login
    Then o sistema notifica que e necessario informar uma senha