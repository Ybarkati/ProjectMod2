export default function Answer({key,model}){
    return (
        <div key={key} className={model.sender}>
            <p>{model.message}</p>
        </div>
    )
}