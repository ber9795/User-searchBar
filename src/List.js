import Users from './Users'

const List = ({searchResults}) => {
const  results= searchResults.map(users => <Users key={users.id} users={users} />)

const content= results?.length? results : <article><p>Mo Matching</p></article>
  return (
    <main>{content}</main>
  )
}

export default List