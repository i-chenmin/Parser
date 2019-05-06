// pages/usage/usage.js
Page({
  data: {
    json: [{ "children": [{ "text": "{", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "  ", "type": "text" }, { "children": [{ "text": "\"usingComponents\"", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #795da3;;", "class": "hljs-attr" } }, { "text": ":{", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "    ", "type": "text" }, { "children": [{ "text": "\"Parser\"", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #795da3;;", "class": "hljs-attr" } }, { "text": ":", "type": "text" }, { "children": [{ "text": "\"../../Parser/index\"", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #df5000;;", "class": "hljs-string" } }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "  }", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "}", "type": "text" }], "name": "div", "attrs": { "style": "background-color:#f6f8fa;padding:5px;margin:5px 0 5px 0;border-radius:5px;font-family:monospace;white-space:pre;overflow:scroll;  display: block;  background: white;  padding: 0.5em;  color: #333333;  overflow-x: auto;;", "class": "hljs" } }],
    wxml: [{ "children": [{ "children": [{ "children": [{ "text": "<", "type": "text" }, { "children": [{ "text": "Parser", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #63a35c;;", "class": "hljs-name" } }, { "text": " ", "type": "text" }, { "children": [{ "text": "html", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #795da3;;", "class": "hljs-attr" } }, { "text": "=", "type": "text" }, { "children": [{ "text": "\"", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #df5000;;", "class": "hljs-string" } }], "name": "span", "attrs": { "style": ";  color: #333333;;", "class": "hljs-tag" } }], "name": "span", "attrs": { "style": ";", "class": "xml" } }, { "children": [{ "text": "{{html}}", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #df5000;;", "class": "hljs-template-variable" } }, { "children": [{ "children": [{ "children": [{ "text": "\"", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #df5000;;", "class": "hljs-string" } }, { "text": " />", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #333333;;", "class": "hljs-tag" } }], "name": "span", "attrs": { "style": ";", "class": "xml" } }], "name": "div", "attrs": { "style": "background-color:#f6f8fa;padding:5px;margin:5px 0 5px 0;border-radius:5px;font-family:monospace;white-space:pre;overflow:scroll;  display: block;  background: white;  padding: 0.5em;  color: #333333;  overflow-x: auto;;", "class": "hljs" } }],
    js: [{ "children": [{ "text": "onLoad:", "type": "text" }, { "children": [{ "children": [{ "text": "function", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #a71d5d;;", "class": "hljs-keyword" } }, { "children": [{ "text": "()", "type": "text" }], "name": "span", "attrs": { "style": ";", "class": "hljs-params" } }], "name": "span", "attrs": { "style": ";", "class": "hljs-function" } }, { "text": "{", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "  ", "type": "text" }, { "children": [{ "text": "this", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #a71d5d;;", "class": "hljs-keyword" } }, { "text": ".setData({", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "    html:", "type": "text" }, { "children": [{ "text": "'your html'", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #df5000;;", "class": "hljs-string" } }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "  })", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "}", "type": "text" }], "name": "div", "attrs": { "style": "background-color:#f6f8fa;padding:5px;margin:5px 0 5px 0;border-radius:5px;font-family:monospace;white-space:pre;overflow:scroll;  display: block;  background: white;  padding: 0.5em;  color: #333333;  overflow-x: auto;;", "class": "hljs" } }],
    tagStyle: {
      code: "font-style: italic; color: #005cc5;margin-left:3px;margin-right:3px;"
    },
    attrs: [{
      name: 'html',
      type: 'String\nArray\nObject',
      notice: '见下方说明'
    }, {
      name: 'scroll',
      type: 'Boolean',
      default: 'true',
      notice: '是否允许页面横向滑动'
    }, {
      name: 'selectable',
      type: 'Boolean',
      default: 'true',
      notice: '是否允许链接长按复制'
    }, {
      name: 'tagStyle',
      type: 'Object',
      notice: '自定义组件样式'
    }],
    versions: [{
      version: ">=2.2.5",
      function: "完全正常",
      percent: "98.17%"
    }, {
      version: "1.6.6-2.2.4",
      function: "部分html实体无法显示",
      percent: "1.71%"
    }, {
      version: "<1.6.6",
      function: "无法使用",
      percent: "0.09%"
    }],
    npm: [{ "children": [{ "text": "npm install parser-", "type": "text" }, { "children": [{ "text": "wxapp", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #a71d5d;;", "class": "hljs-keyword" } }, { "children": [], "name": "span", "attrs": { "style": ";  color: #795da3;;", "class": "hljs-title" } }], "name": "div", "attrs": { "style": "background-color:#f6f8fa;padding:5px;margin:5px 0 5px 0;border-radius:5px;font-family:monospace;white-space:pre;overflow:scroll;  display: block;  background: white;  padding: 0.5em;  color: #333333;  overflow-x: auto;;", "class": "hljs" } }],
    node: [{ "children": [{ "children": [{ "text": "const", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #a71d5d;;", "class": "hljs-keyword" } }, { "text": " parser=", "type": "text" }, { "children": [{ "text": "require", "type": "text" }], "name": "span", "attrs": { "style": ";", "class": "hljs-built_in" } }, { "text": "(", "type": "text" }, { "children": [{ "text": "'parser-node'", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #df5000;;", "class": "hljs-string" } }, { "text": ");", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "children": [{ "text": "var", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #a71d5d;;", "class": "hljs-keyword" } }, { "text": " html=", "type": "text" }, { "children": [{ "text": "\"<div>Hello World!</div>\"", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #df5000;;", "class": "hljs-string" } }, { "text": ";", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "parser(html).then(", "type": "text" }, { "children": [{ "children": [{ "text": "function", "type": "text" }], "name": "span", "attrs": { "style": ";  color: #a71d5d;;", "class": "hljs-keyword" } }, { "text": "(", "type": "text" }, { "children": [{ "text": "res", "type": "text" }], "name": "span", "attrs": { "style": ";", "class": "hljs-params" } }, { "text": ")", "type": "text" }], "name": "span", "attrs": { "style": ";", "class": "hljs-function" } }, { "text": "{", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "  ", "type": "text" }, { "children": [{ "text": "console", "type": "text" }], "name": "span", "attrs": { "style": ";", "class": "hljs-built_in" } }, { "text": ".log(res);", "type": "text" }, { "children": [], "name": "br", "attrs": { "style": ";" } }, { "text": "})", "type": "text" }], "name": "div", "attrs": { "style": "background-color:#f6f8fa;padding:5px;margin:5px 0 5px 0;border-radius:5px;font-family:monospace;white-space:pre;overflow:scroll;  display: block;  background: white;  padding: 0.5em;  color: #333333;  overflow-x: auto;;", "class": "hljs" } }],
    upgrade: 
  `<ul>
    <li>2019.5.6： 
      <ol>
        <li><code>A</code> 发布了后端<code>node.js</code>加强包，具有更加强大的解析能力，提供了<code>html</code>、<code>website</code>、<code>markdown</code>等多种模式
        <li><code>U</code> 在<code>Parser</code>标签内可以放入加载提示或动画，会在未加载完成或内容为空时显示，加载完成后自动隐藏</li>
      </ol>
    </li>
    <br />
    <li>2019.4.29：
      <ol>
        <li><code>A</code> 增加支持将<code>title</code>标签中的内容设置到页面标题上，并在<code>bindparse</code>回调中返回（可用于转发分享）</li>
        <li><code>A</code> 增加<code>scroll</code>属性，可以选择是否允许页面横向滚动</li>
        <li><code>U</code><code>style</code>标签中的样式支持更多匹配模式(包括单层多个<code>.demo1.demo2</code>和多个并列<code>.demo1,.demo2</code>等，另外对于伪类、多层的以及含有@或*的将直接忽略)</li>
        <li><code>F</code> 修复了已知<code>bug</code></li>
      </ol>
    </li>
    <br />
    <li>2019.4.28：
      <ol>
        <li><code>U</code> 优化图片显示效果，对没有设置宽高的图片，按原大小显示（最大不超过100%）；设置了宽度或高度之一的，按比例进行缩放；同时设置了宽度和高度的，按设置的值进行拉伸；图片无法显示时，可以显示<code>alt</code>属性中的文本；但由于这些特性需要通过<code>rich-text</code>显示，因此取消了<code>lazyload</code>属性</li>
        <li><code>U</code> 优化了<code>a</code>标签的内联效果</li>
      </ol>
    </li>
    <br />
    <li>2019.4.26：
      <ol>
        <li><code>A</code> 增加支持<code>pre</code>, <code>u</code>, <code>center</code>, <code>source</code>等标签</li>
        <li><code>A</code> 增加<code>bindlinkpress</code>回调函数，在链接受到点击时触发，开发者可以在此回调中进行进一步操作（如下载和打开文档等）</li>
        <li><code>U</code> 对于不在支持列表中的标签，除个别直接移除外，都会被转为<code>div</code>标签，因此可以使用一些语义化标签，如<code>article</code>, <code>address</code>等</li>
        <li><code>U</code> 提高了解析效率和渲染效率（约10%）</li>
        <li><code>D</code> 删除了<code>preview</code>，默认允许图片预览</li>
        <li><code>D</code> 删除了<code>space</code>属性，由于设置连续空格会使得标签间的空格都被显示，导致错误的效果，因此取消了这一属性；如需要显示连续空格，请使用实体编码的空格或设置<code>white-space</code>属性</li>
        <li><code>F</code> 修复了已知<code>bug</code></li>
      </ol>
    </li>
    <br />
    <li>2019.4.21：
      <ol>
        <li><code>A</code> 增加了<code>tagStyle</code>属性，支持对标签设置自定义样式</li>
        <li><code>A</code> 发布了<code>demo</code>小程序</li>
        <li><code>U</code> 降低了最低基础库的要求</li>
        <li><code>F</code> 修复了已知<code>bug</code></li>
      </ol>
    </li>
    <br />
    <li>2019.4.18：
      <ol>
        <li><code>A</code> 增加支持<audio>标签</li>
        <li><code>A</code> 增加<code>lazyload</code>属性（图片懒加载）</li>
        <li><code>U</code> 优化<code>a</code>, <code>code</code>, <code>blockquote</code>标签的显示效果</li>
        <li><code>F</code> 修复了已知<code>bug</code></li>
      </ol>
    </li>
    <br />
    <li>2019.4.16：
      <ol>
        <li><code>U</code> 精简包的大小</li>
        <li><code>F</code> 修复了已知<code>bug</code></li>
      </ol>
    </li>
    <br />
    <li>2019.4.14：
      <ol>
        <li><code>U</code> <code>style</code>标签中的样式支持按标签名匹配，如<code>body{Object}</code></li>
      </ol>
    </li>
  </ul>`
  },
})