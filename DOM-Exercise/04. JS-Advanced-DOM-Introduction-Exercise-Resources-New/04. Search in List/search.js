function search() {
   const elemnts = Array.from(document.querySelectorAll("ul li"));
   const text = document.getElementById("searchText").value;
   let matches = 0;
   elemnts.forEach((el) => {
      if(el.innerHTML.includes(text)){
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline";
         matches++;

      }else{
         el.style.frontWeight = "normal";
         el.style.textDecoration = "";
      }
   })
   document.getElementById("result").textContent = `${matches} matches found`;
}
