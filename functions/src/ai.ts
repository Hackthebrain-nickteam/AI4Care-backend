/**
 * @param {string} d -received text from the user for symptoms
 * AI Integration
 * @return {{message:string}}
 * status of request
 * */
export function getAnalysis(d:string) {
  return {message: "received"+ d};
}
