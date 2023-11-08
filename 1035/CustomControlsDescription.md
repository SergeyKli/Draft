## Описание кастомных контролов

Ниже приведены инструкции использования кастомных контролов.

- [ContactsGroupSelect](#contactGroupSelect)
- [DiscussItem](#discussItem)
- [HoverButton](#hoverButton)
- [ImportanceLabel](#importanceLabel)
- [ImportanceSelect](#importanceSelect)
- [MultiComboBoxWithCustomToken](#multiComboBoxWithCustomToken)
- [MultiComboBoxWithOpenEvent](#multiComboBoxWithOpenEvent)
- [MultiComboBoxWithOneVisibleTokens](#multiComboBoxWithOneVisibleTokens)
- [MultiComboBoxWithoutVisibleTokens](#multiComboBoxWithoutVisibleTokens)
- [NavigationAnimatedItem](#navigationAnimatedItem)
- [NavigationTreePopupItem](#navigationTreePopupItem)

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

### <a id="importanceSelect">ImportanceSelect</a>

Контрол с возможностью выбора важности сущности (процесса, задачи).

Properties:

| Cвойство    | Тип    | По умолчанию | Описание                                             |
| ----------- | ------ | ------------ | ---------------------------------------------------- |
| placeholder | string | -            | Текст при отсутствующем значении выбранного элемента |

Events:

| Событие        | Параметры   | Описание                        |
| -------------- | ----------- | ------------------------------- |
| pressSelectBtn | id - string | Срабатывает при выборе элемента |

Example:

        <ac:ImportanceSelect
            placeholder="Выберите из списка"
            pressSelectBtn="onPressSelectBtn"
        />

Примечания.

Элемент содержит кастомные данные по умолчанию:

- `importance-0` - без важности;
- `importance-1` - обычная;
- `importance-2` - приоритетная;
- `importance-3` - важная;

### <a id="multiComboBoxWithCustomToken">MultiComboBoxWithCustomToken</a>

Мультикомбобокс с кастомными элементами выбранных значений. Отображаются в контроле при выборе элементов.

Наследуется от [sap.m.MultiComboBox](https://sapui5.hana.ondemand.com/#/api/sap.m.MultiComboBox)

### <a id="multiComboBoxWithOpenEvent">MultiComboBoxWithOpenEvent</a>

Мультикомбобокс, содержащий возможность открытия списка при клике на весь контрол.

Наследуется от [sap.m.MultiComboBox](https://sapui5.hana.ondemand.com/#/api/sap.m.MultiComboBox)

### <a id="multiComboBoxWithOneVisibleTokens">MultiComboBoxWithOneVisibleTokens</a>

Мультикомбобокс с отображением выбранного элемента в контроле при условии, если выбран один элемент.

Наследуется от [MultiComboBoxWithOpenEvent](#multiComboBoxWithOpenEvent)

### <a id="multiComboBoxWithoutVisibleTokens">MultiComboBoxWithoutVisibleTokens</a>

Мультикомбобокс с кастомными элементами, при выборе которых отображается только их количество.

Наследуется от [MultiComboBoxWithOpenEvent](#multiComboBoxWithOpenEvent)

### <a id="navigationAnimatedItem">NavigationAnimatedItem</a>

Контрол элемента навигации с анимацией.

Наследуется от [sap.tnt.NavigationListItem](https://sapui5.hana.ondemand.com/#/api/sap.tnt.NavigationListItem)

### <a id="navigationTreePopupItem">NavigationTreePopupItem</a>

Контрол, служащий для отображения поповера для минимизированного бокового меню

Наследуется от [sap.tnt.NavigationListItem](https://sapui5.hana.ondemand.com/#/api/sap.tnt.NavigationListItem)
