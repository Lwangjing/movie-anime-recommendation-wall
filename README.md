# 电影/动漫推荐墙

一个精美的电影和动漫推荐展示网站，采用现代卡片式布局，精选 12+ 部经典电影和动漫作品。网站设计简洁优雅，支持分类筛选、用户互动、图片查看等多种功能，为用户提供流畅的浏览和交互体验。

## 🌐 在线访问

**GitHub Pages**: [https://Lwangjing.github.io/movie-anime-recommendation-wall](https://Lwangjing.github.io/movie-anime-recommendation-wall)

## ✨ 功能列表

- **精选 12+ 部经典电影和动漫作品展示**  
  涵盖动画电影、科幻电影、热血动漫、悬疑电影等多种类型，以卡片形式直观呈现作品信息。

- **分类筛选**  
  支持按类别快速筛选内容，包括：动画电影、科幻电影、动漫、悬疑电影。

- **用户留言板（localStorage 持久化）**  
  用户可以在留言板发表评论，数据通过 localStorage 保存在本地，刷新页面后留言不丢失。

- **内容点赞功能（localStorage 持久化）**  
  用户可以为喜欢的作品点赞，点赞数通过 localStorage 持久化存储。

- **图片 Lightbox 放大查看**  
  点击图片即可在弹窗中放大查看，提供沉浸式浏览体验。

- **图片懒加载优化**  
  使用 IntersectionObserver 实现图片懒加载，减少初始页面加载时间，提升性能。

- **返回顶部按钮**  
  页面滚动后自动显示返回顶部按钮，一键快速回到页面顶部。

- **页面阅读进度条**  
  顶部显示实时阅读进度条，直观展示当前浏览位置。

- **一键分享功能**  
  支持将作品信息快速分享至社交媒体或复制链接。

- **响应式布局适配**  
  完美适配桌面端、平板端和移动端，在不同设备上均有良好的展示效果。

## 🛠 技术栈

| 技术 | 说明 |
|------|------|
| HTML5 | 页面结构与语义化标签 |
| CSS3 | 样式布局、动画效果、响应式设计 |
| Vanilla JavaScript | 原生 JavaScript 实现全部交互逻辑 |
| localStorage | 本地数据持久化存储（留言、点赞） |
| IntersectionObserver | 图片懒加载与性能优化 |

## 📁 项目结构

```
movie-anime-recommendation-wall/
├── index.html      # 主页面结构
├── about.html      # 关于站长页面
├── styles.css      # 全局样式与响应式布局
├── script.js       # 交互逻辑与功能实现
└── README.md       # 项目说明文档
```

## 👤 作者

- **Lwangjing**
- GitHub: [https://github.com/Lwangjing](https://github.com/Lwangjing)

## 📝 License

MIT License - 欢迎学习和交流使用
