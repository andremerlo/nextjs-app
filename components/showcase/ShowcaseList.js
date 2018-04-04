const ShowcaseList = (props) => {

    return props.lists && props.lists.length > 0 ? (
        <div>
            <p>Listas: </p>
            <ul>            
            { props.lists.map(list => 
                (<li key={list.id}>{list.name}</li>)
            )}
            </ul>
        </div>
    ) : null

}

export default ShowcaseList