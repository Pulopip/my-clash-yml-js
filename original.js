// Define main function (script entry)

/**
 * 配置中的规则"config.rules"是一个数组，通过新旧数组合并来添加
 * @param prependRule 添加的数组
 */
const prependRule = [
  // 分流到直连
  // /32 表示精确匹配这一个 IP 地址
  "IP-CIDR,43.167.236.124/32,DIRECT,no-resolve",
  "DOMAIN-KEYWORD,topstep,DIRECT",
  // "DOMAIN-SUFFIX,binance.cc,DIRECT",
  // "DOMAIN-SUFFIX,binance.com,DIRECT",
  // "DOMAIN-SUFFIX,binance.me,DIRECT",
  // "DOMAIN-SUFFIX,binance.us,DIRECT",
  // 将本网站分流到自动选择(前提是你的代理组当中有"自动选择")
  // "DOMAIN-SUFFIX,clashverge.dev,自动选择",
];

function main(config, profileName) {
  // 把旧规则合并到新规则后面(也可以用其它合并数组的办法)
  let oldrules = config["rules"];
  config["rules"] = prependRule.concat(oldrules);
  return config;
}

// function main(config) {
//   // 检查配置里是否有 rules 列表，如果没有就初始化一个空的
//   if (!config.rules) {
//     config.rules = [];
//   }

//   // 关键步骤：把你的直连规则 (myDirectRules) 拼接到原有规则 (config.rules) 的最前面
//   // 这样你的规则优先级最高
//   config.rules = myDirectRules.concat(config.rules);

//   // 返回修改后的配置
//   return config;
// }
