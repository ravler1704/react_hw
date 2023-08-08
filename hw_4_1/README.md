# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Конвертер цветов из HEX в RGB
===

Вам необходимо разработать конвертер цветов из HEX в RGB.

![Конвертер цветов](./assets/preview.png)

## Интерфейс конвертера

При правильном вводе цвета он показывает его представление в формате RGB и меняет цвет фона на заданный:
![Цвет](./assets/color.png)

Конвертер при вводе неправильного цвета в формате HEX должен сообщать об ошибке:
![Ошибка](./assets/error.png)

Необходимо дожидаться ввода всех семи символов, включая решётку, чтобы принимать решение о том, показывать ошибку или менять цвет фона.
