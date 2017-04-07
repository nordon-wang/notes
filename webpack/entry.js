/**
 * 单个入口写法
 *  --entry: string|Array<string>
 *  --此写法扩展配置没有太多的灵活性
 */

const config = {
    entry:'.path/demo.js'
};

const configs = {
    entry:{
        main:'.path/demo.js'
    }
};

module.exports = config;
module.exports = config2;

/**
 * 对象写法
 *  --entry:{[entryChunName:string]:string|Array<string>}
 *  --写法繁琐，但这是定义入口的最可扩展的方式
 * --依赖关系图表
 */
const configObj = {
    entry:{
        app:'./src/demo.js',
        vendors:'.src/demo2.js'
    }
};

const configMore = {
    entry:{
        page1:'./src/pageOne1/index.js',
        page2:'./src/pageOne2/index.js'
    }
};

module.exports = configObj;
module.exports = configMore;

/**
 * 配置output属性最低要求：将其值设置为一个对象
 *  --1.编译文件的文件名，首推：mian.js || bundle.js || index.js
 *  --2.output.path 对应一个绝对路径，是一次性打包的目录
 */

const configo1 = {
    output:{
        filename:'main.js||bundle.js||index.js',
        path:'/home/demo.js'
    }
}

module.exports = configo1;









