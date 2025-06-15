***### VIDEO ###***
https://youtu.be/yXY0C0Vp5BM


# 🛠️ Train - Backend

## 📚 Tecnologías utilizadas

- **Python 3.11+**
- **Flask 3.1.1**
- **Flask-CORS 6.0.1**
- **Flask-SQLAlchemy 3.1.1**
- **PostgreSQL**
- **Werkzeug** (para hashing de contraseñas)
- **python-dotenv** (manejo de variables de entorno)

## 📁 Estructura del proyecto

Backend/
├── app.py               # Archivo principal de arranque del servidor Flask
├── config.py            # Configuración de entorno y base de datos
├── models.py            # Modelo de base de datos para el usuario
├── routes.py            # Definición de rutas y controladores
├── .env                 # Variable de entorno 
├── requirements.txt     # Dependencias del proyecto

## ⚙️ Configuración e instalación

1. **Clona el repositorio**:
```bash
git clone https://github.com/tuusuario/train.git
cd train/Backend
```
2. **Crea un entorno virtual (opcional pero recomendado)**:
```bash
python -m venv venv
source venv\Scripts\activate  
```
3. **Instala las dependencias**:
```bash
pip install -r requirements.txt
```
4. **Configura tus variables de entorno**:
Crea un archivo `.env` con la siguiente variable:
```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_basedatos
```
5. **Inicia el servidor**:
```bash
python app.py
```



# 🚀 Train - Frontend


## 🧰 Tecnologías utilizadas

- **React 18+**
- **Vite** (como empaquetador)
- **React Router DOM** (para navegación entre vistas)

---

## 📁 Estructura del proyecto

```
Frontend/
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
├── src/
│   ├── App.jsx              
│   ├── main.jsx             
│   └── pages/
│       ├── Register.jsx     
│       └── UserList.jsx    
```

---

## ⚙️ Instalación y ejecución

1. **Abre una terminal** y navega hasta la carpeta `Frontend`:

```bash
cd train/Frontend
```

2. **Instala las dependencias**:

```bash
npm install
```

3. **Inicia el servidor de desarrollo**:

```bash
npm run dev
```