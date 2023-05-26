let page = 1;
const records_per_page = 5;

const data = [
  { item: "1"},
  { item: "2"},
  { item: "3"},
  { item: "4"},
  { item: "5"},
  { item: "6"},
  { item: "7"},
  { item: "8"},
  { item: "9"},
  { item: "10"},
  { item: "11"},
  { item: "12"},
  { item: "13"},
  { item: "14"},
  { item: "15"},
  { item: "16"},
  { item: "17"},
  { item: "18"},
  { item: "19"},
  { item: "20"},
  { item: "21"},
  { item: "22"},
  { item: "23"},
  { item: "24"},
  { item: "25"},
  { item: "26"},
  { item: "27"},
  { item: "28"},
  { item: "29"},
  { item: "30"},
  { item: "31"},
  { item: "32"},
  { item: "33"},
  { item: "34"},
  { item: "35"},
  { item: "36"},
  { item: "37"},
  { item: "38"},
  { item: "39"},
  { item: "40"},
  { item: "41"},
  { item: "42"},
  { item: "43"},
  { item: "44"},
  { item: "45"},
  { item: "46"},
  { item: "47"},
  { item: "48"},
  { item: "49"},
  { item: "50"},

];
console.log(data.length);

function num_pages() {
    return Math.ceil(data.length / records_per_page);
}

function prev_page() {
    if (page > 1) {
        page--;
       change_page(page);
    }
}

function next_page() {
    if (page < num_pages()) {
        page++;
       change_page(page);
    }
}

function change_page(page) {
    const btn_prev = document.getElementById('btn-prev');
    const btn_next = document.getElementById('btn-next');
    const listing_table = document.getElementById('listing-table');
    // let page_span = document.getElementById('page');
 
    if (page < 1) {
        page = 1;
    }
    if (page > num_pages()) {
        page = num_pages();
    }

    listing_table.innerHTML = '';

    for (let i = (page - 1) * records_per_page; i < (page * records_per_page) && i < data.length; i++) {
        listing_table.innerHTML += `${data[i].item}<br>`;
    }
    

    btn_prev.style.display = (page === 1) ? 'none' : 'inline-block';
    btn_next.style.display = (page === num_pages()) ? 'none' : 'inline-block';
}

window.onload = () => {
    document.getElementById('btn-prev').addEventListener('click', (e) => {
        e.preventDefault();
        prev_page();
    });

    document.getElementById('btn-next').addEventListener('click', (e) => {
        e.preventDefault();
       next_page();
    });

   change_page(1);
};