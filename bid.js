
auctionBid = () => {

    inquirer.prompt(questions)
        .then(answers => {

            connection.query("Select * FROM auctions WHERE name=?", [item], (err, res) => {
                if (err) throw err;
                if (newBid > res.bid) {
                    connection.query("UPDATE auctions WHERE bid=?", [newBid], (err, res) => {
                        if (err) throw err;
                        console.log("Your bid of " + newBid + "for " + item + "has been accepted!")
                    })
                } else {
                    console.log("Your bid is too low and was not accepted!")
                }

            })

        })

}

const questions = [
    {
        type: "list",
        message: "Please select the item you are bidding on: ",
        name: "item",
        choices: readItem()
    },
    {
        type: "number",
        message: "What is your bid?",
        name: "newBid"
    }
]

readItem = () => {

    connection.query("SELECT * FROM auctions", (err, res) => {
        if (err) throw err;
        const itemArray = [];
        res.forEach(item => itemArray.push(item));

        return itemArray

    })
};

module.exports = bid;