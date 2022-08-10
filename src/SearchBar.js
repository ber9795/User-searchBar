

const SearchBar = ({ user, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(user)

        const resultsArray = user.filter(users => users.name.includes(e.target.value) || users.email.includes(e.target.value))

      setSearchResults(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                  
                </button>
            </form>
        </header>
    )
}
export default SearchBar