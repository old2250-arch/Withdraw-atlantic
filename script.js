function showSaldo() {
  document.getElementById("saldoBox").classList.remove("hidden")
  document.getElementById("withdrawBox").classList.add("hidden")
}

function showWithdraw() {
  document.getElementById("withdrawBox").classList.remove("hidden")
  document.getElementById("saldoBox").classList.add("hidden")
}

async function cekSaldo() {
  const api = document.getElementById("apiKey").value
  const res = await fetch("/api/cekSaldo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api })
  })
  const data = await res.json()
  document.getElementById("saldoResult").innerText =
    data.saldo ? `Saldo: Rp${data.saldo}` : data.error
}

async function withdraw() {
  const payload = {
    token: document.getElementById("token").value,
    layanan: document.getElementById("layanan").value,
    nomor: document.getElementById("nomor").value,
    nominal: document.getElementById("nominal").value
  }

  const res = await fetch("/api/withdraw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })

  const data = await res.json()
  document.getElementById("wdResult").innerText =
    data.status || data.error
}