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
}
}