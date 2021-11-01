function highlight(table) {
  // // console.log(table);
  // let trs = table.querySelectorAll('tr');
  // // console.log(trs);
  // for (let tr of trs) {
  //   let tds = tr.querySelectorAll('td');
  //   // console.log(tds);
  //   for(let td of tds){
  //     // console.log(td.textContent);
  //     if (tds[3].dataset.available === 'true'){
  //       tr.classList.add('available');
  //     } else if (tds[3].dataset.available === 'false'){
  //       tr.classList.add('unavailable');
  //     } else {
  //       // tr.setAttribute('hidden', '');
  //       // console.log(tds[3].attributes);
  //     }

  //   if (tds[2].textContent === 'm');
  //   }
  // }
  for (let i = 0; i < table.rows.length ; i++) {
    let cell = table.rows[0].cells[i];
    console.log(cell.innerHTML);
    if(cell.innerHTML === 'Age'){
      td_id = i;
      console.log (td_id);
      let trs = document.querySelectorAll('tr');
      for(let tr of trs){
        let tds = tr.querySelectorAll('td')
        let text_td = tds[td_id].innerHTML;
        if (text_td < 18){
          tr.style.background = 'blue';
        console.log(text_td);
        }
      }
      console.log(trs);
    }
    cell.style.backgroundColor = 'red';
  }


}
