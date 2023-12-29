console.log("1-------------------------------------");
//& 1. Prime number or not

{
    function prime(a)
{
    let count=0
    for(let i=1;i<=a;i++)
    {
        if(a%i===0)
        count++
    }
    
        if(count===2)
        {
            console.log(a,"is prime number");
        }
        else
        {
            console.log(a,"is not a prime number");
        }
    
}

prime(8)
prime(2)
prime(7)
prime(17)
prime(12)
}

console.log("2-------------------------------------");

//& 2.Multiples of three(3)
{
    function multiplesOfThree(a)
    {
        for(let i=1;i<=a;i++)
        {
            if(i%3===0)
            {
                console.log(i);
            }
        }
    }

    multiplesOfThree(20)
    multiplesOfThree(30)
}

console.log("3-------------------------------------");

//& 3.Factors of a number
{
    function factors(a)
    {
        for(let i=1;i<=a;i++)
        {
            if(a%i===0)
            {
                console.log(i);
            }
        }
    }
    factors(10)
    factors(15)
}

console.log("4-------------------------------------");

//& 4.Factorial of a number
{
    function factorial(a)
    {
        let fact=1;
        for(let i=1;i<=a;i++)
        fact=fact*i     
        console.log(fact);
    }

    factorial(2)
    factorial(3)
    factorial(4)
    factorial(5)

}

console.log("5-------------------------------------");


//& 5.Positive or Not
{
    function positiveOrNot(a)
    {
        if(a>0)
        console.log(a,"is a positive number");
        else
        console.log(a,"is not a positive number");
    }

    positiveOrNot(1)
    positiveOrNot(-61)
    positiveOrNot(99)
    positiveOrNot(-4)


}

console.log("6-------------------------------------");


//& 6.Even multiple of 5
{
    function evenMultiple(a)
    {
        for(let i=1;i<=a;i++)
        {
            if(i%5===0)
            {
                if(i%2==0)
                {
                    console.log(i);
                }
            }       
            
        }
        
    }

    evenMultiple(21)
    evenMultiple(23)
    evenMultiple(40)
    evenMultiple(221)
}

console.log("7-------------------------------------");

//& 7.Starting three factors
{
    function startingThreeFactors(a)
    {
        let count=0;
        for(let i=1;i<=a;i++)
        {
           if(a%i===0)
           {
            console.log(i);
            count++
           }
           if(count===3)
           {
            break;
           }
        }    
    }

    startingThreeFactors(10)
    startingThreeFactors(20)
    startingThreeFactors(24)
    startingThreeFactors(31)

}

console.log("8-------------------------------------");

//& 8.Prime Factors
{
    let count=0
    function primeFactors(a)
    {
        for(let i=1;i<=a;i++)
        {
            if(a%i===0)
            {
                let count=0
                for(let j=1;j<=a;j++)
                {
                    if(a%j===0)
                    count++
                }
            }
        }
        if(count===2)
        {
            console.log(i);
        }
    }
    
        
    
    
    

    primeFactors(30)
    // primeFactors(22)
    // primeFactors(22)
    // primeFactors(22)

}

console.log("9-------------------------------------");

//& 9.Sum of starting n natural numbers

{
    function sumOfNatural(a)
    {
        let sum=0
        for(let i=1;i<=a;i++)
        {
            sum=sum+i
        }
        console.log(sum);
    }

    sumOfNatural(4)
}



