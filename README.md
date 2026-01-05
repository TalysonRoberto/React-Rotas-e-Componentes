# 🚀 Sistema de Rotas React - Atividade Prática

Um projeto completo demonstrando o uso de React Router DOM com lazy loading, rotas dinâmicas e componentes otimizados para performance.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 **Visão Geral**

Este projeto é uma aplicação React que implementa um sistema completo de navegação com as seguintes funcionalidades:

- ✅ **Rotas estáticas e dinâmicas** com React Router v6
- ✅ **Lazy loading** de componentes com `React.lazy()` e `Suspense`
- ✅ **Rotas aninhadas** com layout compartilhado
- ✅ **Parâmetros dinâmicos** na URL
- ✅ **Página 404 personalizada**
- ✅ **Performance otimizada** com code splitting

## 🎯 **Funcionalidades Demonstradas**

### **1. Sistema de Rotas Completo**
```jsx
// Rotas principais
/                   → Página inicial
/sobre              → Sobre a empresa
/contatos           → Página de contato

// Rota dinâmica com múltiplos parâmetros
/equipe/:id/:cargo/:idade/:nome → Perfil detalhado

// Rota curinga para 404
/*                   → Página não encontrada
