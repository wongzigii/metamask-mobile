package io.metamask.nativeModules

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import com.google.android.gms.common.util.CollectionUtils.listOf

import io.metamask.CommunicationClient

class AndroidPackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> = listOf(CommunicationClient(reactContext)).toMutableList()

  override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> = mutableListOf()
}
