import './result.css';

export default function Result(props){

    const { content } = props;

    return(
        <>
            <div className="result">
                <p>
                    { content } 
                </p>
            </div>
        </>
    )
}