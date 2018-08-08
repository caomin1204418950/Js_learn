// 对正则表达式修饰符的理解
// 1. i 修饰符 即：/主体/i  忽略大小写 

    var i = 'AbCd';
    // var s = i.search(/a/);//-1
    var I = i.search(/D/i);//3
    console.log(I);

// 2. g 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）

    var g ='aabbcc'
    var G = g.match(/b/) //[ 'b', index: 2, input: 'aabbcc' ]
    // var G = g.match(/b/g);//['b','b']
    console.log(G);

// 3. m  执行多行匹配
    