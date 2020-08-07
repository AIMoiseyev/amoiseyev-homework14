# Домашняя работа № 13
***
Версия 0.0.3

## Описание:
В данном репозитории находится домашняя работа № 13 курса Яндекс.Практикум. Это Учебный проект по созданию сервера с использованием базы данных.

## Основной функционал: 
- REST API:
  - по запросу `GET localhost:3000/users` 
  возвращает всех пользователей из базы
  - по запросу `GET localhost:3000/users/id` 
  возвращает пользователя по _id
  - по запросу `POST localhost:3000/users` создаёт пользователя с переданными в теле запроса name, about и avatar
  - по запросу `GET localhost:3000/cards` возвращает все карточки из базы
  - по запросу `POST localhost:3000/cards` создаёт карточку с переданными в теле запроса name и link. owner проставляется
  - по запросу `DELETE localhost:3000/cards/:cardId` удаляет карточку по _id
  - по запросу `PATCH localhost:3000/users/me` обновляет профиль
  - по запросу `PATCH localhost:3000/users/me/avatar` обновляет аватар
  - по запросу `PUT localhost:3000/cards/:cardId/likes` поставить лайк карточке
  - по запросу `DELETE localhost:3000/cards/:cardId/likes` убрать лайк с карточки
  

## Стэк технологий:
- node.js
- express.js
- mongoDB

## Пакеты в сборке:
- [nodemon](https://www.npmjs.com/package/nodemon)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [eslint](https://www.npmjs.com/package/eslint)
- [mongoose](https://mongoosejs.com/)


## Инструкция по запуску:
1. Скачать или склонировать репозиторий
2. Установить зависимости при помощи npm - `npm i`
3. Запуск:
    - Запуск сервера на localhost:3000 - `npm run start`
    - Запуск сервера на localhost:3000 с хот релоудом - `npm run dev`

## Github:
https://github.com/AIMoiseyev/amoiseyev-homework13/tree/develop

