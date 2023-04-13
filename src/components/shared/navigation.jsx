export default function Navigation(){
    ///////Test Code
    const addOne = num => num + 1
    var lis = [];
    for(let i = 0; i < 8; i++){
        lis.push(`List Items [ ${addOne(i)} ]`);
    }

    
    return(
        <nav>
            {/* TEST DATA */}
            <ul>
                {lis.map( x => (
                    <li key={lis.indexOf(x)}>{x}</li>
                ))}
            </ul>
        </nav>
    )
}