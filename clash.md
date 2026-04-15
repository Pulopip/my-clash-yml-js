# clash

## 安装

1. 下载安装包 [Releases · clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev/releases) x64-setup.exe 版本
2. 下载完后安装即可

## 配置代理

1. 导入机场的订阅链接
2. 选择订阅链接
3. 选择合适的代理（选择节点-选择模式全局还是规则）
4. 设置开启系统代理后即可科学上网

## 进阶设置

### tun 模式

如果有些应用不走系统代理，可以开启 tun 模式虚拟一张网卡，这样全部流量都走 clash 虚拟网卡代理了

### 局域网代理

局域网连接开启后需要将 clash 内核添加到防火墙

控制面板\系统和安全\Windows Defender 防火墙\允许的应用

添加 verge-mihomo.exe 并允许专用和公用 即可

### ipv6

当用 ipv6 远程访问服务器无法找到 host 时在设置内开启 ipv6 clash 即可代理 ipv6 流量，这样即可连接到远程 ipv6 地址的 host 主机
