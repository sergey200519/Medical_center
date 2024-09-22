const url = "https://sergey200519-medical-center-backend-flask-06b4.twc1.net/services/dentistry";

const pricelistBox = document.querySelector(".det");

interface Service {
    price: string;
    service: string;
}

interface Services {
    [key: string]: {
        [key: number]: {
            price: any;
            date: any;
            bio: any;
            type: any;
            service: any;
            [key: number]: Service
        }
    }
}


let pricelistCode = "";

function render(services: Services) {
    for (const [key, value] of Object.entries(services)) {
        let tableCode: string = `
            <thead>
                <tr>
                    <th id="keys">Код</th>
                    <th>Название услуги</th>
                    <th>Цена(в руб.)</th>
                </tr>
            </thead>
        `;
        let tbodyCode: string = `
            <tr>
                <th scope="rowgroup" headers="keys" colspan="3" class="sub-title">${key}</th>
            </tr>
        `;
        for (const [k, v] of Object.entries(value)) {
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
        console.log(data);
        render(data);
    })
    .catch(error => {
        console.log(error);
    });