<!--
 * @Author: snltty
 * @Date: 2021-08-22 14:09:03
 * @LastEditors: snltty
 * @LastEditTime: 2022-08-01 16:17:49
 * @version: v1.0.0
 * @Descripttion: 功能说明
 * @FilePath: \client.service.ui.webd:\Desktop\p2p-tunnel\README.md
-->
<div align="center">

# p2p-tunnel
## Visual Studio 2022 LTSC 17.3.0

</div>

1. **/public/publish.rar包含客户端和服务端依赖.NET6环境的程序**
2. 更多环境的发布程序，以及**APP**，可自行发布，或者进群(**1121552990**)获取
2. <a href="http://snltty.gitee.io/p2p-tunnel/" target="_blank">在线web管理端</a>，<a href="https://update7.simplix.info/UpdatePack7R2.exe" target="_blank">win7不能运行.NET6的补丁</a>
3. 服务器 或 内网电脑，暴露服务在公网时，请做好安全防范

## 穿透方式
1. p2p打洞、A<---->B（网络环境支持打洞时，打洞连接效率最好）
2. 中继、A<---->server<---->B（免费打洞服务器不开启，服务器开启时，打洞失败则退化为服务器中继）
3. 服务器代理、server<---->A（免费打洞服务器不开启，网络环境不支持打洞，可以选择服务器代理）

## 通信方式
- [x] tcp转发
- [x] udp转发
- [x] http代理
- [x] socks5代理(支持tcp，udp，不实现bind)
- [ ] 组网(即将上线)，让你的多个不同内网客户端组成一个网络，方便访问(通过其ip访问其内网服务)，及网络共享(利用其网络进行网上冲浪)

## 其它内容
- [x] .NET6 跨平台，小尺寸，小内存
- [x] 内网穿透 访问内网web，内网桌面，及其它TCP上层协议服务<br>windows<-->windows 可使用mstsc，其它可使用 TightVNC
- [x] p2p 打洞、tcp、udp(<a href="https://github.com/RevenantX/LiteNetLib" target="_blank">LiteNetLib rudp</a>)
- [x] 简单易用的客户端web管理页面
- [x] android app
- [x] 支持通信数据加密(预配置密钥或自动交换密钥)
- [x] 可扩展的插件式
- [x] 免费的打洞服务器
- [x] 高效的打包解包，作死的全手写序列化

## 介绍视频
- <a href="https://www.bilibili.com/video/BV1Pa411R79U/">https://www.bilibili.com/video/BV1Pa411R79U/</a>