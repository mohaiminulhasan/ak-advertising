import React, { useEffect } from 'react';

import { content } from '../data';
import { searchIndexes } from '../helpers';

const urlParams = new URLSearchParams(window.location.search);
const q = urlParams.get('q');

let result, result_display = [];
const entries = Object.entries(content.text);
let occurances = 0
for (const page in entries) {
    for (const para in entries[page][1]) {
        // console.log(entries[page][0] + ":\n" + entries[page][1][para]);
        // let index = entries[page][1][para].search(q);
        let haystack = entries[page][1][para].toLowerCase()
        result = searchIndexes(q, haystack)

        console.log(result)

        // if (index !== -1) {
        //     let page_name = entries[page][0];
        //     console.log(page_name);
        //     let sample_text = entries[page][1][para].substring(index - 50, index + 50);
        //     console.log(sample_text);
        //     console.log(sample_text.length);
        // }
        occurances += result.length;
    }
    if (occurances > 0) {
        result_display.push({
            'page': entries[page][0],
            'occurances': occurances
        })
        occurances = 0
    }

}

result = []
result_display.forEach((obj, index) => {
    result.push(<p key={index}>The <strong><a href={obj.page === `home` ? `/` : obj.page}>{obj.page}</a></strong> page has {obj.occurances} instances.</p>)
})

const Search = () => {
    useEffect(() => {
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.getElementById('searchbox').value = "";
        };
    });

    return (
        <div className="container">
            <h3>Search result for "{q}"</h3>
            {result}
        </div>
    );
}

export default Search;