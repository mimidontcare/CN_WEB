const BASE_URL = "http://localhost:5000/api/nganh";

export async function getAllNganh() {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function addNganh(data: any) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return { success: res.ok, message: result.message };
  } catch (error) {
    return { success: false, message: "Lỗi kết nối server" };
  }
}
