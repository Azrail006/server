let page = 1;
const records_per_page = 5;

const data = [
    { item: "1" },
    { item: "2" },
    { item: "3" },
    { item: "4" },
    { item: "5" },
    { item: "6" },
    { item: "7" },
    { item: "8" },
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