import { NativeEventEmitter, NativeModules } from 'react-native';

import { EventType } from '@metamask/sdk-communication-layer';

class AndroidSDKEventHandler extends NativeEventEmitter {
  constructor() {
    super(NativeModules.RCTDeviceEventEmitter);
  }

  onMessageReceived(callback) {
    return this.addListener(EventType.MESSAGE, (message) => {
      callback(message);
    });
  }

  onKeyInfo(callback) {
    return this.addListener(EventType.KEY_INFO, (info) => {
      callback(info);
    });
  }

  onClientsConnected(callback) {
    return this.addListener(EventType.CLIENTS_CONNECTED, (id) => {
      callback(id);
    });
  }

  onClientsDisconnected(callback) {
    return this.addListener(EventType.CLIENTS_DISCONNECTED, (id) => {
      callback(id);
    });
  }

  onClientsWaiting(callback) {
    return this.addListener(EventType.CLIENTS_WAITING, (id) => {
      callback(id);
    });
  }

  onClientsReady(callback) {
    return this.addListener(EventType.CLIENTS_READY, callback);
  }

  onKeysExchanged(callback) {
    return this.addListener(EventType.KEYS_EXCHANGED, callback);
  }
}

export default new AndroidSDKEventHandler();
