function testComponent(){
    const one = 1234234
    const two = 'alsdkfja'
    const three = {
        name: 'Tom', 
        age: 34,
        money: 453,
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
    }, 
    test: Number,
}

function ChildComponent({data, test}:ChildProps){
    
    console.log(data.age, test.toString())

    return(

        <>
        Typescript rocks!
        </>
    )
}