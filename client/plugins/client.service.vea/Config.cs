﻿using common.libs.database;
using common.socks5;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;
using System.Threading.Tasks;

namespace client.service.vea
{
    [Table("vea-appsettings")]
    public class Config
    {
        public Config() { }
        private readonly IConfigDataProvider<Config> configDataProvider;
        public Config(IConfigDataProvider<Config> configDataProvider)
        {
            this.configDataProvider = configDataProvider;

            Config config = ReadConfig().Result;
            Enable = config.Enable;
            ProxyAll = config.ProxyAll;
            TargetName = config.TargetName;
            IP = config.IP;
            SocksPort = config.SocksPort;
            TunnelType = config.TunnelType;
        }


        public bool Enable { get; set; } = false;
        public bool ProxyAll { get; set; } = false;
        public string TargetName { get; set; } = string.Empty;
        public IPAddress IP { get; set; } = IPAddress.Parse("192.168.54.1");
        public int SocksPort { get; set; } = 5415;
        public TunnelTypes TunnelType { get; set; } = TunnelTypes.TCP_FIRST;

        public async Task<Config> ReadConfig()
        {
            return await configDataProvider.Load();
        }

        public async Task SaveConfig()
        {
            Config config = await ReadConfig().ConfigureAwait(false);
            config.Enable = Enable;
            config.ProxyAll = ProxyAll;
            config.TargetName = TargetName;
            config.IP = IP;
            config.SocksPort = SocksPort;
            config.TunnelType = TunnelType;

            await configDataProvider.Save(config).ConfigureAwait(false);
        }
    }
}
