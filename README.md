# 毕业倒计时：AI 选择未来

一个面向大学毕业生的互动人生选择小游戏。玩家将从毕业时刻出发，在专业、性格、状态与未来事件中做出选择，并最终生成属于自己的未来人生报告。

> 当前为第一阶段：包含首页、角色创建页和游戏序章占位页，暂未接入 AI API。

## 本地运行

需要安装 Node.js 18 或更高版本。

```bash
npm install
npm run dev
```

启动后，打开终端中 Vite 提供的本地地址（通常为 `http://localhost:5173`）。

## 构建生产版本

```bash
npm run build
npm run preview
```

生产文件会生成在 `dist/` 目录中。

## 页面与结构

- `/`：游戏首页
- `/character`：角色创建页，完成三组选择后可继续
- `/game`：游戏序章占位页
- `src/pages/`：各独立页面，后续游戏事件页可继续在此扩展
- `src/components/PageShell.jsx`：页面共用的品牌、背景与页脚框架
- `src/styles/index.css`：全局视觉、响应式布局与动画
- `src/App.jsx`：集中管理页面路由；新增页面时优先修改此文件

## 下一阶段建议

下一步建议从 `src/pages/GamePage.jsx` 开始，将当前占位内容替换成可复用的事件卡片与选择流程；事件数据可独立放入 `src/data/events.js`，以便后续扩充故事线和人生报告生成逻辑。
