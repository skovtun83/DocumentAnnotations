# Задание

Необходимо создать приложение для просмотра документов и добавления аннотаций.

## Детали

- Задание должно быть выполнено на фреймворке Angular без использования
дополнительных сторонних библиотек, за исключением ui китов вроде Taiga,
Angular Material и тп. Стейт менеджер не требуется.
- Пользователь открывает документ по ссылке, в которой есть id документа.
Список документов не требуется, будем считать, что пользователь получил
прямую ссылку на документ.
- Приложение получает информацию о документе по API, в которой указаны
страницы со ссылками на изображения (смотрите приложенный json, его
используйте как мокап). Изображения - это страницы документа, пользователь
имеет возможность скроллить документ вниз для просмотра всех страниц.
- Документ может быть увеличен или уменьшен (zoom) кнопками “+” и “-”.
- Пользователь может добавлять аннотации в виде текста.
- Добавленные аннотации можно перемещать.
- Можно также удалять аннотации.
- Должна быть кнопка “Сохранить”, при нажатии на которую в консоль выводится
информация о документе с добавленными аннотациями.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
