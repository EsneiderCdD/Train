from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from models import User, db

# Crear el Blueprint
routes_bp = Blueprint('routes', __name__)

@routes_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    fullname = data.get('fullname')  # ✅ Corregido aquí
    email = data.get('email')
    password = data.get('password')

    if not fullname or not email or not password:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400

    if len(password) < 6:
        return jsonify({"error": "La contraseña debe tener al menos 6 caracteres"}), 400

    if '@' not in email or '.' not in email:
        return jsonify({"error": "Correo electrónico no válido"}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error": "El correo ya está registrado"}), 400

    hashed_password = generate_password_hash(password)

    new_user = User(fullname=fullname, email=email, password=hashed_password)  # ✅ clave correcta
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario registrado exitosamente"}), 201


@routes_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify({
        "users": [
            {
                "name": user.fullname,
                "email": user.email
            } for user in users
        ]
    }), 200
