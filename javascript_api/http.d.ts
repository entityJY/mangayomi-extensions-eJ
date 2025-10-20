/**
 * Client class
 */
export class Client {
    constructor(reqcopyWith);
    async head(url, headers);
    async get(url, headers);
    async post(url, headers, body);
    async put(url, headers, body);
    async delete(url, headers, body);
    async patch(url, headers, body);
}