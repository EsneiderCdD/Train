# app.py
from flask import Flask
from flask_cors import CORS
from routes import routes_bp
from models import db
from config import Config  # ✅ Importar correctamente

app = Flask(__name__)
app.config.from_object(Config)  # ✅ Usar config.py bien
CORS(app)

# Inicializar base de datos
db.init_app(app)

# Registrar las rutas
app.register_blueprint(routes_bp)

# Crear tablas automáticamente si no existen
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
