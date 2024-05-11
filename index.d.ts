
declare namespace tellentClient {
    interface TellentClientInitConfig {
        accessToken: string;
        appGuid: string;
        brand: 'kiwi' | 'javelo';
      }
}

export as namespace tellentClient;
export = tellentClient;