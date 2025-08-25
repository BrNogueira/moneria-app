const SECRET_KEY = "admin_live_v2Br3W5GUEXtreS9eQbnSMhKcUONiZCLwXew7g";
const authHeader = "Basic " + btoa(SECRET_KEY + ":");

async function listarTransacoes() {
  const proxy = "https://cors-anywhere.herokuapp.com/"; 
  const url = "https://api.moneria.com.br/v1/transactions";

  try {
    const response = await fetch(proxy + url, {
      method: "GET",
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Erro HTTP: " + response.status);
    }

    return await response.json();

  } catch (error) {
    console.error("Erro ao consultar API Moneria:", error);
    return { error: error.message };
  }
}

async function obterSaldo() {
  const dados = await listarTransacoes();

  if (dados && dados.data) {
    let saldo = 0;
    dados.data.forEach(tx => {
      if (tx.status === "approved") {
        saldo += tx.amount;
      }
    });
    return saldo / 100; 
  }

  return 0;
}
