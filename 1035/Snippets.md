## Сниппеты

При разработке новых элементов для облегчения разработки на Tarkett используются [сниппеты](https://ru.wikipedia.org/wiki/%D0%A1%D0%BD%D0%B8%D0%BF%D0%BF%D0%B5%D1%82).

### Сниппеты для работы с программной логикой

Список сниппетов для работы с программной логикой:

- `sapuic` - служит для создания контроллера;

        sap.ui.define(["App/base/BaseController"], (BaseController) => {
            return BaseController.extend("", {});
        });

- `sapuim` - служит для создания модели;

        sap.ui.define(["App/base/BaseModel"], (BaseModel) => {
            return { main: new BaseModel({}) };
        });

- `log` - служит для быстрого вызова консоли.

        console.log("");

### Сниппеты для работы с версткой

- `sapuiv` - служит для создания нового view;

        <mvc:View
            controllerName="App.core.controller."
            xmlns="sap.m"
            xmlns:mvc="sap.ui.core.mvc"
        />

- `sapuif` - служит для создания нового фрагмента (диалогового окна);

        <core:FragmentDefinition
        xmlns="sap.m"
        xmlns:core="sap.ui.core">
        <Dialog
            class="dialog "
            id=""
            stretch=""
            contentWidth="px"
            busyIndicatorDelay="0">
            <customHeader>
            <Bar>
                <contentLeft>
                <Title text="" />
                </contentLeft>
                <contentRight>
                <Button
                    class="dialog__header-close-btn"
                    press="onCloseDialog">
                    <customData>
                    <core:CustomData
                        key="dialog-id"
                        value=""
                    />
                    </customData>
                </Button>
                </contentRight>
            </Bar>
            </customHeader>
        </Dialog>
        </core:FragmentDefinition>

- `sapuip` - служит для создания нового поповера.

        <core:FragmentDefinition
        xmlns="sap.m"
        xmlns:core="sap.ui.core">
            <Popover
                id=""
                placement="VerticalPreferredBottom"
                horizontalScrolling="false"
                verticalScrolling="false"
                showHeader="false"
                showArrow="false"
                contentMinWidth="px"
                offsetY="5">
            </Popover>
        </core:FragmentDefinition>
