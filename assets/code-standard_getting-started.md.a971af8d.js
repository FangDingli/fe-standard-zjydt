import{_ as e,c as t,o as a,a as r}from"./app.0beb2061.js";const T=JSON.parse('{"title":"基本原则","description":"","frontmatter":{},"headers":[{"level":2,"title":"结构、样式、行为分离","slug":"结构、样式、行为分离","link":"#结构、样式、行为分离","children":[]},{"level":2,"title":"缩进","slug":"缩进","link":"#缩进","children":[]},{"level":2,"title":"文件编码","slug":"文件编码","link":"#文件编码","children":[]}],"relativePath":"code-standard/getting-started.md","lastUpdated":1673599140000}'),d={name:"code-standard/getting-started.md"},o=r('<p>由此开始将规定团队成员在各个场景下对各类文件的编写规范</p><h1 id="基本原则" tabindex="-1">基本原则 <a class="header-anchor" href="#基本原则" aria-hidden="true">#</a></h1><h2 id="结构、样式、行为分离" tabindex="-1">结构、样式、行为分离 <a class="header-anchor" href="#结构、样式、行为分离" aria-hidden="true">#</a></h2><p>尽量确保文档和模板只包含 <code>HTML</code> 结构，样式都放到样式表里，行为都放到脚本里。</p><h2 id="缩进" tabindex="-1">缩进 <a class="header-anchor" href="#缩进" aria-hidden="true">#</a></h2><p>如无特殊规定，前端工程中所有编码文件统一 <strong>两个空格</strong> 缩进（总之缩进统一即可），不要使用 <code>Tab</code> 或者 <code>Tab</code>、空格混搭。</p><h2 id="文件编码" tabindex="-1">文件编码 <a class="header-anchor" href="#文件编码" aria-hidden="true">#</a></h2><p><strong>使用不带 <code>BOM</code> 的 UTF-8 编码。</strong></p><ul><li>在 HTML中指定编码 <code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code> ；</li><li>无需使用 <code>@charset</code> 指定CSS样式表的编码，它默认为 <code>UTF-8</code> （参考 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@charset" target="_blank" rel="noreferrer">@charset</a>）；</li></ul><blockquote><p>请尽量统一写成标准的 “UTF-8”，不要写成 “utf-8” 或 “utf8” 或 “UTF8”。根据 <a href="http://www.ietf.org/rfc/rfc3629" target="_blank" rel="noreferrer">IETF对UTF-8的定义</a>，其编码标准的写法是 “UTF-8”；而 UTF8 或 utf8 的写法只是出现在某些编程系统中，如 .NET framework 的类 System.Text.Encoding 中的一个属性名就叫 UTF8。</p></blockquote>',10),c=[o];function n(s,i,l,h,_,p){return a(),t("div",null,c)}const u=e(d,[["render",n]]);export{T as __pageData,u as default};