const root = document.getElementById('root');

function ready() {
    root.innerHTML = `
    <div class="main-container">
    <div class="img-container">
        <!-- <img src="Media/Logo Inventario.png" alt="Logo de la empresa" width="100px" > -->
    </div>
    <div>
        <form id="login-form" class="form-control">
            <div class="mb-2">
                <label for="userInput" class="form-label">Nombre de usuario o correo electrónico</label
        >
        <input
          id="userInput"
          class="form-control"
          type="email"
          placeholder="Example@gmail.com"
        />
        <!--Para indicar que debe hacer el Usuario-->
      </div>
      <div class="mb-2">
        <label for="password" class="form-label">Contraseña</label>
                <input type="password" id="password" class="form-control" placeholder="Ingresa la contraseña" />
            </div>
            <div class="d-flex flex-column mt-3">
                <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">Recuérdame</label
          >
        </div>
        <button type="button" class="btn btn-primary btn-lg mb-2">
          Acceder
        </button>
      </div>
    </form>
  </div>
</div>
    `
};
document.addEventListener('DOMContentLoaded', ready);