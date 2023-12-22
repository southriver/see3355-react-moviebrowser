import React from 'react'

export default function SearchView({keyword, searchResults}) {
    const resultsHtml =  searchResults.map((obj, i) => {
        return <li>{obj.title}</li>
      })    
    return (
        <>
            <header className="bg-dark text-white p-5"> Searching {keyword} </header>
            {resultsHtml}
        </>
    )
}
