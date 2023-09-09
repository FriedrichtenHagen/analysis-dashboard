function testComponent(){
    const one = 1234234
    const three = {
        name: 'Tom', 
        age: 34,
        money: {
            amount: 345,
            currency: 'EURO'
        },
    }
    
    
    return(

        <>
            <ChildComponent data={three} test={one}/>
        </>
    )
}


interface ChildProps{
    data: {
        name: String,
        age: Number,
        money: {
            amount: Number,
            currency: String, 
        }, 
    }, 
    test: Number,
}

function ChildComponent({data:{money:{currency}}, test}:ChildProps){
    // multilayer destructuring and simple destructuring
    console.log(currency, test.toString())

    return(

        <>
        Typescript rocks!
        </>
    )
}