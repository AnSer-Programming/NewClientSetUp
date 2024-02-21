export const getURLCodes = () => 
fetch('/api/codeCheck', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});