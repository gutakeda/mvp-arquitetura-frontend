# YourExpenses Frontend

YourExpenses Frontend é a parte da interface do usuário do aplicativo YourExpenses, desenvolvido para ajudar os usuários a gerenciar suas transações financeiras de maneira simples e intuitiva.

## Funcionalidades

1. **Tabela de Transações**:

   - Exibe transações do tipo `deposit` e `withdrawal`.
   - Cada transação inclui detalhes como descrição, data e valor.
   - Os usuários podem adicionar e deletar transações.

3. **Dashboard**:
   - Mostra o total de `deposits`.
   - Mostra o total de `withdrawals`.
   - Calcula e exibe o saldo total (soma dos `deposits` menos os `withdrawals`).
   - Atualizado automaticamente ao adicionar ou deletar transações.

## Instruções de Uso

Para executar o aplicativo, siga os passos abaixo:

1. Clone este repositório:

   ```bash
   git clone https://github.com/gutakeda/mvp-arquitetura-frontend.git
   cd mvp-arquitetura-frontend
   ```

2. Crie a imagem local

   ```bash
   npm run docker:build
   ```

3. Crie o arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
   ```bash
    VITE_AUTH0_DOMAIN=...
    VITE_AUTH0_CLIENT_ID=...
    VITE_AUTH0_API_AUDIENCE=...
   ```

4. Rode a imagem

   ```bash
   npm run docker:run
   ```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

---

Esperamos que você aproveite o uso do YourExpenses para organizar suas finanças de maneira mais eficiente!
