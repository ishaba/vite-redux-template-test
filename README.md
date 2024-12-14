# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## TODO

### Исходные данные:

[✓] Всю необходимую информацию запрашиваем по GET-запросу: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<cocktail_code>

[✓] Доступные cocktail_code: margarita, mojito, a1, kir

### Функциональные требования:

[✓] Использовать менеджер состояния для сохранения данных и исключения дублирующих запросов

[✓] Список кодов (cocktail_code) использовать для названия пунктов меню и формирования url-страниц

[✓] Каждый пункт меню ведет на страницу со своим описанием

[✓] Активный пункт меню должен быть выделен

[✓] По умолчанию первый пункт меню, является главной страницей и использует его же урл

[✓] Переход на url-адрес "/", должен отправлять пользователя на url-первого пункта меню

[✓] При переходе на несуществующую страницу, показать 404 ошибку в произвольной форме
– Нужна ли 404 в ответе сервера?

[✓] Резиновая верстка интерфейса. Максимальная ширина 1024px, минимальная 360px

[✓] lazy-loading для загрузки изображений

### Требования по стеку на выбор:

[✓] typescript

[✓] vue 2/3 + vuex/pinia, react + redux/mobx

[✓] webpack, vite

[✓] eslint

[✓] html 5, css 3

[✓] scss/sass, stylus, less, postCSS

[✓] Адаптивная верстка (chrome, safari)

[-] jest (опционально)

### По окончанию:

[-] выложить в репозиторий
