import { access } from "./access.js";

const MENU = {
	Process: "Процесс",
	"Process.Create": "Процесс создание",
	"Process.View": "Процесс просмотр",
	Rule: "Правило",
	"Rule.Create": "Правило создание",
	"Rule.View": "Правило просмотр",
	"Rule.Edit": "Правило редактирование",
};

const USERS = {
	abs: "Николай",
	werd: "Иван",
	werdsf: "Алексей",
	sde: "Александр",
	"34sd6": "Евгений",
	"1cb1": "Дмитрий",
	"22xdg218": "Грирогий",
	sdf234: "Семен",
};

const accessTabel = (accessData) => {
	const tableAllAccessUsers = formatAllAccessUsers(accessData);
	const tableEachPage = formatTableEachPage(accessData.pages);

	return [...tableAllAccessUsers, ...tableEachPage];
};

const formatAllAccessUsers = (accessData) => {
	return accessData.usersWithAllAccess.reduce((accessAccumulate, userUid) => {
		accessData.pages.forEach((section) => {
			accessAccumulate.push({
				section: MENU[section.name],
				userName: USERS[userUid],
				userUid,
			});

			if (section.pageSections) {
				section.pageSections.forEach((subSection) => {
					accessAccumulate.push({
						section: MENU[section.name],
						subsection: MENU[subSection.name],
						userName: USERS[userUid],
						userUid,
					});
				});
			}
		});

		return accessAccumulate;
	}, []);
};

const formatTableEachPage = (pages) => {
	return pages.reduce((accessAccumulate, page) => {
		if (page.usersWithAllAccess) {
			page.usersWithAllAccess.forEach((userUid) => {
				accessAccumulate.push({
					section: MENU[page.name],
					userName: USERS[userUid],
					userUid,
				});
			});
		}

		if (page.pageSections) {
			page.pageSections.forEach((subPage) => {
				if (subPage.users) {
					subPage.users.forEach((userUid) => {
						accessAccumulate.push({
							section: MENU[page.name],
							subsection: MENU[subPage.name],
							userName: USERS[userUid],
							userUid,
						});
					});
				}
			});
		}

		if (page.users) {
			page.users.forEach((userUid) => {
				accessAccumulate.push({
					section: MENU[page.name],
					userName: USERS[userUid],
					userUid,
				});
			});
		}

		return accessAccumulate;
	}, []);
};
