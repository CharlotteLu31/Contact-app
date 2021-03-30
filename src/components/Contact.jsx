import "./Contact.css";

function Contact(props){
    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar}/>
            <div className="status">
                <h3 className="name">{props.name}</h3>
                <div className={props.isOnline ? "status-online" : "status-offline"}>
                </div>
                <p className="status-text">{props.isOnline ? "online" : "offline"}</p>
            </div>
            
        </div>
    )
}

export default Contact;
