(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Em chắc chứ?",
    "Thật sự chắc chứ??",
    "Chắc chắn 100% luôn hả?",
    "Hangcute ơi mà… 🥺",
    "Nghĩ lại chút đi màaa!",
    "Nếu em nói không, anh buồn lắm đó…",
    "Anh sẽ buồn lắmmmmm...",
    "Anh sẽ buồn cực kỳ cực kỳ cực kỳ luôn á...",
    "Thôi được rồi, hỏi 1 lần nữa nữa thôi…",
    "Đùa đó, đồng ý đi màaa! ❤️",
    "Sao em lại nỡ lòng nào từ chối anh vậy? 😢",
    "Em có chắc không? Hãy thật lòng với con tim điiiii!",
    "Lỡ từ chối rồi mà hối hận thì sao nè? 😏",
    "Nếu anh hỏi lại lần nữa, liệu em có đổi ý không? 🤭",
    "Thôi nói nhỏ thôi, đồng ý với anh đi rồi anh vui nè! 🤫❤️",
    "Kó :)))"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}