import axios from "axios"
import qs from "qs"

export default async function handler(req, res) {
  const { token, layanan, nomor, nominal } = req.body

  if (nominal < 5000)
    return res.json({ error: "Minimal withdraw 5000" })

  try {
    const r = await axios.post(
      "https://atlantich2h.com/transfer/create",
      qs.stringify({
        api_key: token,
        kode_bank: layanan,
        nomor_akun: nomor,
        nominal
      })
    )

    res.json({ status: r.data.data.status })
  } catch {
    res.json({ error: "Withdraw gagal" })
  }
}