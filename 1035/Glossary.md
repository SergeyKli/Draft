## Глоссарий часто используемых терминов

- [Диалоговое окно](#dialog)
- [Поповер](#popover)
- [Кастомный контрол](#customControl)
- [Кастомные данные](#customData)
- [Легаси](#legacy)
- [МР / Merge requiest](#mr)
- [BPM](#bpm)
- [Stage API](#stageAPI)
- [Prod API](#prodAPI)

#### <a id="dialog">Диалоговое окно</a>

Всплывающее окно, предоставляющая пользователю выполнять в нем какие-либо действия. Диалоговое окно запрещает доступ к элементам вне этого окна.

#### <a id="popover">Поповер</a>

Всплывающее окно (обычно небольших размеров), предоставляющая пользователю выполнять в нем какие-либо действия. Поповер не ограничивает пользователя от взаимодествия с элементами вне этого окна.

#### <a id="customControl">Кастомный контрол</a>

Элемент управления, который состоит из базовых контролов.

        Например: контрол, который состоит из инпута и кнопки.

Кастомный контрол также может быть базовым элементом управления, в котором изменены его базовые функции.

        Например: измененное поведение мультикомбобокса при выборе элементов списка.
        То есть визуальное представление выбранных элементов отличается от того, что предоставляет компонент по умолчанию.

#### <a id="customData">Кастомные данные</a>

Вспомогательные данные для элемента управления, которые представляют собой ключ - значение. Такие данные можно получить в любом из событий элемента управления

Пример наиболее часто встречающихся кастомных данных для открытия диалогового окна/поповера:

        <Button
          class="button"
          text="Открыть диалоговое окно"
          press="onOpenDialog">
          <customData>
            <core:CustomData  <- Кастомные данные
              key="dialog-fragment-name"
              value="mergeMaterial"
            />
          </customData>
        </Button>

#### <a id="legacy">Легаси</a>

Код с высоким уровнем технического долга, либо же код, который написан на старой версии языка. Такой код обычно разрабатывался кем-то другим помимо разработчика.

#### <a id="mr">МР / Merge requiest</a>

Раздел в gitlab/github, где отображается запрос на слияние веток.

То есть запрос на слияние ветки, в которой делалась задача, с основной веткой проекта.

#### <a id="bpm">BPM</a>

Раздел "Бизнес процессы".

#### <a id="stageAPI">Stage API</a>

Версия API, которая используется при разработке функционала. Имеет префикс `units_staging`. Второе название `qual`.

    Пример: https://is_dev.tarkett.ru/api/units_staging/pricing/ShippingReports/ProjectShippingReport

#### <a id="prodAPI">Prod API</a>

Версия API, которая используется на PROD'e. Имеет префикс `units`.

    Пример: https://is_dev.tarkett.ru/api/units/pricing/ShippingReports/ProjectShippingReport