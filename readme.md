
## Build Setup
clone到本地仓之后，自行`npm **`，都是老司机了，这里也不重复了。


``` bash
# 安装依赖
npm install

# 调试环境 serve with hot reload at localhost:8091
npm run dev

# 生产环境 build for production with minification
npm run build

```
本地默认访问端口为8091，需要更改的童鞋请到项目目录文件`config/index.js`修改。
## 注意事项
新建页面的时候。vue文件不可以和目录文件名一样 最后遵循样例来建

## 目录结构（以实际代码为准）


在`view`里二级文件夹，一个文件夹就是一个html，`js``vue``html` 都统一放在当前文件夹里，当然你也可以继续放其他的资源，例如css、图片等，webpack会打包到当前模块里。

还有一点要注意的，所有的目录都要求为二级，不能一个目录下为一级，另一个目录下有二级。

``` bash
# 导入全局的css
require('assets/css/common.css');
# 导入全局的站点配置文件
import C from './conf';
# 导入全局的共用事件
import M from './common';

export default{
	M,C
}

```
在`Lib.js`的`M`、`C`都是事件调用简写。例如我们现在想调用APP的名称，在`.vue`里可以这么写

``` bash
import Lib from 'assets/js/Lib';
Lib.C.appname;  #蓝橙绿
```
只需要在`*.vue`里导入`import Lib from 'assets/js/Lib';'`，就可以使用全局模块了。
当然你还可以在Lib做一些程序判断，例如权限判断等。


## 存在的问题
1、多页面可以使用vue-router路由，但是无法使用按需加载，即懒加载，研究过在多页面的路由里按需加载，但从未成功，如果有童鞋研究成功了，可以发lssues一起交流哈。

2、暂时还没有做css自动补前缀

3、......



