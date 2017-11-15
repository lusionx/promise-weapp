export namespace util {
    export function toPage(p: any): WeApp.Page {
        return p as WeApp.Page
    }
    export function qsStringify(par: any): string {
        let kv: string[] = []
        for (const key in par) {
            if (par.hasOwnProperty(key)) {
                kv.push(key + '=' + par[key])
            }
        }
        return kv.join('&')
    }
}

export function login(): Promise<WeApp.LoginResult> {
    return new Promise((success, fail) => {
        wx.login({ success, fail })
    })
}

export function getSetting(): Promise<WeApp.SettingResult> {
    return new Promise((success, fail) => {
        wx.getSetting({ success, fail })
    })
}

export function getExtConfig(): Promise<WeApp.ExtConfigResult> {
    return new Promise((success, fail) => {
        wx.getExtConfig({ success, fail })
    })
}

export function authorize(scope: WeApp.ScopeKey): Promise<WeApp.CallbackResult> {
    return new Promise((success, fail) => {
        wx.authorize({ scope, success, fail })
    })
}

export function request(param: WeApp.RequestParam): Promise<WeApp.HttpResponse> {
    return new Promise((success, fail) => {
        let { data, url, header, method } = param
        return wx.request({ data, url, header, method, success, fail })
    })
}