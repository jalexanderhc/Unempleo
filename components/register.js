  
import Link from "next/link";

const Register = () => {
  return (
    <div className="row register-login-section ">
        <div className="col-md-6">
          <img src="register.jpg" className="img-fluid h-100" alt=""/>
        </div>
        <div className="col-md-6">
        <div className="container h-100 w-100 register-login-form">
            <div className="row h-100 align-items-center justify-content-center"> 
              <form>
                <div className="form-group">
                  <label htmlFor="email" className="label-custom">Correo electronico</label>
                  <input type="text" name="email" id="email" className="form-control input-custom" placeholder="" aria-describedby="helpId" />
                </div>
                <div className="form-group" >
                  <label htmlFor="pass" className="label-custom">Contraseña</label>
                  <input type="text" name="pass" id="pass" className="form-control input-custom" placeholder="" aria-describedby="helpId" />
                </div>
                <div className="form-group">
                  <label htmlFor="passConfirm" className="label-custom">Confirmar contraseña</label>
                  <input type="text" name="passConfirm" id="passConfirm" className="form-control input-custom" placeholder="" aria-describedby="helpId" />
                </div>
                <div className="form-group text-center">
                  <a name="" id="" className="btn btn-primary rounded button-custom" href="#" role="button">Aceptar</a>
                </div>
                <div className="form-group links-custom text-center">
                  <b >¿Tienes cuenta? </b>
                  <Link href="/login"> 
                    <a className="card-link">Inicia sesión</a>
                  </Link>
                </div>
                </form>
            </div>
          </div>
        <img src="circulos.png" className="img-fluid h-100 img-register-login-circles" alt=""/>
          
        </div>
    </div>
  );
};

export default Register;