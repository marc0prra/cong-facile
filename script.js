/******************************* AFFICHER LE MDP **********************************/
function togglePassword(inputId, icon) {
    const passwordInput = document.getElementById(inputId);
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.src = "img/eye.png"; 
    } else {
        passwordInput.type = "password";
        icon.src = "img/open-eye.png"; 
    }
}

/******************************* APPLIQUE LA CLASS ACTIVE **********************************/
document.addEventListener("DOMContentLoaded", function () {
    // Récupérer l'URL actuelle sans le domaine
    let currentPage = window.location.pathname.split("/").pop();

    // Sélectionner tous les liens du menu
    let links = document.querySelectorAll(".left a");

    // Parcourir chaque lien
    links.forEach(link => {
        // Comparer le href du lien avec la page actuelle
        if (link.getAttribute("href") === currentPage) {
            // Supprimer la classe active de tous les liens
            links.forEach(l => l.classList.remove("active"));
            
            // Ajouter la classe active au lien correspondant
            link.classList.add("active");
        }
    });
});