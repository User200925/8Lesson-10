
const toastButtons = document.querySelectorAll(".toast-btn");

toastButtons.forEach(button => {
  button.addEventListener("click", () => {
    const msg = button.dataset.message;
    const color = button.dataset.color;
    Toastify({
      text: msg,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        width: "150px",
        height: "50px",
        fontSize: "25px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: color,
        borderRadius: "13px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
    }).showToast();
  });
})
