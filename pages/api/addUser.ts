export default function handler(req, res) {
    const { method, body } = req;

    if (method === 'POST' || method === 'GET') {
        console.log('Request payload:', body)
        res.status(200).json({message: "success"})
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
