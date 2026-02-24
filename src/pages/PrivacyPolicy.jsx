export const PrivacyPolicy = () => {
    // Переменные для повторяющихся стилей (DRY подход)
    const styles = {
        // Цветовая палитра
        colors: {
            background: 'bg-gray-900',
            text: {
                primary: 'text-gray-100',
                secondary: 'text-gray-300',
                muted: 'text-gray-400',
                accent: 'text-gray-50',
                border: 'border-gray-700'
            }
        },
        // Типографика
        typography: {
            h1: 'text-3xl sm:text-4xl font-light tracking-tight',
            h2: 'text-xl sm:text-2xl font-medium tracking-tight',
            h3: 'text-lg font-medium',
            body: 'text-gray-300',
            bold: 'font-medium text-gray-50'
        },
        // Отступы и контейнеры
        spacing: {
            section: 'space-y-4',
            paragraph: 'space-y-3',
            list: 'list-disc pl-8 space-y-2',
            listDecimal: 'list-decimal pl-8 space-y-2'
        },
        // Границы и разделители
        borders: {
            top: 'border-t border-gray-700',
            bottom: 'border-b border-gray-700',
            light: 'border-gray-700'
        }
    };

    return (
        <div className={`min-h-screen ${styles.colors.background} pt-32 pb-12 px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-4xl mx-auto">
                {/* Заголовок страницы */}
                <h1 className={`${styles.typography.h1} ${styles.colors.text.accent} mb-8 pb-4 ${styles.colors.text.border} ${styles.borders.bottom}`}>
                    Политика конфиденциальности обработки персональных данных
                </h1>

                {/* Основной контент */}
                <div className={`space-y-8 ${styles.typography.body}`}>

                    {/* 1. Общие положения */}
                    <section className={styles.spacing.section}>
                        <h2 className={`${styles.typography.h2} ${styles.colors.text.accent} mb-4`}>
                            1. Общие положения
                        </h2>

                        <p>
                            <span className={styles.typography.bold}>1.1.</span>
                            <span className={styles.colors.text.secondary}> Настоящая Политика конфиденциальности персональных данных применяется при использовании сайта www.sklados.pro</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>1.2.</span>
                            <span className={styles.colors.text.secondary}> Политика конфиденциальности разработана в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» (далее – Федеральный закон «О персональных данных»), иных федеральных законов, регулирующих вопросы обработки персональных данных, а также принятых во их исполнение подзаконных нормативных правовых актов.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>1.3.</span>
                            <span className={styles.colors.text.secondary}> Использование сервисов Сайта Пользователем Сайта означает его безоговорочное согласие с Политикой конфиденциальности и условиями обработки персональных данных Пользователя Сайта.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>1.4.</span>
                            <span className={styles.colors.text.secondary}> В случае несогласия с условиями Политики конфиденциальности Пользователь Сайта должен прекратить использование Сайта.</span>
                        </p>
                    </section>

                    {/* 2. Основные положения (продолжение с 2.5) */}
                    <section className={styles.spacing.section}>
                        <h2 className={`${styles.typography.h2} ${styles.colors.text.accent} mb-4`}>
                            2. Основные положения
                        </h2>

                        <p>
                            <span className={styles.typography.bold}>2.5.</span>
                            <span className={styles.colors.text.secondary}> Политика конфиденциальности определяет основные цели и условия обработки персональных данных Пользователей Сайта и сведения о реализуемых требованиях к защите персональных данных Пользователей Сайта.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>2.6.</span>
                            <span className={styles.colors.text.secondary}> Политика конфиденциальности применяется только к Сайту. Администрация Сайта не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь Сайта может перейти по ссылкам, доступным на Сайте.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>2.7.</span>
                            <span className={styles.colors.text.secondary}> Администрация Сайта является оператором только тех персональных данных, которые получает от Пользователей Сайта при использовании Сайта с их согласия, предоставляемого путем совершения Пользователем Сайта конклюдентных действий на Сайте.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>2.8.</span>
                            <span className={styles.colors.text.secondary}> Администрация Сайта не проверяет достоверность персональных данных, предоставляемых Пользователем Сайта на Сайте. Администрация Сайта исходит из того, что Пользователь Сайта предоставляет достоверные и достаточные персональные данные и поддерживает эту информацию в актуальном состоянии. Всю ответственность за последствия предоставления недостоверных или недействительных персональных данных несет лично Пользователь Сайта.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>2.9.</span>
                            <span className={styles.colors.text.secondary}> Пользователь Сайта подтверждает, что, предоставляя свои персональные данные и давая согласие на их обработку, он действует добровольно, своей волей и в своем интересе, а также подтверждает свою дееспособность.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>2.10.</span>
                            <span className={styles.colors.text.secondary}> Предоставляя свои персональные данные, Пользователь Сайта соглашается с тем, что предоставленные им персональные данные будут обрабатываться ООО «СКАЛА ГРУПП» как с использованием средств автоматизации, так и без использования таких средств.</span>
                        </p>

                        <div className={styles.spacing.paragraph}>
                            <p>
                                <span className={styles.typography.bold}>2.11.</span>
                                <span className={styles.colors.text.secondary}> Персональные данные, разрешённые к обработке в рамках Политики конфиденциальности, не являются специальными или биометрическими, предоставляются Пользователем Сайта путём заполнения специальных форм на Сайте бессрочно (вплоть до отзыва Пользователем Сайта своего согласия на обработку персональных данных). В зависимости от заполняемой Пользователем веб-формы, данные включают в себя следующую информацию:</span>
                            </p>

                            <ul className={styles.spacing.list}>
                                <li className={styles.colors.text.secondary}>фамилию, имя, отчество;</li>
                                <li className={styles.colors.text.secondary}>дата рождения;</li>
                                <li className={styles.colors.text.secondary}>контактный телефон;</li>
                                <li className={styles.colors.text.secondary}>адрес электронной почты (e-mail);</li>
                                <li className={styles.colors.text.secondary}>адрес проживания.</li>
                            </ul>

                            <p className={styles.colors.text.secondary}>
                                Заполняя соответствующие веб-формы и/или отправляя свои персональные данные
                                Администрации Сайта, Пользователь Сайта выражает свое согласие с Политикой
                                конфиденциальности.
                            </p>
                        </div>

                        <div className={styles.spacing.paragraph}>
                            <p>
                                <span className={styles.typography.bold}>2.12.</span>
                                <span className={styles.colors.text.secondary}> Администрация Сайта также принимает меры по защите персональных данных, которые автоматически передаются в процессе посещения страниц Сайта, в том числе из файлов cookie:</span>
                            </p>

                            <ul className={styles.spacing.list}>
                                <li className={styles.colors.text.secondary}>IP адрес, присвоенный компьютеру
                                    Пользователя в момент посещения Сайта;
                                </li>
                                <li className={styles.colors.text.secondary}>Полученные данные о сессиях.</li>
                            </ul>

                            <p className={styles.colors.text.secondary}>
                                Cookie-файлы могут быть как «сеансовые», так и «постоянные».
                            </p>

                            <p>
                                <span className={styles.typography.bold}>Сеансовые cookie-файлы</span>
                            </p>

                            <p className={styles.colors.text.secondary}>
                                Администрация Сайта использует сеансовые cookie-файлы, чтобы присвоить уникальный
                                идентификационный номер компьютеру Пользователя Сайта при каждом посещении Сайта, при
                                этом после закрытия браузера они удаляются. Такие файлы применяются также для анализа
                                работы Пользователя Сайта с Сайтом (изучается посещение страниц, используемых ссылок и
                                время пребывания Пользователя на той или иной странице).
                            </p>

                            <p>
                                <span className={styles.typography.bold}>Постоянные cookie-файлы</span>
                            </p>

                            <p className={styles.colors.text.secondary}>
                                Сайт распознает постоянные cookie, которые хранятся на жестких дисках компьютеров
                                Пользователей Сайта, и, присваивая устройствам Пользователей Сайта уникальные
                                идентификаторы, Администрация Сайта может создать базу данных о действиях и
                                предпочтениях Пользователей Сайта (в частности, о частоте посещения и периодичности
                                возвращения Пользователей Сайта, об их предпочтениях на Сайте). Важно, что cookie-файлы
                                не содержат личных данных Пользователей Сайта, они только фиксируют их действия.
                            </p>

                            <p>
                                <span className={styles.typography.bold}>Согласие на использование cookie</span>
                            </p>

                            <p className={styles.colors.text.secondary}>
                                Сеансовые cookie-файлы не требуют предварительного согласия Пользователей Сайта;
                                постоянные cookie-файлы такого согласия требуют.
                            </p>

                            <p className={styles.colors.text.secondary}>
                                Управлять cookie-файлами Пользователи Сайта могут через настройки веб-браузера. Таким
                                образом, у них есть возможность разрешить использование всех cookie-файлов,
                                интегрированных в страницы или заблокировать cookie-файлы, а также включить
                                использование cookie-файлов по запросу, принимать или отклонять cookie-файлы. Управление
                                cookie-файлами различается в зависимости от используемого браузера.
                            </p>

                            <p className={styles.colors.text.secondary}>
                                При этом применяя технологию cookie, Администрация Сайта не хранит и не использует
                                никакие конкретные данные о Пользователях Сайта. Администрация Сайта обращает внимание,
                                что Пользователь Сайта вправе настроить браузер на отказ от регистрации обращений к
                                Сайту или на предупреждения о запросах на подобную регистрацию. Отключение «cookie»
                                может повлечь невозможность доступа к Сайту.
                            </p>
                        </div>

                        <p>
                            <span className={styles.typography.bold}>2.13.</span>
                            <span className={styles.colors.text.secondary}> Если Администрация Сайта не сможет никаким образом соотнести информацию, указанную в пунктах 2.11-2.12 Политики конфиденциальности с Пользователем Сайта (физическим лицом), Администрация Сайта не будет считать данную информацию персональными данными.</span>
                        </p>
                    </section>

                    {/* 3. Цели обработки персональных данных */}
                    <section className={styles.spacing.section}>
                        <h2 className={`${styles.typography.h2} ${styles.colors.text.accent} mb-4`}>
                            3. Цели обработки персональных данных Пользователей Сайта
                        </h2>

                        <p>
                            <span className={styles.typography.bold}>3.1.</span>
                            <span className={styles.colors.text.secondary}> Сайт собирает и хранит только те персональные данные Пользователя Сайта, которые необходимы для предоставления сервисов или исполнения соглашений и договоров с Пользователем Сайта, за исключением случаев, когда законодательством предусмотрено обязательное хранение персональных данных в течение определенного законом срока.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>3.2.</span>
                            <span className={styles.colors.text.secondary}> Персональные данные Пользователя Сайт обрабатывает в следующих целях:</span>
                        </p>

                        <ol className={styles.spacing.listDecimal}>
                            <li className={styles.colors.text.secondary}>Предоставления Пользователям Сайта регистрации
                                (авторизации) на Сайте, доступа к Сайту и любых других случаях, связанных с такими
                                действиями.
                            </li>
                            <li className={styles.colors.text.secondary}>Предоставления Пользователю Сайта доступа к
                                персонализированным ресурсам Сайта.
                            </li>
                            <li className={styles.colors.text.secondary}>Установления с Пользователем Сайта обратной
                                связи, включая направление уведомлений, запросов, касающихся использования Сайта,
                                оказания услуг, обработку запросов и заявок от Пользователя Сайта.
                            </li>
                            <li className={styles.colors.text.secondary}>Создания учетной записи, если Пользователь
                                Сайта дал согласие на создание учетной записи.
                            </li>
                            <li className={styles.colors.text.secondary}>Предоставления Пользователю Сайта эффективной
                                клиентской и технической поддержки при возникновении проблем, связанных с использованием
                                Сайта.
                            </li>
                            <li className={styles.colors.text.secondary}>Обеспечения работоспособности и безопасности
                                Сайта, для подтверждения совершаемых Пользователями Сайта действий, для предотвращения
                                случаев мошенничества, компьютерных атак и иных злоупотреблений, а также для
                                расследования таких случаев.
                            </li>
                        </ol>
                    </section>

                    {/* 4. Условия обработки и передача третьим лицам */}
                    <section className={styles.spacing.section}>
                        <h2 className={`${styles.typography.h2} ${styles.colors.text.accent} mb-4`}>
                            4. Условия обработки персональных данных Пользователей Сайта и передача их третьим лицам
                        </h2>

                        <p>
                            <span className={styles.typography.bold}>4.1.</span>
                            <span className={styles.colors.text.secondary}> Сайт хранит персональные данные Пользователей Сайта в соответствии с внутренними регламентами конкретных сервисов.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>4.2.</span>
                            <span className={styles.colors.text.secondary}> В отношении персональных данных Пользователя Сайта сохраняется их конфиденциальность, кроме случаев добровольного предоставления Пользователем Сайта данных о себе для общего доступа неограниченному кругу лиц. При использовании отдельных сервисов Пользователь Сайта соглашается с тем, что определенная часть его персональных данных становится общедоступной.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>4.3.</span>
                            <span className={styles.colors.text.secondary}> Сайт вправе передать персональные данные Пользователя Сайта третьим лицам в следующих случаях:</span>
                        </p>

                        <ol className={styles.spacing.listDecimal}>
                            <li className={styles.colors.text.secondary}>Пользователь Сайта выразил согласие на такие
                                действия.
                            </li>
                            <li className={styles.colors.text.secondary}>Передача необходима для использования
                                Пользователем Сайта определенного сервиса либо для исполнения определенного соглашения
                                или договора с Пользователем Сайта.
                            </li>
                            <li className={styles.colors.text.secondary}>Передача предусмотрена законодательством
                                Российской Федерации в рамках установленной законодательством процедуры.
                            </li>
                        </ol>

                        <p>
                            <span className={styles.typography.bold}>4.4.</span>
                            <span className={styles.colors.text.secondary}> Настоящим Администрация Сайта уведомляет Пользователя Сайта, что в том случае, если Пользователь Сайта пожелал внести уточнения в его персональные данные, заблокировать или уничтожить их в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, либо в случае возникновения у Пользователя желания отозвать свое согласие на обработку персональных данных или устранить неправомерные действия Администрации Сайта в отношении персональных данных Пользователя Сайта, то Пользователь Сайта должен направить Администрации Сайта запрос по эл. почте: info@sklados.pro</span>
                        </p>
                    </section>

                    {/* 5. Обязательства сторон */}
                    <section className={styles.spacing.section}>
                        <h2 className={`${styles.typography.h2} ${styles.colors.text.accent} mb-4`}>
                            5. Обязательства сторон
                        </h2>

                        <div className={styles.spacing.paragraph}>
                            <p>
                                <span className={styles.typography.bold}>5.1.</span>
                                <span className={styles.colors.text.secondary}> Пользователь Сайта обязуется:</span>
                            </p>

                            <ol className={styles.spacing.listDecimal}>
                                <li className={styles.colors.text.secondary}>Предоставлять корректную и правдивую
                                    информацию о персональных данных, необходимую для пользования Сайтом.
                                </li>
                                <li className={styles.colors.text.secondary}>Обновлять, дополнять предоставленную
                                    информацию о персональных данных в случае изменения данной информации.
                                </li>
                            </ol>
                        </div>

                        <div className={styles.spacing.paragraph}>
                            <p>
                                <span className={styles.typography.bold}>5.2.</span>
                                <span className={styles.colors.text.secondary}> Администрация Сайта обязуется:</span>
                            </p>

                            <ol className={styles.spacing.listDecimal}>
                                <li className={styles.colors.text.secondary}>Использовать полученную информацию
                                    исключительно для целей, указанных в п. 3 настоящей Политики конфиденциальности.
                                </li>
                                <li className={styles.colors.text.secondary}>Обеспечить хранение конфиденциальной
                                    информации в тайне, не разглашать без предварительного письменного согласия
                                    Пользователя Сайта, а также не осуществлять продажу, обмен, опубликование либо
                                    разглашение иными возможными способами переданных персональных данных Пользователя
                                    Сайта, за исключением предусмотренных настоящей Политикой конфиденциальности.
                                </li>
                                <li className={styles.colors.text.secondary}>Осуществить блокирование персональных
                                    данных, относящихся к соответствующему Пользователю Сайта, с момента обращения или
                                    запроса Пользователя Сайта или его законного представителя либо уполномоченного
                                    органа по защите прав субъектов персональных данных на период проверки в случае
                                    выявления недостоверных персональных данных или неправомерных действий.
                                </li>
                            </ol>
                        </div>
                    </section>

                    {/* 6. Ответственность сторон */}
                    <section className={styles.spacing.section}>
                        <h2 className={`${styles.typography.h2} ${styles.colors.text.accent} mb-4`}>
                            6. Ответственность сторон
                        </h2>

                        <p>
                            <span className={styles.typography.bold}>6.1.</span>
                            <span className={styles.colors.text.secondary}> Администрация Сайта несёт ответственность за умышленное разглашение персональных данных Пользователя Сайта в соответствии с действующим законодательством Российской Федерации, за исключением случаев, предусмотренных настоящей Политикой конфиденциальности.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>6.2.</span>
                            <span className={styles.colors.text.secondary}> В случае утраты или разглашения персональных данных Администрация Сайта не несёт ответственность, если данная конфиденциальная информация:</span>
                        </p>

                        <ol className={styles.spacing.listDecimal}>
                            <li className={styles.colors.text.secondary}>Стала публичным достоянием до её утраты или
                                разглашения.
                            </li>
                            <li className={styles.colors.text.secondary}>Была получена от третьей стороны до момента её
                                получения Администрацией Сайта.
                            </li>
                            <li className={styles.colors.text.secondary}>Была разглашена с согласия Пользователя
                                Сайта.
                            </li>
                            <li className={styles.colors.text.secondary}>Была получена третьими лицами путем
                                несанкционированного доступа к файлам Сайта.
                            </li>
                        </ol>

                        <p>
                            <span className={styles.typography.bold}>6.3.</span>
                            <span className={styles.colors.text.secondary}> Пользователь Сайта несет ответственность за правомерность, корректность и правдивость предоставленных персональных данных в соответствии с законодательством Российской Федерации.</span>
                        </p>
                    </section>

                    {/* 7. Требования к защите персональных данных */}
                    <section className={styles.spacing.section}>
                        <h2 className={`${styles.typography.h2} ${styles.colors.text.accent} mb-4`}>
                            7. Сведения о реализуемых требованиях к защите персональных данных
                        </h2>

                        <p>
                            <span className={styles.typography.bold}>7.1.</span>
                            <span className={styles.colors.text.secondary}> Администрация Сайта принимает необходимые и достаточные организационные и технические меры для защиты персональных данных Пользователя Сайта от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.</span>
                        </p>
                    </section>

                    {/* 8. Разрешение споров */}
                    <section className={styles.spacing.section}>
                        <h2 className={`${styles.typography.h2} ${styles.colors.text.accent} mb-4`}>
                            8. Разрешение споров
                        </h2>

                        <p>
                            <span className={styles.typography.bold}>8.1.</span>
                            <span className={styles.colors.text.secondary}> До обращения в суд с иском по спорам, возникающим из отношений между Пользователем Сайта и Администрацией Сайта, обязательным является предъявление претензии (письменного предложения о добровольном урегулировании спора).</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>8.2.</span>
                            <span className={styles.colors.text.secondary}> Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно уведомляет заявителя претензии о результатах рассмотрения претензии.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>8.3.</span>
                            <span className={styles.colors.text.secondary}> При недостижении соглашения спор будет передан на рассмотрение в суд в соответствии с законодательством Российской Федерации.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>8.4.</span>
                            <span className={styles.colors.text.secondary}> К настоящей Политике конфиденциальности и отношениям между Пользователем Сайта и Администрацией Сайта применяется законодательство Российской Федерации.</span>
                        </p>
                    </section>

                    {/* 9. Дополнительные условия */}
                    <section className={`${styles.spacing.section} mt-8 pt-8 ${styles.borders.top}`}>
                        <h2 className={`${styles.typography.h2} ${styles.colors.text.accent} mb-4`}>
                            9. Дополнительные условия
                        </h2>

                        <p>
                            <span className={styles.typography.bold}>9.1.</span>
                            <span className={styles.colors.text.secondary}> Администрация Сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>9.2.</span>
                            <span className={styles.colors.text.secondary}> Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено новой редакцией Политики конфиденциальности.</span>
                        </p>

                        <p>
                            <span className={styles.typography.bold}>9.3.</span>
                            <span className={styles.colors.text.secondary}> Все предложения или вопросы по настоящей Политике конфиденциальности следует сообщать на адрес электронной почты: info@sklados.pro</span>
                        </p>
                    </section>

                    {/* Дата последнего обновления */}
                    <div className={`mt-8 pt-4 text-sm ${styles.colors.text.muted} ${styles.borders.top}`}>
                        <p>Последнее обновление: {new Date().toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};