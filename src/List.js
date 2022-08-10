import Users from './Users'

const List = ({searchResults}) => {
const  results= searchResults.map(users => <Users key={Users.id} users={Users}/>)

const content= results?.lenght? results : <div><p>Mo Matching</p></div>
  return (
    <main>{content}</main>
  )
}

export default List