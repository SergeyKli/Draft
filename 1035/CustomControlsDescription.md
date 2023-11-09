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
- [NavigationTreeItem](#navigationTreeItem)
- [Password](#password)
- [SearchContact](#searchContact)
- [SelectWithPopover](#selectWithPopover)
- [SelectWithList](#selectWithList)
- [TableWithPartialSelect](#tableWithPartialSelect)
- [TokenizerWithOneVisibleTokens](#tokenizerWithOneVisibleTokens)
- [TokenizerWithoutVisibleTokens](#tokenizerWithoutVisibleTokens)
- [TokenWithItemsTooltip](#tokenWithItemsTooltip)

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

### <a id="navigationTreeItem">NavigationTreeItem</a>

Элемент навигации в главном меню, представляющий дерево.

Наследуется от [NavigationAnimatedItem](#navigationAnimatedItem)

Properties:

| Cвойство | Тип     | По умолчанию | Описание                                |
| -------- | ------- | ------------ | --------------------------------------- |
| expanded | boolean | false        | Свойство отвечающее за раскрытие списка |

Example:

        <ac:NavigationTreeItem
            text="Название пункта меню"
            expanded="false"
        />

### <a id="password">Password</a>

Контрол, представляющий собой инпут ввода пароля.

Properties:

| Cвойство    | Тип    | По умолчанию | Описание                                |
| ----------- | ------ | ------------ | --------------------------------------- |
| placeholder | string | -            | Текст при отсутствующем значении пароля |

Events:

| Событие    | Параметры      | Описание                                                      |
| ---------- | -------------- | ------------------------------------------------------------- |
| liveChange | value - string | Срабатывает при вводе значения в инпут                        |
| submit     | value - string | Срабатывает при нажатии на Enter после ввода значения в инпут |

Example:

        <ac:Password
            placeholder="Введите пароль"
            liveChange="onLiveChange"
            submit="onSubmit"
        />

### <a id="searchContact">SearchContact</a>

Контрол, применяющийся при выборе ответственного контакта.

Properties:

| Cвойство           | Тип     | По умолчанию                   | Описание                                    |
| ------------------ | ------- | ------------------------------ | ------------------------------------------- |
| value              | string  | -                              | Значение в инпуте                           |
| placeholder        | string  | Введите имя контакта           | Текст при отсутствующем значении инпута     |
| showValueHelp      | boolean | true                           | Свойство, отвечающее за показ иконки поиска |
| valueHelpIconSrc   | string  | sap-icon://tarkett/icon-search | Иконка поиска                               |
| busyIndicatorDelay | string  | 0                              | Задержка индикатора загрузки                |

Events:

| Событие    | Параметры                           | Описание                                                      |
| ---------- | ----------------------------------- | ------------------------------------------------------------- |
| liveChange | value - string<br>newValue - string | Срабатывает при вводе значения в инпут                        |
| press      | value - string                      | Срабатывает при нажатии на Enter после ввода значения в инпут |

Example:

        <ac:SearchContact
            liveChange="onLiveChange"
            items="{Model>/items}">
            <ac:items>
                <CustomListItem press="onPress">
                    <Avatar src="assets/images/defaultAvatar.png" />
                    <Text text="{Documents>text}" />
                    <Text text="TarkettEE" />
                </CustomListItem>
            </ac:items>
        </ac:SearchContact>

### <a id="selectWithPopover">SelectWithPopover</a>

Кнопка в виде селекта с предустановленным поповером.

Наследуется от [sap.m.Button](https://sapui5.hana.ondemand.com/#/api/sap.ui.webc.main.Button)

Properties:

| Cвойство         | Тип                                                                               | По умолчанию           | Описание                             |
| ---------------- | --------------------------------------------------------------------------------- | ---------------------- | ------------------------------------ |
| offsetPopoverY   | string                                                                            | 5                      | Отступ поповера от элемента по оси Y |
| placementPopover | [sap.m.PlacementType](https://sapui5.hana.ondemand.com/#/api/sap.m.PlacementType) | VerticalPreferedBottom | Положение поповера (сверху, снизу)   |

Example:

        <ac:SelectWithPopover
            text="Текст в селекте"
            offsetPopoverY="10"
            placementPopover="VerticalPreferedBottom">
            <HBox>
                <Text
                    class="text"
                    text="Контент"
                />
            </HBox>
        </ac:SelectWithPopover>

### <a id="selectWithList">SelectWithList</a>

Кнопка в виде селекта с предустановленным списком и инпутом поиска.

Наследуется от [SelectWithPopover](#selectWithPopover)

Properties:

| Cвойство            | Тип                                                                               | По умолчанию | Описание                                |
| ------------------- | --------------------------------------------------------------------------------- | ------------ | --------------------------------------- |
| visibileSearchInput | boolean                                                                           | true         | Видимость инпута поиска                 |
| visibleList         | boolean                                                                           | true         | Видимость списка элементов              |
| listItems           | array                                                                             | []           | Список элементов, отображаемый в списке |
| listCustomData      | array                                                                             | []           | Список кстомных данных списка           |
| type                | [sap.m.ListType](https://sapui5.hana.ondemand.com/#/api/sap.m.ListType)           | Active       | Тип элементов списка                    |
| mode                | [sap.m.ListMode](https://sapui5.hana.ondemand.com/#/api/sap.m.ListMode)           | MultiSelect  | Тип выбора элементов списка             |
| height              | [sap.ui.core.CSSSize](https://sapui5.hana.ondemand.com/#/api/sap.ui.core.CSSSize) | 300px        | Высота поповера                         |

Events:

| Событие    | Параметры | Описание                                    |
| ---------- | --------- | ------------------------------------------- |
| select     | -         | Срабатывает при выборе элемента списка      |
| itemPress  | -         | Срабатывает при нажатии на элемент списка   |
| liveChange | -         | Срабатывает при вводе текста в инпут поиска |

Example:

        <ac:SelectWithList
            text="Текст в селекте"
            listItems="{Model>/listItems}"
            listCustomData="{Model>/customDatas}"
            type="Active"
            mode="MultiSelect"
            height="500px"
            select="onSelect"
            itemPress="onItemPress"
            liveChange="onLiveChange"
        />

### <a id="tableWithPartialSelect">TableWithPartialSelect</a>

Таблица с промеуточым состоянием селекта, отвечающего за выбор всех элементов.

Наследуется от [sap.ui.table.Table](https://sapui5.hana.ondemand.com/#/api/sap.ui.table.Table)

### <a id="tokenizerWithOneVisibleTokens">TokenizerWithOneVisibleTokens</a>

Токен, использующийся для мультикомбобокса с одним видимым элементом выбора.

Наследуется от [sap.m.Tokenizer](https://sapui5.hana.ondemand.com/#/api/sap.m.Tokenizer)<br>
Используется для [MultiComboBoxWithOneVisibleTokens](#multiComboBoxWithOneVisibleTokens)

### <a id="tokenizerWithoutVisibleTokens">TokenizerWithoutVisibleTokens</a>

Токен, использующийся для мультикомбобокса без видимых элементов при выборе.

Наследуется от [sap.m.Tokenizer](https://sapui5.hana.ondemand.com/#/api/sap.m.Tokenizer)<br>
Используется для [MultiComboBoxWithoutVisibleTokens](#multiComboBoxWithoutVisibleTokens)

### <a id="tokenWithItemsTooltip">TokenWithItemsTooltip</a>

Кастомный, стандартный токен. Используется при выборе элементов мультикомбобокса.

Наследуется от [sap.m.Token](https://sapui5.hana.ondemand.com/#/api/sap.m.Token)<br>
Используется для [MultiComboBoxWithCustomToken](#multiComboBoxWithCustomToken)
