## 实现一个类似于Element Plus的表单验证组件

# Api

- inline :Boolean // 将regular-form-fields改为行内元素
### formRef中:
- $reset :Function // 清空form下所有的错误消息
- $clear :Function // 清空form下所有表单内容
- getStatus : Function // 获取form的状态,true表明当前所有rules配置都通过了，否则存在校验错误项

# 安装

```shell
npm install -D verify-form
```

# 注册

```
import { createApp } from 'vue'
import { RegularForm, RegularFormField } from 'verify-form'

const app = createApp(App)
app.component('RegularForm', RegularForm)
app.component('RegularFormField', RegularFormField)
app.mount('#app')
```
# 使用

![](./assets/demo.png)


# 依赖
`vue`
