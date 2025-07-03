// Login Persistente
const loginForm = document.getElementById("loginForm");
const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const userNameSpan = document.getElementById("userName");

// Verificando se o usuário já está logado
window.onload = function () {
  const username = localStorage.getItem("username");
  if (username) {
    userNameSpan.textContent = username;
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
    showChart();
  }
};

// Simula login e carrega dashboard
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);  // Salvando o usuário no localStorage
    userNameSpan.textContent = username;
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
    showChart();
  });
}

// Gráfico de gastos
function showChart() {
  const chartCanvas = document.getElementById("gastosChart");
  if (chartCanvas) {
    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: ["Alimentação", "Transporte", "Lazer", "Contas", "Outros"],
        datasets: [{
          label: 'Gastos (R$)',
          data: [800, 300, 450, 600, 200],
          backgroundColor: '#0ff',
          borderRadius: 5
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }
}

// Objetivos de economia
const goalForm = document.getElementById("goalForm");
const goalList = document.getElementById("goalList");

if (goalForm && goalList) {
  goalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("goalName").value;
    const value = document.getElementById("goalValue").value;
    const li = document.createElement("li");
    li.textContent = `🎯 ${name} - R$ ${value}`;
    goalList.appendChild(li);
    goalForm.reset();
  });
}

// NeoBot
const neoBotMessage = document.getElementById("neoBotMessage");

function toggleBot() {
  neoBotMessage.style.display = neoBotMessage.style.display === "none" ? "block" : "none";
}
