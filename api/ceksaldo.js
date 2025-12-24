import axios from "axios"
import qs from "qs"

export default async function handler(req, res) {
  try {
    const { api } = req.body
    const r = await axios.post(
      "https://atlantich2h.com/get_profile",
      qs.stringify({ api_key: api })
    )
    res.json({ saldo: r.data.data.balance })
  } catch {
    res.json({ error: "API tidak valid" })
  }
}