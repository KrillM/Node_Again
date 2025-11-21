export default function FunComponent({name = "Team Heartz", children="Forever"}){
    return(
        <>
        <div>안녕 {name}</div>
        <div>반가워</div>
        <div>{children}</div>
        </>
    )
}