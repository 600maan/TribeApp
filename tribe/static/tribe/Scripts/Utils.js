
var corpus = {
    getTribes : function() {
            // retrieve the search query
            var search_word = document.getElementById('search_word').value
            $.ajax({
                method  : "GET",
                url     :"http://localhost:8000/tribes/",
                data    : { param : search_word },
                success :  corpus.displayTribes
            });
    },
    displayTribes : function(data) {
            alert(JSON.stringify(data));
    }
}

