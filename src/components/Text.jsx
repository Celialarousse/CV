import './Text.css'

function Text(props){
    return(
        <p className={props.classe}>{props.texte}</p>
    )
}

export default Text