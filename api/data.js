// 这里就是你的数据！你可以用你自己的数据替换掉 myData 里的内容
const myData = {
	"positions": [{
			"title": "前端工程师",
			"department": "技术部",
			"level": "中级/高级",
			"location": "北京/上海/深圳",
			"requirements": {
				"education": "本科及以上学历，计算机相关专业",
				"experience": "3-5年前端开发经验",
				"skills": [
					"熟练掌握HTML5、CSS3、JavaScript ES6+",
					"精通React、Vue.js、Angular等主流前端框架",
					"熟悉TypeScript、Webpack、Vite等构建工具",
					"了解Node.js、Express等后端技术",
					"熟悉移动端适配和响应式设计",
					"掌握Git版本控制工具"
				],
				"preferred": [
					"有微前端架构经验",
					"熟悉WebGL、Canvas等图形技术",
					"有开源项目贡献经验",
					"了解前端性能优化和监控"
				]
			},
			"responsibilities": [
				"负责公司产品的前端开发工作",
				"与UI设计师协作，实现高质量的用户界面",
				"与后端工程师协作，完成接口对接",
				"优化前端性能，提升用户体验",
				"参与技术方案设计和代码审查"
			],
			"benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
		},
		{
			"title": "Java后端工程师",
			"department": "技术部",
			"level": "中级/高级",
			"location": "北京/上海/深圳",
			"requirements": {
				"education": "本科及以上学历，计算机相关专业",
				"experience": "3-5年Java开发经验",
				"skills": [
					"精通Java语言，熟悉JVM原理",
					"熟练掌握Spring Boot、Spring Cloud微服务框架",
					"熟悉MySQL、Redis、MongoDB等数据库",
					"了解消息队列（RabbitMQ、Kafka）",
					"熟悉Docker、Kubernetes容器化技术",
					"掌握Git版本控制和CI/CD流程"
				],
				"preferred": [
					"有分布式系统开发经验",
					"熟悉Elasticsearch搜索引擎",
					"了解大数据处理技术（Hadoop、Spark）",
					"有高并发系统设计经验"
				]
			},
			"responsibilities": [
				"负责后端服务的设计和开发",
				"参与系统架构设计和技术选型",
				"优化系统性能，提升并发处理能力",
				"编写技术文档和接口文档",
				"参与代码审查和技术分享"
			],
			"benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
		},
		{
			"title": "Python后端工程师",
			"department": "技术部",
			"level": "中级/高级",
			"location": "北京/上海/深圳",
			"requirements": {
				"education": "本科及以上学历，计算机相关专业",
				"experience": "3-5年Python开发经验",
				"skills": [
					"精通Python语言，熟悉Python生态",
					"熟练掌握Django、Flask、FastAPI等Web框架",
					"熟悉PostgreSQL、MySQL等关系型数据库",
					"了解Redis、MongoDB等NoSQL数据库",
					"熟悉Celery异步任务处理",
					"掌握Docker容器化技术"
				],
				"preferred": [
					"有机器学习、数据分析经验",
					"熟悉TensorFlow、PyTorch等AI框架",
					"了解爬虫技术和数据处理",
					"有微服务架构设计经验"
				]
			},
			"responsibilities": [
				"负责Python后端服务开发",
				"参与AI算法模型的工程化实现",
				"优化数据处理和计算性能",
				"设计RESTful API接口",
				"参与系统架构设计"
			],
			"benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
		},
		{
			"title": "Go后端工程师",
			"department": "技术部",
			"level": "中级/高级",
			"location": "北京/上海/深圳",
			"requirements": {
				"education": "本科及以上学历，计算机相关专业",
				"experience": "2-4年Go开发经验",
				"skills": [
					"精通Go语言，熟悉Go并发编程",
					"熟练掌握Gin、Echo、Fiber等Web框架",
					"熟悉gRPC、Protocol Buffers",
					"了解微服务架构和服务治理",
					"熟悉Docker、Kubernetes",
					"掌握分布式系统设计"
				],
				"preferred": [
					"有高并发系统开发经验",
					"熟悉云原生技术栈",
					"了解区块链技术",
					"有开源项目贡献经验"
				]
			},
			"responsibilities": [
				"负责Go微服务开发",
				"设计高并发、高可用的系统架构",
				"优化系统性能和资源利用率",
				"参与技术选型和架构设计",
				"编写高质量的技术文档"
			],
			"benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
		},
		{
			"title": "Android开发工程师",
			"department": "移动端技术部",
			"level": "中级/高级",
			"location": "北京/上海/深圳",
			"requirements": {
				"education": "本科及以上学历，计算机相关专业",
				"experience": "3-5年Android开发经验",
				"skills": [
					"精通Java/Kotlin语言",
					"熟练掌握Android SDK和开发工具",
					"熟悉Android架构组件（ViewModel、LiveData、Room）",
					"了解Jetpack Compose",
					"熟悉网络编程和JSON解析",
					"掌握Android性能优化技术"
				],
				"preferred": [
					"有Flutter跨平台开发经验",
					"熟悉Android NDK开发",
					"了解音视频处理技术",
					"有应用上架和推广经验"
				]
			},
			"responsibilities": [
				"负责Android应用的设计和开发",
				"与UI设计师协作，实现优秀的用户体验",
				"优化应用性能和内存使用",
				"参与技术方案设计和代码审查",
				"维护和更新现有应用"
			],
			"benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
		},
		{
			"title": "iOS开发工程师",
			"department": "移动端技术部",
			"level": "中级/高级",
			"location": "北京/上海/深圳",
			"requirements": {
				"education": "本科及以上学历，计算机相关专业",
				"experience": "3-5年iOS开发经验",
				"skills": [
					"精通Swift/Objective-C语言",
					"熟练掌握iOS SDK和Xcode开发工具",
					"熟悉UIKit和SwiftUI框架",
					"了解Core Data、Realm等数据存储",
					"熟悉网络编程和JSON解析",
					"掌握iOS性能优化技术"
				],
				"preferred": [
					"有Flutter跨平台开发经验",
					"熟悉iOS底层技术",
					"了解音视频处理技术",
					"有App Store上架经验"
				]
			},
			"responsibilities": [
				"负责iOS应用的设计和开发",
				"与UI设计师协作，实现优秀的用户体验",
				"优化应用性能和电池使用",
				"参与技术方案设计和代码审查",
				"维护和更新现有应用"
			],
			"benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
		},
		{
			"title": "测试工程师",
			"department": "质量保证部",
			"level": "中级/高级",
			"location": "北京/上海/深圳",
			"requirements": {
				"education": "本科及以上学历，计算机相关专业",
				"experience": "3-5年软件测试经验",
				"skills": [
					"熟悉软件测试理论和方法",
					"掌握自动化测试工具（Selenium、Appium、Jest）",
					"熟悉性能测试工具（JMeter、LoadRunner）",
					"了解API测试和接口测试",
					"熟悉缺陷管理工具（Jira、Bugzilla）",
					"掌握SQL数据库操作"
				],
				"preferred": [
					"有测试框架开发经验",
					"熟悉CI/CD流程",
					"了解安全测试技术",
					"有移动端测试经验"
				]
			},
			"responsibilities": [
				"制定测试计划和测试用例",
				"执行功能测试、性能测试、安全测试",
				"开发自动化测试脚本",
				"跟踪和验证缺陷修复",
				"参与需求评审和技术评审"
			],
			"benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
		},
		{
			"title": "运维工程师",
			"department": "运维部",
			"level": "中级/高级",
			"location": "北京/上海/深圳",
			"requirements": {
				"education": "本科及以上学历，计算机相关专业",
				"experience": "3-5年运维经验",
				"skills": [
					"熟悉Linux系统管理和Shell脚本",
					"掌握Docker、Kubernetes容器化技术",
					"熟悉CI/CD流程和工具（Jenkins、GitLab CI）",
					"了解监控系统（Prometheus、Grafana、Zabbix）",
					"熟悉云服务（AWS、阿里云、腾讯云）",
					"掌握网络和安全知识"
				],
				"preferred": [
					"有大规模系统运维经验",
					"熟悉微服务架构",
					"了解DevOps理念和实践",
					"有自动化运维经验"
				]
			},
			"responsibilities": [
				"负责服务器和网络设备的管理维护",
				"部署和配置应用服务",
				"监控系统运行状态，处理故障",
				"优化系统性能和资源使用",
				"制定运维规范和流程"
			],
			"benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
		},
		{
			"title": "架构师",
			"department": "技术部",
			"level": "高级/专家",
			"location": "北京/上海/深圳",
			"requirements": {
				"education": "本科及以上学历，计算机相关专业",
				"experience": "5-8年技术开发经验，2年以上架构设计经验",
				"skills": [
					"精通多种编程语言和框架",
					"熟悉分布式系统架构设计",
					"掌握微服务架构和服务治理",
					"了解大数据和AI技术",
					"熟悉云原生技术栈",
					"具备系统性能优化经验"
				],
				"preferred": [
					"有大型互联网公司架构经验",
					"熟悉开源技术栈",
					"有技术团队管理经验",
					"具备技术演讲和分享能力"
				]
			},
			"responsibilities": [
				"负责系统架构设计和技术选型",
				"制定技术发展路线图",
				"指导团队进行技术开发",
				"解决复杂技术问题",
				"参与技术决策和规划"
			],
			"benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
		}
	],
	"company_info": {
		"name": "TeGo-AI",
		"industry": "人工智能",
		"scale": "50-200人",
		"stage": "B轮",
		"culture": "技术驱动、开放包容、持续学习",
		"contact": {
			"email": "hr@tego-ai.com",
			"phone": "400-888-8888",
			"website": "https://www.tego-ai.com"
		}
	}
};

// 下面的代码是「魔法」，不需要动，它负责把数据变成接口
export default function handler(request, response) {
  // 设置响应头，允许所有来源的请求（解决跨域问题）
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 返回JSON数据
  response.status(200).json(myData);
}
