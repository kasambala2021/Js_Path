let profile = {
    name: 'abdullatif',
    university: 'UDSM',
    YoS : 4,
    programme: 'Computer Engineering and IT',
    hobbies: ['tennis','football','programming'],
    experience: {
        programming : 'python',
        working :'4 years'
    }
}

// alert(profile.experience.programming)

for(let items in profile){
    // console.log(`${items} : ${profile[items]}`)
    if(items !== 'experience'){
        console.log(`${items} : ${profile[items]}`)
    }
    else {
        for(let ex_items in profile.experience){
            console.log(`${ex_items} : ${profile.experience[ex_items]}`)
        }
    }
}
