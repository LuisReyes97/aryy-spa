
/* middleware para acceder con el token almacenado en localStorage | Luis Reyes */
export default function({ store, redirect, $axios}) {
    /*     const token = 'token'  */
        console.log('conectando ')
        if (!store.state.authenticated) {
         if(process.client){
                localStorage.getItem('token');
                return redirect("/auth/login");
            } 
        }
        // Verificar si la ruta actual no es la de inicio de sesión
    if (route.path === '/auth/login') {
        // Redirigir a la página principal
        return redirect('/')
      }
      
      // Continuar con la petición
      return callback();
    }