/**
             * Метод установки фильтров на основании данных шаблона
             * @param {Object} templateData - данные шаблона
             */
            setFiltersTemplate(templateData) {
                this.setPeriodDateRangeTemplate(templateData);
                this.setMaterialsCheckboxTemplate(templateData.typeMaterials);
                this.setActionsCheckboxTemplate(templateData);

                ManagementBaseModel.main.setProperty("/filters/states/selectedItems", templateData?.states?.selectedKeys);
                ManagementBaseModel.main.setProperty("/filters/states/tooltip", templateData?.states?.tooltip);

                ManagementBaseModel.main.setProperty("/filters/category/selectedItems", templateData?.category?.selectedKeys);
                ManagementBaseModel.main.setProperty("/filters/category/tooltip", templateData?.category?.tooltip);

                ManagementBaseModel.main.setProperty("/filters/measure/selectedItems", templateData?.measure?.selectedKeys);
                ManagementBaseModel.main.setProperty("/filters/measure/tooltip", templateData?.measure?.tooltip);

                ManagementBaseModel.main.setProperty("/filters/contactGroup/selectedItems", templateData?.contactGroup?.selectedKeys);
                ManagementBaseModel.main.setProperty("/filters/contactGroup/tooltip", templateData?.contactGroup?.tooltip);

                ManagementBaseModel.main.setProperty("/filters/contact/selectedItems", templateData?.contact?.selectedKeys);
                ManagementBaseModel.main.setProperty("/filters/contact/tooltip", templateData?.contact?.tooltip);

                ManagementBaseModel.main.setProperty("/filters/project/selectedProject", templateData?.project?.selectedProject);
                ManagementBaseModel.main.setProperty("/filters/project/selectedItems", templateData?.project?.selectedKeys);
                ManagementBaseModel.main.setProperty("/filters/project/tooltip", templateData?.project?.tooltip);

                ManagementBaseModel.main.setProperty("/parameters", templateData?.extraParameters);
            },

            /**
             * Метод установки периода на основании данных шаблона
             * @param {Object} templateData - данные шаблона
             */
            setPeriodDateRangeTemplate(templateData) {
                const nonStandardPeriodText = templateData?.nonstandardPeriodText;
                const dateRangeSelection = this.byId("dateRangeSelection");

                if (nonStandardPeriodText) {
                    const [startDate, endDate] = nonStandardPeriodText.split(" - ");

                    this.periodChange(this.byId("rulesEditorPeriodSelect"), templateData?.nonstandardPeriodText);

                    dateRangeSelection.setFrom(new Date(startDate.split(".").reverse().join(".")));
                    dateRangeSelection.setTo(new Date(endDate.split(".").reverse().join(".")));

                    ManagementBaseModel.main.setProperty("/nonstandardPeriodText", templateData?.nonstandardPeriodText);
                } else {
                    dateRangeSelection.setValue(null);

                    ManagementBaseModel.ui.clear("/rulesEditorDateRangeSelection");
                    ManagementBaseModel.ui.clear("/nonstandardPeriodText");

                    ManagementBaseService.rulesPeriod = {
                        dateKey: templateData?.selectedDateKey || "today",
                    };
                }

                ManagementBaseModel.main.setProperty("/selectedDateKey", templateData?.selectedDateKey);
            },

            /**
             * Метод установки чекбоксов в попап материалов при выборе шаблона
             * @param {Object} typeMaterials - объект материала из шаблона
             */
            setMaterialsCheckboxTemplate(typeMaterials) {
                const materialsTree = ManagementBaseModel.main.getProperty("/materialsTree");
                const materialsTreeInObject = Helpers.module.Tree.getAllItemsInObject(materialsTree, "valueId");
                const materialsSelectedKeys = typeMaterials?.selectedKeys;

                if (materialsSelectedKeys?.length) {
                    typeMaterials?.selectedKeys?.forEach((key) => {
                        if (materialsTreeInObject[key]) materialsTreeInObject[key].selected = true;
                    });
                } else {
                    delete materialsTreeInObject.undefined;

                    Object.keys(materialsTreeInObject).forEach((key) => {
                        materialsTreeInObject[key].selected = false;
                    });
                }

                ManagementBaseModel.main.setProperty("/materialButtonText", typeMaterials?.materialButtonText);
                ManagementBaseModel.main.setProperty("/materialButtonTooltip", typeMaterials?.materialButtonTooltip);
            },

            /**
             * Метод установки чекбоксов в попап акций при выборе шаблона
             * @param {Object} templateData - объект акций из шаблона
             */
            setActionsCheckboxTemplate(templateData) {
                const selectedPromotionsKeys = templateData?.action?.selectedKeys;
                const promotionTree = ManagementBaseModel.main.getProperty("/actionsTree");
                const promotionTreeInObject = Helpers.module.Tree.getAllItemsInObject(promotionTree, "pricingActionId");

                if (selectedPromotionsKeys?.length) {
                    selectedPromotionsKeys.forEach((key) => {
                        promotionTreeInObject[key].selected = true;
                    });
                } else {
                    delete promotionTreeInObject.undefined;

                    Object.keys(promotionTreeInObject).forEach((key) => {
                        promotionTreeInObject[key].selected = false;
                    });
                }

                ManagementBaseModel.main.setProperty("/actionsButtonText", templateData?.action?.actionsButtonText);
                ManagementBaseModel.main.setProperty("/filters/action/selectedItems", selectedPromotionsKeys);
                ManagementBaseModel.main.setProperty("/actionsButtonTooltip", templateData?.action?.tooltip);
            },