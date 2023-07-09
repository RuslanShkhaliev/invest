import {HTTPModule, Options} from 'http-client';


export class ApiService {
    httpClient: HTTPModule
    private prefixPath = ''

    constructor(httpClient: HTTPModule, prefixPath?: string) {
        this.prefixPath = prefixPath ?? this.prefixPath
        this.httpClient = httpClient
    }

    public async request<T>(url: string, options?: Options): Promise<T> {
        return this.httpClient(url, {...options, prefixUrl: this.prefixPath}).execute()
    }

    public async get<T>(url: string, options?: Options): Promise<T> {
        return this.request(url, {...options, method: 'get'})
    }

    public async post<D, R = D>(url: string, options?: Options) {
        const response = await this.request<R>(url, {
            ...options,
            method: 'post'
        })
        console.log({response, options})
        return response
    }
    public async put<D, R = D>(url: string, options?: Options) {
        return this.request<R>(url, {...options, method: 'put'})
    }
    public async remove<D, R = D>(url: string, options?: Options) {
        return this.request<R>(url, {...options, method: 'delete'})
    }
}
