* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: white;
    margin: 0;
    padding: 20px;
}


h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 30px;
}


.dashboard {
    max-width: 1100px;
    margin: auto;
}


.card {
    background: #1e293b;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 18px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}


h2 {
    margin-top: 0;
}


.stats {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}


.box {
    background: #334155;
    padding: 20px;
    border-radius: 15px;
    flex: 1;
    min-width: 180px;
    text-align: center;
}


.box p {
    font-size: 30px;
    font-weight: bold;
}


label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
}


input,
select {

    width: 100%;
    padding: 12px;

    background: #334155;
    color: white;

    border: none;
    border-radius: 10px;

    font-size: 16px;

}


button {

    margin-top: 25px;

    width: 100%;

    padding: 15px;

    background: #22c55e;

    color: white;

    border: none;

    border-radius: 12px;

    font-size: 18px;

    cursor: pointer;

}


button:hover {

    opacity: 0.85;

}



table {

    width: 100%;

    border-collapse: collapse;

}


th,
td {

    padding: 12px;

    text-align: center;

    border-bottom: 1px solid #475569;

}


th {

    background: #334155;

}


@media(max-width:700px){

    .stats{

        flex-direction: column;

    }

    table{

        font-size: 12px;

    }

}
