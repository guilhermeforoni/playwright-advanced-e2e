# 🚀 Playwright Advanced E2E & Architecture

[![Playwright](https://img.shields.io/badge/Playwright-1.x-green?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js->=18.x-green?logo=node.js)](https://nodejs.org/)

Este repositório é focado em **conceitos avançados de automação de testes End-to-End (E2E)** utilizando **Playwright** e **TypeScript**. O projeto explora arquiteturas escaláveis, recursos avançados do framework e padrões de projeto orientados a alta performance e manutenibilidade.

---

## 🎯 Conceitos e Recursos Avançados Utilizados

- **Custom Fixtures & Dependency Injection:** Extensão do ecossistema de fixtures do Playwright para injetar estados de autenticação, dados dinâmicos e páginas diretamente nos testes sem acoplamento excessivo.
- **API and UI Hybrid Testing:** Execução de requisições via API (`request` context do Playwright) para *setup* de massa de dados e limpeza rápida de cenários, otimizando o tempo de execução dos testes de interface.
- **Advanced Page Object Model (POM):** Implementação de herança, encapsulamento rigoroso de componentes e métodos encadeados (*method chaining*).
- **Network Interception & Mocking (`page.route`):** Simulação de cenários de rede, manipulação de payloads de requisições/respostas e testes de resiliência a falhas de API.
- **Tracing, Videos & Artifacts Management:** Configuração avançada de rastreamento detalhado para análise profunda de falhas em ambientes de CI/CD.

---

## 🛠️ Tecnologias Utilizadas

- **[Playwright](https://playwright.dev/)**: Motor de automação web e de API moderno e de alta performance.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática avançada para contratos de dados e arquitetura de testes robusta.
- **Node.js**: Ambiente de execução.

---

## 📂 Estrutura do Projeto

```text
├── tests/              # Arquivos de especificações (.spec.ts)
│   ├── e2e/            # Testes avançados de interface
│   └── api/            # Testes de integração e contratos
├── pages/              # Camada de Page Objects avançados
├── fixtures/           # Fixtures customizadas do Playwright e massas de dados
├── utils/              # Funções utilitárias, helpers e geradores de dados
├── playwright.config.ts# Configurações globais avançadas (projects, timeouts, workers, retries)
├── package.json        # Dependências e scripts de automação
└── README.md           # Documentação do projeto
