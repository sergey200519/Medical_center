const url = "http://127.0.0.1:5000/services/dentistry";


const table: HTMLTableElement = document.querySelector(".pricelist-table");
const linksUl: HTMLUListElement = document.querySelector(".pricelist-links");

interface Service {
    price: string;
    service: string;
}

interface Services {
    [key: string]: {
        [key: number]: {
            [key: number]: Service
        }
    }
}


// type Services = {
//     string: {
//         number: {
//             number: {
//                 price: string;
//                 service: string;
//             }
//         }
//     }
// }


function sort(services: Services) {
    let max: number = 0;
    const temp: {
        [key: number]: string;
    } = {}
    for (const [key, value] of Object.entries(services)) {
        for (const [k, v] of Object.entries(value)) {
            temp[Math.trunc(Number(k))] = key;
            if (Math.trunc(Number(k)) > max) max = Math.trunc(Number(k));
            break
        }
    }
    let a = {
        1.9: ""
    }

    let res: Services = {}
    for (let i = 1; i <= max; i++) {
        console.log(temp[i], services[temp[i]]);
        res[temp[i]] = services[temp[i]]
        let temp_local: {
            [key: number]: Object;
        } = {};
        for (const [key, value] of Object.entries(services[temp[i]])) {
            temp_local[Number(key)] = value;
        }
        console.log(temp_local, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    }

    return res
}

function render(services: Services) {
    let tableCode: string = `
        <thead>
            <tr>
                <th id="keys">Код</th>
                <th>Название услуги</th>
                <th>Цена(в руб.)</th>
            </tr>
        </thead>
    `;
    let ulCode: string = ``;
    let idNumber: number = 0;
    for (const [key, value] of Object.entries(services)) {
        let id: string = `services-${idNumber}`
        let tbodyCode: string = `
            <tr id="${id}">
                <th scope="rowgroup" headers="keys" colspan="3">${key}</th>
            </tr>
        `;

        ulCode += `
            <li><a href="#${id}">${key}</a></li>
        `
        idNumber++;

        let tdsCode: string = ``;
        
        for (const [k, v] of Object.entries(value)) {
            // console.log(k, typeof k);
            if (Object.keys(v).length == 1) {
                tbodyCode += `
                    <tr>
                        <td>${k}</td>
                        <th scope="row">${v[Object.keys(v)[0] as unknown as number].service}</th>
                        <td>${v[Object.keys(v)[0] as unknown as number].price}</td>
                    </tr>
                `;
            } else {
                let isFirst: boolean = true;
                for (const [n, s] of Object.entries(v)) {
                    // console.log(n, s);
                    if (isFirst) {
                        tbodyCode += `
                        <tr>
                            <td rowspan="${Object.keys(v).length}">${k}</td>
                            <th scope="row">${s.service}</th>
                            <td>${s.price}</td>
                        </tr>
                    `
                    isFirst = false
                    } else {
                        tbodyCode += `
                            <tr>
                                <th scope="row">${s.service}</th>
                                <td>${s.price}</td>
                            </tr>
                        `
                    }
                }
            }
        }
        tableCode += `
            <tbody>
                ${tbodyCode}
            </tbody>
        `
        // console.log(key, value, "first loop");
    }
    table.innerHTML = tableCode;
    linksUl.innerHTML = ulCode;
}




fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }
        return response.json();
    })
    .then(data => {
        // const keys: string[] = Object.keys(data).reverse();
        // // render(data, keys);
        // sort(data)
        console.log(data);
        // render(sort(data))
        render(data)
    })
    .catch(error => {
        console.log(error);
    });