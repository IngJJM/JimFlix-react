import React from "react";
import Layout from "./../Layout/Layout";
import { Input } from './../Components/Home/UsedInputs';
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

import logoo from '../Assets/images/log.png'
function Login() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img
            //src="/src/Assets/images/log.png"
            src={logoo}
            alt="logo"
            className="w-full h-12 object-contain"
          ></img>
          <Input
            label="Email"
            placeholder="jimmy-45@hotmail.com"
            type="email"
            bg={true}
          ></Input>
           <Input
            label="Contraseña"
            placeholder="********"
            type="password"
            bg={true}
          ></Input>
          <Link to="/dashboard" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
            <FiLogIn></FiLogIn>Iniciar Sesión
          </Link>
          <p className="text-center text-border">
            No tienes cuenta.{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2">Crear una</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
