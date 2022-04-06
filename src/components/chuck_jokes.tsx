// An alternative way of declaring a component is to write it as a function which

// returns a JSX.Element 
function ChuckJokes(joke: string) : JSX.Element {

    return (
        <>
            <p>{joke}</p>
        </>
    )
}

export default ChuckJokes;