# Кастомний набір іконок Med Vision

Малюємо партіями по 10. Кожен файл — заміна одного гліфа Material Symbols,
який застосунок уже малює (перелік і частоти — `docs/ICONS-INVENTORY.md`).

## Правила малювання (однакові в усіх партіях)

| Що | Значення |
|---|---|
| Сітка | `viewBox="0 0 24 24"`, `width`/`height` = 24 |
| Колір | **однотонні**: `stroke="currentColor"`, `fill="none"` — колір бере з тексту, тож теми й `--mv-*` працюють самі |
| Штрих | `stroke-width="1.7"` |
| Кути | `stroke-linecap="round"`, `stroke-linejoin="round"` — **заокруглення це головне правило набору** |
| Радіуси форм | `rx` ≥ 1.3 на прямокутниках; жодних гострих кутів, окрім вістря стрілок |
| Поле | значуще — в межах 2.6…21.4 |
| Суцільні елементи | лише крапки й дрібні маркери (`fill="currentColor" stroke="none"`) — набір лишається однотонним |

## Іменування

Файл називається **точно так, як гліф Material**, який він замінює
(`add.svg`, `content_copy.svg`, `restart_alt.svg`). Це не косметика: імена
гліфів розсипані по коду в чотирьох формах (вміст тега, `fontIcon`, проп
`icon:` у конфігах, обчислене ім'я — див. §1 і §9 інвентаря). Збіг імен
означає, що перемикання набору — це один реєстр в `app.config.ts`, а не обхід
сторінок.

## Як підключено

Набір живий у застосунку — і в клієнтському, і в бек-офісі. Три ланки:

1. `node scripts/build-icons-bundle.mjs` збирає з цих файлів
   `src/app/shared/ui/mv-icons.generated.ts`. Літерали, а не URL: інакше перший
   екран робив би 70 запитів і показував шрифтовий гліф, доки SVG їде, а кожна
   специфікація з іконкою лізла б у мережу.
2. `provideMvIcons()` (`shared/ui/mv-icon.ts`) реєструє набір у тому самому
   `MatIconRegistry`, що й Material Symbols — один рядок в `app.config.ts`.
3. Директива `MvIcon` із селектором `mat-icon` підміняє гліф там, де ім'я вже
   намальоване, і лишає шрифт для решти. Сторінки не редагуються: працюють
   обидві наявні форми запису (`<mat-icon>name</mat-icon>` і `fontIcon="name"`),
   зокрема конфігурована (`<mat-icon>{{ item.icon }}</mat-icon>`), причому ім'я
   можна міняти на льоту в обидва боки — з набору й назад на шрифт.

**Після нової партії достатньо перезібрати бандл** — іконки з'являться самі,
жодного реєстру правити не треба. `npm run check:icons` (у ланцюжку `npm test`)
падає, якщо бандл застарів або іконка порушує правила набору з таблиці вище.

Вимкнути шар цілком — прибрати `provideMvIcons()` з `app.config.ts`.

Поки набір неповний, на екрані сусідять два рисунки: свій SVG і гліф Material
Symbols. Це свідома проміжна ціна — альтернативою було б тримати намальоване в
шухляді до останньої іконки.

## Партії

| № | Тема | Гліфи |
|---|---|---|
| 1 | Ядро дій | `add` `delete` `edit` `check` `close` `refresh` `restart_alt` `print` `content_copy` `undo` |
| 2 | Шел і навігація | `menu` `menu_open` `search` `chevron_left` `chevron_right` `expand_more` `expand_less` `arrow_back` `more_vert` `settings` |
| 3 | Панель дій і таблиці | `save` `filter_list` `filter_list_off` `tune` `more_horiz` `remove` `restore` `done_all` `cancel` `open_in_new` |
| 4 | Стани, статуси, сигнали | `error` `warning` `info` `check_circle` `radio_button_unchecked` `lock` `lock_open` `block` `star` `favorite` |
| 5 | Предметні сутності | `contacts` `badge` `person` `person_add` `calendar_month` `event` `assignment` `shopping_cart` `receipt_long` `point_of_sale` |
| 6 | Оптика, товар, гроші, файли | `visibility` `eyeglasses` `lens` `palette` `category` `inventory_2` `percent` `payments` `upload_file` `download` |
| 7 | Розділи меню: організація | `menu_book` `store` `warehouse` `account_tree` `handshake` `admin_panel_settings` `group` `domain` `campaign` `design_services` |

**Прев'ю** — `docs/icons-preview.html` (світла й темна тема, 18/24/32 px).
Перегенерувати після нової партії: `node scripts/build-icons-preview.mjs`.

## Що лишилось (за інвентарем)

Далі найгустіші групи: розділи меню (`science`, `straighten`, `gradient`,
`blur_circular`, `sell`, `inventory`, `request_quote`, `card_membership`,
`loyalty`, `attach_money`, `rule`, `schedule`, `meeting_room`,
`support_agent`, `public`, `workspace_premium`, `construction`, `dashboard`,
`card_giftcard`), журнали й документи (`receipt`, `book`, `description`, `summarize`,
`insights`, `precision_manufacturing`, `widgets`), обмін і периферія
(`folder_open`, `playlist_add`, `qr_code_scanner`, `barcode_reader`,
`backspace`, `table_view`, `fact_check`, `build`, `attach_file`, `link`,
`history`, `sms`, `send`, `inbox`), пари станів з §9.1 (`check_box`,
`check_box_outline_blank`, `folder`, `label`, `light_mode`, `dark_mode`,
`brightness_auto`, `arrow_drop_down`).

**До малювання лишаються відкритими питання §10 інвентаря:** чи зводити
`filter_list`/`filter_alt`, `star`/`favorite`, `inventory`/`inventory_2`,
`receipt`/`receipt_long`, `contacts`/`badge` в один гліф. Поки що набір
малює обидва члени пари окремо — звести їх дешевше в коді, ніж роз'єднати
потім.
