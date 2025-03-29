export async function POST(req) {
  try {
    const body = await req.json()

    const response = await fetch('https://integracoes.sistemasupremo.com.br/formulario_externos_callback.php?token=s535d20240703114431', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('Erro ao enviar lead:', error)
    return new Response(JSON.stringify({ error: true, message: 'Erro interno' }), {
      status: 500
    })
  }
}
