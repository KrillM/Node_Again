export default function Jsx01(){
    const str = 'hello,';

    return(
        <div className="App">
            <span>{str}</span>
            <span>{str === 'hello,' ? 'world' : '세상'}</span>
            <div>
                {str === 'hello,' ? (<div><h2>react</h2></div>) : (<div><h2>리액트</h2></div>)}
            </div>
        </div>
    )
}