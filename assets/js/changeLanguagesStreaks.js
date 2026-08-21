function UpdateStreakMessageTranslate() {
    if(localStorage.getItem("language") === "en") {
        if(streakMessages) {
            streakMessages = [
                "New streak unlocked! 🚀 Consistency over intensity. Every single day counts.",
                "Streak continues! 🔥 Not fast, but steady. That's how you win.",
                "Another day, another step. 🐢 Your streak is growing. Keep going.",
                "You showed up again. 💪 That's the whole secret. Streak alive.",
                "No zero days. ✅ Streak preserved. Tomorrow is the next battle.",
                "Brick by brick. 🧱 Your streak is becoming a wall. Don't stop.",
                "1 day closer to the goal. 🎯 Streak intact. Respect.",
                "Not every day is a leap. But every day counts. 🦾 Streak updated.",
                "You didn't quit today. 🔥 That's the win. Streak lives.",
                "Small step, big streak. 🐢 Consistency > talent. Every time.",
                "Streak extended. 📈 Not perfect, but present. That's enough.",
                "Another day in the books. 📚 Streak = proof you can trust yourself.",
                "The streak is a mirror. 🪞 It shows who you really are. Today: strong.",
                "You could've skipped. You didn't. 👊 Streak honored.",
                "One more day. One more commit. One more step toward the life you want. 🚀 Streak secured."
            ];
        } else {
            let streakMessages = [
                "New streak unlocked! 🚀 Consistency over intensity. Every single day counts.",
                "Streak continues! 🔥 Not fast, but steady. That's how you win.",
                "Another day, another step. 🐢 Your streak is growing. Keep going.",
                "You showed up again. 💪 That's the whole secret. Streak alive.",
                "No zero days. ✅ Streak preserved. Tomorrow is the next battle.",
                "Brick by brick. 🧱 Your streak is becoming a wall. Don't stop.",
                "1 day closer to the goal. 🎯 Streak intact. Respect.",
                "Not every day is a leap. But every day counts. 🦾 Streak updated.",
                "You didn't quit today. 🔥 That's the win. Streak lives.",
                "Small step, big streak. 🐢 Consistency > talent. Every time.",
                "Streak extended. 📈 Not perfect, but present. That's enough.",
                "Another day in the books. 📚 Streak = proof you can trust yourself.",
                "The streak is a mirror. 🪞 It shows who you really are. Today: strong.",
                "You could've skipped. You didn't. 👊 Streak honored.",
                "One more day. One more commit. One more step toward the life you want. 🚀 Streak secured."
            ];
        }
    } else if(localStorage.getItem("language") === "ru") {
        if(streakMessages) {
            streakMessages = [
                "Новый стрик разблокирован! 🚀 Постоянство важнее интенсивности. Каждый день имеет значение.",
                "Стрик продолжается! 🔥 Не быстро, но стабильно. Вот как побеждают.",
                "Ещё один день, ещё один шаг. 🐢 Твой стрик растёт. Продолжай в том же духе.",
                "Ты снова появился. 💪 В этом весь секрет. Стрик жив.",
                "Ни одного пропущенного дня. ✅ Стрик сохранён. Завтра — следующая битва.",
                "Кирпичик за кирпичиком. 🧱 Твой стрик становится стеной. Не останавливайся.",
                "Ещё на один день ближе к цели. 🎯 Стрик цел. Респект.",
                "Не каждый день — прорыв. Но каждый день имеет значение. 🦾 Стрик обновлён.",
                "Ты не сдался сегодня. 🔥 Это победа. Стрик жив.",
                "Маленький шаг, большой стрик. 🐢 Постоянство > талант. Всегда.",
                "Стрик продлён. 📈 Не идеально, но присутствие — уже достаточно.",
                "Ещё один день в копилку. 📚 Стрик = доказательство того, что ты можешь доверять себе.",
                "Стрик — это зеркало. 🪞 Оно показывает, кто ты на самом деле. Сегодня: сильный.",
                "Ты мог пропустить. Но не пропустил. 👊 Стрик подтверждён.",
                "Ещё один день. Ещё один коммит. Ещё один шаг к жизни, которую ты хочешь. 🚀 Стрик сохранён."
            ];
        } else {
            let streakMessages = [
                "Новый стрик разблокирован! 🚀 Постоянство важнее интенсивности. Каждый день имеет значение.",
                "Стрик продолжается! 🔥 Не быстро, но стабильно. Вот как побеждают.",
                "Ещё один день, ещё один шаг. 🐢 Твой стрик растёт. Продолжай в том же духе.",
                "Ты снова появился. 💪 В этом весь секрет. Стрик жив.",
                "Ни одного пропущенного дня. ✅ Стрик сохранён. Завтра — следующая битва.",
                "Кирпичик за кирпичиком. 🧱 Твой стрик становится стеной. Не останавливайся.",
                "Ещё на один день ближе к цели. 🎯 Стрик цел. Респект.",
                "Не каждый день — прорыв. Но каждый день имеет значение. 🦾 Стрик обновлён.",
                "Ты не сдался сегодня. 🔥 Это победа. Стрик жив.",
                "Маленький шаг, большой стрик. 🐢 Постоянство > талант. Всегда.",
                "Стрик продлён. 📈 Не идеально, но присутствие — уже достаточно.",
                "Ещё один день в копилку. 📚 Стрик = доказательство того, что ты можешь доверять себе.",
                "Стрик — это зеркало. 🪞 Оно показывает, кто ты на самом деле. Сегодня: сильный.",
                "Ты мог пропустить. Но не пропустил. 👊 Стрик подтверждён.",
                "Ещё один день. Ещё один коммит. Ещё один шаг к жизни, которую ты хочешь. 🚀 Стрик сохранён."
            ];
        }
    } else if(localStorage.getItem("language") === "de") {
        if(streakMessages) {
            streakMessages = [
                "Neuer Streak freigeschaltet! 🚀 Beständigkeit über Intensität. Jeder einzelne Tag zählt.",
                "Streak geht weiter! 🔥 Nicht schnell, aber stetig. So gewinnt man.",
                "Ein weiterer Tag, ein weiterer Schritt. 🐢 Dein Streak wächst. Mach weiter so.",
                "Du warst wieder da. 💪 Das ist das ganze Geheimnis. Streak lebt.",
                "Keine Null-Tage. ✅ Streak erhalten. Morgen die nächste Schlacht.",
                "Stein für Stein. 🧱 Dein Streak wird zur Mauer. Hör nicht auf.",
                "Einen Tag näher am Ziel. 🎯 Streak intakt. Respekt.",
                "Nicht jeder Tag ist ein Sprung. Aber jeder Tag zählt. 🦾 Streak aktualisiert.",
                "Du hast heute nicht aufgegeben. 🔥 Das ist der Sieg. Streak lebt.",
                "Kleiner Schritt, großer Streak. 🐢 Beständigkeit > Talent. Jedes Mal.",
                "Streak verlängert. 📈 Nicht perfekt, aber anwesend. Das reicht.",
                "Ein weiterer Tag in den Büchern. 📚 Streak = Beweis, dass du dir vertrauen kannst.",
                "Der Streak ist ein Spiegel. 🪞 Er zeigt, wer du wirklich bist. Heute: stark.",
                "Du hättest auslassen können. Hast du nicht. 👊 Streak geehrt.",
                "Ein weiterer Tag. Ein weiterer Commit. Ein weiterer Schritt in Richtung des Lebens, das du willst. 🚀 Streak gesichert."
            ];
        } else {
            let streakMessages = [
                "Neuer Streak freigeschaltet! 🚀 Beständigkeit über Intensität. Jeder einzelne Tag zählt.",
                "Streak geht weiter! 🔥 Nicht schnell, aber stetig. So gewinnt man.",
                "Ein weiterer Tag, ein weiterer Schritt. 🐢 Dein Streak wächst. Mach weiter so.",
                "Du warst wieder da. 💪 Das ist das ganze Geheimnis. Streak lebt.",
                "Keine Null-Tage. ✅ Streak erhalten. Morgen die nächste Schlacht.",
                "Stein für Stein. 🧱 Dein Streak wird zur Mauer. Hör nicht auf.",
                "Einen Tag näher am Ziel. 🎯 Streak intakt. Respekt.",
                "Nicht jeder Tag ist ein Sprung. Aber jeder Tag zählt. 🦾 Streak aktualisiert.",
                "Du hast heute nicht aufgegeben. 🔥 Das ist der Sieg. Streak lebt.",
                "Kleiner Schritt, großer Streak. 🐢 Beständigkeit > Talent. Jedes Mal.",
                "Streak verlängert. 📈 Nicht perfekt, aber anwesend. Das reicht.",
                "Ein weiterer Tag in den Büchern. 📚 Streak = Beweis, dass du dir vertrauen kannst.",
                "Der Streak ist ein Spiegel. 🪞 Er zeigt, wer du wirklich bist. Heute: stark.",
                "Du hättest auslassen können. Hast du nicht. 👊 Streak geehrt.",
                "Ein weiterer Tag. Ein weiterer Commit. Ein weiterer Schritt in Richtung des Lebens, das du willst. 🚀 Streak gesichert."
            ];
        }
    } else if(localStorage.getItem("language") === "pl") {
        if(streakMessages) {
            streakMessages = [
                "Nowy streak odblokowany! 🚀 Konsekwencja ponad intensywność. Każdy dzień się liczy.",
                "Streak trwa! 🔥 Nie szybko, ale stabilnie. Tak się wygrywa.",
                "Kolejny dzień, kolejny krok. 🐢 Twój streak rośnie. Tak trzymaj.",
                "Znowu się pojawiłeś. 💪 To cały sekret. Streak żyje.",
                "Ani jednego dnia przerwy. ✅ Streak zachowany. Jutro następna bitwa.",
                "Cegiełka po cegiełce. 🧱 Twój streak staje się ścianą. Nie przestawaj.",
                "Jeden dzień bliżej celu. 🎯 Streak nienaruszony. Szacunek.",
                "Nie każdy dzień to skok. Ale każdy dzień się liczy. 🦾 Streak zaktualizowany.",
                "Nie poddałeś się dzisiaj. 🔥 To zwycięstwo. Streak żyje.",
                "Mały krok, wielki streak. 🐢 Konsekwencja > talent. Zawsze.",
                "Streak przedłużony. 📈 Nie idealnie, ale obecność wystarczy.",
                "Kolejny dzień w księgach. 📚 Streak = dowód, że możesz sobie ufać.",
                "Streak to lustro. 🪞 Pokazuje, kim naprawdę jesteś. Dziś: silny.",
                "Mogłeś odpuścić. Nie odpuściłeś. 👊 Streak uhonorowany.",
                "Jeszcze jeden dzień. Jeszcze jeden commit. Jeszcze jeden krok w stronę życia, które chcesz. 🚀 Streak zabezpieczony."
            ];
        } else {
            let streakMessages = [
                "Nowy streak odblokowany! 🚀 Konsekwencja ponad intensywność. Każdy dzień się liczy.",
                "Streak trwa! 🔥 Nie szybko, ale stabilnie. Tak się wygrywa.",
                "Kolejny dzień, kolejny krok. 🐢 Twój streak rośnie. Tak trzymaj.",
                "Znowu się pojawiłeś. 💪 To cały sekret. Streak żyje.",
                "Ani jednego dnia przerwy. ✅ Streak zachowany. Jutro następna bitwa.",
                "Cegiełka po cegiełce. 🧱 Twój streak staje się ścianą. Nie przestawaj.",
                "Jeden dzień bliżej celu. 🎯 Streak nienaruszony. Szacunek.",
                "Nie każdy dzień to skok. Ale każdy dzień się liczy. 🦾 Streak zaktualizowany.",
                "Nie poddałeś się dzisiaj. 🔥 To zwycięstwo. Streak żyje.",
                "Mały krok, wielki streak. 🐢 Konsekwencja > talent. Zawsze.",
                "Streak przedłużony. 📈 Nie idealnie, ale obecność wystarczy.",
                "Kolejny dzień w księgach. 📚 Streak = dowód, że możesz sobie ufać.",
                "Streak to lustro. 🪞 Pokazuje, kim naprawdę jesteś. Dziś: silny.",
                "Mogłeś odpuścić. Nie odpuściłeś. 👊 Streak uhonorowany.",
                "Jeszcze jeden dzień. Jeszcze jeden commit. Jeszcze jeden krok w stronę życia, które chcesz. 🚀 Streak zabezpieczony."
            ];
        }
    } else if(localStorage.getItem("language") === "sr") {
        if(streakMessages) {
            streakMessages = [
                "Novi streak otključan! 🚀 Doslednost pre intenziteta. Svaki dan se računa.",
                "Streak se nastavlja! 🔥 Ne brzo, ali stabilno. Tako se pobjeđuje.",
                "Još jedan dan, još jedan korak. 🐢 Tvoj streak raste. Samo nastavi.",
                "Opet si se pojavio. 💪 To je cijela tajna. Streak živ.",
                "Nijedan dan nije propušten. ✅ Streak sačuvan. Sutra sljedeća bitka.",
                "Ciglu po ciglu. 🧱 Tvoj streak postaje zid. Ne staj.",
                "Jedan dan bliže cilju. 🎯 Streak netaknut. Respekt.",
                "Nije svaki dan skok. Ali svaki dan se računa. 🦾 Streak ažuriran.",
                "Nisi odustao danas. 🔥 To je pobeda. Streak živ.",
                "Mali korak, veliki streak. 🐢 Doslednost > talenat. Uvek.",
                "Streak produžen. 📈 Nije savršeno, ali prisustvo je dovoljno.",
                "Još jedan dan u knjigama. 📚 Streak = dokaz da možeš verovati sebi.",
                "Streak je ogledalo. 🪞 Pokazuje ko si zaista. Danas: jak.",
                "Mogao si preskočiti. Nisi. 👊 Streak počastvovan.",
                "Još jedan dan. Još jedan commit. Još jedan korak ka životu koji želiš. 🚀 Streak obezbeđen."
            ];
        } else {
            let streakMessages = [
                "Novi streak otključan! 🚀 Doslednost pre intenziteta. Svaki dan se računa.",
                "Streak se nastavlja! 🔥 Ne brzo, ali stabilno. Tako se pobjeđuje.",
                "Još jedan dan, još jedan korak. 🐢 Tvoj streak raste. Samo nastavi.",
                "Opet si se pojavio. 💪 To je cijela tajna. Streak živ.",
                "Nijedan dan nije propušten. ✅ Streak sačuvan. Sutra sljedeća bitka.",
                "Ciglu po ciglu. 🧱 Tvoj streak postaje zid. Ne staj.",
                "Jedan dan bliže cilju. 🎯 Streak netaknut. Respekt.",
                "Nije svaki dan skok. Ali svaki dan se računa. 🦾 Streak ažuriran.",
                "Nisi odustao danas. 🔥 To je pobeda. Streak živ.",
                "Mali korak, veliki streak. 🐢 Doslednost > talenat. Uvek.",
                "Streak produžen. 📈 Nije savršeno, ali prisustvo je dovoljno.",
                "Još jedan dan u knjigama. 📚 Streak = dokaz da možeš verovati sebi.",
                "Streak je ogledalo. 🪞 Pokazuje ko si zaista. Danas: jak.",
                "Mogao si preskočiti. Nisi. 👊 Streak počastvovan.",
                "Još jedan dan. Još jedan commit. Još jedan korak ka životu koji želiš. 🚀 Streak obezbeđen."
            ];
        }
    } else if(localStorage.getItem("language") === "ja") {
        if(streakMessages) {
            streakMessages = [
                "新しい連続記録を解除！🚀 強度より一貫性。毎日が大切です。",
                "連続記録継続中！🔥 速くなくても安定して。それが勝つ方法です。",
                "もう一日、もう一歩。🐢 あなたの連続記録は成長しています。この調子で続けてください。",
                "また現れたね。💪 それが全ての秘密。連続記録は生きている。",
                "ゼロデイなし。✅ 連続記録を維持。明日は次の戦い。",
                "一歩一歩。🧱 あなたの連続記録は壁になっている。止まらないで。",
                "目標にあと一日。🎯 連続記録は無事。尊敬。",
                "すべての日が飛躍ではない。しかし、すべての日が重要だ。🦾 連続記録を更新。",
                "今日は諦めなかった。🔥 それが勝利だ。連続記録は生きている。",
                "小さな一歩、大きな連続記録。🐢 一貫性 > 才能。常に。",
                "連続記録を延長。📈 完璧じゃなくても、存在しているだけで十分。",
                "本にまた一日。📚 連続記録 = 自分を信じられる証拠。",
                "連続記録は鏡です。🪞 それはあなたが本当に誰であるかを示しています。今日：強い。",
                "スキップできたのに、しなかった。👊 連続記録に敬意を表して。",
                "もう一日。もう一つのコミット。あなたが望む人生へのもう一歩。🚀 連続記録を確保。"
            ];
        } else {
            let streakMessages = [
                "新しい連続記録を解除！🚀 強度より一貫性。毎日が大切です。",
                "連続記録継続中！🔥 速くなくても安定して。それが勝つ方法です。",
                "もう一日、もう一歩。🐢 あなたの連続記録は成長しています。この調子で続けてください。",
                "また現れたね。💪 それが全ての秘密。連続記録は生きている。",
                "ゼロデイなし。✅ 連続記録を維持。明日は次の戦い。",
                "一歩一歩。🧱 あなたの連続記録は壁になっている。止まらないで。",
                "目標にあと一日。🎯 連続記録は無事。尊敬。",
                "すべての日が飛躍ではない。しかし、すべての日が重要だ。🦾 連続記録を更新。",
                "今日は諦めなかった。🔥 それが勝利だ。連続記録は生きている。",
                "小さな一歩、大きな連続記録。🐢 一貫性 > 才能。常に。",
                "連続記録を延長。📈 完璧じゃなくても、存在しているだけで十分。",
                "本にまた一日。📚 連続記録 = 自分を信じられる証拠。",
                "連続記録は鏡です。🪞 それはあなたが本当に誰であるかを示しています。今日：強い。",
                "スキップできたのに、しなかった。👊 連続記録に敬意を表して。",
                "もう一日。もう一つのコミット。あなたが望む人生へのもう一歩。🚀 連続記録を確保。"
            ];
        }
    } else if(localStorage.getItem("language") === "ka") {
        if(streakMessages) {
            streakMessages = [
                "ახალი სერია განბლოკილია! 🚀 თანმიმდევრულობა უფრო მნიშვნელოვანია, ვიდრე ინტენსივობა. ყოველი დღე ითვლის.",
                "სერია გრძელდება! 🔥 არა სწრაფად, მაგრამ სტაბილურად. ასე იგებენ.",
                "კიდევ ერთი დღე, კიდევ ერთი ნაბიჯი. 🐢 შენი სერია იზრდება. განაგრძე.",
                "ისევ გამოჩნდი. 💪 ეს არის მთელი საიდუმლო. სერია ცოცხალია.",
                "არც ერთი გამოტოვებული დღე. ✅ სერია შენარჩუნებულია. ხვალ — შემდეგი ბრძოლა.",
                "აგური-აგური. 🧱 შენი სერია კედლად იქცევა. ნუ გაჩერდები.",
                "მიზნამდე ერთი დღით უფრო ახლოს. 🎯 სერია ხელუხლებელია. პატივისცემა.",
                "ყოველი დღე არ არის ნახტომი. მაგრამ ყოველი დღე ითვლის. 🦾 სერია განახლებულია.",
                "დღეს არ დანებებულხარ. 🔥 ეს არის გამარჯვება. სერია ცოცხალია.",
                "პატარა ნაბიჯი, დიდი სერია. 🐢 თანმიმდევრულობა > ნიჭი. ყოველთვის.",
                "სერია გაგრძელდა. 📈 არა იდეალურად, მაგრამ ყოფნა საკმარისია.",
                "კიდევ ერთი დღე წიგნებში. 📚 სერია = მტკიცებულება, რომ საკუთარი თავის ნდობა შეგიძლია.",
                "სერია სარკეა. 🪞 ის გვიჩვენებს, ვინ ხარ სინამდვილეში. დღეს: ძლიერი.",
                "შეგეძლო გამოტოვება. არ გამოტოვე. 👊 სერია პატივსაცემია.",
                "კიდევ ერთი დღე. კიდევ ერთი კომიტი. კიდევ ერთი ნაბიჯი იმ ცხოვრებისკენ, რაც გინდა. 🚀 სერია დაცულია."
            ];
        } else {
            let streakMessages = [
                "ახალი სერია განბლოკილია! 🚀 თანმიმდევრულობა უფრო მნიშვნელოვანია, ვიდრე ინტენსივობა. ყოველი დღე ითვლის.",
                "სერია გრძელდება! 🔥 არა სწრაფად, მაგრამ სტაბილურად. ასე იგებენ.",
                "კიდევ ერთი დღე, კიდევ ერთი ნაბიჯი. 🐢 შენი სერია იზრდება. განაგრძე.",
                "ისევ გამოჩნდი. 💪 ეს არის მთელი საიდუმლო. სერია ცოცხალია.",
                "არც ერთი გამოტოვებული დღე. ✅ სერია შენარჩუნებულია. ხვალ — შემდეგი ბრძოლა.",
                "აგური-აგური. 🧱 შენი სერია კედლად იქცევა. ნუ გაჩერდები.",
                "მიზნამდე ერთი დღით უფრო ახლოს. 🎯 სერია ხელუხლებელია. პატივისცემა.",
                "ყოველი დღე არ არის ნახტომი. მაგრამ ყოველი დღე ითვლის. 🦾 სერია განახლებულია.",
                "დღეს არ დანებებულხარ. 🔥 ეს არის გამარჯვება. სერია ცოცხალია.",
                "პატარა ნაბიჯი, დიდი სერია. 🐢 თანმიმდევრულობა > ნიჭი. ყოველთვის.",
                "სერია გაგრძელდა. 📈 არა იდეალურად, მაგრამ ყოფნა საკმარისია.",
                "კიდევ ერთი დღე წიგნებში. 📚 სერია = მტკიცებულება, რომ საკუთარი თავის ნდობა შეგიძლია.",
                "სერია სარკეა. 🪞 ის გვიჩვენებს, ვინ ხარ სინამდვილეში. დღეს: ძლიერი.",
                "შეგეძლო გამოტოვება. არ გამოტოვე. 👊 სერია პატივსაცემია.",
                "კიდევ ერთი დღე. კიდევ ერთი კომიტი. კიდევ ერთი ნაბიჯი იმ ცხოვრებისკენ, რაც გინდა. 🚀 სერია დაცულია."
            ];
        }
    } else if(localStorage.getItem("language") === "el") {
        if(streakMessages) {
            streakMessages = [
                "Ξεκλειδώθηκε νέο σερί! 🚀 Συνέπεια έναντι έντασης. Κάθε μέρα μετράει.",
                "Το σερί συνεχίζεται! 🔥 Όχι γρήγορα, αλλά σταθερά. Έτσι κερδίζεις.",
                "Άλλη μια μέρα, άλλο ένα βήμα. 🐢 Το σερί σου μεγαλώνει. Συνέχισε έτσι.",
                "Εμφανίστηκες ξανά. 💪 Αυτό είναι όλο το μυστικό. Το σερί ζει.",
                "Καμία μέρα χωρίς δράση. ✅ Το σερί διατηρήθηκε. Αύριο η επόμενη μάχη.",
                "Τούβλο τούβλο. 🧱 Το σερί σου γίνεται τοίχος. Μη σταματάς.",
                "Μια μέρα πιο κοντά στον στόχο. 🎯 Το σερί άθικτο. Σεβασμός.",
                "Δεν είναι κάθε μέρα άλμα. Αλλά κάθε μέρα μετράει. 🦾 Το σερί ενημερώθηκε.",
                "Δεν τα παράτησες σήμερα. 🔥 Αυτή είναι η νίκη. Το σερί ζει.",
                "Μικρό βήμα, μεγάλο σερί. 🐢 Συνέπεια > ταλέντο. Πάντα.",
                "Το σερί επεκτάθηκε. 📈 Όχι τέλειο, αλλά παρόν. Αρκετό.",
                "Άλλη μια μέρα στο βιβλίο. 📚 Σερί = απόδειξη ότι μπορείς να εμπιστευτείς τον εαυτό σου.",
                "Το σερί είναι καθρέφτης. 🪞 Δείχνει ποιος είσαι πραγματικά. Σήμερα: δυνατός.",
                "Μπορούσες να το παραλείψεις. Δεν το έκανες. 👊 Το σερί τιμήθηκε.",
                "Μια ακόμη μέρα. Μια ακόμη δέσμευση. Ένα ακόμη βήμα προς τη ζωή που θέλεις. 🚀 Το σερί εξασφαλίστηκε."
            ];
        } else {
            let streakMessages = [
                "Ξεκλειδώθηκε νέο σερί! 🚀 Συνέπεια έναντι έντασης. Κάθε μέρα μετράει.",
                "Το σερί συνεχίζεται! 🔥 Όχι γρήγορα, αλλά σταθερά. Έτσι κερδίζεις.",
                "Άλλη μια μέρα, άλλο ένα βήμα. 🐢 Το σερί σου μεγαλώνει. Συνέχισε έτσι.",
                "Εμφανίστηκες ξανά. 💪 Αυτό είναι όλο το μυστικό. Το σερί ζει.",
                "Καμία μέρα χωρίς δράση. ✅ Το σερί διατηρήθηκε. Αύριο η επόμενη μάχη.",
                "Τούβλο τούβλο. 🧱 Το σερί σου γίνεται τοίχος. Μη σταματάς.",
                "Μια μέρα πιο κοντά στον στόχο. 🎯 Το σερί άθικτο. Σεβασμός.",
                "Δεν είναι κάθε μέρα άλμα. Αλλά κάθε μέρα μετράει. 🦾 Το σερί ενημερώθηκε.",
                "Δεν τα παράτησες σήμερα. 🔥 Αυτή είναι η νίκη. Το σερί ζει.",
                "Μικρό βήμα, μεγάλο σερί. 🐢 Συνέπεια > ταλέντο. Πάντα.",
                "Το σερί επεκτάθηκε. 📈 Όχι τέλειο, αλλά παρόν. Αρκετό.",
                "Άλλη μια μέρα στο βιβλίο. 📚 Σερί = απόδειξη ότι μπορείς να εμπιστευτείς τον εαυτό σου.",
                "Το σερί είναι καθρέφτης. 🪞 Δείχνει ποιος είσαι πραγματικά. Σήμερα: δυνατός.",
                "Μπορούσες να το παραλείψεις. Δεν το έκανες. 👊 Το σερί τιμήθηκε.",
                "Μια ακόμη μέρα. Μια ακόμη δέσμευση. Ένα ακόμη βήμα προς τη ζωή που θέλεις. 🚀 Το σερί εξασφαλίστηκε."
            ];
        }
    } else if(localStorage.getItem("language") === "es") {
        if(streakMessages) {
            streakMessages = [
                "¡Nueva racha desbloqueada! 🚀 Consistencia sobre intensidad. Cada día cuenta.",
                "¡La racha continúa! 🔥 No rápido, pero constante. Así es como se gana.",
                "Otro día, otro paso. 🐢 Tu racha está creciendo. Sigue así.",
                "Apareciste de nuevo. 💪 Ese es todo el secreto. La racha vive.",
                "Sin días cero. ✅ Racha preservada. Mañana es la siguiente batalla.",
                "Ladrillo a ladrillo. 🧱 Tu racha se está convirtiendo en un muro. No pares.",
                "Un día más cerca del objetivo. 🎯 Racha intacta. Respeto.",
                "No todos los días son un salto. Pero todos los días cuentan. 🦾 Racha actualizada.",
                "No te rendiste hoy. 🔥 Eso es la victoria. La racha vive.",
                "Pequeño paso, gran racha. 🐢 Consistencia > talento. Siempre.",
                "Racha extendida. 📈 No perfecto, pero presente. Eso es suficiente.",
                "Otro día en los libros. 📚 Racha = prueba de que puedes confiar en ti mismo.",
                "La racha es un espejo. 🪞 Muestra quién eres realmente. Hoy: fuerte.",
                "Podrías haber saltado. No lo hiciste. 👊 Racha honrada.",
                "Un día más. Un commit más. Un paso más hacia la vida que quieres. 🚀 Racha asegurada."
            ];
        } else {
            let streakMessages = [
                "¡Nueva racha desbloqueada! 🚀 Consistencia sobre intensidad. Cada día cuenta.",
                "¡La racha continúa! 🔥 No rápido, pero constante. Así es como se gana.",
                "Otro día, otro paso. 🐢 Tu racha está creciendo. Sigue así.",
                "Apareciste de nuevo. 💪 Ese es todo el secreto. La racha vive.",
                "Sin días cero. ✅ Racha preservada. Mañana es la siguiente batalla.",
                "Ladrillo a ladrillo. 🧱 Tu racha se está convirtiendo en un muro. No pares.",
                "Un día más cerca del objetivo. 🎯 Racha intacta. Respeto.",
                "No todos los días son un salto. Pero todos los días cuentan. 🦾 Racha actualizada.",
                "No te rendiste hoy. 🔥 Eso es la victoria. La racha vive.",
                "Pequeño paso, gran racha. 🐢 Consistencia > talento. Siempre.",
                "Racha extendida. 📈 No perfecto, pero presente. Eso es suficiente.",
                "Otro día en los libros. 📚 Racha = prueba de que puedes confiar en ti mismo.",
                "La racha es un espejo. 🪞 Muestra quién eres realmente. Hoy: fuerte.",
                "Podrías haber saltado. No lo hiciste. 👊 Racha honrada.",
                "Un día más. Un commit más. Un paso más hacia la vida que quieres. 🚀 Racha asegurada."
            ];
        }
    }
}