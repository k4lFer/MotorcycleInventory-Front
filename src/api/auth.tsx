import axios from "./axios";

export async function login(username: string, password: string) {
  try {
    const response = await axios.post("/auth/login", {
      username,
      password,
    });
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error al iniciar sesión");
  }
}

export async function refreshToken(refreshToken: string) {
  try {
    const response = await axios.post("/auth/refresh", { refreshToken });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Error al refrescar el token"
    );
  }
}
