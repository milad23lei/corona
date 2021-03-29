if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then((reg) => {
      // console.log("sw register is success", reg);
    })
    .catch((err) => {
      console.log("register is falid", err);
    });
}

// bunner install
let installPromptEvent;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  installPromptEvent = e;
});

document.querySelector(".btn-add").addEventListener("click", function () {
  console.log(installPromptEvent);
  if (installPromptEvent) {
    installPromptEvent.prompt();

    installPromptEvent.userChoice.then((choiseResult) => {
      if (choiseResult.outcome === "accepted") {
        document.getElementById("btn-add").style.display = "none";
        console.log("user acceptes");
      } else {
        console.log("user not accept");
      }
      installPromptEvent = null;
    });
  }
});
