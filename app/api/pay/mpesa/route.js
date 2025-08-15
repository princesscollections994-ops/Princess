
export async function POST(request){
  // Placeholder stub for preview. Replace with real Daraja call after design sign-off.
  // Read body if needed: const body = await request.json();
  return new Response(JSON.stringify({ ok: true, message: "Preview mode: Payments Coming Soon" }), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}
