/* eslint-disable padding-line-between-statements */
import { EventEmitter2 } from 'eventemitter2';
import { NativeModules } from 'react-native';

import {
  CommunicationLayerMessage,
  DisconnectOptions,
  EventType,
  KeyInfo,
} from '@metamask/sdk-communication-layer';

import AndroidSDKEventHandler from './AndroidSDKEventHandler';
import { CommunicationLayer } from '@metamask/sdk-communication-layer/dist/browser/es/src/types/CommunicationLayer';
import { Channel } from '@metamask/sdk-communication-layer/dist/browser/es/src/types/Channel';
import { ConnectToChannelOptions } from '@metamask/sdk-communication-layer/dist/browser/es/src/types/ConnectToChannelOptions';

// eslint-disable-next-line import/prefer-default-export
export class AndroidService
  extends EventEmitter2
  implements CommunicationLayer
{
  private communicationClient = NativeModules.CommunicationClient;

  constructor() {
    super();
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    AndroidSDKEventHandler.onMessageReceived((message: string) => {
      const messageReceived = JSON.parse(message);
      this.emit(EventType.MESSAGE, { message: messageReceived });
    });

    AndroidSDKEventHandler.onClientsConnected(() => {
      this.emit(EventType.CLIENTS_CONNECTED);
    });

    AndroidSDKEventHandler.onClientsDisconnected(() => {
      this.emit(EventType.CLIENTS_DISCONNECTED);
    });
  }

  createChannel(): Channel {
    return {
      channelId: '',
      pubKey: '',
    };
  }

  sendMessage(message: CommunicationLayerMessage) {
    this.communicationClient.sendMessage(JSON.stringify(message));
  }

  getKeyInfo(): KeyInfo {
    return {
      step: '',
      ecies: {
        public: '',
        private: '',
      },
      keysExchanged: true,
    };
  }

  isConnected(): boolean {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  connectToChannel(_options: ConnectToChannelOptions): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  pause(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  resetKeys(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ping(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  keyCheck(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  resume(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect(_options?: DisconnectOptions | undefined): void {}
}
