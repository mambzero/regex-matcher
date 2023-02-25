import { version } from '../../package.json';

export default `
  <div class="wrapper container-fluid">
    <div class="header row bg-primary">
      <div class="col-12">
        <div class="d-flex flex-wrap flex-sm-nowrap align-items-center">
          <img class="logo vanila" src="images/javascript.svg" alt="Regex 99 logo">
          <h1>Regex 99</h1>
          <div class="input-group">
            <input type="text" name="pattern" class="form-control ms-sm-3" placeholder="Pattern">
            <div class="input-group-text">
              <div class="dropdown" id="flags">
                <a class="dropdown-toggle" type="button" id="flags-dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
                  <span>/</span>
                  <span class="flags-string"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="flags-dropdown-btn"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main row">
      <div class="col-md-8 py-3">
        <textarea name="input" class="form-control h-100"></textarea>
      </div>
      <div class="col-md-4 bg-dark py-3">
        <div id="result" class="text-white">
          ...
        </div>
      </div>
    </div>
    <div class="footer row">
      <div class="col-md-12 bg-light">
        <div class="d-flex justify-content-between my-1">
          <p>JS Regex 99 v${version}</p>
          <p>
            <span>Built with</span>
            <a href="https://vitejs.dev" target="_blank">
              <img src="images/vite.svg" alt="Vite logo" class="mb-1" height="20px" width="auto" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
`;
