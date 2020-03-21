! function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s
}({
    1: [function() {
        var el = document.getElementById("me"),
            //text = window.location.hostname;
			text = "milangfx";
        el.innerHTML = '<div id="shadow"></div><div id="mask">' + text + "</div>";
        var letters = text.split("").map(function(letter) {
                var e = document.createElement("span");
                return e.innerText = letter, e
            }),
            shadow = document.getElementById("shadow");
        letters.forEach(function(letter) {
            shadow.appendChild(letter)
        }), document.addEventListener("mousemove", function(e) {
            var x = e.pageX,
                y = e.pageY;
            letters.forEach(function(letter) {
                for (var rect = letter.getBoundingClientRect(), lx = (rect.right + rect.left) / 2, ly = (rect.top + rect.bottom) / 2, dx = x - lx, dy = y - ly, d = Math.max(30, Math.min(400, Math.sqrt(dx * dx + dy * dy))), shadow = [], p = 6, i = 1; p + 1 > i; i++) {
                    var n = i / p,
                        opacity = .15 * Math.max(0, 1 - Math.pow(n, 1.2)),
                        f = Math.pow(n, 1.8) / 10,
                        blur = 20 * d / 500;
                    shadow.push(dx * -f + "px " + dy * -f + "px " + blur + "px rgba(0,0,0," + opacity + ")")
                }
                letter.style.textShadow = shadow.join(", ")
            })
        })
    }, {}]
}, {}, [1]);