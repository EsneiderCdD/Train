import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");


    if (!formData.name || !formData.email || !formData.password) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Correo inválido.");
      return;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Error en el registro.");
      }

      setSuccess("Usuario registrado exitosamente.");
      setFormData({ fullname: "", email: "", password: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="fullname"
          placeholder="Nombre completo"
          value={formData.fullname}
          onChange={handleChange}
        /><br />
        <input
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        /><br />
        <input
          name="password"
          placeholder="Contraseña"
          type="password"
          value={formData.password}
          onChange={handleChange}
        /><br />
        <button type="submit">Registrarse</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default Register;
