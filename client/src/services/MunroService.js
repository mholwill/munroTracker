const baseURL = 'http://localhost:3000/api/munros/';

export default {
    getMunrosVisits() {
      return fetch(baseURL)
        .then(res => res.json());
    },
  
    addMunroVisit(munro) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(munro),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
    },
  
    updateMunroVisit(munro) {
      return fetch(baseURL + munro._id, {
        method: 'PUT',
        body: JSON.stringify(munro),
        headers: { 
          'Content-Type': 'application/json' 
        }
      })
        .then(res => res.json());
    },
  
    deleteVisit(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      });
    }
  };