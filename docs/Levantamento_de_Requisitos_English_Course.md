# Análise - Aplicação Inglês



## Levantamento de Requisitos

### Aplicativo Móvel (Android / iOS)

1. #### Autenticação (Login / Cadastro) do Aluno

2. #### Tutorial de Uso no Primeiro Acesso (Modal para Explicação da Metodologia)

3. #### Listagem de Aulas (Estilo Timeline do DuoLingo)

4. #### Liberação de Aulas Específicas de forma gratuita para teste

5. #### Perfil do Usuário gerenciável (O aluno poderá alterar algumas informações do seu cadastro)

6. #### Configurações (Uma listagem com algumas opções de Configuração, por exemplo, Logout, Meu Perfil, Meu Progresso)

7. #### Detalhamento da Atividade da Aula (Onde será exibida a atividade da aula, seja ela um vídeo, áudio, Atividade Objetiva ou Atividade Dissertativa, como a tradução com múltiplas respostas, Atividade Ligar os Pares)

8. #### Aplicação de Cupons para a Compra do Curso

9. #### Área de Prova (Exibição e Avaliação das respostas da Prova para Certificação por etapa do curso, por exemplo, certificado básico, intermediário e avançado)

10. #### Área de Certificado (Exibição do Certificado, tal como observações sobre o mesmo)

11. #### Publicação da Aplicação nos MarketPlace (AppStore e PlayStore)



### Aplicação Web (Painel de Administração)

1. #### Autenticação (Login) do Administrador

2. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Usuário (Alunos e Admin)

3. #### Detalhes do Perfil do Aluno (Aulas assistidas, Desempenho nos Exercícios, Dados de Cadastro)

4. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Aulas (Vídeo, Áudio, Atividade Objetiva ou Atividade Dissertativa, como a tradução com múltiplas respostas, Atividade Ligar os Pares)

5. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Matrícula

6. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Clientes

7. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Cupons (Para conseguir relacionar o aluno, a compra e o cliente)

8. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Prova (Critério para Certificação dos Alunos)

9. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Certificados (Com emissão em PDF)

10. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Notificações Personalizadas (Push Notifications)

11. #### Implementação de Relatórios Numéricos (Número de Alunos, Quantidade de Aulas, Quantidade de Mensagens do Chat, Total Faturado em Reais)

12. #### Deploy da aplicação com configuração de DNS em Cloud Server (AWS, Digital Ocean, Google Cloud, Microsoft Azure, Heroku)



### API (Banco de Dados e Regras de Negócio)

1. #### Modelagem do Banco de Dados (Postgres + MongoDB + Redis)

2. #### Autenticação (Login) do Administrador e Aluno - (E-mail², Google¹ e Facebook¹  - ¹(Permitir criação de senha com essas 2 formas de login) / ²(Permitir que seja vinculado conta do Google e Facebook, para que o vínculo entra a conta criada e as redes sociais sejam efetivas os e-mails referentes ao email do cadastro e da rede social devem ser iguais!))

#### Seguir uma metodologia de relacionamento/funções na hora da criação  dos CRUDs, não necessariamente seguir a ordem abaixo de CRUDs abaixo!

3. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Usuário (Alunos e Admin)

4. #### Detalhes do Perfil do Aluno (Aulas assistidas, Desempenho nos Exercícios, Dados de Cadastro)

5. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Aulas (Vídeo, Áudio, Atividade Objetiva ou Atividade Dissertativa, como a tradução com múltiplas respostas, Atividade Ligar os Pares)

6. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Matrícula - (Usuário)

7. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Clientes - (Empresas/escolas)

8. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Cupons (Para conseguir relacionar o aluno, a compra e o cliente)

9. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Prova Final (Critério para Certificação dos Alunos)

10. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Certificados (Com emissão em PDF)

11. #### CRUD (Criação, Leitura / Exibição, Edição e Exclusão) de Notificações Personalizadas (Push Notifications)

12. #### Implementação das Regras de Negócio em todos os CRUD's (por exemplo, Evitar cadastros duplicados, serviço de envio de e-mails, ajustar a liberação de aulas para o aluno acessar apenas a do dia atual)

13. #### EXTRAS - Cruzamento dos Dados para geração de Relatórios Numéricos (Número de Alunos, Quantidade de Aulas, Quantidade de Mensagens do Chat, Total Faturado em Reais)

14. #### EXTRAS - Integração com a API do LeadLovers para captura de Compras

15. #### Deploy e configuração da API em Cloud Server (AWS, Digital Ocean, Google Cloud, Microsoft Azure, Heroku)
