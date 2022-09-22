const baseURL = 'http://localhost:9000/api/toptrumps/'

const TopTrumpsService = {
  getTopTrumps() {
    return fetch(baseURL).then((res) => res.json())
  },

  addTopTrump(topTrump) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(topTrump),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
  },

  updateTopTrump(topTrump) {
        return fetch(baseURL + topTrump._id, {
      method: 'PUT',
      body: JSON.stringify(topTrump),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteTopTrump(id){ 
        return fetch(baseURL + id, {
          method: 'DELETE',
        })
    }


}
