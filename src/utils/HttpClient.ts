import {MagicNumber,HTTP} from './Constant';

const SERVER: string = 'http://127.0.0.1';
/**
 * 用于处理http、请求工具类
 * @author anni
 */
class HttpClient {
    /**
     * 发送请求
     * @param opts //{'method' : 'GET',body:{}}
     * @returns {Promise<Response>}
     */
    static request(opts:any={'method' : HTTP.GET})
    {
        let header : any = { 'Accept': HTTP.APPLICAION_JSON,'Content-Type': HTTP.APPLICAION_JSON,'mode': HTTP.MODE};
        if (opts.header)
        {
            opts.header.__proto__ = header;
        }
        let method : string = (opts.method)?opts.method.toUpperCase() : HTTP.GET;
        if (method == HTTP.POST)
        {
            opts.body = JSON.stringify(opts.body);
        }
        else
        {
            // 判断如果有参数则处理get请求的url参数
            if (opts.body)
            {
                opts.url = `${opts.url}?${HttpClient.serialiParams(opts.body)}`;
            }
        }

        opts.url = `${SERVER}${opts.url}&t=${Math.random()}`;

        return fetch(opts.url,opts)
            .then((response:any)=> {
                return response.json();
            });
    }

    /**
     * 用于做参数序列化
     * @author anni
     */
    static serialiParams(params:object)
    {
        let list :string[] = [];

        for (let ele in params)
        {
            if (ele)
            {
                list.push(`${ele}=${params[ele]}&`);
            }
        }

        let res = '';
        if (list && list.length>MagicNumber.INT_0)
        {
            res = list.join('');
            res = res.substr(MagicNumber.INT_0,res.length-MagicNumber.INT_1);
        }
        return res;
    }
}

export default function Http(target:any){
    target.Http = HttpClient;
}

export enum API
{
    TEST = '/test.json'
}