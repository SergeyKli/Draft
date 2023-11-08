## Описание кастомных контролов

Ниже приведены инструкции использования кастомных контролов.

- [ContactsGroupSelect](#contactGroupSelect)
- [DiscussItem](#discussItem)
- [HoverButton](#hoverButton)
- [ImportanceLabel](#importanceLabel)

### <a id="contactGroupSelect">ContactsGroupSelect</a>

Контрол выбора контакта процесса.

Properties:

| Cвойство      | Тип | По умолчанию | Описание               |
| ------------- | --- | ------------ | ---------------------- |
| users         | any | -            | Список пользователей   |
| selectedUsers | any | -            | Выбранные пользователи |

Events:

| Событие            | Параметры           | Описание                                        |
| ------------------ | ------------------- | ----------------------------------------------- |
| pressAddContact    | selectedUsers - any | Срабатывает при добавлении пользователя         |
| pressDeleteContact | contactUid - string | Срабатывает при удалении пользователя из списка |

Example:

        <ac:ContactsGroupSelect
            class="contacts-group__adaptation"
            users="{Model>/users}"
            selectedUsers="{Model>/selectedUsers}"
            pressAddContact="onAddContact"
            pressDeleteContact="onDeleteContact"
        />

### <a id="discussItem">DiscussItem</a>

Отображает сообщение в обсуждении процесса.

Properties:

| Cвойство   | Тип    | По умолчанию | Описание                                   |
| ---------- | ------ | ------------ | ------------------------------------------ |
| userName   | string | -            | Имя пользователя                           |
| importance | string | -            | Важность сообщения                         |
| message    | string | -            | Текст сообщения                            |
| timestamp  | string | -            | Время отправки сообщения                   |
| maxLength  | string | -            | Максимальное количество символов сообщения |

Example:

        <ac:DiscussItem
            class="process__aside-discuss-list-item"
            userName="Имя"
            importance="Важная"
            message="Текст сообщения"
            timestamp="6 октября 2021 г. 17:10"
            maxLength="150"
        />

### <a id="hoverButton">HoverButton</a>

Кнопка содержащая событие наведения.

Events:

| Событие | Параметры | Описание                            |
| ------- | --------- | ----------------------------------- |
| hover   | -         | Срабатывает при наведении на кнопку |

### <a id="importanceDot">ImportanceDot</a>

Элемент стиля, отображающий важность сущности (процесса, задачи) в виде цветового круга.

Properties:

| Cвойство   | Тип     | По умолчанию | Описание           |
| ---------- | ------- | ------------ | ------------------ |
| importance | string  | -            | Текст важности     |
| visible    | boolean | True         | Видимость элемента |

Example:

        <ac:ImportanceDot
            importance="Важно"
            visible="true"
        />

### <a id="importanceLabel">ImportanceLabel</a>

Элемент, отображающий текст, стилистику важности сущности (процесса, задачи).

Properties:

| Cвойство   | Тип     | По умолчанию | Описание           |
| ---------- | ------- | ------------ | ------------------ |
| importance | string  | -            | Текст важности     |
| visible    | boolean | True         | Видимость элемента |

Example:

        <ac:ImportanceLabel
            importance="Важно"
            visible="true"
        />
