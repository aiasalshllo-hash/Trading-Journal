// Trading Journal AI
// Dashboard Functions


const trades = [

    {
        market: "EUR/USD",
        setup: "Liquidity Sweep",
        result: "WIN",
        rr: 2.5
    },

    {
        market: "NAS100",
        setup: "Fair Value Gap",
        result: "LOSS",
        rr: -1
    },

    {
        market: "GBP/USD",
        setup: "Break Of Structure",
        result: "WIN",
        rr: 3
    }

];





function calculateStats(){


    let total = trades.length;


    let wins = trades.filter(
        trade => trade.result === "WIN"
    ).length;


    let winrate = Math.round(
        (wins / total) * 100
    );


    return {

        total: total,

        winrate: winrate

    };


}







function addTradeToTable(){


    const table = document.querySelector("table");


    trades.forEach(trade => {


        const row = document.createElement("tr");


        row.innerHTML = `

        <td>${trade.market}</td>

        <td>${trade.setup}</td>

        <td class="${trade.result === "WIN" ? "win" : "loss"}">

        ${trade.result}

        </td>

        <td>${trade.rr}R</td>

        `;


        table.appendChild(row);


    });


}







function updateAI(){


    const aiText = document.querySelector(".ai");


    if(aiText){

        aiText.innerHTML = `

        <p>
        Analyse deiner letzten Trades:
        </p>

        <h3>
        Starkes Setup: Liquidity Sweep
        </h3>


        <p>
        Verbesserung:
        </p>


        <h3>
        Mehr Geduld bei Entries
        </h3>


        `;

    }


}







function startDashboard(){


    addTradeToTable();


    updateAI();


}



window.onload = startDashboard;
