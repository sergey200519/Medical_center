import { pricelistLaboratoryList } from "./pricelist_laboratory_list.min.js";
// const url = "https://sergey200519-medical-center-backend-flask-06b4.twc1.net/services/laboratory";
const pricelistBox = document.querySelector(".det");
let pricelistCode = "";
function render(services) {
    for (const [key, value] of Object.entries(services)) {
        let tableCode = `
            <thead>
                <tr>
                    <th id="keys">Код</th>
                    <th>Название услуги</th>
                    <th>Биоматериал</th>
                    <th>Срок</th>
                    <th>Цена(в руб.)</th>
                </tr>
            </thead>
        `;
        console.log(key, value);
        let tbodyCode = ``;
        for (const [k, v] of Object.entries(value)) {
            tbodyCode += `
                <tr>
                    <th scope="rowgroup" headers="keys" colspan="5" class="sub-title">${k}</th>
                </tr>
            `;
            for (const [k2, v2] of Object.entries(v)) {
                tbodyCode += `
                    <tr>
                        <td>${k2}</td>
                        <th scope="row">${v2.name}</th>
                        <td>${v2.bio}</td>
                        <td>${v2.date}</td>
                        <td>${v2.price}</td>
                    </tr>
                `;
            }
        }
        // for (const [k, v] of Object.entries(value)) {
        //     if (Object.keys(v).length == 1) {
        //         tbodyCode += `
        //             <tr>
        //                 <td>${k}</td>
        //                 <th scope="row">${v[Object.keys(v)[0] as unknown as number].service}</th>
        //                 <td>${v[Object.keys(v)[0] as unknown as number].price}</td>
        //             </tr>
        //         `;
        //     } else {
        //         let isFirst: boolean = true;
        //         for (const [n, s] of Object.entries(v)) {
        //             // console.log(n, s);
        //             if (isFirst) {
        //                 tbodyCode += `
        //                 <tr>
        //                     <td rowspan="${Object.keys(v).length}">${k}</td>
        //                     <th scope="row">${s.service}</th>
        //                     <td>${s.price}</td>
        //                 </tr>
        //             `
        //             isFirst = false
        //             } else {
        //                 tbodyCode += `
        //                     <tr>
        //                         <th scope="row">${s.service}</th>
        //                         <td>${s.price}</td>
        //                     </tr>
        //                 `;
        //             }
        //         }
        //     }
        // }
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
render(pricelistLaboratoryList);
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
