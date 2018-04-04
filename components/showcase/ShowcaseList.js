import Link from 'next/link'

const ShowcaseList = (props) => {

    return props.lists && props.lists.length > 0 ? (
        <div>
            <p>Listas: </p>
            <ul>            
            { props.lists.map(list => 
                (
                    <li key={list.id}>
                        <Link href={{pathname: '/showcase/list', query: { slug: list.slug, id: list.id }}}
                            as={`/${props.storeName}/l/${list.slug}/${list.id}`}>
                            {list.name}
                        </Link>
                    </li>
                )
            )}
            </ul>
        </div>
    ) : null

}

export default ShowcaseList