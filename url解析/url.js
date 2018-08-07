var url = 'www.u.com/home?id=2&type=0&dtype=-1'

function parseUrl(){
    var result =[];
    
    var a = url.split("?")[1];// 将url 切割成两项 ？前一项，问好后一项，取后一项
    var b=a.split("&");// 以& 为切割点，将后一项的参数提取出来
    console.log(b)//["id=2","type=0","dtype=-1"]
    b.map(item=>{
        var obj ={}
        var key = item.split("=")[0];
        // console.log(key)
        var value = item.split("=")[1];
        // console.log(value)
        obj[key]=value;
        // console.log(obj)
        result.push(obj)
        console.log(result)
    })
}
parseUrl()