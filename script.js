let trades = [];


function addTrade() {

    let market = document.getElementById("market").value;
    let direction = document.getElementById("direction").value;
    let entry = document.getElementById("entry").value;
    let sl = document.getElementById("sl").value;
    let tp = document.getElementById("tp").value;
    let setup = document.getElementById("setup").value;
    let result = document.getElementById("result").value;


    if (
        market === "" ||
        entry === "" ||
        sl === "" ||
        tp === ""
    ) {

        alert("Bitte alle Felder ausfüllen!");

        return;

    }



    let trade = {

        market: market,
        direction: direction,
        entry: entry,
        sl: sl,
        tp: tp,
        setup: setup,
        result: result

    };


    trades.push(trade);


    updateTable();

    updateStats();


    document.getElementById("market").value = "";
    document.getElementById("entry").value = "";
    document.getElementById("sl").value = "";
    document.getElementById("tp").value = "";

}



function updateTable(){

    let table = document.getElementById("tradeTable");


    table.innerHTML = "";


    trades.forEach(function(trade){


        let row = `

        <tr>

        <td>${trade.market}</td>

        <td>${trade.direction}</td>

        <td>${trade.entry}</td>

        <td>${trade.sl}</td>

        <td>${trade.tp}</td>

        <td>${trade.setup}</td>

        <td>${trade.result}</td>

        </tr>

        `;


        table.innerHTML += row;


    });


}




function updateStats(){


    let total = trades.length;


    document.getElementById("tradeCount").innerHTML = total;



    if(total === 0){

        document.getElementById("winrate").innerHTML = "0%";

        return;

    }



    let wins = trades.filter(function(trade){

        return trade.result === "Win";

    }).length;



    let winrate = Math.round((wins / total) * 100);



    document.getElementById("winrate").innerHTML = winrate + "%";


}
