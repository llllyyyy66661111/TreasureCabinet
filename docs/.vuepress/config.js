module.exports = {
    title: "藏宝阁",
    description: "分享各类资源、教程、黑科技软件、工具等等",
    // theme: 'reco',
    markdown: {
      lineNumbers: true,
    },
    plugins: ['autobar'],
    themeConfig: {
        sidebarDepth: 0, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav:[
            { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
            { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
            // 下拉列表
            {
              text: 'GitHub',
              items: [
                { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
                {
                  text: '算法仓库',
                  link: 'https://github.com/OBKoro1/Brush_algorithm'
                }
              ]
            }        
          ],
    },
  };
