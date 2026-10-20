# 🎭 Playwright Advanced E2E Automation

[![Playwright](https://img.shields.io/badge/Playwright-1.x-green?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js->=18.x-green?logo=node.js)](https://nodejs.org/)

Este repositório contém a automação de testes End-to-End (E2E) para o site de e-commerce [Automation Exercise](https://automationexercise.com/), desenvolvida com **Playwright** e **TypeScript**.

O projeto tem como foco validar fluxos de usuário na plataforma web utilizando o padrão de arquitetura **Page Object Model (POM)** e **Fixtures** do Playwright para gerenciamento e inicialização das páginas.

---

## 🎯 O que foi implementado

- **Target Application:** Testes automatizados direcionados para a plataforma [Automation Exercise](https://automationexercise.com/).
- **Page Object Model (POM):** Mapeamento e encapsulamento dos elementos e interações das telas (ex: página de produtos, carrinho, login/cadastro) em classes dedicadas.
- **Custom Fixtures:** Utilização de fixtures do Playwright para instanciar automaticamente as páginas nos cenários de teste, mantendo o código dos testes limpo e enxuto.
- **Validação de Fluxos E2E:** Automação de cenários como busca/adição de produtos ao carrinho, navegação e cadastro de usuários.

---

## 🛠️ Tecnologias Utilizadas

- **[Playwright](https://playwright.dev/)**: Framework para testes End-to-End.
- **[TypeScript](https://www.typescriptlang.org/)**: Linguagem com tipagem estática.
- **Node.js**: Ambiente de execução JavaScript/TypeScript.

---

## 📂 Estrutura do Projeto

```text
├── tests/              # Arquivos de especificações de teste (.spec.ts)
├── pages/              # Classes das páginas (Page Object Model)
├── fixtures/           # Configuração e inicialização das fixtures das páginas
├── playwright.config.ts# Configurações globais do Playwright (baseURL, timeout, etc.)
├── package.json        # Dependências e scripts de execução
└── README.md           # Documentação do projeto
