const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// Open modal with smooth transition
openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent scrolling
});

// Close modal
function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = ""; // Re-enable scrolling
}

closeBtn.addEventListener("click", closeModal);

// Close when clicking outside
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
    }
});