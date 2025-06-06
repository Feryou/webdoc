document.addEventListener("DOMContentLoaded", () => {
    const correctBtn = document.getElementById("correctBtn");
    const wrongButtons = document.querySelectorAll(".flip-button.wrong");
    const popupSuccess = document.getElementById("popup-success");
    const popupError = document.getElementById("popup-error");
  
    correctBtn.addEventListener("click", function (e) {
      e.preventDefault();
      popupSuccess.classList.remove("popup-hidden");
      popupSuccess.classList.add("popup-visible");
    });
  
    wrongButtons.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        popupError.classList.remove("popup-hidden");
        popupError.classList.add("popup-visible");
      });
    });
  });
  
  function closePopup() {
    const popupError = document.getElementById("popup-error");
    popupError.classList.add("popup-hidden");
    popupError.classList.remove("popup-visible");
  }
  