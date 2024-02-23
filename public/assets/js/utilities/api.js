export const getURLCodes = () => 
  fetch(`/api/GetURLCode`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
export const getCheckURLCode = (code) => 
  fetch(`/api/CodeCheck/${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
export const setFile = (code, data) => 
  fetch(`/api/SaveFile/${code}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export const sendFile = (code, data) => 
  fetch(`/api/SendFile/${code}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });