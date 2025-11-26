const form = document.getElementById("cvForm");
const cvResult = document.getElementById("cvResult");
const cvContent = document.getElementById("cvContent");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const resumo = document.getElementById("resumo").value;
  const experiencias = document.getElementById("experiencias").value;
  const formacao = document.getElementById("formacao").value;
  const habilidades = document.getElementById("habilidades").value;

  cvContent.innerHTML = `
    <h3>${nome}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <h4>Resumo Profissional</h4>
    <p>${resumo}</p>
    <h4>Experiências</h4>
    <p>${experiencias.replace(/\n/g, "<br>")}</p>
    <h4>Formação</h4>
    <p>${formacao.replace(/\n/g, "<br>")}</p>
    <h4>Habilidades</h4>
    <p>${habilidades.replace(/\n/g, "<br>")}</p>
  `;

  cvResult.classList.remove("hidden");
});
