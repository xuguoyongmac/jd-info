// 你的数据放在这里！用你自己的数据替换下面的内容
const myData = {
  "employees": [
    { "id": 1, "name": "张三", "department": "销售" },
    { "id": 2, "name": "李四", "department": "市场" },
    { "id": 3, "name": "王五", "department": "研发" }
  ],
  "company": "我的科技有限公司"
};

// 下面的代码是固定的，不要修改
export default function handler(req, res) {
  // 设置允许跨域访问
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 返回JSON数据
  res.status(200).json(myData);
}
