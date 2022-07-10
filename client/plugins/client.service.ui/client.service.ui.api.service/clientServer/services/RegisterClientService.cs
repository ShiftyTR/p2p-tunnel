﻿using client.messengers.register;
using client.service.ui.api.clientServer;
using common.libs;
using MessagePack;
using System.Threading.Tasks;

namespace client.service.ui.api.service.clientServer.services
{
    public class RegisterClientService : IClientService
    {
        private readonly IRegisterTransfer registerTransfer;
        private readonly RegisterStateInfo registerState;
        private readonly client.Config config;
        public RegisterClientService(IRegisterTransfer registerHelper, RegisterStateInfo registerState, client.Config config)
        {
            this.registerTransfer = registerHelper;
            this.registerState = registerState;
            this.config = config;
        }

        public async Task<bool> Start(ClientServiceParamsInfo arg)
        {
            var result = await registerTransfer.Register().ConfigureAwait(false);
            if (!result.Data)
            {
                arg.SetCode(-1, result.ErrorMsg);
            }
            return result.Data;
        }

        public void Stop(ClientServiceParamsInfo arg)
        {
            registerTransfer.Exit();
        }

        public RegisterInfo Info(ClientServiceParamsInfo arg)
        {
            return new RegisterInfo
            {
                ClientConfig = config.Client,
                ServerConfig = config.Server,
                LocalInfo = registerState.LocalInfo,
                RemoteInfo = registerState.RemoteInfo,
            };
        }
    }

    [MessagePackObject]
    public class RegisterInfo
    {
        [Key(1)]
        public ClientConfig ClientConfig { get; set; } = new ClientConfig();
        [Key(2)]
        public ServerConfig ServerConfig { get; set; } = new ServerConfig();
        [Key(3)]
        public LocalInfo LocalInfo { get; set; } = new LocalInfo();
        [Key(4)]
        public RemoteInfo RemoteInfo { get; set; } = new RemoteInfo();
    }
}
