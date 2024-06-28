let options = {
    root: document.querySelector("body"),
    rootMargin: "0px",
    threshold: 1,
};

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

let observer = new IntersectionObserver(() => {
    console.info("Element is in view!")
    if (getCookie("visited") == "") {
        setCookie("visited", "true", 1);
        document.querySelector('#dialogContainer').style.display = 'block'
        document.querySelector('#dialogContainer').style.animation = 'moveUpNow 1s forwards'
        document.querySelector("#dialogForNewsletters").showModal();
    }
}, options);

setTimeout(() => {
    observer.observe(document.querySelector("#impact"));
}, 2000)