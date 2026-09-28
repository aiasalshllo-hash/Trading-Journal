let trades = 0;

function addTrade() {

    let market = document.getElementById("market").value;
    let direction = document.getElementById("direction").value;
    let entry = document.getElementById("entry").value;
    let sl = document.getElementById("sl").value;
    let tp = document.getElementById("tp").value;
    let setup = document.getElementById("setup").value;

    if (market === "" || entry === "" || sl === "" || tp === "") {
        alert("Bitte alle wichtigen Felder ausfüllen!");
        return;
    }

    trades++;

    document.getElementById("tradeCount").innerHTML = trades;

    alert(
        "Trade gespeichert:\n\n" +
        "Markt: " + market +
        "\nRichtung: " + direction +
        "\nEntry: " + entry +
        "\nStop Loss: " + sl +
        "\nTake Profit: " + tp +
        "\nSetup: " + setup
    );
}
