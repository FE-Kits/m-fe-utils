![](https://i.postimg.cc/0N7w0mnN/image.png)

# m-fe/utils

在 [Web 开发导论/微前端与大前端](https://github.com/wx-chevalier/Web-Series)一文中，笔者简述了微服务与微前端的设计理念以及微前端的潜在可行方案。微服务与微前端，都是希望将某个单一的单体应用，转化为多个可以独立运行、独立开发、独立部署、独立维护的服务或者应用的聚合，从而满足业务快速变化及分布式多团队并行开发的需求。如康威定律(Conway’s Law)所言，设计系统的组织，其产生的设计和架构等价于组织间的沟通结构；微服务与微前端不仅仅是技术架构的变化，还包含了组织方式、沟通方式的变化。微服务与微前端原理和软件工程，面向对象设计中的原理同样相通，都是遵循单一职责(Single Responsibility)、关注分离(Separation of Concerns)、模块化(Modularity)与分而治之(Divide & Conquer)等基本的原则。

![微前端项目结构](https://user-images.githubusercontent.com/5803001/44003230-de68ac5c-9e81-11e8-81f5-8092f7a9b421.png)

当我们考量项目框架、模板或者脚手架的时候，首先想到的点就是希望尽可能对上层屏蔽细节，但是对于长期维护的、多人协作的中大型项目而言，如果项目的主导者直接使用了部分抽象的脚手架，不免会给未来的更新、迭代带来一定的技术负债；同时，目前也有很多成熟的工程化脚手架，因此笔者选择以项目模板的形式抽象出微前端中所需要的部分。尽可能地遵循简约、直观的原则，减少抽象/Magic Function 等；大型项目可能会抽象出专用的开发工具流，但是对于大部分项目而言，在现有框架/工具链的基础上进行适当封装会是较优选择。

# Usage

- @m-fe/utils

- @m-fe/react-hooks

## Nav | 关联项目

- [m-fe-configs](https://github.com/wx-chevalier/m-fe-configs)：Common Dev Configs(ESLint, Prettier, Husky, etc.) for Micro-Frontend Apps

- [m-fe-rtw](https://github.com/wx-chevalier/m-fe-rtw): Micro-Frontend boilerplate with React & TypeScript & Webpack, for complicated cooperative applications. | 微前端项目模板

- [m-fe-vtw](https://github.com/wx-chevalier/m-fe-vtw): Micro-Frontend boilerplate with Vue & TypeScript & Webpack, for complicated cooperative applications. | 微前端项目模板

- [m-fe-rm](https://github.com/wx-chevalier/m-fe-rm): 基于 React & TS & Webpack & APICloud 提供快速移动端应用开发的能力

- [m-fe-taro](https://github.com/wx-chevalier/m-fe-taro): 基于 Taro & TS 的多端小程序开发模板。

- [m-fe-scaffold](https://github.com/wx-chevalier/m-fe-scaffold/): Cli Toolkits for Web Development & Deploy on Kubernetes，微前端实践中沉淀的一系列脚手架工具。

- [m-fe-libs](https://github.com/wx-chevalier/m-fe-libs): Micro-Frontend boilerplate with React & TypeScript & Webpack, for complicated cooperative applications. | 微前端项目模板

- [m-fe-utils](https://github.com/wx-chevalier/m-fe-utils): Micro-Frontend boilerplate with React & TypeScript & Webpack, for complicated cooperative applications. | 微前端项目工具箱

--

- [react-snippets](https://github.com/wx-chevalier/react-snippets): React Snippets(.ts/.tsx), about design patterns/techniques used while developing with React and TypeScript.

- [vue-snippets](https://github.com/wx-chevalier/vue-snippets): Vue Snippets(.js/.ts), about design patterns/techniques used while developing with Vue and JavaScript/TypeScript.

- [fractal-components](https://github.com/wx-chevalier/fractal-components): Massive Fractal Components in Several Libraries(Vanilla, React, Vue, Weapp), for building your great apps easily again

- [Legoble](https://github.com/wx-chevalier/Legoble): Build your apps like stacking Lego blocks 💫 总想自己实现一款可视化配置的动态应用构建工具，动态表单、动态布局、动态报告、动态规则、动态选择、动态流程

# About

## Copyright & More | 延伸阅读

笔者所有文章遵循 [知识共享 署名-非商业性使用-禁止演绎 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh)，欢迎转载，尊重版权。您还可以前往 [NGTE Books](https://ng-tech.icu/books/) 主页浏览包含知识体系、编程语言、软件工程、模式与架构、Web 与大前端、服务端开发实践与工程架构、分布式基础架构、人工智能与深度学习、产品运营与创业等多类目的书籍列表：

![NGTE Books](https://s2.ax1x.com/2020/01/18/19uXtI.png)
