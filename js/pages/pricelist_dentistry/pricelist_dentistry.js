import { pricelistDentistryList } from "./pricelist_dentistry_list.min.js";
// const url = "https://sergey200519-medical-center-backend-flask-06b4.twc1.net/services/dentistry";
const pricelistBox = document.querySelector(".det");
let pricelistCode = "";
function render(services) {
    for (const [key, value] of Object.entries(services)) {
        let tableCode = `
            <thead>
                <tr>
                    <th id="keys">Код</th>
                    <th>Название услуги</th>
                    <th>Цена(в руб.)</th>
                </tr>
            </thead>
        `;
        let tbodyCode = `
            <tr>
                <th class="sub-title"></th>
                <th scope="rowgroup" headers="keys" class="sub-title">${key}</th>
                <th class="sub-title"></th>
            </tr>
        `;
        for (const [k, v] of Object.entries(value)) {
            if (Object.keys(v).length == 1) {
                tbodyCode += `
                    <tr>
                        <td>${k}</td>
                        <th scope="row">${v[Object.keys(v)[0]].service}</th>
                        <td>${v[Object.keys(v)[0]].price}</td>
                    </tr>
                `;
            }
            else {
                let isFirst = true;
                for (const [n, s] of Object.entries(v)) {
                    // console.log(n, s);
                    if (isFirst) {
                        tbodyCode += `
                        <tr>
                            <td rowspan="${Object.keys(v).length}">${k}</td>
                            <th scope="row">${s.service}</th>
                            <td>${s.price}</td>
                        </tr>
                    `;
                        isFirst = false;
                    }
                    else {
                        tbodyCode += `
                            <tr>
                                <th scope="row">${s.service}</th>
                                <td>${s.price}</td>
                            </tr>
                        `;
                    }
                }
            }
        }
        tableCode += tbodyCode;
        pricelistCode += `
            <details>
                <summary>${key}</summary>
                <table class="pricelist-table">
                    ${tableCode}
                </table>
            </details>
        `;
    }
    pricelistBox.innerHTML = pricelistCode;
}
render(pricelistDentistryList);
// fetch(url, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Ошибка запроса');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         render(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
