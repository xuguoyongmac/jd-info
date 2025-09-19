// 导入必要的模块
const http = require('http');

// 你的数据 - 请用你自己的数据替换这里的内容
const myData = {
  "employees": [
    { "id": 1, "name": "张三", "department": "销售" },
    { "id": 2, "name": "李四", "department": "市场" },
    { "id": 3, "name": "王五", "department": "研发" }
  ],
  "company": "我的科技有限公司",
  "timestamp": new Date().toISOString()
};

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置CORS头，允许所有来源访问
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // 处理预检请求
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // 只处理GET请求
  if (req.method === 'GET' && req.url === '/api/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(myData, null, 2));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// 获取端口号（Vercel会自动提供）
const port = process.env.PORT || 3000;

// 启动服务器
server.listen(port, () => {
  console.log(`JSON API server running on port ${port}`);
});

// 导出服务器用于Vercel（必须要有）
module.exports = server;
