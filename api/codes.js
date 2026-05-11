export default function handler(req, res) {
  const { code } = req.query;
  const secretCodes = process.env.PREMIUM_CODES.split(',');

  if (secretCodes.includes(code)) {
    return res.status(200).json({ valid: true });
  } else {
    return res.status(403).json({ valid: false });
  }
}
