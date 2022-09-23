import mockRequests from "./mockAjax"
export const reqDataList=()=>{
    //发请求:axios发请求返回结果是Promise对象
    return mockRequests({
        url:'/data',
        method:'get'
    })
}