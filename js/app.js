//*************function start here**************//

function getPlayerById(elementId) {
    const playerNameString = document.getElementById(elementId);
    const playerName = playerNameString.innerText;
    return playerName;

}

function setPlayer(elementId, value) {
    const Playars = document.getElementById(elementId, value);
    Playars.innerText = value;

}

function calculateAmount(elementId) {
    const playerAmountField = document.getElementById(elementId);
    const playerAmountString = playerAmountField.value;
    const playerAmount = parseFloat(playerAmountString);
    playerAmountField.value = '';


    if (isNaN(playerAmount)) {
        alert('Please provide a valid Number')
        return
    }

    return playerAmount;
}

//*************function start here**************//


//*************players added in card**************//

const Players1Btn = document.getElementById('player-1');
Players1Btn.addEventListener('click', function () {
    Players1Btn.disabled = true;

    const lionalMessi = getPlayerById('Lional-messi')

    setPlayer('players-1', lionalMessi)

})

const Players2Btn = document.getElementById('player-2');
Players2Btn.addEventListener('click', function () {
    Players2Btn.disabled = true;

    const acuna = getPlayerById('acuna')

    setPlayer('players-2', acuna)
})
const Players3Btn = document.getElementById('player-3');
Players3Btn.addEventListener('click', function () {
    Players3Btn.disabled = true;

    const alvarez = getPlayerById('alvarez')

    setPlayer('players-3', alvarez)
})
const Players4Btn = document.getElementById('player-4');
Players4Btn.addEventListener('click', function () {
    Players4Btn.disabled = true;

    const dibala = getPlayerById('dibala')

    setPlayer('players-4', dibala)
})
const Players5Btn = document.getElementById('player-5');
Players5Btn.addEventListener('click', function () {
    Players5Btn.disabled = true;

    const dePaul = getPlayerById('de-paul')

    setPlayer('players-5', dePaul)

})
const Players6Btn = document.getElementById('player-6');
Players6Btn.addEventListener('click', function () {
    Players6Btn.disabled = true;

    const Demaria = getPlayerById('De-maria')

    setPlayer('players-6', Demaria)

});

//*************players added in card**************//


//*************players cost calculate**************//
document.getElementById('player-calculate').addEventListener('click', function () {
    const playerAmount = calculateAmount('player-feild')


    const perPlayerCost = playerAmount * 5;
    const setPlayerCost = document.getElementById('per-cost');
    setPlayerCost.innerText = perPlayerCost;

    document.getElementById('total-calculate').addEventListener('click', function () {
        const managerAmount = calculateAmount('manager-feild');
        const cocahAmount = calculateAmount('cocah-feild')

        const totalAmount = perPlayerCost + managerAmount + cocahAmount;

        const setTotalAmount = document.getElementById('total-cost');
        setTotalAmount.innerText = totalAmount;

    })

    //*************players cost calculate**************//

})




















