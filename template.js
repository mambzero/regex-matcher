import javascriptLogo from './javascript.svg';

export default `
<div class="wrapper container-fluid">
  <div class="header row bg-primary">
    <div class="col-12">
      <div class="d-flex flex-nowrap align-items-center">
        <img class="logo vanila" src="${javascriptLogo}" alt="Regex 99 logo">
        <h1>Regex 99</h1>
        <input type="text" name="pattern" class="form-control ms-3" placeholder="Pattern">
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
        <p>JS Regex 99</p>
        <p>
          <span>Built with</span>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" alt="Vite logo" class="mb-1" height="20px" width="auto" />
          </a>
        </a>
      </div>
    </div>
  </div>
</div>
`;
