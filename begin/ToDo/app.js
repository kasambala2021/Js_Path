const toDOList = ['Collect Chicken Eggs', 'Clean Litter Box',]
let command = prompt("what would you like todo?")

while (command !== 'quit' && command !== 'q') {
        if (command == 'list') {
                console.log('**********************************')
                for (let i = 0; i < toDOList.length; i++) {
                        console.log(`${i + 1} : ${toDOList[i]}`)
                }
                console.log('**********************************')
        }
        else if (command === 'new') {
                const new_item = prompt('what tast would you like to add?')
                toDOList.push(new_item)
        }
        else if (command === 'delete') {
                const index = prompt('Ok, Enter anindex to delete')
                num_index = parseInt(index)
                if (!Number.isNaN(num_index) && num_index < toDOList.length) {
                        delArray = toDOList.splice(num_index, 1)
                        console.log(`you deleted ${delArray[0]}`)
                }
                else{
                        console.error('Enter correct index')
                }

        }
        command = prompt("what would you like todo?")
}
console.log('OOPS! YOU QUIT THE APP')