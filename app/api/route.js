export async function GET() {
    try {
        return Response.json({ message: "⚡ Bienvenido a Rafaela Software ⚡" });
    } catch (error) {
        console.error(error);
    }
}