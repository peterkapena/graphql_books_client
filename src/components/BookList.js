
import {
    gql,
    useQuery
} from "@apollo/client"

const getBooksQuery = gql(`
        query{
            books{
            name 
            }}
    `)

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <div>
        <ul id='book-list'>
            {data.books.map((b, idx) => <li key={idx}>Book name{b.name}</li>)}
        </ul>
    </div>
}

export default BookList;