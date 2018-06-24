(function () {
  var API = 'https://baconipsum.com/api/?type=meat-and-filler';

  jQuery.getJSON(API, function(data) {
    var JSONdata = data;
    const elementNo = JSONdata.length + 2;
    var panelContent = '<div role="tabpanel" id="panel-0"><h3>Wellcome</h3><p scrolling=="auto">Please click one of radio button below to reveal content.</p></div>';
    var formContent = '';
    var currentPanel = '';
    
    for (var i = 0 ; i < elementNo ; i++) {
      panelContent += `
        <div role="tabpanel" id="panel-${i+1}" hidden>
          <h3>Panel ${i+1}</h3>
          <p>${JSONdata[i] ? JSONdata[i] : '- API does not return any data -'}</p>
        </div>`
      formContent += `
        <li role="tab" aria-controls="panel-${i+1}" class="tablist__item">
          <input type="radio" name="tablist.0" value="panel-${i+1}" id="p-${i+1}">
          <label for="p-${i+1}"></label>
        </li>`
    }
  
    const moduleContainer = document.createElement("div");
    moduleContainer.classList.add("modul");
  
    moduleContainer.innerHTML = `
      <div class="content">${panelContent}</div>
      <form action="" method="get">
        <ul role="tablist" class="tablist">${formContent}</ul>
      </form>`;
  
    const form = moduleContainer.querySelector("form");
  
    form.addEventListener("change", function(ev) {
      firstClick = true;
      const input = ev.target;
      ev.stopPropagation();
      const panel = document.getElementById(input.value);
      const wellcomePanel = document.getElementById('panel-0');
      wellcomePanel.hidden = true;
      panel.hidden = false;
      currentPanel.hidden = true;
      currentPanel = panel;
    }, false);
  
    document.body.appendChild(moduleContainer);
  });
}());