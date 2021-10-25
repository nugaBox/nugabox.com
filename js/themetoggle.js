// 테마 세팅
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark")
}

// 테마 버튼 클릭
window.addEventListener('load', function() {
    (function () {
        var dmtoggle = document.getElementById('dmtoggle');
        var html = document.documentElement;
        var darkMode = function () {
            html.classList.add('dark');
        }
        var lightMode = function () {
            html.classList.remove('dark');
        }

        var systemPref = undefined;

        var localPrefDark = function () {
            if (systemPref == 'dark') localStorage.setItem('pref-scheme', 'system');
            else localStorage.setItem('pref-scheme', 'dark');
            setByLocalOrSystem();
        }

        var localPrefLight = function () {
            if (systemPref == 'light') localStorage.setItem('pref-scheme', 'system');
            else localStorage.setItem('pref-scheme', 'light');
            setByLocalOrSystem();
        }

        var systemPrefDark = function () {
            systemPref = 'dark';
            setByLocalOrSystem();
        }

        var systemPrefLight = function () {
            systemPref = 'light';
            setByLocalOrSystem();
        }

        var setByLocalOrSystem = function () {
            let localPref = localStorage.getItem('pref-scheme');
            if (localPref && localPref !== 'system') {
                if (localPref == 'dark') darkMode();
                if (localPref == 'light') lightMode();
            } else if (systemPref) {
                if (systemPref == 'dark') darkMode();
                if (systemPref == 'light') lightMode();
            }
        }

        dmtoggle.addEventListener('click', function () {
            if (html.classList.contains('dark')) localPrefLight();
            else localPrefDark();
        });

        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) systemPrefDark();
            window.matchMedia('(prefers-color-scheme: dark)').addListener(function (q) {
                if (q.matches) systemPrefDark();
            });

            if (window.matchMedia('(prefers-color-scheme: light)').matches) systemPrefLight();
            window.matchMedia('(prefers-color-scheme: light)').addListener(function (q) {
                if (q.matches) systemPrefLight();
            });
        }

        setByLocalOrSystem();

        setTimeout(function () {
            html.classList.add('dark-mode-animate')
        }, 100);
    })();
});
