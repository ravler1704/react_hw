# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Authentication
===

Вы решили построить систему с аутентификацией.

Используя сервер, расположенный в каталоге `backend`, реализуйте приложение, удовлетворяющее следующим условиям:

1. При первой загрузке показывается лэндинг с формой входа:

![](./assets/unauthenticated.png)

2. После авторизации (POST http://localhost:7070/auth `{"login": "vasya", "password": "password"}`) загружаются компоненты ленты новостей и в тулбаре отображается профиль с кнопкой «Выйти»:

![](./assets/authenticated.png)

Для запроса профиля используйте запрос вида:
```
GET http://localhost:7070/private/me
Authorization: Bearer <ваш_токен>
```

Для запроса новостей используйте запрос вида:
```
GET http://localhost:7070/private/news
Authorization: Bearer <ваш_токен>
```

Важно:
1. Профиль и токен должны храниться в localStorage/sessionStorage. При перезагрузке страницы должна также загружаться лента новостей, если мы аутентифицированы.
1. Должна быть обработка ошибок, если получена ошибка 401, то нужно разлогинивать пользователя — удалять всё из localStorage/sessionStorage.
1. Не используйте React Router, просто подменяйте компоненты в зависимости от текущего состояния аутентификации.