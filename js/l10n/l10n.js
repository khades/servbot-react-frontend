import {
    vsprintf as printf
} from 'sprintf-js';
import config from '../../config';
var l10nEN = {
    SAVE: "Save",
    ADD_STRING: "Add string",
    DELETE: "Delete",
    SHOW_MORE: "Show more",
    TIME_SECONDS: "%s seconds",
    VAL_NOT_EMPTY: "Should me not empty",
    VAL_INT_MIN: "Minimal value - %s",
    WELCOME_TITLE: "Welcome to etozhebot",
    AUTOMESSAGES_TITLE: "Automessages on channel %s",
    AUTOMESSAGES_CREATE_NEW: "New",
    AUTOMESSAGES_DELETE_INACTIVE: "Delete inactive automessages",
    AUTOMESSAGES_CREATION: "Creating new automessage",
    AUTOMESSAGES_EDITING: "Editing automessage %s",
    AUTOMESSAGES_SETTINGS: "Automessage settings",
    AUTOMESSAGES_INFORMATION: "Automessage information",
    AUTOMESSAGES_NEXT_MESSAGETHRESHOLD: "Messages until next message will be sent: %s",
    AUTOMESSAGES_NEXT_DURATIONTHRESHOLD: "Next message will be sent after: %s",
    AUTOMESSAGES_EDIT_HISTORY: "Automessage history",
    AUTOMESSAGES_BODY: "Automessage body",
    AUTOMESSAGES_MESSAGE_THRESHOLD: "Chat messages count, before sending this automessage",
    AUTOMESSAGES_DURATION_THRESHOLD: "Period (in seconds) between automessages",
    AUTOMESSAGES_SEND_DURING_GAME: "Game on stream, this message will be sent on",
    BANS_TITLE: "Bans on channel %s",
    BANS_TIMEOUT: "Timeout for %s seconds",
    BANS_UNTIMEOUT: "Unbanned (timeout lifted)",
    BANS_PERMANENT: "Permanent ban",
    BANS_UNBAN: "Unbanned",

    CHANNEL_TITLE: "Channel %s",
    YOURE_MODERATOR: "You're moderator on channel %s",
    YOURE_NOT_MODERATOR: "You're not moderator on channel %s",
    EXTERNAL_SERVICES_TITLE: "External services for channel %s",
    EXTERNAL_SERVICES_VKGROUP: "VKontakte group integration",
    EXTERNAL_SERVICES_VKGROUP_NAME: "VKontakte group name",
    EXTERNAL_SERVICES_VKGROUP_LAST_MESSAGE: "VKontakte last message in group",
    EXTERNAL_SERVICES_VKGROUP_NOTIFY: "Post message in chat on new post in VKontakte Group",
    EXTERNAL_SERVICES_TWITCHDJ: "TwitchDJ integration",
    EXTERNAL_SERVICES_TWITCHDJ_ID: "TwitchDJ channel ID",
    EXTERNAL_SERVICES_TWITCHDJ_NOTIFY: "Post message in chat on song change",
    USER_LIST: "Users on channel %s",
    USER_LIST_TOP_100_SHOWN: "Last 100 active users are shown",
    USER_LIST_INPUT_PLACEHOLDER: "🔍 Search by username",
    USER_LOGS: "Chat logs of user %s on channel %s",
    USER_BANS: "Bans of user %s on channel %s",
    USER_AKA: "Also known as %s",
    MAIN_PAGE: "Main page",
    AVAILABLE_CHANNELS_TO_MOD: "Channels, available to control",
    CHANNEL: "Channel %s",
    MESSAGE_LOGS: "Message logs",
    BANS: "Bans",
    COMMANDS: "Chat Commands",
    SUBALERTS: "Subscription alerts",
    AUTOMESSAGES: "Automessages",
    SONGREQUESTS: "Song requests",
    SUBDAYS: "Subdays",
    SUBSCRIPTIONS: "Subscriptions",
    EXTERNAL_SERVICES: "External Services",
    SUBTRAIN: "Subtrain",
    SUBALERTS_TITLE: "Subscription alerts on channel %s",
    SUBALERTS_EDIT_HISTORY: "Subalerts edit history",
    SUBALERTS_ENABLED: "Enable subscription alerts",
    SUBALERTS_FOLLOWER_ALERT: "Follower alert",
    SUBALERTS_SUB_ALERT: "%s subscription alert",
    SUBALERTS_RESUB_ALERT: "%s sub resubscription alert",
    SUBALERTS_RESUB_ALERT_SMILES: "%s sub resubscription alert smiles",
    INVALID_TEMPLATE: "Invalid template",
    SUBDAYS_TITLE: "Subdays on channel %s",
    SUBDAY_IS_ACTIVE: "Subday is active",
    SUBDAY_IS_CLOSED: "Subday is closed",
    SUBDAY_WINNERS: "Winners",
    SUBDAY_REMOVE_WINNER: "Remove winner",
    SUBDAY_RANDOMIZE_WINNER: "Randomize winner",
    SUBDAY_RANDOMIZE_WINNER_SUBS: "Randomize winner from subscribers",
    SUBDAY_RANDOMIZE_WINNER_NONSUBS: "Randomize winner from non-subscribers",

    SUBDAY_CLOSE: "Close subday",
    SUBDAY_WINNERS_HISTORY: "Winners history",
    SUBDAY_VOTES: "Votes",
    SUBDAY_IS_CLOSED_BY: "Subday is closed by moderator %s",
    SUBSCRIPTIONS_TITLE: "Subscriptions on channel %s",
    SUBSCRIPTIONS_LAST_THREE_DAYS: "For last three days: %s subscriptions",
    SUBSCRIPTIONS_SINCE_DATE: "Since %s: %s subscriptions",
    MARK_AS_READ: "Mark as read",
    SUBSCRIPTIONS_SHOW_LAST_THREE_DAYS: "Show subscriptions for last three days",
    SUBTRAIN_TITLE: "Subtrain on channel %s",
    SUBTRAIN_ENABLED: "Enable subtrain",
    SUBTRAIN_COUNT_ONLY_NEW_SUBS: "Count only new subs",
    SUBTRAIN_NEXT_NOTIFICATION: "Next expiration notification: %s",
    SUBTRAIN_END_TIME: "End of current subtrain: %s",
    SUBTRAIN_SIZE: "Subtrain size: %s",
    SUBTRAIN_PARTICIPANTS: "Current subtrain participants: %s",
    SUBTRAIN_EXPIRATION_DURATION: "Subtrain expiration duration",
    SUBTRAIN_NOTIFICATION_DURATION: "Subtrain expiration notification duration",
    SUBTRAIN_CHANGE_WARNING: "IF YOU CHANGE THESE FIELDS, CURRENT SUBTRAIN WILL BE RESET",
    SUBTRAIN_ADDITIONAL_SUBMESSAGE: "Addended subscription notification message",
    SUBTRAIN_NOTIFICAION_BODY: "Subtrain expiration notification message",
    SUBTRAIN_EXPIRATION_BODY: "Subtrain expiration message",
    TEMPLATE_TITLE: "Command %s on channel %s",
    REDIRECTING: "Redirecting...",
    TEMPLATE_TO_ALIAS: "Convert to alias",
    TEMPLATE_TO_NORMAL: "Convert to normal command",
    TEMPLATE_GO_TO_ORIGINAL: "Jump to original command",
    TEMPLATE_HIDE_EXTENDED_SETTINGS: "Hide extended settings",
    TEMPLATE_SHOW_EXTENDED_SETTINGS: "Show extended settings",
    TEMPLATE_SHOW_ONLINE: "Show if stream is online",
    TEMPLATE_SHOW_OFFLINE: "Show if stream is offline",
    TEMPLATE_IGNORE_DEBOUNCER: "Ignore debouncer",
    TEMPLATE_ONLY_PRIVATE: "Whisper only",
    TEMPLATE_BODY_ERROR: "Invalid template body",
    TEMPLATE_COMMAND_BODY: "Original command body",
    TEMPLATE_PREVENT_REDIRECT: "Prevent redirecting message to user, if username is set after command name",
    TEMPLATE_ENABLE_STRING_RANDOMIZER: "Enable string randomizer",
    TEMPLATE_STRING_RANDOMIZER: "String randomizer",
    TEMPLATE_IMPORT_FROM_STRING: "Import from string, delimiter is \",\"",
    TEMPLATE_PARSE_STRING: "Parse string into variants",
    TEMPLATE_ENABLE_INTEGER_RANDOMIZER: "Enable integer randomizer",
    TEMPLATE_INTEGER_RANDOMIZER: "Integer randomizer",
    TEMPLATE_INTEGER_RANDOMIZER_LOWER_LIMIT: "Integer randomizer lower limit",
    TEMPLATE_INTEGER_RANDOMIZER_UPPER_LIMIT: "Integer randomizer upper limit",
    TEMPLATE_INTEGER_RANDOMIZER_TIMEOUT: "Timeout for randomized amount of seconds",
    TEMPLATE_MESSAGE: "Command message",
    TEMPLATE_DELETE: "Delete command",
    TEMPLATE_ALIAS_TO: "Alias to another command",
    TEMPLATE_EDIT_HISTORY: "Command edit history",
    TEMPLATES_TITLE: "Commands on channel %s",
    TEMPLATES_CREATE_GOTO: "Create new command or jump to existing one",
    TEMPLATES_NEW: "New",
    TEMPLATES_LIST: "Show commands",
    TEMPLATES_SHOW_ALL: "Show all",
    TEMPLATES_SHOW_ACTIVE: "Show active",
    PROCEED: "Proceed",
    TEMPLATES_COMMAND_LIST: "List of commands",
    COMMAND: "Command",
    ALIAS: "Alias",
    DELETED: "Deleted",
    EXTENDED_SETTINGS: "Extended settings",
    AUTOMESSAGES_SHOW_ALL: "Show all",
    AUTOMESSAGES_SHOW_ACTIVE: "Show active",
    ALIAS_TO: "Alias to \"%s\"",
    SAVE_SUCCESSFULL: "Saved",
    CREATE_SUCCESSFULL: "Done",

    SONGREQUEST_CANT_PLAY_DUE_YOUTUBE: "Skipping track \"%s\" due to YouTube restriction",
    SONGREQUEST_CANT_PLAY_DUE_TWITCH: "Skipping track \"%s\" due to Twitch restriction",
    SONGREQUEST_CANT_PLAY_DUE_CHANNEL: "Skipping track \"%s\", its banned on that channel",
    SONGREQUEST_CANT_PLAY_DUE_TAG: "Skipping track \"%s\", its has restricted tag added",

    SONGREQUESTS_TITLE: "Song requests on channel %s",
    SONGREQUESTS_RETURN_TO_PLAYLIST: "Return to playlist",
    SONGREQUESTS_SHOW_SETTINGS: "Show Settings",
    SONGREQUESTS_SHOW_TRACK_LIBRARY: "Show Track library",

    SONGREQUESTS_PLAY_NOW: "Play now",
    SONGREQUESTS_PLAY_NEXT: "Play next",
    SONGREQUESTS_DELETE: "Delete",
    SONGREQUESTS_BAN: "Ban",
    SONGREQUESTS_SUBS_ONLY: "Allows requests only from subs",
    SONGREQUESTS_PLAYLIST_LENGTH: "Playlist length",
    SONGREQUESTS_MAX_VIDEO_LENGTH: "Maximum track length (in seconds)",
    SONGREQUESTS_MIN_VIDEO_LENGTH: "Minimum track length (in seconds)",
    SONGREQUESTS_MAX_REQUESTS_PER_USER: "Maximum amount of requests per user",
    SONGREQUESTS_MINIMAL_AMOUNT_OF_VIEWS: "Minimal amount of views on track",
    SONGREQUESTS_MORE_LIKES_THAN_DISLIKES: "Require track to have more likes than dislikes",
    SONGREQUESTS_ALLOW_OFFLINE: "Allow offline requests",
    SONGREQUESTS_SKIP_IF_RESTRICTED_TAG_ADDED: "Remove track automatically if restricted tag is added",
    SONGREQUESTS_LIBRARY: "Track library",
    SONGREQUESTS_BANNED_TRACKS: "Banned tracks",
    SONGREQUESTS_UNBAN_TRACK: "Unban track",
    SONGREQUESTS_SHOW_BANNED_TRACKS: "Show banned tracks",
    SONGREQUEST_UNBANNED: "Track \"%s\" is no longer banned",
    HUMAN_READABLE_DURATION: "Human readable duration",
    REASON: "Reason",
    CREATE: "Create",
    SUBDAY_NAME: "Name of new subday",
    SUBDAY_ALLOW_NON_SUBS: "Allow nonsubscribers to participate",
    SUBDAY_CREATE: "Create",
    SUBDAY_LIST: "Return to list",
    SUBDAY_ALREADY_ACTIVE: "There's already active subday, close it and try again",
    LANGUAGE: "Localisation of app"
}

var l10nRU = {
    SAVE: "Сохранить",
    ADD_STRING: "Добавить строку",
    DELETE: "Удалить",
    SHOW_MORE: "Показать больше",
    TIME_SECONDS: "%s секунд",
    VAL_NOT_EMPTY: "Не должно быть пустым",
    VAL_INT_MIN: "Минимальное значение - %s",
    WELCOME_TITLE: "Добро пожаловать в etozhebot",
    AUTOMESSAGES_TITLE: "Автосообщения на канале %s",
    AUTOMESSAGES_CREATE_NEW: "Создать",
    AUTOMESSAGES_DELETE_INACTIVE: "Удалить неактивные автосообщения",
    AUTOMESSAGES_CREATION: "Создание автосообщения",
    AUTOMESSAGES_EDITING: "Редактирование автосообщения %s",
    AUTOMESSAGES_SETTINGS: "Настройки автосообщения",
    AUTOMESSAGES_INFORMATION: "Информация о автосообщении",
    AUTOMESSAGES_NEXT_MESSAGETHRESHOLD: "Сообщений до следующей посылки сообщения: %s",
    AUTOMESSAGES_NEXT_DURATIONTHRESHOLD: "Время следующего срабатывания: %s",
    AUTOMESSAGES_EDIT_HISTORY: "История автосообщения",
    AUTOMESSAGES_BODY: "Тело сообщения",
    AUTOMESSAGES_DURATION_THRESHOLD: "Период (в секундах) между автосообщениями",
    AUTOMESSAGES_MESSAGE_THRESHOLD: "Количество сообщений, после которого автосообщение будет отправлено",
    AUTOMESSAGES_SEND_DURING_GAME: "Игра на стриме, во время которой это сообщение будет отправляться",
    BANS_TITLE: "Баны на канале %s",
    BANS_TIMEOUT: "Таймаут на %s секунд",
    BANS_PERMANENT: "Перманентный бан",
    BANS_UNTIMEOUT: "Таймаут снят",
    BANS_UNBAN: "Бан снят",
    CHANNEL_TITLE: "Канал %s",
    YOURE_MODERATOR: "Вы - модератор на канале %s",
    YOURE_NOT_MODERATOR: "Вы не модератор на канале %s",
    EXTERNAL_SERVICES_TITLE: "Интеграция внешних сервисов на канале %s",
    EXTERNAL_SERVICES_VKGROUP: "Интеграция группы ВКонтакте",
    EXTERNAL_SERVICES_VKGROUP_NAME: "Имя группы ВКонтакте",
    EXTERNAL_SERVICES_VKGROUP_LAST_MESSAGE: "Последнее сообщение в группе ВКонтакте",
    EXTERNAL_SERVICES_VKGROUP_NOTIFY: "Писать сообщение в чат при добавлении нового сообщения в группу",
    EXTERNAL_SERVICES_TWITCHDJ: "Интеграция TwitchDJ",
    EXTERNAL_SERVICES_TWITCHDJ_ID: "Идентификатор канала TwitchDJ",
    EXTERNAL_SERVICES_TWITCHDJ_NOTIFY: "Писать сообщение в чат при смене трека",
    USER_LIST: "Пользователи на канале %s",
    USER_LIST_TOP_100_SHOWN: "Показаны последние 100 активных пользователей",
    USER_LIST_INPUT_PLACEHOLDER: "🔍 Поиск по имени пользователя",
    USER_LOGS: "Сообщения пользователя %s на канале %s",
    USER_BANS: "Баны пользователя %s на канале %s",
    USER_AKA: "Так же известен как %s",
    MAIN_PAGE: "Главная страница",
    AVAILABLE_CHANNELS_TO_MOD: "Каналы, доступные для управления",
    CHANNEL: "Канал %s",
    MESSAGE_LOGS: "Логи сообщений",
    BANS: "Баны",
    COMMANDS: "Чат-команды",
    SUBALERTS: "Оповещения о подписке",
    AUTOMESSAGES: "Автосообщения",
    SONGREQUESTS: "Заказы песен",
    SUBDAYS: "Сабдеи",
    SUBSCRIPTIONS: "Подписки",
    EXTERNAL_SERVICES: "Внешние сервисы",
    SUBTRAIN: "Сабтрейн",
    SUBALERTS_TITLE: "Оповещения о подписках на канале %s",
    SUBALERTS_EDIT_HISTORY: "История редактирований оповещений о подписке",
    SUBALERTS_ENABLED: "Включить оповещения о подписке",
    SUBALERTS_FOLLOWER_ALERT: "Оповещение о новом follower",
    SUBALERTS_SUB_ALERT: "Оповещение о подписке за %s",
    SUBALERTS_RESUB_ALERT: "Оповещение о переподписке за %s",
    SUBALERTS_RESUB_ALERT_SMILES: "Смайлики в сообщении о переподписке за %s",
    INVALID_TEMPLATE: "Некорректный шаблон",
    SUBDAYS_TITLE: "Сабдеи на канале %s",
    SUBDAY_IS_ACTIVE: "Сабдей активен",
    SUBDAY_IS_CLOSED: "Сабдей закрыт",
    SUBDAY_WINNERS: "Победители",
    SUBDAY_REMOVE_WINNER: "Удалить победителя",
    SUBDAY_RANDOMIZE_WINNER: "Зарандомить победителя",
    SUBDAY_RANDOMIZE_WINNER_SUBS: "Зарандомить победителя среди подписчиков",
    SUBDAY_RANDOMIZE_WINNER_NONSUBS: "Зарандомить победителя среди не-подписчиков",
    SUBDAY_CLOSE: "Закрыть сабдей",
    SUBDAY_WINNERS_HISTORY: "История победителей",
    SUBDAY_VOTES: "Голоса",
    SUBDAY_IS_CLOSED_BY: "Сабдей закрыт модератором %s",
    REDIRECTING: "Перенаправляем...",

    SUBSCRIPTIONS_TITLE: "Подписки на канале %s",
    SUBSCRIPTIONS_LAST_THREE_DAYS: "За последние три дня: %s подписок",
    SUBSCRIPTIONS_SINCE_DATE: "После %s: %s подписок",
    MARK_AS_READ: "Отметить как прочитанное",
    SUBSCRIPTIONS_SHOW_LAST_THREE_DAYS: "Показать подписки за последние три дня",
    SUBTRAIN_TITLE: "Сабтрейн на канале %s",
    SUBTRAIN_ENABLED: "Включить сабтрейн",
    SUBTRAIN_COUNT_ONLY_NEW_SUBS: "Учитывать только новых подписчиков",
    SUBTRAIN_NEXT_NOTIFICATION: "Следующее уведомление о предстоящем окончании сабтрейна: %s",
    SUBTRAIN_END_TIME: "Конец текущего сабтрейна: %s",
    SUBTRAIN_SIZE: "Размер сабтрейна: %s",
    SUBTRAIN_PARTICIPANTS: "Участники текущего сабтрейна: %s",
    SUBTRAIN_EXPIRATION_DURATION: "Длительность сабтрейна",
    SUBTRAIN_NOTIFICATION_DURATION: "Время уведомления об предстоящем окончании сабтрейна со старта сабтрейна",
    SUBTRAIN_CHANGE_WARNING: "ЕСЛИ ВЫ ИЗМЕНИТЕ ДАННЫЕ ЗНАЧЕНИЯ, САБТРЕЙН СБРОСИТСЯ",
    SUBTRAIN_ADDITIONAL_SUBMESSAGE: "Добавочное сообщение к сообщению о подписке",
    SUBTRAIN_NOTIFICAION_BODY: "Сообщение об предстоящем окончании сабтрейна",
    SUBTRAIN_EXPIRATION_BODY: "Сообщение об окончании сабтрейна",
    TEMPLATE_TITLE: "Команда %s на канале %s",
    TEMPLATE_GO_TO_ORIGINAL: "Перейти к оригинальной команде",
    TEMPLATE_HIDE_EXTENDED_SETTINGS: "Спрятать расширенные настройки",
    TEMPLATE_SHOW_EXTENDED_SETTINGS: "Показать расширенные настройки",
    TEMPLATE_SHOW_ONLINE: "Показывать если стрим онлайн",
    TEMPLATE_SHOW_OFFLINE: "Показывать если стрим оффлайн",
    TEMPLATE_IGNORE_DEBOUNCER: "Игнорировать дебаунсер",
    TEMPLATE_ONLY_PRIVATE: "Посылать сообщение только в личку",
    TEMPLATE_BODY_ERROR: "Неверное тело шаблона",
    TEMPLATE_COMMAND_BODY: "Тело шаблона оригинальной команды",

    TEMPLATE_PREVENT_REDIRECT: "Не перенапралять сообщение пользователю, если имя пользователя указано после команды",
    TEMPLATE_ENABLE_STRING_RANDOMIZER: "Включить рандомизатор строк",
    TEMPLATE_STRING_RANDOMIZER: "Рандомизатор строк",
    TEMPLATE_IMPORT_FROM_STRING: "Импортировать из строки, разделитель - \",\"",
    TEMPLATE_PARSE_STRING: "Разобрать строку на варианты",
    TEMPLATE_ENABLE_INTEGER_RANDOMIZER: "Включить рандомизатор чисел",
    TEMPLATE_INTEGER_RANDOMIZER: "Рандомизатор чисел",
    TEMPLATE_INTEGER_RANDOMIZER_LOWER_LIMIT: "Нижний предел рандомизатора чисел",
    TEMPLATE_INTEGER_RANDOMIZER_UPPER_LIMIT: "Верхний предел рандомизатора чисел",
    TEMPLATE_INTEGER_RANDOMIZER_TIMEOUT: "Забанить на выпавшее количество  секунд",
    TEMPLATE_MESSAGE: "Тело команды",
    TEMPLATE_DELETE: "Удалить команду",
    TEMPLATE_ALIAS_TO: "Ссылка на другую команду",
    TEMPLATE_TO_ALIAS: "Превратить в ссылку на другую команду",
    TEMPLATE_TO_NORMAL: "Превратить в обычную команду",

    TEMPLATE_EDIT_HISTORY: "История редактирования команды",
    TEMPLATES_TITLE: "Команды на канале %s",
    TEMPLATES_CREATE_GOTO: "Создать новую команду или перейти к существующей",
    TEMPLATES_NEW: "Создать",
    TEMPLATES_LIST: "Показать команды",
    TEMPLATES_SHOW_ALL: "Показать все",
    TEMPLATES_SHOW_ACTIVE: "Показать только активные",
    PROCEED: "Перейти",
    TEMPLATES_COMMAND_LIST: "Список команд",
    COMMAND: "Команда",
    ALIAS: "Ссылка",
    DELETED: "Удалено",
    EXTENDED_SETTINGS: "Расширенные настройки",
    AUTOMESSAGES_SHOW_ALL: "Показать все",
    AUTOMESSAGES_SHOW_ACTIVE: "Показать только активные",
    ALIAS_TO: "Ссылка на команду \"%s\"",
    CREATE_SUCCESSFULL: "Создание прошло успешно",

    SAVE_SUCCESSFULL: "Сохранение прошло успешно",
    SONGREQUEST_CANT_PLAY_DUE_YOUTUBE: "Трек \"%s\" удалён из списка заказов из-за ограничений сервиса YouTube",

    SONGREQUEST_CANT_PLAY_DUE_TWITCH: "Трек \"%s\" удалён из списка заказов из-за ограничений сервиса Twitch",
    SONGREQUEST_CANT_PLAY_DUE_CHANNEL: "Трек \"%s\" удалён из списка заказов, и заблокирован на этом канале",
    SONGREQUEST_CANT_PLAY_DUE_TAG: "Трек \"%s\" удалён из списка заказов, так как у него появился запрещённый на этом канале тег",
    SONGREQUESTS_TITLE: "Заказы песен на канале %s",
    SONGREQUESTS_RETURN_TO_PLAYLIST: "Вернутся к списку заказов",
    SONGREQUESTS_SHOW_SETTINGS: "Показать настройки",
    SONGREQUESTS_SHOW_TRACK_LIBRARY: "Показать библиотеку треков",

    SONGREQUESTS_PLAY_NOW: "Воспроизвести сейчас",
    SONGREQUESTS_PLAY_NEXT: "Воспроизвести следующим",
    SONGREQUESTS_DELETE: "Удалить",
    SONGREQUESTS_BAN: "Заблокировать",
    SONGREQUESTS_SUBS_ONLY: "Разрешить заказы только сабам",
    SONGREQUESTS_PLAYLIST_LENGTH: "Длина списка заказов",
    SONGREQUESTS_MAX_VIDEO_LENGTH: "Максимальная длительность заказа (в секундах)",
    SONGREQUESTS_MIN_VIDEO_LENGTH: "Минимальная длительность заказа (в секундах)",

    SONGREQUESTS_MAX_REQUESTS_PER_USER: "Максимальное количество заказов для одного пользователя",
    SONGREQUESTS_MINIMAL_AMOUNT_OF_VIEWS: "Минимальное количество просмотров на заказе",
    SONGREQUESTS_MORE_LIKES_THAN_DISLIKES: "Требовать чтобы заказ имел больше лайков чем дизлайков",
    SONGREQUESTS_ALLOW_OFFLINE: "Разрешить заказы вне стрима",
    SONGREQUESTS_SKIP_IF_RESTRICTED_TAG_ADDED: "Автоматически удалять трек если добавлен запрещённый трек к видео",
    SONGREQUESTS_LIBRARY: "Библиотека треков",
    SONGREQUESTS_BANNED_TRACKS: "Заблокированные треки",
    SONGREQUESTS_UNBAN_TRACK: "Разблокировать",
    SONGREQUESTS_SHOW_BANNED_TRACKS: "Показать заблокированные треки",
    SONGREQUEST_UNBANNED: "Трек \"%s\" разблокирован",
    HUMAN_READABLE_DURATION: "Итоговая длительность",
    REASON: "Причина",
    CREATE: "Создать",
    SUBDAY_NAME: "Имя нового сабдня",
    SUBDAY_ALLOW_NON_SUBS: "Разрешить не подписанным пользователям учавствовать",
    SUBDAY_CREATE: "Создать новый",
    SUBDAY_LIST: "Вернуться к списку",
    SUBDAY_ALREADY_ACTIVE: "Существует активный сабдей, закройте его и попробуйте снова",
    LANGUAGE: "Язык приложения"

}

var l10n = {
    "en": l10nEN,
    "ru": l10nRU
}
var langs = ["en", "ru"]
var currentl10n
var lang = localStorage.getItem("lang")
if (lang == null)
    lang = config.defaultLang
if (!!l10n[lang])
    currentl10n = l10n[lang]
else
    currentl10n = l10nEN


function setLang(newlang) {
    if (!!l10n[newlang])
        currentl10n = l10n[newlang]
    lang = newlang
    localStorage.setItem("lang", newlang.toLowerCase())
}

function get() {
    var string = currentl10n[arguments[0]]
    if (!string) {
        if (!!l10nEN[arguments[0]]) {
            string = l10nEN[arguments[0]]
        } else {
            return arguments[0]
        }
    }
    if (arguments.length > 1)
        return printf(string, Array.prototype.slice.call(arguments, 1))
    return string
}

export default {
    get: get,
    setLang: setLang,
    getLang() {
        return lang
    },
    langs: langs
};