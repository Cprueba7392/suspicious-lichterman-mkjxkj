import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  role: string;
}

const users: User[] = [
  { id: 1, name: 'Administrador', role: 'admin' },
  { id: 2, name: 'Veterinario', role: 'veterinarian' },
  { id: 3, name: 'Empleado', role: 'employee' },
];

const App = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleLogin = () => {
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
    setLoggedIn(true);
  };

  const handleBack = () => {
    setSelectedUser(null);
    setUsername('');
    setPassword('');
    setLoggedIn(false);
  };

  const handleMenu = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold fixed top-0 left-0 right-0 text-center bg-white py-2 border-b-2 border-gray-200">Veterinaria</h1>
      <div className="flex flex-col items-center justify-center h-screen mt-12">
        {loggedIn && selectedMenu === 'admin' ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Menú - Administrador</h2>
            <div className="flex flex-row justify-center mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Clientes
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Mascotas
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Historial Médico
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Proveedores
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Pagos
              </button>
            </div>
            <div className="flex flex-row justify-center mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Empleados
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Veterinarios
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Productos
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Citas
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Usuarios
              </button>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBack}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : selectedUser ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">{selectedUser.name}</h2>
            <input
              type="text"
              placeholder="Usuario"
              className="bg-gray-200 border-2 border-gray-400 rounded p-2 mb-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-gray-200 border-2 border-gray-400 rounded p-2 mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
              onClick={() => {
                handleLogin();
                handleMenu(selectedUser.role);
              }}
            >
              Iniciar Sesión
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBack}
            >
              Volver
            </button>
          </div>
        ) : (
          <div className="flex flex-row justify-center mb-4">
            {users.map((user) => (
              <div key={user.id} className="mx-4 flex flex-col items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                  onClick={() => handleSelectUser(user)}
                >
                  {user.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;