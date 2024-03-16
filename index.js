const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=mundo&type=track', {
    headers: {
    'Authorization': 'Bearer BQD3oJ3th0uqB3E7wCU3oK25S9cb05As-TrDrBHRjuM13zV6-hNknnoXbkcdd2zaaP8DPogit1Mbrz2LojhtocGwrUcfYtbKPAPp4x90VnFtTCpxXYCybDgR_gLLuqDzs3cNJ92C62rKR2gQuZuFEMYVzupAJBLE5POfE2gBqd4-akYWLInlOqwpTPkDBJjhF_GkRvhQXM1ur19xnzg '
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})

