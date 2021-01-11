function next_previous(previous,next) {
    document.getElementsByClassName("pre-next-buttons")[0].innerHTML +=`
    <button type="button" class="btn btn-primary Previous-button" 
          onclick="window.location.href=' ${previous}'">
          <i class="fas fa-caret-left"></i> Previous</button>
          
          <button type="button" class="btn btn-primary Next-button" 
          onclick="window.location.href='${next}'">
          Next <i class="fas fa-caret-right"></i></button>
          `;
      document.getElementsByClassName("pre-next-buttons")[1].innerHTML +=`
      <button type="button" class="btn btn-primary Previous-button" 
            onclick="window.location.href=' ${previous}'">
            <i class="fas fa-caret-left"></i> Previous</button>
            
            <button type="button" class="btn btn-primary Next-button" 
            onclick="window.location.href='${next}'">
            Next <i class="fas fa-caret-right"></i></button>
            `;
}