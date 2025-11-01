# 🐾 PROJETO FINAL (ENTREGA 2): RESGATE AMIGO - Sistema de Design Front-end

## 1. Visão Geral e Justificativa

Este projeto consiste no desenvolvimento de uma plataforma web de Front-end para a ONG "Resgate Amigo", cujo objetivo é resgatar animais, facilitar a captação de recursos (doações) e engajar voluntários.

A complexidade da solução (formulários interativos, galeria filtrável e responsividade) demonstra a aplicação integrada de todos os conceitos da disciplina.

| Aspecto | Foco |
| :--- | :--- |
| **Tema** | Resgate e Adoção de Animais. |
| **Objetivo Principal** | Captar recursos e Gerenciar engajamento de voluntários. |
| **Tecnologias** | HTML5 (Semântico), CSS3 (Responsivo/Grid/Flexbox), JavaScript (Dinâmico/Interativo). |

---

## 2. Documentação Técnica e Aplicação de Requisitos

Abaixo está o detalhamento de como os requisitos específicos da disciplina foram atendidos:

### 2.1. Requisitos de Código e Design

| Requisito da Atividade | Implementação no Projeto |
| :--- | :--- |
| **HTML5 Semântico** | Uso de `<header>`, `<nav>`, `<main>`, `<footer>` e elementos avançados como `<article>`, `<figure>`, `<fieldset>` e `aria-*` (acessibilidade). |
| **Layouts Responsivos e CSS3 Avançado** | Design **Mobile-First** com Media Queries. Uso de **CSS Grid** (na galeria de animais) e Flexbox (no cabeçalho e formulários). |
| **Funcionalidades Interativas e Dinâmicas (JS)** | **1. Menu Hamburguer:** (Interatividade em Mobile). **2. Formulários Dinâmicos:** Lógica de `input` de "Outro Valor" e validação básica. **3. Filtro de Galeria:** Lógica para filtrar animais por tipo/porte usando atributos `data-*`. |
| **Acessibilidade** | Implementação de atributos `aria-*` no Menu Hamburguer e uso de `<label>`, `<fieldset>` e `loading="lazy"` nas imagens. |
| **Navegação Sofisticada** | **Submenu Dropdown** (CSS/JS) implementado no menu principal e funcional em Desktop. |

### 2.2. Organização do Código e Sistema de Design (Entrega 2)

A estrutura de pastas reflete um ambiente profissional e modular. O CSS foi totalmente refatorado:

| Categoria | Detalhes Técnicos |
| :--- | :--- |
| **Modularidade do CSS** | O arquivo `style.css` foi refatorado em 4 módulos (`_variables.css`, `_reset.css`, `_layout.css`, `_components.css`) e importados via `main.css`. |
| **Design System Consistente** | **8 Cores** e **5 Tamanhos de Fonte** definidos em `_variables.css`, com espaçamento modular (base 8px) aplicado em todo o layout. |
| **Layout Avançado** | Implementação de **5 Breakpoints** e **Grid de 12 Colunas** customizado (`.row`, `.col-md-x`). |

### 2.3. Componentes de Interface e Feedback

| Componente | Local de Implementação |
| :--- | :--- |
| **Badges e Categorização** | Estilos `.badge-primario` e `.badge-neutro` criados no `_components.css` e aplicados aos cartões de animais. |
| **Componentes de Feedback** | Estilos `.alert-sucesso`, `.alert-erro` e `.toast-*` criados no `_components.css` e integrados ao `main.js` para feedback após envio de formulários. |

---

## 3. Metodologia de Desenvolvimento (Kanban)

O projeto seguiu a filosofia **Kanban**, focando em ciclos de desenvolvimento contínuos e visibilidade do progresso, com entregas incrementais.

### 3.1. Último Ciclo de Trabalho (Entrega 2 - Finalização)

| Tarefa | Status |
| :--- | :--- |
| Refatoração CSS para Módulos (Requisito Estrutural) | ✔️ Concluído |
| Layout Avançado (5 Breakpoints / Grid 12 Colunas) | ✔️ Concluído |
| Implementação de Dropdown e Componentes de Feedback | ✔️ Concluído |

---

## 4. Como Executar o Projeto

1.  **Status do Repositório:**
2.  **Clonar o Repositório:**`
3.  **Executar:** 