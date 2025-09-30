# Documentação das Rotas da API

Este documento detalha os endpoints disponíveis para o Sistema A (API de Agendamento) do Dog Walker App.

## Sistema A: API de Agendamento

**Base URL:** `http://localhost:3001` (porta padrão do backend)

### 1. Rotas de Usuários (`/users`)

#### 1.1. Registro de Usuário

*   **Endpoint:** `POST /users/register`
*   **Descrição:** Registra um novo usuário no sistema.
*   **Request Body (JSON):**

    ```json
    {
      "name": "Nome do Usuário",
      "email": "usuario@example.com",
      "role": "user" 
    }
    ```

*   **Response (JSON - Sucesso - Status 201 Created):**

    ```json
    {
      "id": 1,
      "name": "Nome do Usuário",
      "email": "usuario@example.com",
      "role": "user"
    }
    ```

*   **Response (JSON - Erro - Status 400 Bad Request):**

    ```json
    {
      "error": "Dados incompletos"
    }
    ```

#### 1.2. Login de Usuário

*   **Endpoint:** `POST /users/login`
*   **Descrição:** Realiza o login de um usuário (simulado, verifica apenas a existência do email).
*   **Request Body (JSON):**

    ```json
    {
      "email": "usuario@example.com"
    }
    ```

*   **Response (JSON - Sucesso - Status 200 OK):**

    ```json
    {
      "message": "Login bem-sucedido",
      "user": {
        "id": 1,
        "name": "Nome do Usuário",
        "email": "usuario@example.com",
        "role": "user"
      }
    }
    ```

*   **Response (JSON - Erro - Status 401 Unauthorized):**

    ```json
    {
      "error": "Usuário não encontrado"
    }
    ```

### 2. Rotas de Passeadores (`/walkers`)

#### 2.1. Listar Passeadores

*   **Endpoint:** `GET /walkers`
*   **Descrição:** Retorna uma lista de passeadores disponíveis.
*   **Response (JSON - Sucesso - Status 200 OK):**

    ```json
    [
      { "id": 1, "name": "Ana", "price": 30, "rating": 4.8 },
      { "id": 2, "name": "Carlos", "price": 25, "rating": 4.5 }
    ]
    ```

### 3. Rotas de Passeios (`/walks`)

#### 3.1. Agendar Passeio

*   **Endpoint:** `POST /walks/schedule`
*   **Descrição:** Agenda um novo passeio para um usuário com um passeador, processando o pagamento internamente via `paymentService`.
*   **Request Body (JSON):**

    ```json
    {
      "userId": 1,
      "walkerId": 2,
      "value": 25.00
    }
    ```

*   **Response (JSON - Sucesso - Status 201 Created):**

    ```json
    {
      "id": 1,
      "userId": 1,
      "walkerId": 2,
      "value": 25.00,
      "payment": {
        "transactionId": 12345,
        "status": "paid",
        "amount": 25.00,
        "date": "2025-10-27T10:00:00.000Z"
      }
    }
    ```

*   **Response (JSON - Erro - Status 400 Bad Request):**

    ```json
    {
      "error": "Dados incompletos" 
    }
    ```

*   **Response (JSON - Erro - Status 500 Internal Server Error):**

    ```json
    {
      "error": "Erro ao agendar passeio" 
    }
    ```
