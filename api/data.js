// 你的数据 - 请替换这里的内容
const myData = {
  "employees": [
    { "id": 1, "name": "张三", "department": "销售" },
    { "id": 2, "name": "李四", "department": "市场" },
    { "id": 3, "name": "王五", "department": "研发" }
  ],
  "company": "我的科技有限公司"
};

// Vercel 标准格式 - 不要修改这个函数结构
module.exports = (req, res) => {
  // 设置CORS头，允许所有来源访问
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  // 返回JSON数据
  res.status(200).json(myData);
};
