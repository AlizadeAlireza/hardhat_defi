const { getNamedAccounts } = require("hardhat")
const { getWeth } = require("./getWeth")

async function main() {
    await getWeth()
    const { deployer } = await getNamedAccounts()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
