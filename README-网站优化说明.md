# 网站优化说明

本版本在原网站基础上做了稳妥优化：

1. 修复 `content/jiangdao/tangchongrong/yageeshu` 缺少 `.md` 后缀的问题，改为 `yageeshu.md`。
2. 删除 Hugo Starter 自带的示例分类目录 `content/categories/example-category`，避免生成无用页面。
3. 将 `.github/workflows/update-theme.yml` 从每天自动更新主题，改为手动触发，避免主题自动升级导致网站样式突然变化。
4. 保留首页 `mainSections = ["post"]`，避免讲道专辑堆到首页。
5. 保留 `hasCJKLanguage = true`、`unsafe = true` 等中文站和播放器必需设置。
6. 追加少量列表页 CSS，让专辑标题在手机端显示更稳。

后续新增音频页面时：

- GitHub 页面：`content/jiangdao/tangchongrong/专辑拼音.md`
- R2 目录：`jiangdao/tangchongrong/专辑拼音/`
- 文件名：`专辑拼音-01.mp3` 或 100 集以上用 `专辑拼音-001.mp3`

注意：Markdown 文件必须从 `---` 开始，不要复制外层代码块标记。
