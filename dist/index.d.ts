
declare namespace tellentClient {
    interface TellentClientInitConfig {
        accessToken: string;
        appGuid: string;
        brand: 'kiwi' | 'javelo';
      }
    
      type triggerFlow = () => void

}

export as namespace tellentClient;
export = tellentClient;